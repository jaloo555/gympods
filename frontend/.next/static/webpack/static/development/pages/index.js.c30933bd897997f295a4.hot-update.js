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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2717970912",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2717970912" + " " + "h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, searchQuery.map(function (res) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
          style: {
            width: "30%",
            margin: "0 10px"
          },
          body: true,
          className: "text-center",
          key: res._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardImg"], {
          top: true,
          style: {
            height: 400
          },
          src: "http://localhost:1337".concat(res.image.url),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, res.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, res.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-2717970912" + " " + "card-footer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          as: "/supplements/".concat(res._id),
          href: "/supplements?id=".concat(res._id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "jsx-2717970912" + " " + "btn btn-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, "View"))));
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2717970912",
        css: ".card-columns.jsx-2717970912{-webkit-column-count:3;column-count:3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEc0IsQUFJOEIsc0NBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQge2dyYXBocWx9IGZyb20gXCJyZWFjdC1hcG9sbG9cIlxuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRHcm91cCxcbiAgQ2FyZENvbHVtbnMsXG4gIENhcmRTdWJ0aXRsZSxcbiAgQ2FyZFRleHQsXG4gIENhcmRUaXRsZSxcbiAgQ29sLFxuICBSb3dcbn0gZnJvbSBcInJlYWN0c3RyYXBcIlxuXG5jb25zdCBQcm9kdWN0TGlzdCA9IChcbiAgeyBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCBzdXBwbGVtZW50cyB9LCBzZWFyY2ggfSxyZXFcbikgPT4ge1xuICAgIGlmIChlcnJvcikgcmV0dXJuIFwiRXJyb3IgbG9hZGluZyBzdXBwbGVtZW50c1wiXG4gICAgaWYgKHN1cHBsZW1lbnRzICYmIHN1cHBsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy9zZWFyY2hRdWVyeVxuICAgICAgY29uc3Qgc2VhcmNoUXVlcnkgPSBzdXBwbGVtZW50cy5maWx0ZXIocXVlcnkgPT5cbiAgICAgICAgcXVlcnkubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaClcbiAgICAgICk7XG4gICAgICBpZiAoc2VhcmNoUXVlcnkubGVuZ3RoICE9IDApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTAwXCI+XG4gICAgICAgICAgICA8Q2FyZEdyb3VwPlxuICAgICAgICAgICAgICB7c2VhcmNoUXVlcnkubWFwKHJlcyA9PiAoXG4gICAgICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjMwJVwiLCBtYXJnaW46IFwiMCAxMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgIGJvZHlcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIGtleT17cmVzLl9pZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgICAgICAgICB0b3A9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNDAwIH19XG4gICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cmVzLmltYWdlLnVybH1gfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT57cmVzLm5hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3N1cHBsZW1lbnRzLyR7cmVzLl9pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Avc3VwcGxlbWVudHM/aWQ9JHtyZXMuX2lkfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5WaWV3PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9DYXJkR3JvdXA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAgLmNhcmQtY29sdW1ucyB7XG4gICAgICAgICAgICAgIGNvbHVtbi1jb3VudDogMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPGgxPk5vIHByb2R1Y3RzIGZvdW5kPC9oMT5cbiAgICB9XG4gIH1cbiAgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbn1cblxuY29uc3QgcXVlcnkgPSBncWxgXG4gIHtcbiAgICBzdXBwbGVtZW50cyB7XG4gICAgICBfaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBpbWFnZSB7XG4gICAgICAgIHVybFxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKHF1ZXJ5LCB7XG4gIHByb3BzOiAoe2RhdGF9KT0+ICh7XG4gICAgZGF0YVxuICB9KVxufSkoUHJvZHVjdExpc3QpIl19 */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Index/ProductList.js */",
        __self: this
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "No products found");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
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
//# sourceMappingURL=index.js.c30933bd897997f295a4.hot-update.js.map