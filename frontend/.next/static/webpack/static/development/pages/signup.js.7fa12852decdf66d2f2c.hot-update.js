webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth */ "./lib/auth.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
var _jsxFileName = "/Users/jason/Desktop/Code/JS/gympods/frontend/pages/signup.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Signup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup(props) {
    var _this;

    _classCallCheck(this, Signup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Signup).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      data: {
        email: "",
        username: "",
        password: ""
      },
      loading: false,
      error: ""
    });

    return _this;
  }

  _createClass(Signup, [{
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
      var _this2 = this;

      var _this$state$data = this.state.data,
          email = _this$state$data.email,
          username = _this$state$data.username,
          password = _this$state$data.password;
      this.setState({
        loading: true
      });
      Object(_lib_auth__WEBPACK_IMPORTED_MODULE_2__["strapiRegister"])(username, email, password).then(function () {
        return _this2.setState({
          loading: false
        });
      }).catch(function (error) {
        return _this2.setState({
          error: error
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
        fluid: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
        sm: "12",
        md: {
          size: 5,
          offset: 3
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4204967885" + " " + "paper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4204967885" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-4204967885",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Sign up")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-4204967885" + " " + "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4204967885" + " " + "notification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-4204967885",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, error)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Username:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        className: "username",
        value: this.state.data.username,
        onChange: this.onChange.bind(this, "username"),
        type: "text",
        name: "username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Email:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        className: "input",
        value: this.state.data.email,
        onChange: this.onChange.bind(this, "email"),
        type: "email",
        name: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        style: {
          marginBottom: 30
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Label"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Password:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
        className: "input",
        onChange: this.onChange.bind(this, "password"),
        type: "password",
        name: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4204967885" + " " + "bottomLink",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4204967885",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        className: "jsx-4204967885",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        className: "jsx-4204967885",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "Forgot Password?"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        style: {
          width: 120
        },
        color: "primary",
        onClick: this.onSubmit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-4204967885",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        className: "jsx-4204967885",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        className: "jsx-4204967885",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Sign up"))))))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4204967885",
        css: ".paper.jsx-4204967885{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);height:540px;border-radius:6px;margin-top:90px;}.notification.jsx-4204967885{color:#ab003c;}.header.jsx-4204967885{width:100%;height:120px;background-color:white;margin-bottom:30px;border-radius-top:6px;}.header.jsx-4204967885>h1.jsx-4204967885{font-family:'Bai Jamjuree',sans-serif;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;text-align:center;}.wrapper.jsx-4204967885{padding:10px 30px 20px 30px !important;}a.jsx-4204967885{color:blue !important;}img.jsx-4204967885{margin:15px 30px 10px 50px;}.input.jsx-4204967885{height:50px;fontSize:1.2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0h3QixBQUc0QyxBQVNiLEFBR0gsQUFPNEIsQUFNQSxBQUdqQixBQUdLLEFBR2YsV0FyQkMsQ0FzQkUsRUF6QmpCLFFBbUJBLEVBZnlCLEdBWGUsQUE2QnhDLEFBSUEsV0FoQjJCLENBTTNCLFFBWHFCLGdCQU1FLEdBTEMsc0JBQ3hCLHlCQUtvQixrQkFDcEIsUUFuQmUsYUFDSyxrQkFDRixnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL2phc29uL0Rlc2t0b3AvQ29kZS9KUy9neW1wb2RzL2Zyb250ZW5kL3BhZ2VzL3NpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7c3RyYXBpUmVnaXN0ZXJ9IGZyb20gJy4uL2xpYi9hdXRoJ1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCdcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG4gIEJ1dHRvbixcbiAgRm9ybSxcbiAgRm9ybUdyb3VwLFxuICBMYWJlbCxcbiAgSW5wdXQsXG59IGZyb20gXCJyZWFjdHN0cmFwXCJcblxuY2xhc3MgU2lnbnVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGF0YToge1xuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgfSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBlcnJvcjogXCJcIlxuICB9XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgb25DaGFuZ2UocHJvcGVydHlOYW1lLCBldmVudCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBkYXRhW3Byb3BlcnR5TmFtZV0gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSk7XG4gIH1cbiAgXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGE6IHsgZW1haWwsIHVzZXJuYW1lLCBwYXNzd29yZCB9XG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG5cbiAgICBzdHJhcGlSZWdpc3Rlcih1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogZXJyb3IgfSkpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7ZXJyb3J9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxDb2wgc209XCIxMlwiIG1kPXt7c2l6ZTogNSwgb2Zmc2V0OiAzfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXBlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlNpZ24gdXA8L2gxPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvblwiPjxoMT57ZXJyb3J9PC9oMT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD5Vc2VybmFtZTo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzLCBcInVzZXJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPkVtYWlsOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMsIFwiZW1haWxcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMzAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+UGFzc3dvcmQ6PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcywgXCJwYXNzd29yZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21MaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5Gb3Jnb3QgUGFzc3dvcmQ/PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IDEyMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxzbWFsbD5TaWduIHVwPC9zbWFsbD48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAucGFwZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgICAgICAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1NDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2FiMDAzYztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1cy10b3A6IDZweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuaGVhZGVyID4gaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFpIEphbWp1cmVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweCAyMHB4IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4IDMwcHggMTBweCA1MHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxLjJlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXBcblxuIl19 */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/pages/signup.js */",
        __self: this
      })));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Signup);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/signup")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=signup.js.7fa12852decdf66d2f2c.hot-update.js.map