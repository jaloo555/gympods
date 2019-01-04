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
        className: "jsx-2042440994" + " " + "paper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2042440994" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-2042440994",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Sign In")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "jsx-2042440994" + " " + "wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2042440994" + " " + "notification",
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
        className: "jsx-2042440994" + " " + "bottomLink",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2042440994",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        className: "jsx-2042440994",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        className: "jsx-2042440994",
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
        className: "jsx-2042440994",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "",
        className: "jsx-2042440994",
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
        className: "jsx-2042440994",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Sign up")))))))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2042440994",
        css: ".main.jsx-2042440994{padding-top:65px;}.paper.jsx-2042440994{border:1px solid lightgray;box-shadow:0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);height:440px;border-radius:6px;margin-top:90px;}.notification.jsx-2042440994{color:#ab003c;}.header.jsx-2042440994{width:100%;height:120px;background-color:white;margin-bottom:30px;border-radius-top:6px;-webkit-text-decoration:none;text-decoration:none;text-align:center;}.header.jsx-2042440994>h1.jsx-2042440994{font-family:'Bai Jamjuree',sans-serif;}.wrapper.jsx-2042440994{padding:10px 30px 20px 30px !important;}a.jsx-2042440994{color:blue !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9wYWdlcy9zaWduaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUhvQixBQUc4QixBQUdVLEFBU2IsQUFHSCxBQVM0QixBQUlBLEFBR2pCLFdBZlQsR0FIZixHQVpBLEtBK0JBLEVBZnlCLEdBWGUsV0FtQnhDLENBSUEsUUFYcUIsbUJBQ0csc0JBQ0Qsa0RBQ0gsQ0FkTCxhQUNLLElBY3BCLGNBYmtCLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvamFzb24vRGVza3RvcC9Db2RlL0pTL2d5bXBvZHMvZnJvbnRlbmQvcGFnZXMvc2lnbmluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXQnXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIFJvdyxcbiAgQ29sLFxuICBCdXR0b24sXG4gIEZvcm0sXG4gIEZvcm1Hcm91cCxcbiAgTGFiZWwsXG4gIElucHV0LFxufSBmcm9tIFwicmVhY3RzdHJhcFwiXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IGRlZmF1bHRQYWdlIGZyb20gJy4uL2hvY3MvZGVmYXVsdFBhZ2UnXG5pbXBvcnQge3N0cmFwaUxvZ2lufSBmcm9tICcuLi9saWIvYXV0aCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY2xhc3MgU2lnbmluIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCJcbiAgICAgIH0sXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGVycm9yOiBcIlwiXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNBdXRoZW50aWNhdGVkKSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9cIilcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShwcm9wZXJ0eU5hbWUsIGV2ZW50KSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlXG4gICAgZGF0YVtwcm9wZXJ0eU5hbWVdID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSlcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGE6IHsgZW1haWwsIHVzZXJuYW1lLCBwYXNzd29yZCB9XG4gICAgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGNvbnRleHQgfSA9IHRoaXMucHJvcHNcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pXG5cbiAgICBzdHJhcGlMb2dpbihlbWFpbCwgcGFzc3dvcmQpLnRoZW4oKCkgPT4gY29uc29sZS5sb2coQ29va2llcy5nZXQoXCJ1c2VyXCIpKSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2Vycm9yfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2wgc209XCIxMlwiIG1kPXt7c2l6ZTogNSwgb2Zmc2V0OiAzfX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgPGgxPlNpZ24gSW48L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uXCI+e2Vycm9yfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgPExhYmVsPkVtYWlsOjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMsIFwiZW1haWxcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogNTAsIGZvbnRTaXplOiBcIjEuMmVtXCIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDMwIH19PlxuICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD5QYXNzd29yZDo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2UuYmluZCh0aGlzLCBcInBhc3N3b3JkXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDUwLCBmb250U2l6ZTogXCIxLjJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21MaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5Gb3Jnb3QgUGFzc3dvcmQ/PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAxMjAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxzbWFsbD5TaWduIHVwPC9zbWFsbD48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA2NXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGFwZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICAgIGhlaWdodDogNDQwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA5MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubm90aWZpY2F0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYWIwMDNjO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMtdG9wOiA2cHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oZWFkZXIgPiBoMXtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQmFpIEphbWp1cmVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4IDIwcHggMzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbmluIl19 */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/pages/signin.js */",
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
//# sourceMappingURL=signin.js.a775c61d9a7545798b45.hot-update.js.map