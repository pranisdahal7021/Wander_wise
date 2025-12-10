class validationError extends Error {
  constructor(errorsOrMessage = [], maybeErrors = []) {
    const message =
      typeof errorsOrMessage === "string"
        ? errorsOrMessage
        : "Validation failed";

    const errors =
      typeof errorsOrMessage === "string"
        ? Array.isArray(maybeErrors)
          ? maybeErrors
          : []
        : Array.isArray(errorsOrMessage)
        ? errorsOrMessage
        : [];

    super(message);
    this.name = "ValidationError";
    this.statuscode = 400;
    this.errors = errors;
  }
}

export default validationError;
