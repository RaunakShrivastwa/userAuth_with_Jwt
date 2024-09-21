"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cluster = _interopRequireDefault(require("cluster"));
var _os = _interopRequireDefault(require("os"));
var _mongodbConfig = _interopRequireDefault(require("./config/mongodb.config.js"));
var _redisConfig = _interopRequireDefault(require("./config/redis.config.js"));
var _process = require("process");
var _apiRouter = _interopRequireDefault(require("./router/apiRouter.js"));
var _jwtAuthentication = _interopRequireDefault(require("./auth/jwtAuthentication.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
if (_cluster["default"].isPrimary) {
  for (var i = 0; i < _os["default"].cpus().length; i++) {
    _cluster["default"].fork();
  }
} else {
  _dotenv["default"].config();
  var PORT = process.env.PORT;
  var app = (0, _express["default"])();
  app.get('/hello', function (req, res) {
    return res.json({
      message: 'hello Shubham'
    });
  });
  app.use(_express["default"].json());
  app.use('/', _apiRouter["default"]);
  app.listen(PORT, function (err) {
    if (err) {
      return console.log("There is Error  ", err);
    }
    console.log("Server Running...... at ".concat(PORT, " by ").concat(_process.pid));
  });
}