const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const rateLimit = require("express-rate-limit");
const cors = require("cors");

const authenticateToken = require("./src/utils/authenticateToken");

const app = express();

dotenv.config();

const allowedOrigins = [
  "http://localhost:5173",
  "https://travels-umber.vercel.app",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.options(
  "*",
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);


app.use(express.json());

const ambulanceBookingRoutes = require("./src/routes/ambulanceBookingRoutes");
const contactRoutes = require("./src/routes/contactRoutes");

const bookingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many booking requests, please try again later.",
  keyGenerator: (req) => req.ip,
});

const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many contact form submissions, please try again later.",
  keyGenerator: (req) => req.ip,
});

app.use(
  "/api/ambulance",
  bookingLimiter,
  authenticateToken,
  ambulanceBookingRoutes
);
app.use("/api/contact", contactFormLimiter, authenticateToken, contactRoutes);

app.use(express.static(path.join(__dirname, "..", "client", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
