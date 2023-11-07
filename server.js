const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorMiddleware");

// dotenv
dotenv.config();

// mongo connection
connectDB();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler);

// port
const PORT = process.env.PORT || 8080;

// routes path
// const authRoutes = require("./routes/authRoutes");
// const openaiRoutes = require("./routes/openaiRoutes");

// API routes
app.use("/api/v2/auth", require("./routes/authRoutes"));
app.use("/api/v2/openAi", require("./routes/openAiRoutes"));

// listen server
app.listen(PORT, () => {
    // console.log("Server is running in dev mode in port 8080");
    console.log(`Server is running in ${process.env.DEV_MODE} on port NO.${PORT}`?.bgCyan.white);
});
