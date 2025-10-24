import { defineConfig } from "drizzle-kit";

import { config } from "./src/config";
const url = config.db.url;
if (!url) {
  throw new Error("DATABASE_URL is missing. Set it in .env");
}
export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url,
  },
});
