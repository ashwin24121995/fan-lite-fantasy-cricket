#!/usr/bin/env node

import mysql from 'mysql2/promise';

// Parse DATABASE_URL if available (Railway format: mysql://user:password@host:port/database)
let DB_CONFIG;

if (process.env.DATABASE_URL) {
  const url = new URL(process.env.DATABASE_URL);
  DB_CONFIG = {
    host: url.hostname,
    user: url.username,
    password: url.password,
    database: url.pathname.slice(1),
    port: parseInt(url.port) || 3306,
  };
} else {
  DB_CONFIG = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'fantasy_cricket',
    port: process.env.DB_PORT || 3306,
  };
}

const CONTESTS = [
  {
    name: 'Head to Head',
    description: 'One-on-one battle with another player',
    matchId: 'match_1',
    maxEntries: 2,
    currentEntries: 0,
    prizeDescription: '2 spots left',
    status: 'upcoming',
  },
  {
    name: 'Small League',
    description: 'Perfect for beginners',
    matchId: 'match_2',
    maxEntries: 10,
    currentEntries: 0,
    prizeDescription: '10 spots left',
    status: 'upcoming',
  },
  {
    name: 'Winners Circle',
    description: 'Compete with top players',
    matchId: 'match_3',
    maxEntries: 100,
    currentEntries: 0,
    prizeDescription: '100 spots left',
    status: 'upcoming',
  },
  {
    name: 'Mega Contest',
    description: 'The biggest prize pool',
    matchId: 'match_4',
    maxEntries: 10000,
    currentEntries: 0,
    prizeDescription: 'The biggest prize pool with bagging right',
    status: 'upcoming',
  },
  {
    name: 'Champions League',
    description: 'Elite contest for top players',
    matchId: 'match_5',
    maxEntries: 150,
    currentEntries: 0,
    prizeDescription: 'Championship Trophy',
    status: 'upcoming',
  },
  {
    name: 'Daily Challenge',
    description: 'New contest every day',
    matchId: 'match_6',
    maxEntries: 200,
    currentEntries: 0,
    prizeDescription: 'Daily Rewards',
    status: 'upcoming',
  },
  {
    name: 'Weekend Special',
    description: 'Special weekend contest',
    matchId: 'match_7',
    maxEntries: 300,
    currentEntries: 0,
    prizeDescription: 'Weekend Bonus',
    status: 'upcoming',
  },
  {
    name: 'Beginners Friendly',
    description: 'Perfect for new players',
    matchId: 'match_8',
    maxEntries: 100,
    currentEntries: 0,
    prizeDescription: 'Beginner Rewards',
    status: 'upcoming',
  },
];

async function seedContests() {
  let connection;
  try {
    console.log('🌱 Seeding contests...');
    console.log(`📊 Connecting to database: ${DB_CONFIG.database}@${DB_CONFIG.host}`);

    connection = await mysql.createConnection(DB_CONFIG);

    // Clear existing contests (optional - comment out to keep existing)
    // await connection.execute('DELETE FROM contests');
    // console.log('🗑️  Cleared existing contests');

    // Insert new contests
    let inserted = 0;
    for (const contest of CONTESTS) {
      try {
        await connection.execute(
          `INSERT INTO contests (name, description, matchId, maxEntries, currentEntries, prizeDescription, status, createdAt) 
           VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
          [
            contest.name,
            contest.description,
            contest.matchId,
            contest.maxEntries,
            contest.currentEntries,
            contest.prizeDescription,
            contest.status,
          ]
        );
        console.log(`✅ Created contest: ${contest.name}`);
        inserted++;
      } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          console.log(`⏭️  Contest already exists: ${contest.name}`);
        } else {
          console.error(`❌ Error creating contest ${contest.name}:`, err.message);
        }
      }
    }

    console.log(`\n🎉 Seeding complete! Created ${inserted} new contests.`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding contests:', error.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

seedContests();
