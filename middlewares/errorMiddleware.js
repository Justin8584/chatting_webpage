const errorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    // mongoose cast error
    if (err.name === "castError") {
        const message = "Resource Not Found";
        error = new errorResponse(message, 404);
    }

    // duplicated key error
    if (err.code === 11000) {
        const message = "Duplicate field value entered";
        error = new errorResponse(message, 400);
    }

    // mongoose validation
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new errorResponse(message, 400);
        res.status(error.statusCode || 500).json({
            success: false,
            error: error.message || "Server error",
        });
    }
};
module.exports = errorHandler;
