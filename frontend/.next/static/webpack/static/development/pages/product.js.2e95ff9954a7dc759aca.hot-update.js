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
        class: "navbar fixed-top navbar-toggleable-sm navbar-inverse bg-inverse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        class: "navbar-toggler navbar-toggler-left",
        type: "button",
        "data-toggle": "collapse",
        "data-target": ".navbar-collapse.left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "\u2630"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "navbar-collapse left collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        class: "nav navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        class: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        class: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Link")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        class: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        class: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Link")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        class: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        class: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Link")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        class: "navbar-brand mx-auto",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "NavBar"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        class: "navbar-toggler navbar-toggler-right",
        type: "button",
        "data-toggle": "collapse",
        "data-target": ".navbar-collapse.right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "\u2630"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "navbar-collapse right collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        class: "nav navbar-nav  w-100 justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        class: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        class: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Help")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        class: "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        class: "nav-link",
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
    css: "#header.jsx-3455695557{background-color:rgba(256,256,256,1.0);color:black;position:fixed;z-index:1;width:100vw;-webkit-transform:0.3s;-ms-transform:0.3s;transform:0.3s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}ul.jsx-3455695557{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:10px;padding:0;}.logo.jsx-3455695557{font-size:2.2em;justify-item:center;margin:0 auto;font-family:'Allerta Stencil',sans-serif;text-transform:uppercase;padding-top:5px;-webkit-text-decoration:none;text-decoration:none;}ul.jsx-3455695557>.links.jsx-3455695557{font-size:15px;padding-bottom:10px;padding-top:25px;text-transform:uppercase;font-weight:600;font-style:italic;}.leftList.jsx-3455695557>.links.jsx-3455695557{margin-left:25px;}.rightList.jsx-3455695557>.links.jsx-3455695557{margin-right:20px;}.links.jsx-3455695557>a.jsx-3455695557{position:relative;}.links.jsx-3455695557>a.jsx-3455695557:before{content:\"\";position:absolute;width:100%;height:2px;bottom:0;left:0;background-color:tomato;-webkit-transform:scaleX(0);-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s;visibility:hidden;}.cart.jsx-3455695557>a.jsx-3455695557:before{background-color:#00b2f6;}.links.jsx-3455695557>a.jsx-3455695557:hover.jsx-3455695557:before{visibility:visible;-webkit-transform:scaleX(1);-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}a.jsx-3455695557{-webkit-text-decoration:none;text-decoration:none;color:inherit;}@media all and (max-width:900px){ul.jsx-3455695557{display:none;}.logo.jsx-3455695557{margin-left:auto;margin-right:auto;line-height:2.5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVvQixBQUd3RCxBQVN2QixBQU1BLEFBU0QsQUFRRSxBQUdDLEFBSUEsQUFHUCxBQWVjLEFBR04sQUFLRSxBQU9KLEFBR0ksV0FoQ0gsRUE4QmxCLEVBaERvQixDQWZQLEFBTU8sQ0FpQnhCLEFBMkMwQixDQXhDMUIsQUFJQSxDQXFCZ0MsTUFIaEMsSUFkZSxNQWxCTSxBQW1ESyxDQTVEUixHQWhCRixDQTRDRCxPQWlCUyxHQTVDc0IsQUFnRDVCLENBaEVDLEFBNENOLENBbkJnQixDQW1EekIsT0EvQk8sSUFvQlgsRUFoRWMsQ0E2Q2MsU0E1Q1osQ0F3QkksV0F2QkQsRUFNRSxDQVFRLEFBOEJHLEVBcEJWLGNBakJSLElBa0JkLEtBVm9CLENBUHBCLEVBcUN3QixBQWF4QixhQTFDeUIsYUFmUixxQ0FnQmpCLFNBNkIrQyw0QkE1Qy9DLGVBNkN1Qyw4RUFDakIsa0JBRXRCIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBmYVNob3BwaW5nQ2FydH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG5hdiBpZD1cInRvcE5hdlwiIGNsYXNzPVwibmF2YmFyIGZpeGVkLXRvcCBuYXZiYXItdG9nZ2xlYWJsZS1zbSBuYXZiYXItaW52ZXJzZSBiZy1pbnZlcnNlXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIG5hdmJhci10b2dnbGVyLWxlZnRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZS5sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIOKYsFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItY29sbGFwc2UgbGVmdCBjb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5MaW5rPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+TGluazwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkxpbms8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kIG14LWF1dG9cIiBocmVmPVwiI1wiPk5hdkJhcjwvYT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXItcmlnaHRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiLm5hdmJhci1jb2xsYXBzZS5yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICDimLBcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWNvbGxhcHNlIHJpZ2h0IGNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXZiYXItbmF2ICB3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkhlbHA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5Db250YWN0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBIZWFkZXJzID0gKHByb3BzKSA9PiAoXG4gICAgPG5hdiBpZD1cImhlYWRlclwiIGNsYXNzTmFtZT1cImFsdFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxlZnRMaXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmtzIG9uZVwiPjxhIGhyZWY9XCIvXCI+V2UgQXJlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmtzIHR3b1wiPjxhIGhyZWY9XCIvXCI+UG9kczwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ29cIiBocmVmPVwiL1wiPkd5bXBvZHM8L2E+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmlnaHRMaXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmtzIGNhcnRcIj48YSBocmVmPVwiL1wiPkNhcnQoMCk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua3MgdGhyZWVcIj48YSBocmVmPVwiL1wiPkxvZ2luPC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICNoZWFkZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU2LDI1NiwyNTYsMS4wKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogMC4zcztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yZW07XG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBbGxlcnRhIFN0ZW5jaWwnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bCA+IC5saW5rcyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGVmdExpc3QgPiAubGlua3Mge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4OyAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHRMaXN0ID4gLmxpbmtzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFuaW1hdGluZyB1bmRlcmxpbmUgYm9yZGVyXG4gICAgICAgICAgICAubGlua3MgPiBhIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3MgPiBhOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FydCA+IGE6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMmY2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmtzID4gYTpob3ZlcjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGFibGV0L3Bob25lIHN0eWxlc1xuICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo5MDBweCl7XG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L25hdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXX0= */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Layout/Header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=product.js.2e95ff9954a7dc759aca.hot-update.js.map