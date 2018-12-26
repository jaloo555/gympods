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
        class: "navbar navbar-default",
        role: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "navbar-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "button",
        class: "navbar-toggle",
        "data-toggle": "collapse",
        "data-target": "#navbar-collapse-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        class: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Toggle navigation"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        class: "icon-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        class: "icon-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        class: "icon-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        class: "navbar-brand",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Brand"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        class: "collapse navbar-collapse",
        id: "navbar-collapse-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        class: "nav navbar-nav navbar-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Menu")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Menu"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        class: "nav navbar-nav navbar-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Link")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Link")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Link")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        class: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        class: "dropdown-toggle",
        "data-toggle": "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Dropdown ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        class: "caret",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        class: "dropdown-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Action")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Another action")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Something else here")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        class: "divider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Separated link")))))));
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
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3455695557" + " " + "leftList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3455695557" + " " + "links one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-3455695557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "We Are")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3455695557" + " " + "links two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-3455695557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Pods"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-3455695557" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Gympods"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3455695557" + " " + "rightList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3455695557" + " " + "links cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-3455695557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Cart(0)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3455695557" + " " + "links three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-3455695557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Login"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3455695557",
    css: "#header.jsx-3455695557{background-color:rgba(256,256,256,1.0);color:black;position:fixed;z-index:1;width:100vw;-webkit-transform:0.3s;-ms-transform:0.3s;transform:0.3s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}ul.jsx-3455695557{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:10px;padding:0;}.logo.jsx-3455695557{font-size:2.2em;justify-item:center;margin:0 auto;font-family:'Allerta Stencil',sans-serif;text-transform:uppercase;padding-top:5px;-webkit-text-decoration:none;text-decoration:none;}ul.jsx-3455695557>.links.jsx-3455695557{font-size:15px;padding-bottom:10px;padding-top:25px;text-transform:uppercase;font-weight:600;font-style:italic;}.leftList.jsx-3455695557>.links.jsx-3455695557{margin-left:25px;}.rightList.jsx-3455695557>.links.jsx-3455695557{margin-right:20px;}.links.jsx-3455695557>a.jsx-3455695557{position:relative;}.links.jsx-3455695557>a.jsx-3455695557:before{content:\"\";position:absolute;width:100%;height:2px;bottom:0;left:0;background-color:tomato;-webkit-transform:scaleX(0);-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s;visibility:hidden;}.cart.jsx-3455695557>a.jsx-3455695557:before{background-color:#00b2f6;}.links.jsx-3455695557>a.jsx-3455695557:hover.jsx-3455695557:before{visibility:visible;-webkit-transform:scaleX(1);-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}a.jsx-3455695557{-webkit-text-decoration:none;text-decoration:none;color:inherit;}@media all and (max-width:900px){ul.jsx-3455695557{display:none;}.logo.jsx-3455695557{margin-left:auto;margin-right:auto;line-height:2.5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUVvQixBQUd3RCxBQVN2QixBQU1BLEFBU0QsQUFRRSxBQUdDLEFBSUEsQUFHUCxBQWVjLEFBR04sQUFLRSxBQU9KLEFBR0ksV0FoQ0gsRUE4QmxCLEVBaERvQixDQWZQLEFBTU8sQ0FpQnhCLEFBMkMwQixDQXhDMUIsQUFJQSxDQXFCZ0MsTUFIaEMsSUFkZSxNQWxCTSxBQW1ESyxDQTVEUixHQWhCRixDQTRDRCxPQWlCUyxHQTVDc0IsQUFnRDVCLENBaEVDLEFBNENOLENBbkJnQixDQW1EekIsT0EvQk8sSUFvQlgsRUFoRWMsQ0E2Q2MsU0E1Q1osQ0F3QkksV0F2QkQsRUFNRSxDQVFRLEFBOEJHLEVBcEJWLGNBakJSLElBa0JkLEtBVm9CLENBUHBCLEVBcUN3QixBQWF4QixhQTFDeUIsYUFmUixxQ0FnQmpCLFNBNkIrQyw0QkE1Qy9DLGVBNkN1Qyw4RUFDakIsa0JBRXRCIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBmYVNob3BwaW5nQ2FydH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhci1jb2xsYXBzZS0xXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+QnJhbmQ8L2E+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXItY29sbGFwc2UtMVwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk1lbnU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5NZW51PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TGluazwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkxpbms8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5MaW5rPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPkRyb3Bkb3duIDxiIGNsYXNzPVwiY2FyZXRcIj48L2I+PC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QWN0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFub3RoZXIgYWN0aW9uPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNvbWV0aGluZyBlbHNlIGhlcmU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNlcGFyYXRlZCBsaW5rPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgSGVhZGVycyA9IChwcm9wcykgPT4gKFxuICAgIDxuYXYgaWQ9XCJoZWFkZXJcIiBjbGFzc05hbWU9XCJhbHRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsZWZ0TGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rcyBvbmVcIj48YSBocmVmPVwiL1wiPldlIEFyZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rcyB0d29cIj48YSBocmVmPVwiL1wiPlBvZHM8L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvXCIgaHJlZj1cIi9cIj5HeW1wb2RzPC9hPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJpZ2h0TGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rcyBjYXJ0XCI+PGEgaHJlZj1cIi9cIj5DYXJ0KDApPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmtzIHRocmVlXCI+PGEgaHJlZj1cIi9cIj5Mb2dpbjwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIFxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAjaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NiwyNTYsMjU2LDEuMCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IDAuM3M7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMmVtO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbTogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWxsZXJ0YSBTdGVuY2lsJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwgPiAubGlua3Mge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxlZnRMaXN0ID4gLmxpbmtzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDsgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0TGlzdCA+IC5saW5rcyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbmltYXRpbmcgdW5kZXJsaW5lIGJvcmRlclxuICAgICAgICAgICAgLmxpbmtzID4gYSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmtzID4gYTpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcnQgPiBhOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjJmNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rcyA+IGE6aG92ZXI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRhYmxldC9waG9uZSBzdHlsZXNcbiAgICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6OTAwcHgpe1xuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi41ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9uYXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19 */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Layout/Header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=product.js.0ac185f7135a8c745378.hot-update.js.map