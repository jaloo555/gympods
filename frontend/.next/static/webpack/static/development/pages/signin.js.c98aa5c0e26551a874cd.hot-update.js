webpackHotUpdate("static/development/pages/signin.js",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hocs_defaultPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hocs/defaultPage */ "./hocs/defaultPage.js");
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/auth */ "./lib/auth.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/jason/Desktop/Code/JS/gympods/frontend/pages/signin.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Signin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Signin, _React$Component);

  function Signin(props) {
    var _this;

    _classCallCheck(this, Signin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Signin).call(this, props));
    _this.state = {
      data: {
        email: "",
        password: ""
      },
      loading: false,
      error: ""
    };
    return _this;
  }

  _createClass(Signin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isAuthenticated) {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/");
      }
    }
  }, {
    key: "onChange",
    value: function onChange(propertyName, event) {
      var data = this.state.data;
      data[propertyName] = event.target.value;
      this.setState({
        data: data
      });
    }
  }, {
    key: "onSubmit",
    value: function onSubmit() {
      var _this$state$data = this.state.data,
          email = _this$state$data.email,
          username = _this$state$data.username,
          password = _this$state$data.password;
      var context = this.props.context;
      this.setState({
        loading: true
      });
      Object(_lib_auth__WEBPACK_IMPORTED_MODULE_7__["strapiLogin"])(email, password).then(function () {
        return console.log(js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("user"));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        fluid: true,
        className: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        sm: "12",
        md: {
          size: 5,
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2985759939" + " " + "paper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2985759939" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2985759939",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Sign In")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-2985759939" + " " + "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2985759939" + " " + "notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, error), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Email:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        onChange: this.onChange.bind(this, "email"),
        type: "email",
        name: "email",
        style: {
          height: 50,
          fontSize: "1.2em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
        style: {
          marginBottom: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Password:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        onChange: this.onChange.bind(this, "password"),
        type: "password",
        name: "password",
        style: {
          height: 50,
          fontSize: "1.2em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2985759939" + " " + "bottomLink",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2985759939",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        className: "jsx-2985759939",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        className: "jsx-2985759939",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Forgot Password?"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        style: {
          width: 120
        },
        color: "primary",
        onClick: this.onSubmit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2985759939",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        className: "jsx-2985759939",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        className: "jsx-2985759939",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Sign up")))))))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2985759939",
        css: ".main.jsx-2985759939{padding-top:65px;}.paper.jsx-2985759939{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);height:440px;border-radius:6px;margin-top:90px;}.notification.jsx-2985759939{color:#ab003c;}.header.jsx-2985759939{width:100%;height:120px;background-color:white;margin-bottom:30px;border-radius-top:6px;-webkit-text-decoration:none;text-decoration:none;text-align:center;}.header.jsx-2985759939>h1.jsx-2985759939{font-family:'Bai Jamjuree',sans-serif;}.bottomLink.jsx-2985759939{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.wrapper.jsx-2985759939{padding:10px 30px 20px 30px !important;}a.jsx-2985759939{color:blue !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9wYWdlcy9zaWduaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhvQixBQUc4QixBQUdVLEFBU2IsQUFHSCxBQVM0QixBQUcxQixBQUkwQixBQUdqQixXQWxCVCxHQUhmLEdBWkEsS0FrQ0EsRUFsQnlCLEdBWGUsV0FtQnhDLENBT0EsUUFkcUIsbUJBQ0csUUFTUSxjQVJULGtEQUNILENBZEwsYUFDSyxJQWNwQixjQWJrQixnQkFDbEIsR0FtQkEiLCJmaWxlIjoiL1VzZXJzL2phc29uL0Rlc2t0b3AvQ29kZS9KUy9neW1wb2RzL2Zyb250ZW5kL3BhZ2VzL3NpZ25pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0J1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBSb3csXG4gIENvbCxcbiAgQnV0dG9uLFxuICBGb3JtLFxuICBGb3JtR3JvdXAsXG4gIExhYmVsLFxuICBJbnB1dCxcbn0gZnJvbSBcInJlYWN0c3RyYXBcIlxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcbmltcG9ydCBkZWZhdWx0UGFnZSBmcm9tICcuLi9ob2NzL2RlZmF1bHRQYWdlJ1xuaW1wb3J0IHtzdHJhcGlMb2dpbn0gZnJvbSAnLi4vbGliL2F1dGgnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNsYXNzIFNpZ25pbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgICB9LFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBlcnJvcjogXCJcIlxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmlzQXV0aGVudGljYXRlZCkge1xuICAgICAgUm91dGVyLnB1c2goXCIvXCIpXG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UocHJvcGVydHlOYW1lLCBldmVudCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZVxuICAgIGRhdGFbcHJvcGVydHlOYW1lXSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhIH0pXG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhOiB7IGVtYWlsLCB1c2VybmFtZSwgcGFzc3dvcmQgfVxuICAgIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBjb250ZXh0IH0gPSB0aGlzLnByb3BzXG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxuXG4gICAgc3RyYXBpTG9naW4oZW1haWwsIHBhc3N3b3JkKS50aGVuKCgpID0+IGNvbnNvbGUubG9nKENvb2tpZXMuZ2V0KFwidXNlclwiKSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtlcnJvcn0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxDb250YWluZXIgZmx1aWQgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIHNtPVwiMTJcIiBtZD17e3NpemU6IDUsIG9mZnNldDogM319PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxoMT5TaWduIEluPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvblwiPntlcnJvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD5FbWFpbDo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzLCBcImVtYWlsXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogXCIxLjJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAzMCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+UGFzc3dvcmQ6PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcywgXCJwYXNzd29yZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA1MCwgZm9udFNpemU6IFwiMS4yZW1cIiB9fVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tTGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+Rm9yZ290IFBhc3N3b3JkPzwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogMTIwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TdWJtaXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj48c21hbGw+U2lnbiB1cDwvc21hbGw+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhcGVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5vdGlmaWNhdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogI2FiMDAzYztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzLXRvcDogNnB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyID4gaDF7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0JhaSBKYW1qdXJlZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib3R0b21MaW5rIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAyMHB4IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25pbiJdfQ== */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/pages/signin.js */",
        __self: this
      }));
    }
  }]);

  return Signin;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Signin);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/signin")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=signin.js.c98aa5c0e26551a874cd.hot-update.js.map