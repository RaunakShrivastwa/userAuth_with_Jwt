"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _createSession = _interopRequireDefault(require("../auth/createSession.js"));
var _blockListing = _interopRequireDefault(require("../auth/blockListing.js"));
var _jwtAuthentication = _interopRequireDefault(require("../auth/jwtAuthentication.js"));
var _userRouter = _interopRequireDefault(require("./UserRouter/userRouter.js"));
var _Product = _interopRequireDefault(require("./ProductRouter/Product.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
// User Router
router.use('/api/user', _userRouter["default"]);
router.post('/api/auth/token', _createSession["default"].createToken);
router.get('/api/auth/logout', _jwtAuthentication["default"], _blockListing["default"]);

// Product Router
router.use('/api/product', _Product["default"]);
var _default = exports["default"] = router;