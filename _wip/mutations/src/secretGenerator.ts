import * as crypto from "crypto";
import logger from "./utils/logger";

function generateRandomSessionSecret(): string {
  return crypto.randomBytes(32).toString("hex");
}

const sessionSecret = generateRandomSessionSecret();
logger.info("Random session secret:", sessionSecret);
