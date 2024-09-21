"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config();
_mongoose["default"].connect('mongodb+srv://canTech:220831@cantechnology.v9rfpa6.mongodb.net/E-com');
var db = _mongoose["default"].connection;
db.on('error', function (err) {
  console.log("There is Error with connecting DB", err);
  return;
});
db.on('open', function () {
  console.log("Successfully Connected to Db ");
});
var _default = exports["default"] = db;