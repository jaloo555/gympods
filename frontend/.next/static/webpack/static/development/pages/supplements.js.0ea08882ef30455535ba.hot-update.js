webpackHotUpdate("static/development/pages/supplements.js",{

/***/ "./components/Product/Listing.js":
/*!***************************************!*\
  !*** ./components/Product/Listing.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _ProductView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductView */ "./components/Product/ProductView.js");
var _jsxFileName = "/Users/jason/Desktop/Code/JS/gympods/frontend/components/Product/Listing.js";



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query supplement($id: ID!){\n    supplement(id: $id){\n      name\n      _id\n      description\n      image{\n        url\n      }\n      sizes {\n        price\n        servings\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Listing = function Listing(_ref) {
  var id = _ref.id,
      data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: GET_LISTING,
    variables: {
      id: id
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, "Loading...");
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Error loading supplements.");
    var supplement = data.supplement;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      fluid: true,
      className: "mainContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-3901184182",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, supplement.name), supplement.sizes.map(function (res) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: supplement.id,
        className: "jsx-3901184182",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-3901184182",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, res.servings, ": ", res.price));
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "3901184182",
      css: ".mainContainer.jsx-3901184182{padding-top:65px;background-color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL1Byb2R1Y3QvTGlzdGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnlCLEFBR2tDLGlCQUNLLHNCQUN4QiIsImZpbGUiOiIvVXNlcnMvamFzb24vRGVza3RvcC9Db2RlL0pTL2d5bXBvZHMvZnJvbnRlbmQvY29tcG9uZW50cy9Qcm9kdWN0L0xpc3RpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHtncmFwaHFsLCBRdWVyeX0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgUHJvZHVjdFZpZXcgZnJvbSAnLi9Qcm9kdWN0VmlldydcblxuY29uc3QgTGlzdGluZyA9ICh7aWQsIGRhdGF9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfTElTVElOR30gdmFyaWFibGVzPXt7aWR9fT5cbiAgICAgIHsoe2xvYWRpbmcsIGVycm9yLCBkYXRhfSkgPT4ge1xuICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGgxPkVycm9yIGxvYWRpbmcgc3VwcGxlbWVudHMuPC9oMT5cbiAgICAgICAgY29uc3Qgc3VwcGxlbWVudCA9IGRhdGEuc3VwcGxlbWVudFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwibWFpbkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgIDxoMT57c3VwcGxlbWVudC5uYW1lfTwvaDE+XG5cbiAgICAgICAgICAgICB7c3VwcGxlbWVudC5zaXplcy5tYXAocmVzPT4oXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtzdXBwbGVtZW50LmlkfT5cbiAgICAgICAgICAgICAgICA8aDE+e3Jlcy5zZXJ2aW5nc306IHtyZXMucHJpY2V9PC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggPntgXG4gICAgICAgICAgICAgIC5tYWluQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNjVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIClcbiAgICAgIH19XG4gICAgPC9RdWVyeT5cbiAgKVxufVxuXG5jb25zdCBHRVRfTElTVElORyA9IGdxbGBcbiAgcXVlcnkgc3VwcGxlbWVudCgkaWQ6IElEISl7XG4gICAgc3VwcGxlbWVudChpZDogJGlkKXtcbiAgICAgIG5hbWVcbiAgICAgIF9pZFxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGltYWdle1xuICAgICAgICB1cmxcbiAgICAgIH1cbiAgICAgIHNpemVzIHtcbiAgICAgICAgcHJpY2VcbiAgICAgICAgc2VydmluZ3NcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChHRVRfTElTVElORywge1xuICBvcHRpb25zOiAoe2lkfSkgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkOiBpZFxuICAgIH1cbiAgfSksXG4gIHByb3BzOiAoe2RhdGF9KSA9PiAoe1xuICAgIGRhdGFcbiAgfSlcbn0pKExpc3RpbmcpIl19 */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Product/Listing.js */",
      __self: this
    }));
  });
};

var GET_LISTING = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_3__["graphql"])(GET_LISTING, {
  options: function options(_ref3) {
    var id = _ref3.id;
    return {
      variables: {
        id: id
      }
    };
  },
  props: function props(_ref4) {
    var data = _ref4.data;
    return {
      data: data
    };
  }
})(Listing));

/***/ }),

/***/ "./components/Product/ProductView.js":
/*!*******************************************!*\
  !*** ./components/Product/ProductView.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/Users/jason/Desktop/Code/JS/gympods/frontend/components/Product/ProductView.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ProductView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductView, _React$Component);

  function ProductView(props) {
    _classCallCheck(this, ProductView);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProductView).call(this, props));
  }

  _createClass(ProductView, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        fluid: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }));
    }
  }]);

  return ProductView;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductView);

/***/ })

})
//# sourceMappingURL=supplements.js.0ea08882ef30455535ba.hot-update.js.map