"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _productController2 = _interopRequireDefault(require("../../controller/productController/productController.js"));
var _passport = _interopRequireDefault(require("passport"));
var _jwtAuthentication = _interopRequireDefault(require("../../auth/jwtAuthentication.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
var _productController = new _productController2["default"](),
  addProduct = _productController.addProduct,
  getSingleProduct = _productController.getSingleProduct,
  getAllProduct = _productController.getAllProduct,
  findProductByName = _productController.findProductByName,
  updateProduct = _productController.updateProduct,
  deleteProduct = _productController.deleteProduct;
router.post('/addProduct', _jwtAuthentication["default"], addProduct);
router.get('/getAllProduct', getAllProduct);
router.get('/findProductByName', findProductByName);
router["delete"]('/deleteProduct/:id', _jwtAuthentication["default"], deleteProduct);
router.post('/updateProduct/:id', _jwtAuthentication["default"], updateProduct);
var _default = exports["default"] = router;