webpackHotUpdate("static/development/pages/supplements.js",{

/***/ "./components/Product/ProductView.js":
/*!*******************************************!*\
  !*** ./components/Product/ProductView.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/Users/jason/Desktop/Code/JS/gympods/frontend/components/Product/ProductView.js";



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // sample data

var sampleItems = [{
  src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  altText: 'Slide 1',
  caption: 'Slide 1'
}, {
  src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  altText: 'Slide 2',
  caption: 'Slide 2'
}, {
  src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  altText: 'Slide 3',
  caption: 'Slide 3'
}];

var ImageViewer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageViewer, _React$Component);

  function ImageViewer(props) {
    var _this;

    _classCallCheck(this, ImageViewer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ImageViewer).call(this, props));
    _this.state = {
      activeIndex: 0
    };
    _this.next = _this.next.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.previous = _this.previous.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.goToIndex = _this.goToIndex.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ImageViewer, [{
    key: "onExiting",
    value: function onExiting() {
      this.animating = true;
    }
  }, {
    key: "onExited",
    value: function onExited() {
      this.animating = false;
    }
  }, {
    key: "next",
    value: function next() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === sampleItems.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({
        activeIndex: nextIndex
      });
    }
  }, {
    key: "previous",
    value: function previous() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === 0 ? sampleItems.length - 1 : this.state.activeIndex - 1;
      this.setState({
        activeIndex: nextIndex
      });
    }
  }, {
    key: "goToIndex",
    value: function goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({
        activeIndex: newIndex
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeIndex = this.state.activeIndex;
      var slides = sampleItems.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselItem"], {
          onExited: _this2.onExited,
          onExiting: _this2.onExiting,
          key: item.src,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: item.src,
          alt: item.altText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
        activeIndex: activeIndex,
        next: this.next,
        previous: this.previous,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselIndicators"], {
        items: sampleItems,
        activeIndex: activeIndex,
        onClickHandler: this.goToIndex,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), slides, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
        direction: "prev",
        directionText: "Previous",
        onClickHandler: this.previous,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CarouselControl"], {
        direction: "next",
        directionText: "Next",
        onClickHandler: this.next,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }));
    }
  }]);

  return ImageViewer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var SizeSelector =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(SizeSelector, _React$Component2);

  function SizeSelector(props) {
    var _this3;

    _classCallCheck(this, SizeSelector);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(SizeSelector).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      selectedValue: "",
      price: ""
    });

    _this3.handleChange = _this3.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this3)));
    return _this3;
  }

  _createClass(SizeSelector, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        selectedValue: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var servingSelector = this.props.sizes.map(function (size) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: size.servings,
          key: size.servings,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        }, size.servings, " Servings");
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        value: this.state.selectedValue,
        onChange: this.handleChange,
        className: "servingSelector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, servingSelector));
    }
  }]);

  return SizeSelector;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var FlavorSelector =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(FlavorSelector, _React$Component3);

  function FlavorSelector(props) {
    _classCallCheck(this, FlavorSelector);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlavorSelector).call(this, props));
  }

  _createClass(FlavorSelector, [{
    key: "render",
    value: function render() {
      var flavorSelector = this.props.sizes.map(function (size) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: size.servings,
          key: size.servings,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, size.servings, " Servings");
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        className: "flavorSelector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, flavorSelector));
    }
  }]);

  return FlavorSelector;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var ProductView =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(ProductView, _React$Component4);

  function ProductView(props) {
    _classCallCheck(this, ProductView);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductView).call(this, props));
  }

  _createClass(ProductView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        fluid: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2300413990" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2300413990",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, this.props.supplement.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2300413990" + " " + "imgView",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageViewer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2300413990" + " " + "selection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SizeSelector, {
        sizes: this.props.supplement.sizes,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), console.log(this.props.supplement.flavors)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2300413990",
        css: ".imgView.jsx-2300413990{background-color:gray;width:50%;height:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL1Byb2R1Y3QvUHJvZHVjdFZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUtvQixBQUdtQyxzQkFDWixVQUNDLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2phc29uL0Rlc2t0b3AvQ29kZS9KUy9neW1wb2RzL2Zyb250ZW5kL2NvbXBvbmVudHMvUHJvZHVjdC9Qcm9kdWN0Vmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgQ2Fyb3VzZWwsXG4gIENhcm91c2VsQ2FwdGlvbixcbiAgQ2Fyb3VzZWxJbmRpY2F0b3JzLFxuICBDYXJvdXNlbEl0ZW0sXG4gIENhcm91c2VsQ29udHJvbFxufSBmcm9tICdyZWFjdHN0cmFwJ1xuXG4vLyBzYW1wbGUgZGF0YVxuY29uc3Qgc2FtcGxlSXRlbXMgPSBbXG4gIHtcbiAgICBzcmM6ICdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM0NzdmclMjB3aWR0aCUzRCUyMjgwMCUyMiUyMGhlaWdodCUzRCUyMjQwMCUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwODAwJTIwNDAwJTIyJTIwcHJlc2VydmVBc3BlY3RSYXRpbyUzRCUyMm5vbmUlMjIlM0UlM0NkZWZzJTNFJTNDc3R5bGUlMjB0eXBlJTNEJTIydGV4dCUyRmNzcyUyMiUzRSUyM2hvbGRlcl8xNWJhODAwYWExZCUyMHRleHQlMjAlN0IlMjBmaWxsJTNBJTIzNTU1JTNCZm9udC13ZWlnaHQlM0Fub3JtYWwlM0Jmb250LWZhbWlseSUzQUhlbHZldGljYSUyQyUyMG1vbm9zcGFjZSUzQmZvbnQtc2l6ZSUzQTQwcHQlMjAlN0QlMjAlM0MlMkZzdHlsZSUzRSUzQyUyRmRlZnMlM0UlM0NnJTIwaWQlM0QlMjJob2xkZXJfMTViYTgwMGFhMWQlMjIlM0UlM0NyZWN0JTIwd2lkdGglM0QlMjI4MDAlMjIlMjBoZWlnaHQlM0QlMjI0MDAlMjIlMjBmaWxsJTNEJTIyJTIzNzc3JTIyJTNFJTNDJTJGcmVjdCUzRSUzQ2clM0UlM0N0ZXh0JTIweCUzRCUyMjI4NS45MjE4NzUlMjIlMjB5JTNEJTIyMjE4LjMlMjIlM0VGaXJzdCUyMHNsaWRlJTNDJTJGdGV4dCUzRSUzQyUyRmclM0UlM0MlMkZnJTNFJTNDJTJGc3ZnJTNFJyxcbiAgICBhbHRUZXh0OiAnU2xpZGUgMScsXG4gICAgY2FwdGlvbjogJ1NsaWRlIDEnXG4gIH0sXG4gIHtcbiAgICBzcmM6ICdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM0NzdmclMjB3aWR0aCUzRCUyMjgwMCUyMiUyMGhlaWdodCUzRCUyMjQwMCUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwODAwJTIwNDAwJTIyJTIwcHJlc2VydmVBc3BlY3RSYXRpbyUzRCUyMm5vbmUlMjIlM0UlM0NkZWZzJTNFJTNDc3R5bGUlMjB0eXBlJTNEJTIydGV4dCUyRmNzcyUyMiUzRSUyM2hvbGRlcl8xNWJhODAwYWEyMCUyMHRleHQlMjAlN0IlMjBmaWxsJTNBJTIzNDQ0JTNCZm9udC13ZWlnaHQlM0Fub3JtYWwlM0Jmb250LWZhbWlseSUzQUhlbHZldGljYSUyQyUyMG1vbm9zcGFjZSUzQmZvbnQtc2l6ZSUzQTQwcHQlMjAlN0QlMjAlM0MlMkZzdHlsZSUzRSUzQyUyRmRlZnMlM0UlM0NnJTIwaWQlM0QlMjJob2xkZXJfMTViYTgwMGFhMjAlMjIlM0UlM0NyZWN0JTIwd2lkdGglM0QlMjI4MDAlMjIlMjBoZWlnaHQlM0QlMjI0MDAlMjIlMjBmaWxsJTNEJTIyJTIzNjY2JTIyJTNFJTNDJTJGcmVjdCUzRSUzQ2clM0UlM0N0ZXh0JTIweCUzRCUyMjI0Ny4zMjAzMTI1JTIyJTIweSUzRCUyMjIxOC4zJTIyJTNFU2Vjb25kJTIwc2xpZGUlM0MlMkZ0ZXh0JTNFJTNDJTJGZyUzRSUzQyUyRmclM0UlM0MlMkZzdmclM0UnLFxuICAgIGFsdFRleHQ6ICdTbGlkZSAyJyxcbiAgICBjYXB0aW9uOiAnU2xpZGUgMidcbiAgfSxcbiAge1xuICAgIHNyYzogJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzQ3N2ZyUyMHdpZHRoJTNEJTIyODAwJTIyJTIwaGVpZ2h0JTNEJTIyNDAwJTIyJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB2aWV3Qm94JTNEJTIyMCUyMDAlMjA4MDAlMjA0MDAlMjIlMjBwcmVzZXJ2ZUFzcGVjdFJhdGlvJTNEJTIybm9uZSUyMiUzRSUzQ2RlZnMlM0UlM0NzdHlsZSUyMHR5cGUlM0QlMjJ0ZXh0JTJGY3NzJTIyJTNFJTIzaG9sZGVyXzE1YmE4MDBhYTIxJTIwdGV4dCUyMCU3QiUyMGZpbGwlM0ElMjMzMzMlM0Jmb250LXdlaWdodCUzQW5vcm1hbCUzQmZvbnQtZmFtaWx5JTNBSGVsdmV0aWNhJTJDJTIwbW9ub3NwYWNlJTNCZm9udC1zaXplJTNBNDBwdCUyMCU3RCUyMCUzQyUyRnN0eWxlJTNFJTNDJTJGZGVmcyUzRSUzQ2clMjBpZCUzRCUyMmhvbGRlcl8xNWJhODAwYWEyMSUyMiUzRSUzQ3JlY3QlMjB3aWR0aCUzRCUyMjgwMCUyMiUyMGhlaWdodCUzRCUyMjQwMCUyMiUyMGZpbGwlM0QlMjIlMjM1NTUlMjIlM0UlM0MlMkZyZWN0JTNFJTNDZyUzRSUzQ3RleHQlMjB4JTNEJTIyMjc3JTIyJTIweSUzRCUyMjIxOC4zJTIyJTNFVGhpcmQlMjBzbGlkZSUzQyUyRnRleHQlM0UlM0MlMkZnJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRScsXG4gICAgYWx0VGV4dDogJ1NsaWRlIDMnLFxuICAgIGNhcHRpb246ICdTbGlkZSAzJ1xuICB9XG5dO1xuXG5jbGFzcyBJbWFnZVZpZXdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHthY3RpdmVJbmRleDogMH1cbiAgICB0aGlzLm5leHQgPSB0aGlzLm5leHQuYmluZCh0aGlzKVxuICAgIHRoaXMucHJldmlvdXMgPSB0aGlzLnByZXZpb3VzLmJpbmQodGhpcylcbiAgICB0aGlzLmdvVG9JbmRleCA9IHRoaXMuZ29Ub0luZGV4LmJpbmQodGhpcylcbiAgICB0aGlzLm9uRXhpdGluZyA9IHRoaXMub25FeGl0aW5nLmJpbmQodGhpcylcbiAgICB0aGlzLm9uRXhpdGVkID0gdGhpcy5vbkV4aXRlZC5iaW5kKHRoaXMpXG4gIH1cblxuICBvbkV4aXRpbmcoKSB7XG4gICAgdGhpcy5hbmltYXRpbmcgPSB0cnVlO1xuICB9XG5cbiAgb25FeGl0ZWQoKSB7XG4gICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIG5leHQoKSB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW5nKSByZXR1cm47XG4gICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCA9PT0gc2FtcGxlSXRlbXMubGVuZ3RoIC0gMSA/IDAgOiB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ICsgMTtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSW5kZXg6IG5leHRJbmRleCB9KTtcbiAgfVxuXG4gIHByZXZpb3VzKCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggPT09IDAgPyBzYW1wbGVJdGVtcy5sZW5ndGggLSAxIDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCAtIDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUluZGV4OiBuZXh0SW5kZXggfSk7XG4gIH1cblxuICBnb1RvSW5kZXgobmV3SW5kZXgpIHtcbiAgICBpZiAodGhpcy5hbmltYXRpbmcpIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSW5kZXg6IG5ld0luZGV4IH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHthY3RpdmVJbmRleH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qgc2xpZGVzID0gc2FtcGxlSXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q2Fyb3VzZWxJdGVtXG4gICAgICAgICAgb25FeGl0ZWQ9e3RoaXMub25FeGl0ZWR9XG4gICAgICAgICAgb25FeGl0aW5nPXt0aGlzLm9uRXhpdGluZ31cbiAgICAgICAgICBrZXk9e2l0ZW0uc3JjfT5cbiAgICAgICAgICA8aW1nIHNyYz17aXRlbS5zcmN9IGFsdD17aXRlbS5hbHRUZXh0fS8+XG4gICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICAgKVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJvdXNlbFxuICAgICAgICBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9XG4gICAgICAgIG5leHQ9e3RoaXMubmV4dH1cbiAgICAgICAgcHJldmlvdXM9e3RoaXMucHJldmlvdXN9XG4gICAgICA+XG4gICAgICAgIDxDYXJvdXNlbEluZGljYXRvcnMgaXRlbXM9e3NhbXBsZUl0ZW1zfSBhY3RpdmVJbmRleD17YWN0aXZlSW5kZXh9IG9uQ2xpY2tIYW5kbGVyPXt0aGlzLmdvVG9JbmRleH0gLz5cbiAgICAgICAge3NsaWRlc31cbiAgICAgICAgPENhcm91c2VsQ29udHJvbCBkaXJlY3Rpb249XCJwcmV2XCIgZGlyZWN0aW9uVGV4dD1cIlByZXZpb3VzXCIgb25DbGlja0hhbmRsZXI9e3RoaXMucHJldmlvdXN9IC8+XG4gICAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwibmV4dFwiIGRpcmVjdGlvblRleHQ9XCJOZXh0XCIgb25DbGlja0hhbmRsZXI9e3RoaXMubmV4dH0gLz5cbiAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgKVxuICB9XG5cblxufVxuXG5jbGFzcyBTaXplU2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzZWxlY3RlZFZhbHVlOiBcIlwiLFxuICAgIHByaWNlOiBcIlwiXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkVmFsdWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzZXJ2aW5nU2VsZWN0b3IgPSB0aGlzLnByb3BzLnNpemVzLm1hcCgoc2l6ZSk9PiAoXG4gICAgICA8b3B0aW9uIHZhbHVlPXtzaXplLnNlcnZpbmdzfSBrZXk9e3NpemUuc2VydmluZ3N9PntzaXplLnNlcnZpbmdzfSBTZXJ2aW5nczwvb3B0aW9uPlxuICAgICkpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWxlY3QgdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRWYWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT1cInNlcnZpbmdTZWxlY3RvclwiPlxuICAgICAgICAgIHtzZXJ2aW5nU2VsZWN0b3J9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEZsYXZvclNlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBmbGF2b3JTZWxlY3RvciA9IHRoaXMucHJvcHMuc2l6ZXMubWFwKChzaXplKT0+IChcbiAgICAgIDxvcHRpb24gdmFsdWU9e3NpemUuc2VydmluZ3N9IGtleT17c2l6ZS5zZXJ2aW5nc30+e3NpemUuc2VydmluZ3N9IFNlcnZpbmdzPC9vcHRpb24+XG4gICAgKSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9XCJmbGF2b3JTZWxlY3RvclwiPlxuICAgICAgICAgIHtmbGF2b3JTZWxlY3Rvcn1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgUHJvZHVjdFZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy5zdXBwbGVtZW50Lm5hbWV9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nVmlld1wiPlxuICAgICAgICAgIDxJbWFnZVZpZXdlci8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxuICAgICAgICAgIDxTaXplU2VsZWN0b3Igc2l6ZXM9e3RoaXMucHJvcHMuc3VwcGxlbWVudC5zaXplc30vPlxuICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnByb3BzLnN1cHBsZW1lbnQuZmxhdm9ycyl9XG4gICAgICAgICAgey8qIDxGbGF2b3JTZWxlY3RvciBmbGF2b3JzPXt0aGlzLnByb3BzLnN1cHBsZW1lbnQuZmxhdm9yc30vPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaW1nVmlldyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFZpZXciXX0= */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Product/ProductView.js */",
        __self: this
      }));
    }
  }]);

  return ProductView;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductView);

/***/ })

})
//# sourceMappingURL=supplements.js.06aa08d43ef3a9fc3119.hot-update.js.map