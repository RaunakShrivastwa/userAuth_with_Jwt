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
var OrderModel = /*#__PURE__*/function () {
  function OrderModel() {
    _classCallCheck(this, OrderModel);
    this.orderSchema = new _mongoose["default"].Schema({
      quantity: {
        type: Number,
        required: true,
        "default": 1
      },
      user: {
        type: _mongoose["default"].Schema.Types.ObjectId,
        ref: 'User'
      },
      product: {
        type: _mongoose["default"].Schema.Types.ObjectId,
        ref: 'Product'
      },
      amount: {
        type: Number,
        required: true
      },
      status: {
        type: String,
        required: true,
        "enum": ['Delivered', 'Canceled', 'Placed', 'On the way']
      }
    }, {
      timestamps: true
    });
    this.Order = _mongoose["default"].model('Order', this.orderSchema);
  }
  return _createClass(OrderModel, [{
    key: "getModel",
    value: function getModel() {
      return this.Order;
    }
  }]);
}();
var _default = exports["default"] = new OrderModel().getModel();