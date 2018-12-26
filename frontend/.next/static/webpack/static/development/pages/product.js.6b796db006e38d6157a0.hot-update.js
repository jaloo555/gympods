webpackHotUpdate("static/development/pages/product.js",{

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
var _jsxFileName = "/Users/jason/Desktop/Code/JS/gympods/frontend/components/Layout/Header.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(Header, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
        id: "topNav",
        className: "navbar fixed-top navbar-toggleable-sm navbar-inverse ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "navbar-toggler navbar-toggler-left",
        type: "button",
        "data-toggle": "collapse",
        "data-target": ".navbar-collapse.left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "\u2630"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "navbar-collapse left collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "nav navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Link")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Link")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Link")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "navbar-brand mx-auto",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "NavBar"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "navbar-toggler navbar-toggler-right",
        type: "button",
        "data-toggle": "collapse",
        "data-target": ".navbar-collapse.right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "\u2630"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "navbar-collapse right collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "nav navbar-nav  w-100 justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Help")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Contact")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var Headers = function Headers(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    id: "header",
    className: "jsx-3455695557" + " " + "alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3455695557" + " " + "leftList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3455695557" + " " + "links one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-3455695557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "We Are")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3455695557" + " " + "links two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-3455695557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Pods"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-3455695557" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Gympods"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3455695557" + " " + "rightList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3455695557" + " " + "links cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-3455695557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Cart(0)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3455695557" + " " + "links three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-3455695557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Login"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3455695557",
    css: "#header.jsx-3455695557{background-color:rgba(256,256,256,1.0);color:black;position:fixed;z-index:1;width:100vw;-webkit-transform:0.3s;-ms-transform:0.3s;transform:0.3s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}ul.jsx-3455695557{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:10px;padding:0;}.logo.jsx-3455695557{font-size:2.2em;justify-item:center;margin:0 auto;font-family:'Allerta Stencil',sans-serif;text-transform:uppercase;padding-top:5px;-webkit-text-decoration:none;text-decoration:none;}ul.jsx-3455695557>.links.jsx-3455695557{font-size:15px;padding-bottom:10px;padding-top:25px;text-transform:uppercase;font-weight:600;font-style:italic;}.leftList.jsx-3455695557>.links.jsx-3455695557{margin-left:25px;}.rightList.jsx-3455695557>.links.jsx-3455695557{margin-right:20px;}.links.jsx-3455695557>a.jsx-3455695557{position:relative;}.links.jsx-3455695557>a.jsx-3455695557:before{content:\"\";position:absolute;width:100%;height:2px;bottom:0;left:0;background-color:tomato;-webkit-transform:scaleX(0);-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s;visibility:hidden;}.cart.jsx-3455695557>a.jsx-3455695557:before{background-color:#00b2f6;}.links.jsx-3455695557>a.jsx-3455695557:hover.jsx-3455695557:before{visibility:visible;-webkit-transform:scaleX(1);-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}a.jsx-3455695557{-webkit-text-decoration:none;text-decoration:none;color:inherit;}@media all and (max-width:900px){ul.jsx-3455695557{display:none;}.logo.jsx-3455695557{margin-left:auto;margin-right:auto;line-height:2.5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVvQixBQUd3RCxBQVN2QixBQU1BLEFBU0QsQUFRRSxBQUdDLEFBSUEsQUFHUCxBQWVjLEFBR04sQUFLRSxBQU9KLEFBR0ksV0FoQ0gsRUE4QmxCLEVBaERvQixDQWZQLEFBTU8sQ0FpQnhCLEFBMkMwQixDQXhDMUIsQUFJQSxDQXFCZ0MsTUFIaEMsSUFkZSxNQWxCTSxBQW1ESyxDQTVEUixHQWhCRixDQTRDRCxPQWlCUyxHQTVDc0IsQUFnRDVCLENBaEVDLEFBNENOLENBbkJnQixDQW1EekIsT0EvQk8sSUFvQlgsRUFoRWMsQ0E2Q2MsU0E1Q1osQ0F3QkksV0F2QkQsRUFNRSxDQVFRLEFBOEJHLEVBcEJWLGNBakJSLElBa0JkLEtBVm9CLENBUHBCLEVBcUN3QixBQWF4QixhQTFDeUIsYUFmUixxQ0FnQmpCLFNBNkIrQyw0QkE1Qy9DLGVBNkN1Qyw4RUFDakIsa0JBRXRCIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBmYVNob3BwaW5nQ2FydH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG5hdiBpZD1cInRvcE5hdlwiIGNsYXNzTmFtZT1cIm5hdmJhciBmaXhlZC10b3AgbmF2YmFyLXRvZ2dsZWFibGUtc20gbmF2YmFyLWludmVyc2UgXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1sZWZ0XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIi5uYXZiYXItY29sbGFwc2UubGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICDimLBcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBsZWZ0IGNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkxpbms8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkxpbms8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkxpbms8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBteC1hdXRvXCIgaHJlZj1cIiNcIj5OYXZCYXI8L2E+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIubmF2YmFyLWNvbGxhcHNlLnJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIOKYsFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbGxhcHNlIHJpZ2h0IGNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiAgdy0xMDAganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkhlbHA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkNvbnRhY3Q8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IEhlYWRlcnMgPSAocHJvcHMpID0+IChcbiAgICA8bmF2IGlkPVwiaGVhZGVyXCIgY2xhc3NOYW1lPVwiYWx0XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGVmdExpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua3Mgb25lXCI+PGEgaHJlZj1cIi9cIj5XZSBBcmU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua3MgdHdvXCI+PGEgaHJlZj1cIi9cIj5Qb2RzPC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb1wiIGhyZWY9XCIvXCI+R3ltcG9kczwvYT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyaWdodExpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua3MgY2FydFwiPjxhIGhyZWY9XCIvXCI+Q2FydCgwKTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rcyB0aHJlZVwiPjxhIGhyZWY9XCIvXCI+TG9naW48L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgI2hlYWRlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTYsMjU2LDI1NiwxLjApO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAwLjNzO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjJlbTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW06IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FsbGVydGEgU3RlbmNpbCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsID4gLmxpbmtzIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sZWZ0TGlzdCA+IC5saW5rcyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodExpc3QgPiAubGlua3Mge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDsgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYW5pbWF0aW5nIHVuZGVybGluZSBib3JkZXJcbiAgICAgICAgICAgIC5saW5rcyA+IGEge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rcyA+IGE6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJ0ID4gYTpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGIyZjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3MgPiBhOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0YWJsZXQvcGhvbmUgc3R5bGVzXG4gICAgICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOjkwMHB4KXtcbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvbmF2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdfQ== */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Layout/Header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=product.js.6b796db006e38d6157a0.hot-update.js.map