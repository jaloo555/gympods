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
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
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
      lineNumber: 9
    },
    __self: this
  }, function (_ref2) {
    var loading = _ref2.loading,
        error = _ref2.error,
        data = _ref2.data;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "Loading...");
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Error loading supplements.");
    var supplement = data.supplement;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      fluid: true,
      className: "mainContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "jsx-3901184182",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
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
      css: ".mainContainer.jsx-3901184182{padding-top:65px;background-color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL1Byb2R1Y3QvTGlzdGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQnlCLEFBR2tDLGlCQUNLLHNCQUN4QiIsImZpbGUiOiIvVXNlcnMvamFzb24vRGVza3RvcC9Db2RlL0pTL2d5bXBvZHMvZnJvbnRlbmQvY29tcG9uZW50cy9Qcm9kdWN0L0xpc3RpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHtncmFwaHFsLCBRdWVyeX0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHtjb21wb3NlfSBmcm9tICdyZWNvbXBvc2UnXG5pbXBvcnQge3dpdGhSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJ3JlYWN0c3RyYXAnXG5cbmNvbnN0IExpc3RpbmcgPSAoe2lkLCBkYXRhfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeSBxdWVyeT17R0VUX0xJU1RJTkd9IHZhcmlhYmxlcz17e2lkfX0+XG4gICAgICB7KHtsb2FkaW5nLCBlcnJvciwgZGF0YX0pID0+IHtcbiAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8aDE+TG9hZGluZy4uLjwvaDE+XG4gICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxoMT5FcnJvciBsb2FkaW5nIHN1cHBsZW1lbnRzLjwvaDE+XG4gICAgICAgIGNvbnN0IHN1cHBsZW1lbnQgPSBkYXRhLnN1cHBsZW1lbnRcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cIm1haW5Db250YWluZXJcIj5cbiAgICAgICAgICAgICA8aDE+e3N1cHBsZW1lbnQubmFtZX08L2gxPlxuICAgICAgICAgICAgIHtzdXBwbGVtZW50LnNpemVzLm1hcChyZXM9PihcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e3N1cHBsZW1lbnQuaWR9PlxuICAgICAgICAgICAgICAgIDxoMT57cmVzLnNlcnZpbmdzfToge3Jlcy5wcmljZX08L2gxPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPHN0eWxlIGpzeCA+e2BcbiAgICAgICAgICAgICAgLm1haW5Db250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2NXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgKVxuICAgICAgfX1cbiAgICA8L1F1ZXJ5PlxuICApXG59XG5cbi8vIGNsYXNzIExpc3RpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuLy8gICAgIHN1cGVyKHByb3BzKVxuLy8gICB9XG4vLyAgIHJlbmRlcigpIHtcbi8vICAgICBjb25zb2xlLmxvZygnQXR0ZW1wdGluZyB0byBsb2FkJylcbi8vICAgICBjb25zdCB7XG4vLyAgICAgICBkYXRhOiB7IGxvYWRpbmcsIGVycm9yLCBzdXBwbGVtZW50IH0sXG4vLyAgICAgICByb3V0ZXIsXG4vLyAgICAgICBjb250ZXh0LFxuLy8gICAgICAgaXNBdXRoZW50aWNhdGVkXG4vLyAgICAgfSA9IHRoaXMucHJvcHNcbi8vICAgICBpZiAoZXJyb3IpIHJldHVybiBcIkVycm9yIGxvYWRpbmcgcHJvZHVjdHNcIlxuLy8gICAgIGlmIChzdXBwbGVtZW50KSB7XG4vLyAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4vLyAgICAgICAgICAgICA8aDE+e3N1cHBsZW1lbnQubmFtZX08L2gxPlxuLy8gICAgICAgICAgICAge3N1cHBsZW1lbnQuc2l6ZXMubWFwKHJlcz0+KFxuLy8gICAgICAgICAgICAgICA8aDE+e3Jlcy5zZXJ2aW5nc306IHtyZXMucHJpY2V9PC9oMT5cbi8vICAgICAgICAgICAgICkpfVxuLy8gICAgICAgICAgIDwvQ29udGFpbmVyPlxuLy8gICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4vLyAgICAgICAgICAgICBodG1sLGJvZHkge1xuLy8gICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2NXB4O1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIGB9XG4vLyAgICAgICAgICAgPC9zdHlsZT5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICApXG4vLyAgICAgfSByZXR1cm4gPGgxPkxvYWRpbmcgLi4uPC9oMT5cbi8vICAgfVxuLy8gfVxuXG5jb25zdCBHRVRfTElTVElORyA9IGdxbGBcbiAgcXVlcnkgc3VwcGxlbWVudCgkaWQ6IElEISl7XG4gICAgc3VwcGxlbWVudChpZDogJGlkKXtcbiAgICAgIG5hbWVcbiAgICAgIF9pZFxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGltYWdle1xuICAgICAgICB1cmxcbiAgICAgIH1cbiAgICAgIHNpemVzIHtcbiAgICAgICAgcHJpY2VcbiAgICAgICAgc2VydmluZ3NcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChHRVRfTElTVElORywge1xuICBvcHRpb25zOiAoe2lkfSkgPT4gKHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGlkOiBpZFxuICAgIH1cbiAgfSksXG4gIHByb3BzOiAoe2RhdGF9KSA9PiAoe1xuICAgIGRhdGFcbiAgfSlcbn0pKExpc3RpbmcpIl19 */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Product/Listing.js */",
      __self: this
    }));
  });
}; // class Listing extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     console.log('Attempting to load')
//     const {
//       data: { loading, error, supplement },
//       router,
//       context,
//       isAuthenticated
//     } = this.props
//     if (error) return "Error loading products"
//     if (supplement) {
//       return (
//         <div>
//           <Container fluid>
//             <h1>{supplement.name}</h1>
//             {supplement.sizes.map(res=>(
//               <h1>{res.servings}: {res.price}</h1>
//             ))}
//           </Container>
//           <style jsx global>{`
//             html,body {
//               margin-top: 65px;
//             }
//           `}
//           </style>
//         </div>
//       )
//     } return <h1>Loading ...</h1>
//   }
// }


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
//# sourceMappingURL=supplements.js.8eeb37a8bd874e284443.hot-update.js.map