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



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // import CartBtn from '../Cart/CartButton'
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

var Selector =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Selector, _React$Component2);

  function Selector(props) {
    var _this3;

    _classCallCheck(this, Selector);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Selector).call(this, props));
    _this3.handlePriceChange = _this3.handlePriceChange.bind(_assertThisInitialized(_assertThisInitialized(_this3)));
    _this3.handleFlavorChange = _this3.handleFlavorChange.bind(_assertThisInitialized(_assertThisInitialized(_this3)));
    _this3.state = {
      // default value as 1st item
      name: _this3.props.name,
      _id: _this3.props._id,
      selectedPrice: _this3.props.sizes[0].price,
      selectedFlavor: _this3.props.initialFlavor
    };
    return _this3;
  }

  _createClass(Selector, [{
    key: "handlePriceChange",
    value: function handlePriceChange(e) {
      this.setState({
        selectedPrice: e.target.value
      });
    }
  }, {
    key: "handleFlavorChange",
    value: function handleFlavorChange(e) {
      this.setState({
        selectedFlavor: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var servingSelector = this.props.sizes.map(function (size) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: size.price,
          key: size.servings,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, size.servings, " Servings");
      });
      var flavorSelector = this.props.flavors.map(function (val) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: val,
          key: val,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, val, " flavor");
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        value: this.state.selectedPrice,
        onChange: this.handlePriceChange,
        className: "servingSelector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, servingSelector), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        value: this.state.selectedFlavor,
        onChange: this.handleFlavorChange,
        className: "flavorSelector",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, flavorSelector), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, this.state.selectedFlavor, ", ", this.state.selectedPrice, ", ", this.state.name)));
    }
  }]);

  return Selector;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var ProductView =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(ProductView, _React$Component3);

  function ProductView(props) {
    _classCallCheck(this, ProductView);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductView).call(this, props));
  }

  _createClass(ProductView, [{
    key: "render",
    value: function render() {
      var flavors = this.props.supplement.flavors[0];
      var validFlavors = Object.keys(flavors).filter(function (key) {
        return flavors[key] == true;
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        fluid: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2300413990" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2300413990",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, this.props.supplement.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2300413990" + " " + "imgView",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageViewer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2300413990" + " " + "selection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Selector, {
        initialFlavor: validFlavors[0],
        name: this.props.supplement.name,
        sizes: this.props.supplement.sizes,
        flavors: validFlavors,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2300413990",
        css: ".imgView.jsx-2300413990{background-color:gray;width:50%;height:50%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL1Byb2R1Y3QvUHJvZHVjdFZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEtvQixBQUdtQyxzQkFDWixVQUNDLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2phc29uL0Rlc2t0b3AvQ29kZS9KUy9neW1wb2RzL2Zyb250ZW5kL2NvbXBvbmVudHMvUHJvZHVjdC9Qcm9kdWN0Vmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgQ2Fyb3VzZWwsXG4gIENhcm91c2VsSW5kaWNhdG9ycyxcbiAgQ2Fyb3VzZWxJdGVtLFxuICBDYXJvdXNlbENvbnRyb2xcbn0gZnJvbSAncmVhY3RzdHJhcCdcbi8vIGltcG9ydCBDYXJ0QnRuIGZyb20gJy4uL0NhcnQvQ2FydEJ1dHRvbidcblxuLy8gc2FtcGxlIGRhdGFcbmNvbnN0IHNhbXBsZUl0ZW1zID0gW1xuICB7XG4gICAgc3JjOiAnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNDc3ZnJTIwd2lkdGglM0QlMjI4MDAlMjIlMjBoZWlnaHQlM0QlMjI0MDAlMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDgwMCUyMDQwMCUyMiUyMHByZXNlcnZlQXNwZWN0UmF0aW8lM0QlMjJub25lJTIyJTNFJTNDZGVmcyUzRSUzQ3N0eWxlJTIwdHlwZSUzRCUyMnRleHQlMkZjc3MlMjIlM0UlMjNob2xkZXJfMTViYTgwMGFhMWQlMjB0ZXh0JTIwJTdCJTIwZmlsbCUzQSUyMzU1NSUzQmZvbnQtd2VpZ2h0JTNBbm9ybWFsJTNCZm9udC1mYW1pbHklM0FIZWx2ZXRpY2ElMkMlMjBtb25vc3BhY2UlM0Jmb250LXNpemUlM0E0MHB0JTIwJTdEJTIwJTNDJTJGc3R5bGUlM0UlM0MlMkZkZWZzJTNFJTNDZyUyMGlkJTNEJTIyaG9sZGVyXzE1YmE4MDBhYTFkJTIyJTNFJTNDcmVjdCUyMHdpZHRoJTNEJTIyODAwJTIyJTIwaGVpZ2h0JTNEJTIyNDAwJTIyJTIwZmlsbCUzRCUyMiUyMzc3NyUyMiUzRSUzQyUyRnJlY3QlM0UlM0NnJTNFJTNDdGV4dCUyMHglM0QlMjIyODUuOTIxODc1JTIyJTIweSUzRCUyMjIxOC4zJTIyJTNFRmlyc3QlMjBzbGlkZSUzQyUyRnRleHQlM0UlM0MlMkZnJTNFJTNDJTJGZyUzRSUzQyUyRnN2ZyUzRScsXG4gICAgYWx0VGV4dDogJ1NsaWRlIDEnLFxuICAgIGNhcHRpb246ICdTbGlkZSAxJ1xuICB9LFxuICB7XG4gICAgc3JjOiAnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNDc3ZnJTIwd2lkdGglM0QlMjI4MDAlMjIlMjBoZWlnaHQlM0QlMjI0MDAlMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHZpZXdCb3glM0QlMjIwJTIwMCUyMDgwMCUyMDQwMCUyMiUyMHByZXNlcnZlQXNwZWN0UmF0aW8lM0QlMjJub25lJTIyJTNFJTNDZGVmcyUzRSUzQ3N0eWxlJTIwdHlwZSUzRCUyMnRleHQlMkZjc3MlMjIlM0UlMjNob2xkZXJfMTViYTgwMGFhMjAlMjB0ZXh0JTIwJTdCJTIwZmlsbCUzQSUyMzQ0NCUzQmZvbnQtd2VpZ2h0JTNBbm9ybWFsJTNCZm9udC1mYW1pbHklM0FIZWx2ZXRpY2ElMkMlMjBtb25vc3BhY2UlM0Jmb250LXNpemUlM0E0MHB0JTIwJTdEJTIwJTNDJTJGc3R5bGUlM0UlM0MlMkZkZWZzJTNFJTNDZyUyMGlkJTNEJTIyaG9sZGVyXzE1YmE4MDBhYTIwJTIyJTNFJTNDcmVjdCUyMHdpZHRoJTNEJTIyODAwJTIyJTIwaGVpZ2h0JTNEJTIyNDAwJTIyJTIwZmlsbCUzRCUyMiUyMzY2NiUyMiUzRSUzQyUyRnJlY3QlM0UlM0NnJTNFJTNDdGV4dCUyMHglM0QlMjIyNDcuMzIwMzEyNSUyMiUyMHklM0QlMjIyMTguMyUyMiUzRVNlY29uZCUyMHNsaWRlJTNDJTJGdGV4dCUzRSUzQyUyRmclM0UlM0MlMkZnJTNFJTNDJTJGc3ZnJTNFJyxcbiAgICBhbHRUZXh0OiAnU2xpZGUgMicsXG4gICAgY2FwdGlvbjogJ1NsaWRlIDInXG4gIH0sXG4gIHtcbiAgICBzcmM6ICdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM0NzdmclMjB3aWR0aCUzRCUyMjgwMCUyMiUyMGhlaWdodCUzRCUyMjQwMCUyMiUyMHhtbG5zJTNEJTIyaHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTIyJTIwdmlld0JveCUzRCUyMjAlMjAwJTIwODAwJTIwNDAwJTIyJTIwcHJlc2VydmVBc3BlY3RSYXRpbyUzRCUyMm5vbmUlMjIlM0UlM0NkZWZzJTNFJTNDc3R5bGUlMjB0eXBlJTNEJTIydGV4dCUyRmNzcyUyMiUzRSUyM2hvbGRlcl8xNWJhODAwYWEyMSUyMHRleHQlMjAlN0IlMjBmaWxsJTNBJTIzMzMzJTNCZm9udC13ZWlnaHQlM0Fub3JtYWwlM0Jmb250LWZhbWlseSUzQUhlbHZldGljYSUyQyUyMG1vbm9zcGFjZSUzQmZvbnQtc2l6ZSUzQTQwcHQlMjAlN0QlMjAlM0MlMkZzdHlsZSUzRSUzQyUyRmRlZnMlM0UlM0NnJTIwaWQlM0QlMjJob2xkZXJfMTViYTgwMGFhMjElMjIlM0UlM0NyZWN0JTIwd2lkdGglM0QlMjI4MDAlMjIlMjBoZWlnaHQlM0QlMjI0MDAlMjIlMjBmaWxsJTNEJTIyJTIzNTU1JTIyJTNFJTNDJTJGcmVjdCUzRSUzQ2clM0UlM0N0ZXh0JTIweCUzRCUyMjI3NyUyMiUyMHklM0QlMjIyMTguMyUyMiUzRVRoaXJkJTIwc2xpZGUlM0MlMkZ0ZXh0JTNFJTNDJTJGZyUzRSUzQyUyRmclM0UlM0MlMkZzdmclM0UnLFxuICAgIGFsdFRleHQ6ICdTbGlkZSAzJyxcbiAgICBjYXB0aW9uOiAnU2xpZGUgMydcbiAgfVxuXTtcblxuY2xhc3MgSW1hZ2VWaWV3ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7YWN0aXZlSW5kZXg6IDB9XG4gICAgdGhpcy5uZXh0ID0gdGhpcy5uZXh0LmJpbmQodGhpcylcbiAgICB0aGlzLnByZXZpb3VzID0gdGhpcy5wcmV2aW91cy5iaW5kKHRoaXMpXG4gICAgdGhpcy5nb1RvSW5kZXggPSB0aGlzLmdvVG9JbmRleC5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkV4aXRpbmcgPSB0aGlzLm9uRXhpdGluZy5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbkV4aXRlZCA9IHRoaXMub25FeGl0ZWQuYmluZCh0aGlzKVxuICB9XG5cbiAgb25FeGl0aW5nKCkge1xuICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgfVxuXG4gIG9uRXhpdGVkKCkge1xuICAgIHRoaXMuYW5pbWF0aW5nID0gZmFsc2U7XG4gIH1cblxuICBuZXh0KCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGluZykgcmV0dXJuO1xuICAgIGNvbnN0IG5leHRJbmRleCA9IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggPT09IHNhbXBsZUl0ZW1zLmxlbmd0aCAtIDEgPyAwIDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleCArIDE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUluZGV4OiBuZXh0SW5kZXggfSk7XG4gIH1cblxuICBwcmV2aW91cygpIHtcbiAgICBpZiAodGhpcy5hbmltYXRpbmcpIHJldHVybjtcbiAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ID09PSAwID8gc2FtcGxlSXRlbXMubGVuZ3RoIC0gMSA6IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggLSAxO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJbmRleDogbmV4dEluZGV4IH0pO1xuICB9XG5cbiAgZ29Ub0luZGV4KG5ld0luZGV4KSB7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW5nKSByZXR1cm47XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUluZGV4OiBuZXdJbmRleCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7YWN0aXZlSW5kZXh9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHNsaWRlcyA9IHNhbXBsZUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENhcm91c2VsSXRlbVxuICAgICAgICAgIG9uRXhpdGVkPXt0aGlzLm9uRXhpdGVkfVxuICAgICAgICAgIG9uRXhpdGluZz17dGhpcy5vbkV4aXRpbmd9XG4gICAgICAgICAga2V5PXtpdGVtLnNyY30+XG4gICAgICAgICAgPGltZyBzcmM9e2l0ZW0uc3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0vPlxuICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgIClcbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxuICAgICAgICBuZXh0PXt0aGlzLm5leHR9XG4gICAgICAgIHByZXZpb3VzPXt0aGlzLnByZXZpb3VzfVxuICAgICAgPlxuICAgICAgICA8Q2Fyb3VzZWxJbmRpY2F0b3JzIGl0ZW1zPXtzYW1wbGVJdGVtc30gYWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fSBvbkNsaWNrSGFuZGxlcj17dGhpcy5nb1RvSW5kZXh9IC8+XG4gICAgICAgIHtzbGlkZXN9XG4gICAgICAgIDxDYXJvdXNlbENvbnRyb2wgZGlyZWN0aW9uPVwicHJldlwiIGRpcmVjdGlvblRleHQ9XCJQcmV2aW91c1wiIG9uQ2xpY2tIYW5kbGVyPXt0aGlzLnByZXZpb3VzfSAvPlxuICAgICAgICA8Q2Fyb3VzZWxDb250cm9sIGRpcmVjdGlvbj1cIm5leHRcIiBkaXJlY3Rpb25UZXh0PVwiTmV4dFwiIG9uQ2xpY2tIYW5kbGVyPXt0aGlzLm5leHR9IC8+XG4gICAgICA8L0Nhcm91c2VsPlxuICAgIClcbiAgfVxuXG5cbn1cblxuY2xhc3MgU2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuaGFuZGxlUHJpY2VDaGFuZ2UgPSB0aGlzLmhhbmRsZVByaWNlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUZsYXZvckNoYW5nZSA9IHRoaXMuaGFuZGxlRmxhdm9yQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gZGVmYXVsdCB2YWx1ZSBhcyAxc3QgaXRlbVxuICAgICAgbmFtZTogdGhpcy5wcm9wcy5uYW1lLFxuICAgICAgX2lkOiB0aGlzLnByb3BzLl9pZCxcbiAgICAgIHNlbGVjdGVkUHJpY2U6IHRoaXMucHJvcHMuc2l6ZXNbMF0ucHJpY2UsXG4gICAgICBzZWxlY3RlZEZsYXZvcjogdGhpcy5wcm9wcy5pbml0aWFsRmxhdm9yLFxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVByaWNlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkUHJpY2U6IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pXG4gIH1cblxuICBoYW5kbGVGbGF2b3JDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWRGbGF2b3I6IGUudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzZXJ2aW5nU2VsZWN0b3IgPSB0aGlzLnByb3BzLnNpemVzLm1hcCgoc2l6ZSk9PiAoXG4gICAgICA8b3B0aW9uIHZhbHVlPXtzaXplLnByaWNlfSBrZXk9e3NpemUuc2VydmluZ3N9PntzaXplLnNlcnZpbmdzfSBTZXJ2aW5nczwvb3B0aW9uPlxuICAgICkpXG5cbiAgICBjb25zdCBmbGF2b3JTZWxlY3RvciA9IHRoaXMucHJvcHMuZmxhdm9ycy5tYXAoKHZhbCkgPT4gKFxuICAgICAgPG9wdGlvbiB2YWx1ZT17dmFsfSBrZXk9e3ZhbH0+e3ZhbH0gZmxhdm9yPC9vcHRpb24+XG4gICAgKSlcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgey8qIFByaWNlICovfVxuICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkUHJpY2V9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUHJpY2VDaGFuZ2V9IGNsYXNzTmFtZT1cInNlcnZpbmdTZWxlY3RvclwiPlxuICAgICAgICAgIHtzZXJ2aW5nU2VsZWN0b3J9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICB7LyogRmxhdm9yICovfVxuICAgICAgICA8c2VsZWN0IHZhbHVlPXt0aGlzLnN0YXRlLnNlbGVjdGVkRmxhdm9yfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZsYXZvckNoYW5nZX0gY2xhc3NOYW1lPVwiZmxhdm9yU2VsZWN0b3JcIj5cbiAgICAgICAgICB7Zmxhdm9yU2VsZWN0b3J9XG4gICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgIHsvKiBkZWJ1ZyAqL31cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+e3RoaXMuc3RhdGUuc2VsZWN0ZWRGbGF2b3J9LCB7dGhpcy5zdGF0ZS5zZWxlY3RlZFByaWNlfSwge3RoaXMuc3RhdGUubmFtZX08L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBQcm9kdWN0VmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZmxhdm9ycyA9IHRoaXMucHJvcHMuc3VwcGxlbWVudC5mbGF2b3JzWzBdXG4gICAgY29uc3QgdmFsaWRGbGF2b3JzID0gKE9iamVjdC5rZXlzKGZsYXZvcnMpLmZpbHRlcihrZXkgPT4gZmxhdm9yc1trZXldPT10cnVlKSlcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8aDE+e3RoaXMucHJvcHMuc3VwcGxlbWVudC5uYW1lfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1ZpZXdcIj5cbiAgICAgICAgICA8SW1hZ2VWaWV3ZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICA8U2VsZWN0b3IgaW5pdGlhbEZsYXZvcj17dmFsaWRGbGF2b3JzWzBdfSBcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5zdXBwbGVtZW50Lm5hbWV9IFxuICAgICAgICAgICAgICAgICAgICBzaXplcz17dGhpcy5wcm9wcy5zdXBwbGVtZW50LnNpemVzfSBcbiAgICAgICAgICAgICAgICAgICAgZmxhdm9ycz17dmFsaWRGbGF2b3JzfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmltZ1ZpZXcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RWaWV3Il19 */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Product/ProductView.js */",
        __self: this
      }));
    }
  }]);

  return ProductView;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductView);

/***/ })

})
//# sourceMappingURL=supplements.js.ddf262f3dde3e89e248a.hot-update.js.map