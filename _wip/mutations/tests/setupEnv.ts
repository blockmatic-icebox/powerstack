import { v4 as uuidv4 } from "uuid";
import { Client } from "pg";
import { exec } from "child_process";
import { promisify } from "util";
import logger from "../src/utils/logger";
const pexec = promisify(exec);

// Load environment variables from .env.test file

// Generate a random database name
const randomDbName = `test_db_${uuidv4()}`.replace(/-/g, "_");

// Set the DATABASE_URL environment variable with the random database name
process.env.DATABASE_URL = process.env.DATABASE_URL!.replace(
  "<DB_NAME>",
  randomDbName
);

// Function to create the database
async function createDatabase() {
  // Extract the connection information without the database name from the DATABASE_URL
  const connectionString = process.env.DATABASE_URL!.replace(
    `/${randomDbName}`,
    ""
  );

  // Create a new PostgreSQL client
  const client = new Client({ connectionString });

  // Connect to PostgreSQL
  await client.connect();

  // Create the database
  await client.query(`CREATE DATABASE ${randomDbName}`);

  // Close the connection
  await client.end();

  // Run Prisma migration after creating the database
  await migrateDatabase();
}

// Function to run the database creation and handle errors
export async function runDatabaseCreation() {
  try {
    await createDatabase();
  } catch (err) {
    logger.error("Error creating database:", err);
    process.exit(1);
  }
}

async function migrateDatabase() {
  try {
    const { stdout, stderr } = await pexec("yarn migrate:dev", {
      timeout: 10000,
    });

    if (stdout) {
      logger.info(`Migration stdout: ${stdout}`);
    }
    if (stderr) {
      logger.error(`Migration stderr: ${stderr}`);
    }
  } catch (error: any) {
    logger.error(`Error running migration: ${error.message}`, error);
  }
}
