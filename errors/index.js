const CustomAPIError = require("./custom-error");
const BadRequestError = require("./bad-request");
const UnauthenticatedError = require("./authenticate");

module.exports = {
  CustomAPIError,
  BadRequestError,
  UnauthenticatedError,
};
