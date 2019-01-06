webpackHotUpdate("static/development/pages/supplements.js",{

/***/ "./components/Cart/CartButton.js":
/*!***************************************!*\
  !*** ./components/Cart/CartButton.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jason/Desktop/Code/JS/gympods/frontend/components/Cart/CartButton.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Cart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Cart, _React$Component);

  function Cart(props) {
    var _this;

    _classCallCheck(this, Cart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cart).call(this, props));
    _this.state = {
      id: props.id,
      name: props.name,
      price: props.price,
      desc: props.desc,
      flavors: props.flavors,
      url: "https://localhost:3000/snipcartParser"
    };
    _this.processStr = _this.processStr.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Cart, [{
    key: "processStr",
    value: function processStr(arr) {
      var str = "";

      for (var key in arr) {
        str = str + "|" + key;
      }

      return str.substr(1);
    }
  }, {
    key: "render",
    value: function render() {
      var flavOptions = this.processStr(this.state.flavors);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "snipcart-add-item BuyButton",
        "data-item-id": this.state.id,
        "data-item-name": this.state.name,
        "data-item-url": this.state.url,
        "data-item-description": this.state.desc,
        "data-item-price": this.state.price,
        "data-item-custom1-name": "flavors",
        "data-item-custom1-required": "true",
        "data-item-custom1-options": flavOptions,
        "data-item-custom2-name": "servings",
        "data-item-custom2-required": "true",
        "data-item-custom2-options": "25|50[+15.00]|80[+30.00]",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "ADD TO CART");
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ })

})
//# sourceMappingURL=supplements.js.65bd74547491887bf0d9.hot-update.js.map