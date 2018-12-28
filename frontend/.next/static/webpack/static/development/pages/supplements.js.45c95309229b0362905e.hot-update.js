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
      className: "jsx-4101925445",
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
        className: "jsx-4101925445",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-4101925445",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, res.servings, ": ", res.price));
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "4101925445",
      css: ".mainContainer.jsx-4101925445{padding-top:65px;background-color:blue;height:250px;width:250px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL1Byb2R1Y3QvTGlzdGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnlCLEFBR2tDLGlCQUNLLHNCQUNULGFBQ0QsWUFDZCIsImZpbGUiOiIvVXNlcnMvamFzb24vRGVza3RvcC9Db2RlL0pTL2d5bXBvZHMvZnJvbnRlbmQvY29tcG9uZW50cy9Qcm9kdWN0L0xpc3RpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHtncmFwaHFsLCBRdWVyeX0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgUHJvZHVjdFZpZXcgZnJvbSAnLi9Qcm9kdWN0VmlldydcblxuY29uc3QgTGlzdGluZyA9ICh7aWQsIGRhdGF9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfTElTVElOR30gdmFyaWFibGVzPXt7aWR9fT5cbiAgICAgIHsoe2xvYWRpbmcsIGVycm9yLCBkYXRhfSkgPT4ge1xuICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGgxPkVycm9yIGxvYWRpbmcgc3VwcGxlbWVudHMuPC9oMT5cbiAgICAgICAgY29uc3Qgc3VwcGxlbWVudCA9IGRhdGEuc3VwcGxlbWVudFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwibWFpbkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxPntzdXBwbGVtZW50Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxQcm9kdWN0Vmlldy8+XG4gICAgICAgICAgICB7c3VwcGxlbWVudC5zaXplcy5tYXAocmVzPT4oXG4gICAgICAgICAgICA8ZGl2IGtleT17c3VwcGxlbWVudC5pZH0+XG4gICAgICAgICAgICAgIDxoMT57cmVzLnNlcnZpbmdzfToge3Jlcy5wcmljZX08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggPntgXG4gICAgICAgICAgICAgIC5tYWluQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNjVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIClcbiAgICAgIH19XG4gICAgPC9RdWVyeT5cbiAgKVxufVxuXG5jb25zdCBHRVRfTElTVElORyA9IGdxbGBcbiAgcXVlcnkgc3VwcGxlbWVudCgkaWQ6IElEISl7XG4gICAgc3VwcGxlbWVudChpZDogJGlkKXtcbiAgICAgIG5hbWVcbiAgICAgIF9pZFxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGltYWdle1xuICAgICAgICB1cmxcbiAgICAgIH1cbiAgICAgIHNpemVzIHtcbiAgICAgICAgcHJpY2VcbiAgICAgICAgc2VydmluZ3NcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChHRVRfTElTVElORywge1xuICBvcHRpb25zOiAoe2lkfSkgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkOiBpZFxuICAgIH1cbiAgfSksXG4gIHByb3BzOiAoe2RhdGF9KSA9PiAoe1xuICAgIGRhdGFcbiAgfSlcbn0pKExpc3RpbmcpIl19 */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Product/Listing.js */",
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
//# sourceMappingURL=supplements.js.45c95309229b0362905e.hot-update.js.map