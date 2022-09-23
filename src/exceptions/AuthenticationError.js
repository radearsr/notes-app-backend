const ClientError = require("./ClientError");

class AuthenticationError extends ClientError {
  constructor(messsage) {
    super(messsage, 401);
    this.name = "AuthenticationError";
  }
}

module.exports = AuthenticationError;
