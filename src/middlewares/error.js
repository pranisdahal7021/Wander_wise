import ValidationError from "../errors/validation-error.js";

const errorMiddleware = (err, req, res, next) => {
    if(err instanceof ValidationError){
        return res.status(err.statuscode).json({
            success: false,
            message: err.message,
            errors: err.errors,
        });
    }
    // Pick the status code from the error object or response, fallback to 500
    const statuscode = err.statuscode ?? res.statuscode ?? 500;

    // Send the final JSON error response
    res.status(statuscode).json({
        success: false,                     // Indicate request failed
        message: err.message || "something went wrong",   // Main error message

        // Include stack trace only when not in production
        ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),

        // If validation errors exist, extract each message. Otherwise return null.
        error: err.errors
            ? Object.values(err.errors).map((error) => error.message)
            : null,
    });
};

// Export the middleware so it can be used in the app
export default errorMiddleware;
