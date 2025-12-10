class UnauthorizedError extends Error {
	constructor(message = "Unauthorized") {
		super(message);
		this.name = "UnauthorizedError";
		this.statuscode = 401;
	}
}

export default UnauthorizedError;

