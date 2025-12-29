import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

// Startup verification flag
let isServerReady = false;

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  try {
    console.log("🚀 [Server] Starting application...");
    console.log(`📝 [Server] Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🗄️  [Server] Database URL: ${process.env.DATABASE_URL ? '✅ Set' : '❌ Missing'}`);
    
    const app = express();
    const server = createServer(app);
    
    // Configure body parser with larger size limit for file uploads
    app.use(express.json({ limit: "50mb" }));
    app.use(express.urlencoded({ limit: "50mb", extended: true }));
    
    // Health check endpoint - responds immediately before full startup
    app.get("/health", (_req, res) => {
      if (isServerReady) {
        res.status(200).json({ 
          ok: true, 
          timestamp: Date.now(),
          status: "healthy",
          uptime: process.uptime()
        });
      } else {
        res.status(503).json({ 
          ok: false, 
          timestamp: Date.now(),
          status: "starting",
          uptime: process.uptime()
        });
      }
    });
    
    // Ready endpoint for more detailed status
    app.get("/ready", (_req, res) => {
      if (isServerReady) {
        res.status(200).json({ ready: true });
      } else {
        res.status(503).json({ ready: false });
      }
    });
    
    console.log("✅ [Server] Health check endpoints configured");
    
    // OAuth callback under /api/oauth/callback
    try {
      registerOAuthRoutes(app);
      console.log("✅ [Server] OAuth routes registered");
    } catch (error) {
      console.error("⚠️  [Server] OAuth registration warning:", error);
    }
    
    // tRPC API
    try {
      app.use(
        "/api/trpc",
        createExpressMiddleware({
          router: appRouter,
          createContext,
        })
      );
      console.log("✅ [Server] tRPC middleware configured");
    } catch (error) {
      console.error("❌ [Server] tRPC middleware error:", error);
      throw error;
    }
    
    // development mode uses Vite, production mode uses static files
    try {
      if (process.env.NODE_ENV === "development") {
        console.log("🔧 [Server] Setting up Vite for development...");
        await setupVite(app, server);
        console.log("✅ [Server] Vite configured");
      } else {
        console.log("📦 [Server] Serving static files for production...");
        serveStatic(app);
        console.log("✅ [Server] Static files configured");
      }
    } catch (error) {
      console.error("❌ [Server] Frontend setup error:", error);
      throw error;
    }

    const preferredPort = parseInt(process.env.PORT || "3000");
    const port = await findAvailablePort(preferredPort);

    if (port !== preferredPort) {
      console.log(`⚠️  [Server] Port ${preferredPort} is busy, using port ${port} instead`);
    }

    // Start listening
    server.listen(port, "0.0.0.0", () => {
      isServerReady = true;
      console.log(`\n✅ [Server] Server running on http://0.0.0.0:${port}/`);
      console.log(`✅ [Server] Health check available at http://0.0.0.0:${port}/health`);
      console.log(`✅ [Server] Ready to accept requests\n`);
    });

    // Graceful shutdown
    process.on("SIGTERM", () => {
      console.log("\n🛑 [Server] SIGTERM received, shutting down gracefully...");
      isServerReady = false;
      server.close(() => {
        console.log("✅ [Server] Server closed");
        process.exit(0);
      });
      
      // Force shutdown after 30 seconds
      setTimeout(() => {
        console.error("❌ [Server] Forced shutdown after 30 seconds");
        process.exit(1);
      }, 30000);
    });

    process.on("SIGINT", () => {
      console.log("\n🛑 [Server] SIGINT received, shutting down gracefully...");
      isServerReady = false;
      server.close(() => {
        console.log("✅ [Server] Server closed");
        process.exit(0);
      });
    });

  } catch (error) {
    console.error("\n❌ [Server] Failed to start server:");
    console.error(error);
    process.exit(1);
  }
}

// Start the server
console.log("═══════════════════════════════════════════════════════════");
console.log("  Fan Lite Play - Fantasy Cricket Platform");
console.log("═══════════════════════════════════════════════════════════\n");

startServer().catch(error => {
  console.error("❌ [Server] Startup error:", error);
  process.exit(1);
});
