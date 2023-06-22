class CustomAPIError extends Error {
  constructor(message) {
    super(message)
    // super(message)
  }
}

module.exports = CustomAPIError;
