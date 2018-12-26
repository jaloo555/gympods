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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Products =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Products, _React$Component);

  function Products(props) {
    _classCallCheck(this, Products);

    return _possibleConstructorReturn(this, _getPrototypeOf(Products).call(this, props));
  }

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

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
        id: "productList",
        className: "jsx-2886678953" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2886678953" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Our Products"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2886678953" + " " + "h-100 cards",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, searchQuery.map(function (res) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
          style: {
            width: "100%",
            margin: "0 10px"
          },
          body: true,
          className: "text-center",
          key: res._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardImg"], {
          top: true,
          style: {
            height: 350
          },
          src: "http://localhost:1337".concat(res.image.url),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardTitle"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, res.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardText"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, res.description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-2886678953" + " " + "card-footer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          as: "/supplements/".concat(res._id),
          href: "/supplements?id=".concat(res._id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          className: "jsx-2886678953" + " " + "btn btn-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "View"))));
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2886678953",
        css: ".main.jsx-2886678953{font-family:'Bai Jamjuree',sans-serif;margin:40px 20px 20px 20px;}.title.jsx-2886678953{text-align:center;margin:20px;}.cards.jsx-2886678953{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFc0IsQUFHc0QsQUFJckIsQUFJTCxrQkFIRCxZQUNkLFFBTDZCLDJCQUM3QixTQU9BIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0luZGV4L1Byb2R1Y3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQge2dyYXBocWx9IGZyb20gXCJyZWFjdC1hcG9sbG9cIlxuaW1wb3J0IHtcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRJbWcsXG4gIENhcmRHcm91cCxcbiAgQ2FyZENvbHVtbnMsXG4gIENhcmRTdWJ0aXRsZSxcbiAgQ2FyZFRleHQsXG4gIENhcmRUaXRsZSxcbiAgQ29sLFxuICBSb3dcbn0gZnJvbSBcInJlYWN0c3RyYXBcIlxuXG5jbGFzcyBQcm9kdWN0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cbiAgXG59XG5cbmNvbnN0IFByb2R1Y3RMaXN0ID0gKFxuICB7IGRhdGE6IHsgbG9hZGluZywgZXJyb3IsIHN1cHBsZW1lbnRzIH0sIHNlYXJjaCB9LHJlcVxuICApID0+IHtcbiAgICBpZiAoZXJyb3IpIHJldHVybiBcIkVycm9yIGxvYWRpbmcgc3VwcGxlbWVudHNcIlxuICAgIGlmIChzdXBwbGVtZW50cyAmJiBzdXBwbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vc2VhcmNoUXVlcnlcbiAgICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gc3VwcGxlbWVudHMuZmlsdGVyKHF1ZXJ5ID0+XG4gICAgICAgIHF1ZXJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gpXG4gICAgICApO1xuICAgICAgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCAhPSAwKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiIGlkPVwicHJvZHVjdExpc3RcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5PdXIgUHJvZHVjdHM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xMDAgY2FyZHNcIj5cbiAgICAgICAgICAgIDxDYXJkR3JvdXA+XG4gICAgICAgICAgICAgIHtzZWFyY2hRdWVyeS5tYXAocmVzID0+IChcbiAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW46IFwiMCAxMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgIGJvZHlcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIGtleT17cmVzLl9pZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8Q2FyZEltZ1xuICAgICAgICAgICAgICAgICAgICB0b3A9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMzUwIH19XG4gICAgICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7cmVzLmltYWdlLnVybH1gfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxDYXJkQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT57cmVzLm5hbWV9PC9DYXJkVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkVGV4dD57cmVzLmRlc2NyaXB0aW9ufTwvQ2FyZFRleHQ+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3N1cHBsZW1lbnRzLyR7cmVzLl9pZH1gfVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Avc3VwcGxlbWVudHM/aWQ9JHtyZXMuX2lkfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5WaWV3PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9DYXJkR3JvdXA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JhaSBKYW1qdXJlZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIG1hcmdpbjogNDBweCAyMHB4IDIwcHggMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmRzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPGgxPk5vIHByb2R1Y3RzIGZvdW5kPC9oMT5cbiAgICB9XG4gIH1cbiAgcmV0dXJuIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbn1cblxuY29uc3QgcXVlcnkgPSBncWxgXG4gIHtcbiAgICBzdXBwbGVtZW50cyB7XG4gICAgICBfaWRcbiAgICAgIG5hbWVcbiAgICAgIGRlc2NyaXB0aW9uXG4gICAgICBpbWFnZSB7XG4gICAgICAgIHVybFxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBncmFwaHFsKHF1ZXJ5LCB7XG4gIHByb3BzOiAoe2RhdGF9KT0+ICh7XG4gICAgZGF0YVxuICB9KVxufSkoUHJvZHVjdExpc3QpIl19 */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Index/ProductList.js */",
        __self: this
      }));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "No products found");
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
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
//# sourceMappingURL=index.js.3154224b9b944ee6c933.hot-update.js.map