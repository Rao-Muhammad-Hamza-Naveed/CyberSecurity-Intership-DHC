const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const apiKeyAuth = require("./middleware/apiKeyAuth");

const app = express();

// Basic middleware
app.use(express.json());

// Security Headers
app.use(helmet());

// Content Security Policy
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'"],
    },
  })
);

// HSTS (HTTPS enforcement)
app.use(
  helmet.hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  })
);

// CORS Configuration
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later",
});
app.use("/api", limiter);

// Public API
app.get("/api/public", (req, res) => {
  res.json({ message: "Public API Access" });
});

// Secured API
app.get("/api/secure", apiKeyAuth, (req, res) => {
  res.json({ message: "Secure API Access Granted" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
