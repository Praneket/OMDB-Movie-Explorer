// server.js
require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const makeCache = require("./lib/cache");
const makeOmdbRouter = require("./routes/omdb");

async function main() {
  const app = express();

app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

  // Correct CORS for local + Render deployment
  const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  process.env.FRONTEND_URL  // example: https://omdb-frontend-abc123.onrender.com
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow server-to-server or tools like Postman
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        console.log("❌ BLOCKED BY CORS:", origin);
        return callback(new Error("CORS Not Allowed"));
      }
    },
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
  })
);

  app.use(express.json());

  // IMPORTANT for Render
  const PORT = process.env.PORT || 4000;

  // Accept both env names just in case
  const omdbKey =
    process.env.OMDB_API_KEY ||
    process.env.OMDB_KEY ||
    process.env.OMDB_TOKEN;

  if (!omdbKey) {
    console.error("❌ ERROR: OMDB_API_KEY missing in Render environment variables!");
    process.exit(1);
  }

  // Cache Setup
  const cache = await makeCache({
    useRedis: process.env.USE_REDIS === "true",
    redisUrl: process.env.REDIS_URL,
    maxItems: parseInt(process.env.CACHE_MAX_ITEMS || "500", 10),
    ttlSec: parseInt(process.env.CACHE_TTL_SECONDS || "3600", 10),
  });

  // OMDB router
  const omdbRouter = makeOmdbRouter({
    omdbKey,
    cache,
    cacheTtlSec: parseInt(process.env.CACHE_TTL_SECONDS || "3600", 10),
  });

  app.use("/api", omdbRouter);

  // Health check for Render
  app.get("/api/health", (req, res) => res.json({ status: "ok" }));

  // Start server
  app.listen(PORT, () => {
    console.log("\n===============================");
    console.log(" OMDB Backend Running");
    console.log(` Port: ${PORT}`);
    console.log(` Environment: ${process.env.NODE_ENV || "development"}`);
    console.log("===============================\n");
  });
}

main();
