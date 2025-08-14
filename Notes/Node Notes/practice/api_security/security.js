// security.js
import express from "express";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import csrf from "csurf";
import hpp from "hpp";
import { body, param, query, validationResult } from "express-validator";

const app = express();

/* -------------------------------
   1. Basic Security Middleware
-------------------------------- */
app.use(helmet()); // Secure HTTP headers

// Parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS – Restrict to your allowed origins
app.use(cors({
    origin: ["https://yourdomain.com"], // change to your client domain
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

// Prevent HTTP Parameter Pollution
app.use(hpp());

/* -------------------------------
   2. Rate Limiting
-------------------------------- */
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // max requests per IP
    message: { error: "Too many requests, please try again later." },
    standardHeaders: true,
    legacyHeaders: false,
});
app.use("/api", apiLimiter);

// Separate limiter for login route
const loginLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 5,
    message: { error: "Too many login attempts, please try again later." },
});
app.use("/api/auth/login", loginLimiter);

/* -------------------------------
   3. CSRF Protection
-------------------------------- */
// CSRF token middleware (for web forms / cookies)
const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection);

/* -------------------------------
   4. Validation Example
-------------------------------- */
const validateUser = [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

/* -------------------------------
   5. Example Routes
-------------------------------- */
app.post("/api/auth/register", validateUser, (req, res) => {
    // Password hashing and user creation logic
    res.json({ message: "User registered successfully" });
});

app.get("/csrf-token", (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
});

/* -------------------------------
   6. Error Handling
-------------------------------- */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

/* -------------------------------
   Export App
-------------------------------- */
export default app;

