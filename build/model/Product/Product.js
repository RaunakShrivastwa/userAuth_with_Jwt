"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ProductModel = /*#__PURE__*/function () {
  function ProductModel() {
    _classCallCheck(this, ProductModel);
    this.productSchema = new _mongoose["default"].Schema({
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      Price: {
        type: Number,
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        "default": 1
      },
      address: {
        type: String,
        required: true
      },
      verified: {
        type: _mongoose["default"].Schema.Types.ObjectId,
        ref: 'Verfication'
      },
      user: {
        type: _mongoose["default"].Schema.Types.ObjectId,
        ref: 'User'
      },
      categories: {
        type: _mongoose["default"].Schema.Types.ObjectId,
        ref: 'Category'
      },
      feedback: [{
        type: _mongoose["default"].Schema.Types.ObjectId,
        ref: 'Feedback'
      }],
      image: [{
        type: _mongoose["default"].Schema.Types.ObjectId,
        ref: 'Image'
      }],
      size: {
        type: String,
        "enum": ['XXL', 'XL', 'L', 'M', 'S']
      }
    }, {
      timestamps: true
    });
    this.product = _mongoose["default"].model('Product', this.productSchema);
  }
  return _createClass(ProductModel, [{
    key: "getModel",
    value: function getModel() {
      return this.product;
    }
  }]);
}();
var _default = exports["default"] = new ProductModel().getModel();