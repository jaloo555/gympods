webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Index/ProductList.js":
/*!*****************************************!*\
  !*** ./components/Index/ProductList.js ***!
  \*****************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductCard */ "./components/Index/ProductCard.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/Users/jason/Desktop/Code/JS/gympods/frontend/components/Index/ProductList.js";



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  {\n    supplements {\n      _id\n      name\n      description\n      image {\n        url\n      }\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var ProductList = function ProductList(_ref, req) {
  var _ref$data = _ref.data,
      loading = _ref$data.loading,
      error = _ref$data.error,
      supplements = _ref$data.supplements,
      search = _ref.search;
  if (error) return "Error loading supplements";

  if (supplements && supplements.length) {
    var productCards = supplements.map(function (res) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
        sm: "4",
        key: res._id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: res._id,
        res: res,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), console.log(res));
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "productList",
      className: "jsx-515833796" + " " + "main",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-515833796" + " " + "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Our Products"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      fluid: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, productCards)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "515833796",
      css: ".main.jsx-515833796{font-family:'Bai Jamjuree',sans-serif;margin:40px 20px 20px 20px;}.title.jsx-515833796{text-align:center;margin:20px;}.cards.jsx-515833796{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCb0IsQUFHb0QsQUFJckIsQUFJTCxrQkFIRCxZQUNkLFFBTDZCLDJCQUM3QixTQU9BIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQge2dyYXBocWx9IGZyb20gXCJyZWFjdC1hcG9sbG9cIlxuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCIuL1Byb2R1Y3RDYXJkXCJcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgQ29sLFxuICBSb3dcbn0gZnJvbSBcInJlYWN0c3RyYXBcIlxuXG5jb25zdCBQcm9kdWN0TGlzdCA9IChcbiAgeyBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCBzdXBwbGVtZW50cyB9LCBzZWFyY2ggfSxyZXFcbiAgKSA9PiB7XG4gICAgaWYgKGVycm9yKSByZXR1cm4gXCJFcnJvciBsb2FkaW5nIHN1cHBsZW1lbnRzXCJcbiAgICBpZiAoc3VwcGxlbWVudHMgJiYgc3VwcGxlbWVudHMubGVuZ3RoKSB7XG4gICAgICBsZXQgcHJvZHVjdENhcmRzID0gc3VwcGxlbWVudHMubWFwKHJlcz0+KFxuICAgICAgICA8Q29sIHNtPVwiNFwiIGtleT17cmVzLl9pZH0+XG4gICAgICAgICAgPFByb2R1Y3RDYXJkIGtleT17cmVzLl9pZH0gcmVzPXtyZXN9Lz5cbiAgICAgICAgICB7Y29uc29sZS5sb2cocmVzKX1cbiAgICAgICAgPC9Db2w+XG4gICAgICApKVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCIgaWQ9XCJwcm9kdWN0TGlzdFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5PdXIgUHJvZHVjdHM8L2gxPlxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICB7cHJvZHVjdENhcmRzfVxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFpIEphbWp1cmVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIG1hcmdpbjogNDBweCAyMHB4IDIwcHggMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmRzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+XG59XG5jb25zdCBxdWVyeSA9IGdxbGBcbiAge1xuICAgIHN1cHBsZW1lbnRzIHtcbiAgICAgIF9pZFxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGltYWdlIHtcbiAgICAgICAgdXJsXG4gICAgICB9XG4gICAgICBwcmljZVxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKHF1ZXJ5LCB7XG4gIHByb3BzOiAoe2RhdGF9KT0+ICh7XG4gICAgZGF0YVxuICB9KVxufSkoUHJvZHVjdExpc3QpIl19 */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Index/ProductList.js */",
      __self: this
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Loading...");
};

var query = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_4__["graphql"])(query, {
  props: function props(_ref2) {
    var data = _ref2.data;
    return {
      data: data
    };
  }
})(ProductList));

/***/ })

})
//# sourceMappingURL=index.js.4f83c405d06a17c40f5f.hot-update.js.map