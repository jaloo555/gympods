webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Layout/Header.js":
/*!*************************************!*\
  !*** ./components/Layout/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/auth */ "./lib/auth.js");
var _jsxFileName = "/Users/jason/Desktop/Code/JS/gympods/frontend/components/Layout/Header.js";







var Header = function Header(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    id: "header",
    className: "jsx-765131068" + " " + "alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-765131068" + " " + "leftList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-765131068" + " " + "links one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-765131068",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "We Are")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-765131068" + " " + "links two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-765131068",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Pods"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-765131068" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Gympods"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-765131068" + " " + "rightList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-765131068" + " " + "links cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/checkout",
    className: "jsx-765131068" + " " + "snipcart-checkout snipcart-summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Cart(", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-765131068" + " " + "snipcart-total-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), ")")), props.isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-765131068" + " " + "links three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: _lib_auth__WEBPACK_IMPORTED_MODULE_5__["unsetToken"],
    className: "jsx-765131068" + " " + "logout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Logout"))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-765131068" + " " + "links three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-765131068",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Login"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "765131068",
    css: "#header.jsx-765131068{background-color:rgba(256,256,256,1.0);color:black;position:fixed;z-index:1;width:100vw;-webkit-transform:0.3s;-ms-transform:0.3s;transform:0.3s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}ul.jsx-765131068{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:10px;padding:0;}.logo.jsx-765131068{font-size:2.2em;justify-item:center;margin:0 auto;font-family:'Allerta Stencil',sans-serif;text-transform:uppercase;padding-top:5px;-webkit-text-decoration:none;text-decoration:none;}ul.jsx-765131068>.links.jsx-765131068{font-size:15px;padding-bottom:10px;padding-top:25px;text-transform:uppercase;font-weight:600;font-style:italic;}.leftList.jsx-765131068>.links.jsx-765131068{margin-left:25px;}.rightList.jsx-765131068>.links.jsx-765131068{margin-right:20px;}.links.jsx-765131068>a.jsx-765131068{position:relative;}.links.jsx-765131068>a.jsx-765131068:before{content:\"\";position:absolute;width:100%;height:2px;bottom:0;left:0;background-color:tomato;-webkit-transform:scaleX(0);-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s;visibility:hidden;}.cart.jsx-765131068>a.jsx-765131068:before{background-color:#00b2f6;}.links.jsx-765131068>a.jsx-765131068:hover.jsx-765131068:before{visibility:visible;-webkit-transform:scaleX(1);-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}a.jsx-765131068{-webkit-text-decoration:none;text-decoration:none;color:inherit;}.links.jsx-765131068>a.hover.jsx-765131068{color:inherit;}@media all and (max-width:900px){ul.jsx-765131068{display:none;}.logo.jsx-765131068{margin-left:auto;margin-right:auto;line-height:2.5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNvQixBQUd3RCxBQVN2QixBQU1BLEFBU0QsQUFRRSxBQUdDLEFBSUEsQUFHUCxBQWVjLEFBR04sQUFLRSxBQUlQLEFBTUcsQUFHSSxXQW5DSCxFQWlDbEIsQ0FOSixDQTdDd0IsQ0FmUCxBQU1PLENBaUJ4QixBQThDMEIsQ0EzQzFCLEFBSUEsQ0FxQmdDLE1BSGhDLElBZGUsTUFsQk0sQUFzREssQ0EvRFIsR0FoQkYsQ0E0Q0QsT0FpQlMsR0E1Q3NCLEFBZ0Q1QixDQWhFQyxBQTRDTixDQW5CZ0IsQ0FzRHpCLE9BbENPLElBb0JYLEVBaEVjLENBNkNjLFNBNUNaLENBd0JJLFdBdkJELEVBTUUsQ0FRUSxBQThCRyxFQXBCVixjQWpCUixJQWtCZCxLQVZvQixDQVBwQixFQXFDd0IsQUFheEIsYUExQ3lCLGFBZlIscUNBZ0JqQixTQTZCK0MsNEJBNUMvQyxlQTZDdUMsOEVBQ2pCLGtCQUV0QiIsImZpbGUiOiIvVXNlcnMvamFzb24vRGVza3RvcC9Db2RlL0pTL2d5bXBvZHMvZnJvbnRlbmQvY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgZmFTaG9wcGluZ0NhcnR9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcbmltcG9ydCB7IHVuc2V0VG9rZW4gfSBmcm9tIFwiLi4vLi4vbGliL2F1dGhcIjtcblxuXG5jb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IChcbiAgICA8bmF2IGlkPVwiaGVhZGVyXCIgY2xhc3NOYW1lPVwiYWx0XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGVmdExpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua3Mgb25lXCI+PGEgaHJlZj1cIi9cIj5XZSBBcmU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua3MgdHdvXCI+PGEgaHJlZj1cIi9cIj5Qb2RzPC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb1wiIGhyZWY9XCIvXCI+R3ltcG9kczwvYT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyaWdodExpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua3MgY2FydFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NoZWNrb3V0XCIgY2xhc3NOYW1lPVwic25pcGNhcnQtY2hlY2tvdXQgc25pcGNhcnQtc3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FydCg8c3BhbiBjbGFzc05hbWU9XCJzbmlwY2FydC10b3RhbC1pdGVtc1wiPjwvc3Bhbj4pXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5pc0F1dGhlbnRpY2F0ZWQgPyBcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmtzIHRocmVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT1cImxvZ291dFwiIG9uQ2xpY2s9e3Vuc2V0VG9rZW59PkxvZ291dDwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rcyB0aHJlZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPkxvZ2luPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICNoZWFkZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU2LDI1NiwyNTYsMS4wKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogMC4zcztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yZW07XG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBbGxlcnRhIFN0ZW5jaWwnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bCA+IC5saW5rcyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGVmdExpc3QgPiAubGlua3Mge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4OyAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHRMaXN0ID4gLmxpbmtzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFuaW1hdGluZyB1bmRlcmxpbmUgYm9yZGVyXG4gICAgICAgICAgICAubGlua3MgPiBhIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3MgPiBhOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FydCA+IGE6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMmY2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmtzID4gYTpob3ZlcjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rcyA+IGEuaG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0YWJsZXQvcGhvbmUgc3R5bGVzXG4gICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjkwMHB4KSAge1xuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi41ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9uYXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19 */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Layout/Header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.feb8301a71ad45c4fb53.hot-update.js.map