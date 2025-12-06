class ExpressError extends Error{
    constructor(status, message) {
        super(message);
        this.status = this.status;
    }
}
module.exports = ExpressError;