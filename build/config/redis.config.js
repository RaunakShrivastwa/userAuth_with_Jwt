"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
require("dotenv/config");
var _redis = _interopRequireDefault(require("redis"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var redisOptions = {
  url: process.env.REDIS_URL || 'redis://localhost:6379',
  retry_strategy: function retry_strategy(times) {
    return Math.min(times * 50, 2000);
  }
};
var redisClient = _redis["default"].createClient(redisOptions);
redisClient.on('error', function (err) {
  console.error('Redis error:', err);
});
redisClient.on('connect', function () {
  console.log('Redis connected successfully');
});
await redisClient.connect();
var _default = exports["default"] = redisClient;