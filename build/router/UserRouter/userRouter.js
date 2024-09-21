"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _userController = _interopRequireDefault(require("../../controller/userController/userController.js"));
var _jwtAuthentication = _interopRequireDefault(require("../../auth/jwtAuthentication.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var addUser = _userController["default"].addUser,
  deleteUser = _userController["default"].deleteUser,
  getAllUSer = _userController["default"].getAllUSer,
  getSingleUser = _userController["default"].getSingleUser,
  updateUser = _userController["default"].updateUser;
var router = _express["default"].Router();
router.get('/users', getAllUSer);
router.post('/user', addUser);
router.get('/user/:id', getSingleUser);
var _default = exports["default"] = router;