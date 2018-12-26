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
  var data = _taggedTemplateLiteral(["\n  {\n    supplements {\n      _id\n      name\n      description\n      image {\n        url\n      }\n    }\n  }\n"]);

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
    //searchQuery
    var searchQuery = supplements.filter(function (query) {
      return query.name.toLowerCase().includes(search);
    });

    if (searchQuery.length != 0) {
      var productCards = searchQuery.map(function (res) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          sm: "3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: res._id,
          res: res,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }));
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "productList",
        className: "jsx-2886678953" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2886678953" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Our Products"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2886678953" + " " + "h-100 cards",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, productCards), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2886678953",
        css: ".main.jsx-2886678953{font-family:'Bai Jamjuree',sans-serif;margin:40px 20px 20px 20px;}.title.jsx-2886678953{text-align:center;margin:20px;}.cards.jsx-2886678953{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDc0IsQUFHc0QsQUFJckIsQUFJTCxrQkFIRCxZQUNkLFFBTDZCLDJCQUM3QixTQU9BIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQge2dyYXBocWx9IGZyb20gXCJyZWFjdC1hcG9sbG9cIlxuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCIuL1Byb2R1Y3RDYXJkXCJcbmltcG9ydCB7XG4gIENhcmQsXG4gIENhcmRCb2R5LFxuICBDYXJkSW1nLFxuICBDYXJkR3JvdXAsXG4gIENhcmRDb2x1bW5zLFxuICBDYXJkU3VidGl0bGUsXG4gIENhcmRUZXh0LFxuICBDYXJkVGl0bGUsXG4gIENvbCxcbiAgUm93XG59IGZyb20gXCJyZWFjdHN0cmFwXCJcblxuY29uc3QgUHJvZHVjdExpc3QgPSAoXG4gIHsgZGF0YTogeyBsb2FkaW5nLCBlcnJvciwgc3VwcGxlbWVudHMgfSwgc2VhcmNoIH0scmVxXG4gICkgPT4ge1xuICAgIGlmIChlcnJvcikgcmV0dXJuIFwiRXJyb3IgbG9hZGluZyBzdXBwbGVtZW50c1wiXG4gICAgaWYgKHN1cHBsZW1lbnRzICYmIHN1cHBsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy9zZWFyY2hRdWVyeVxuICAgICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBzdXBwbGVtZW50cy5maWx0ZXIocXVlcnkgPT5cbiAgICAgICAgcXVlcnkubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaClcbiAgICAgICk7XG4gICAgICBpZiAoc2VhcmNoUXVlcnkubGVuZ3RoICE9IDApIHtcbiAgICAgICAgbGV0IHByb2R1Y3RDYXJkcyA9IHNlYXJjaFF1ZXJ5Lm1hcChyZXM9PihcbiAgICAgICAgICA8Q29sIHNtPVwiM1wiPlxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkIGtleT17cmVzLl9pZH0gcmVzPXtyZXN9Lz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKSlcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCIgaWQ9XCJwcm9kdWN0TGlzdFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPk91ciBQcm9kdWN0czwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEwMCBjYXJkc1wiPlxuICAgICAgICAgICAge3Byb2R1Y3RDYXJkc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFpIEphbWp1cmVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDIwcHggMjBweCAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FyZHMge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8aDE+Tm8gcHJvZHVjdHMgZm91bmQ8L2gxPlxuICAgIH1cbiAgfVxuICByZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPlxufVxuXG5jb25zdCBxdWVyeSA9IGdxbGBcbiAge1xuICAgIHN1cHBsZW1lbnRzIHtcbiAgICAgIF9pZFxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGltYWdlIHtcbiAgICAgICAgdXJsXG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGdyYXBocWwocXVlcnksIHtcbiAgcHJvcHM6ICh7ZGF0YX0pPT4gKHtcbiAgICBkYXRhXG4gIH0pXG59KShQcm9kdWN0TGlzdCkiXX0= */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Index/ProductList.js */",
        __self: this
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "No products found");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
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
//# sourceMappingURL=index.js.4442ff8ca2c18bedffd5.hot-update.js.map