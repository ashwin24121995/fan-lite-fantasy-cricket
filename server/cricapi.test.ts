import { describe, expect, it } from "vitest";

const CRIC_API_KEY = process.env.CRIC_API_KEY;
const BASE_URL = "https://api.cricapi.com/v1";

describe("CricAPI Key Validation", () => {
  it("should have CRIC_API_KEY environment variable set", () => {
    expect(CRIC_API_KEY).toBeDefined();
    expect(CRIC_API_KEY).not.toBe("");
  });

  it("should successfully authenticate with CricAPI", async () => {
    const response = await fetch(`${BASE_URL}/currentMatches?apikey=${CRIC_API_KEY}&offset=0`);
    const data = await response.json();
    
    // CricAPI returns status: "success" for valid API keys
    // Even if there are no matches, the status should be "success"
    expect(response.ok).toBe(true);
    expect(data.status).toBe("success");
  }, 15000); // 15 second timeout for API call
});
