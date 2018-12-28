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
      className: "jsx-2130143530",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, supplement.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProductView__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), supplement.sizes.map(function (res) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: supplement.id,
        className: "jsx-2130143530",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2130143530",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, res.servings, ": ", res.price));
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "2130143530",
      css: ".mainContainer.jsx-2130143530{padding-top:65px;background-color:blue;height:250px;width:250px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL1Byb2R1Y3QvTGlzdGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnlCLEFBR2tDLGlCQUNLLHNCQUNULGFBRWhCLFlBQUMiLCJmaWxlIjoiL1VzZXJzL2phc29uL0Rlc2t0b3AvQ29kZS9KUy9neW1wb2RzL2Zyb250ZW5kL2NvbXBvbmVudHMvUHJvZHVjdC9MaXN0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7Z3JhcGhxbCwgUXVlcnl9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0IFByb2R1Y3RWaWV3IGZyb20gJy4vUHJvZHVjdFZpZXcnXG5cbmNvbnN0IExpc3RpbmcgPSAoe2lkLCBkYXRhfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeSBxdWVyeT17R0VUX0xJU1RJTkd9IHZhcmlhYmxlcz17e2lkfX0+XG4gICAgICB7KHtsb2FkaW5nLCBlcnJvciwgZGF0YX0pID0+IHtcbiAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxoMT5FcnJvciBsb2FkaW5nIHN1cHBsZW1lbnRzLjwvaDE+XG4gICAgICAgIGNvbnN0IHN1cHBsZW1lbnQgPSBkYXRhLnN1cHBsZW1lbnRcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cIm1haW5Db250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMT57c3VwcGxlbWVudC5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8UHJvZHVjdFZpZXcvPlxuICAgICAgICAgICAge3N1cHBsZW1lbnQuc2l6ZXMubWFwKHJlcz0+KFxuICAgICAgICAgICAgPGRpdiBrZXk9e3N1cHBsZW1lbnQuaWR9PlxuICAgICAgICAgICAgICA8aDE+e3Jlcy5zZXJ2aW5nc306IHtyZXMucHJpY2V9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8c3R5bGUganN4ID57YFxuICAgICAgICAgICAgICAubWFpbkNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDY1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIClcbiAgICAgIH19XG4gICAgPC9RdWVyeT5cbiAgKVxufVxuXG5jb25zdCBHRVRfTElTVElORyA9IGdxbGBcbiAgcXVlcnkgc3VwcGxlbWVudCgkaWQ6IElEISl7XG4gICAgc3VwcGxlbWVudChpZDogJGlkKXtcbiAgICAgIG5hbWVcbiAgICAgIF9pZFxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGltYWdle1xuICAgICAgICB1cmxcbiAgICAgIH1cbiAgICAgIHNpemVzIHtcbiAgICAgICAgcHJpY2VcbiAgICAgICAgc2VydmluZ3NcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChHRVRfTElTVElORywge1xuICBvcHRpb25zOiAoe2lkfSkgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkOiBpZFxuICAgIH1cbiAgfSksXG4gIHByb3BzOiAoe2RhdGF9KSA9PiAoe1xuICAgIGRhdGFcbiAgfSlcbn0pKExpc3RpbmcpIl19 */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Product/Listing.js */",
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

/***/ })

})
//# sourceMappingURL=supplements.js.4d949873d84187e479c6.hot-update.js.map