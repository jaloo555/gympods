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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
        color: "light",
        light: true,
        expand: "md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
        className: "ml-auto",
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "We are")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Pods"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavbarBrand"], {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Gympods")));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var Headers = function Headers(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    id: "header",
    className: "jsx-1246890226" + " " + "alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1246890226" + " " + "leftList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1246890226" + " " + "links one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-1246890226",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "We Are")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1246890226" + " " + "links two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-1246890226",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Pods"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-1246890226" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Gympods"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1246890226" + " " + "rightList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1246890226" + " " + "links cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-1246890226",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Cart(0)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1246890226" + " " + "links three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-1246890226",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Login"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1246890226",
    css: "#header.jsx-1246890226{background-color:rgba(256,256,256,1.0);color:black;position:fixed;z-index:1;width:100vw;-webkit-transform:0.3s;-ms-transform:0.3s;transform:0.3s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}ul.jsx-1246890226{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:10px;padding:0;}.logo.jsx-1246890226{font-size:2.2em;justify-item:center;margin:0 auto;font-family:'Allerta Stencil',sans-serif;text-transform:uppercase;padding-top:5px;-webkit-text-decoration:none;text-decoration:none;}ul.jsx-1246890226>.links.jsx-1246890226{font-size:15px;padding-bottom:10px;padding-top:25px;text-transform:uppercase;font-weight:600;font-style:italic;}.leftList.jsx-1246890226>.links.jsx-1246890226{margin-left:25px;}.rightList.jsx-1246890226>.links.jsx-1246890226{margin-right:20px;}.links.jsx-1246890226>a.jsx-1246890226{position:relative;}.links.jsx-1246890226>a.jsx-1246890226:before{content:\"\";position:absolute;width:100%;height:2px;bottom:0;left:0;background-color:tomato;-webkit-transform:scaleX(0);-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s;visibility:hidden;}.cart.jsx-1246890226>a.jsx-1246890226:before{background-color:#fff3cd;}.links.jsx-1246890226>a.jsx-1246890226:hover.jsx-1246890226:before{visibility:visible;-webkit-transform:scaleX(1);-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}a.jsx-1246890226{-webkit-text-decoration:none;text-decoration:none;color:inherit;}@media all and (max-width:900px){ul.jsx-1246890226{display:none;}.logo.jsx-1246890226{margin-left:auto;margin-right:auto;line-height:2.5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRvQixBQUd3RCxBQVN2QixBQU1BLEFBU0QsQUFRRSxBQUdDLEFBSUEsQUFHUCxBQWVjLEFBR04sQUFRRSxBQU9KLEFBR0ksV0FuQ0gsRUFpQ2xCLEVBbkRvQixDQWZQLEFBTU8sQ0FpQnhCLEFBOEMwQixDQTNDMUIsQUFJQSxDQXFCZ0MsTUFIaEMsSUFkZSxNQWxCTSxBQXNESyxDQS9EUixHQWhCRixDQTRDRCxPQWlCUyxHQTVDc0IsQUFtRDVCLENBbkVDLEFBNENOLENBbkJnQixDQXNEekIsT0FsQ08sSUF1QlgsRUFuRWMsQ0E2Q2MsU0E1Q1osQ0F3QkksV0F2QkQsRUFNRSxDQVFRLEFBOEJHLEVBcEJWLGNBakJSLElBa0JkLEtBVm9CLENBUHBCLEVBcUN3QixBQWF4QixhQTFDeUIsYUFmUixxQ0FnQmpCLFNBNkIrQyw0QkE1Qy9DLGVBNkN1Qyw4RUFDakIsa0JBRXRCIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge1xuICAgIENvbGxhcHNlLFxuICAgIE5hdmJhcixcbiAgICBOYXZiYXJUb2dnbGVyLFxuICAgIE5hdmJhckJyYW5kLFxuICAgIE5hdixcbiAgICBOYXZJdGVtLFxuICAgIE5hdkxpbmssXG4gICAgVW5jb250cm9sbGVkRHJvcGRvd24sXG4gICAgRHJvcGRvd25Ub2dnbGUsXG4gICAgRHJvcGRvd25NZW51LFxuICAgIERyb3Bkb3duSXRlbSBcbiAgICB9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBmYVNob3BwaW5nQ2FydH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TmF2YmFyIGNvbG9yPVwibGlnaHRcIiBsaWdodCBleHBhbmQ9XCJtZFwiPlxuICAgICAgICAgICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1sLWF1dG9cIiBuYXZiYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL1wiPldlIGFyZTwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvXCI+UG9kczwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXJCcmFuZCBocmVmPVwiL1wiPkd5bXBvZHM8L05hdmJhckJyYW5kPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IEhlYWRlcnMgPSAocHJvcHMpID0+IChcbiAgICA8bmF2IGlkPVwiaGVhZGVyXCIgY2xhc3NOYW1lPVwiYWx0XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGVmdExpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua3Mgb25lXCI+PGEgaHJlZj1cIi9cIj5XZSBBcmU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua3MgdHdvXCI+PGEgaHJlZj1cIi9cIj5Qb2RzPC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb1wiIGhyZWY9XCIvXCI+R3ltcG9kczwvYT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyaWdodExpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua3MgY2FydFwiPjxhIGhyZWY9XCIvXCI+Q2FydCgwKTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rcyB0aHJlZVwiPjxhIGhyZWY9XCIvXCI+TG9naW48L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICBcbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgI2hlYWRlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTYsMjU2LDI1NiwxLjApO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAwLjNzO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjJlbTtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW06IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FsbGVydGEgU3RlbmNpbCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsID4gLmxpbmtzIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sZWZ0TGlzdCA+IC5saW5rcyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWdodExpc3QgPiAubGlua3Mge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDsgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYW5pbWF0aW5nIHVuZGVybGluZSBib3JkZXJcbiAgICAgICAgICAgIC5saW5rcyA+IGEge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rcyA+IGE6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG87XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0IDBzO1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJ0ID4gYTpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3MgPiBhOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmtzID4gYTpob3ZlciB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGFibGV0L3Bob25lIHN0eWxlc1xuICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo5MDBweCl7XG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L25hdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXX0= */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Layout/Header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=product.js.7094990f08f72b5eb370.hot-update.js.map