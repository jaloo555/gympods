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
        className: "jsx-3475096284" + " " + "navbar navbar-toggleable-sm navbar-expand-lg navbar-light bg-light sticky-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        class: "navbar-toggler navbar-toggler-right",
        type: "button",
        "data-toggle": "collapse",
        "data-target": ".navbar-collapse",
        "aria-controls": "navbar-collapse",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        className: "jsx-3475096284",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        class: "navbar-toggler-icon",
        className: "jsx-3475096284",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3475096284" + " " + "navbar-collapse collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3475096284" + " " + "nav navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3475096284" + " " + "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/",
        className: "jsx-3475096284" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Link1")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3475096284" + " " + "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/",
        className: "jsx-3475096284" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Link2")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        class: "navbar-brand mx-auto",
        href: "#",
        className: "jsx-3475096284",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Gympods"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3475096284" + " " + "navbar-collapse collapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "jsx-3475096284" + " " + "nav navbar-nav ml-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3475096284" + " " + "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/",
        className: "jsx-3475096284" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Link1")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "jsx-3475096284" + " " + "nav-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/",
        className: "jsx-3475096284" + " " + "nav-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Link2")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3475096284",
        css: "@media (min-width:768px){.navbar.jsx-3475096284 .navbar-nav.jsx-3475096284{display:inline-block;float:none;vertical-align:top;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEM0QixBQUlrRCxxQkFDVixXQUNRLG1CQUN2QiIsImZpbGUiOiIvVXNlcnMvamFzb24vRGVza3RvcC9Db2RlL0pTL2d5bXBvZHMvZnJvbnRlbmQvY29tcG9uZW50cy9MYXlvdXQvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgZmFTaG9wcGluZ0NhcnR9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc09wZW46IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxuYXYgaWQ9XCJ0b3BOYXZcIiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLXRvZ2dsZWFibGUtc20gbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgYmctbGlnaHQgc3RpY2t5LXRvcFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlciBuYXZiYXItdG9nZ2xlci1yaWdodFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIubmF2YmFyLWNvbGxhcHNlXCIgYXJpYS1jb250cm9scz1cIm5hdmJhci1jb2xsYXBzZVwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvXCI+TGluazE8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL1wiPkxpbmsyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZCBteC1hdXRvXCIgaHJlZj1cIiNcIj5HeW1wb2RzPC9hPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBtbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvXCI+TGluazE8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL1wiPkxpbmsyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmJhciAubmF2YmFyLW5hdiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3QgSGVhZGVycyA9IChwcm9wcykgPT4gKFxuICAgIDxuYXYgaWQ9XCJoZWFkZXJcIiBjbGFzc05hbWU9XCJhbHRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsZWZ0TGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rcyBvbmVcIj48YSBocmVmPVwiL1wiPldlIEFyZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rcyB0d29cIj48YSBocmVmPVwiL1wiPlBvZHM8L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsb2dvXCIgaHJlZj1cIi9cIj5HeW1wb2RzPC9hPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJpZ2h0TGlzdFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rcyBjYXJ0XCI+PGEgaHJlZj1cIi9cIj5DYXJ0KDApPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmtzIHRocmVlXCI+PGEgaHJlZj1cIi9cIj5Mb2dpbjwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIFxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAjaGVhZGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NiwyNTYsMjU2LDEuMCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IDAuM3M7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMmVtO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbTogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWxsZXJ0YSBTdGVuY2lsJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwgPiAubGlua3Mge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxlZnRMaXN0ID4gLmxpbmtzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDsgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0TGlzdCA+IC5saW5rcyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbmltYXRpbmcgdW5kZXJsaW5lIGJvcmRlclxuICAgICAgICAgICAgLmxpbmtzID4gYSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmtzID4gYTpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcnQgPiBhOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjJmNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rcyA+IGE6aG92ZXI6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRhYmxldC9waG9uZSBzdHlsZXNcbiAgICAgICAgICAgIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6OTAwcHgpe1xuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi41ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9uYXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl19 */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Layout/Header.js */",
        __self: this
      }));
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
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3455695557" + " " + "leftList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3455695557" + " " + "links one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-3455695557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "We Are")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3455695557" + " " + "links two",
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
  }, "Pods"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-3455695557" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Gympods"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3455695557" + " " + "rightList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3455695557" + " " + "links cart",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-3455695557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Cart(0)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3455695557" + " " + "links three",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/",
    className: "jsx-3455695557",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Login"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3455695557",
    css: "#header.jsx-3455695557{background-color:rgba(256,256,256,1.0);color:black;position:fixed;z-index:1;width:100vw;-webkit-transform:0.3s;-ms-transform:0.3s;transform:0.3s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}ul.jsx-3455695557{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:10px;padding:0;}.logo.jsx-3455695557{font-size:2.2em;justify-item:center;margin:0 auto;font-family:'Allerta Stencil',sans-serif;text-transform:uppercase;padding-top:5px;-webkit-text-decoration:none;text-decoration:none;}ul.jsx-3455695557>.links.jsx-3455695557{font-size:15px;padding-bottom:10px;padding-top:25px;text-transform:uppercase;font-weight:600;font-style:italic;}.leftList.jsx-3455695557>.links.jsx-3455695557{margin-left:25px;}.rightList.jsx-3455695557>.links.jsx-3455695557{margin-right:20px;}.links.jsx-3455695557>a.jsx-3455695557{position:relative;}.links.jsx-3455695557>a.jsx-3455695557:before{content:\"\";position:absolute;width:100%;height:2px;bottom:0;left:0;background-color:tomato;-webkit-transform:scaleX(0);-webkit-transform:scaleX(0);-ms-transform:scaleX(0);transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;-webkit-transition:all 0.3s ease-in-out 0s;transition:all 0.3s ease-in-out 0s;visibility:hidden;}.cart.jsx-3455695557>a.jsx-3455695557:before{background-color:#00b2f6;}.links.jsx-3455695557>a.jsx-3455695557:hover.jsx-3455695557:before{visibility:visible;-webkit-transform:scaleX(1);-webkit-transform:scaleX(1);-ms-transform:scaleX(1);transform:scaleX(1);}a.jsx-3455695557{-webkit-text-decoration:none;text-decoration:none;color:inherit;}@media all and (max-width:900px){ul.jsx-3455695557{display:none;}.logo.jsx-3455695557{margin-left:auto;margin-right:auto;line-height:2.5em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUVvQixBQUd3RCxBQVN2QixBQU1BLEFBU0QsQUFRRSxBQUdDLEFBSUEsQUFHUCxBQWVjLEFBR04sQUFLRSxBQU9KLEFBR0ksV0FoQ0gsRUE4QmxCLEVBaERvQixDQWZQLEFBTU8sQ0FpQnhCLEFBMkMwQixDQXhDMUIsQUFJQSxDQXFCZ0MsTUFIaEMsSUFkZSxNQWxCTSxBQW1ESyxDQTVEUixHQWhCRixDQTRDRCxPQWlCUyxHQTVDc0IsQUFnRDVCLENBaEVDLEFBNENOLENBbkJnQixDQW1EekIsT0EvQk8sSUFvQlgsRUFoRWMsQ0E2Q2MsU0E1Q1osQ0F3QkksV0F2QkQsRUFNRSxDQVFRLEFBOEJHLEVBcEJWLGNBakJSLElBa0JkLEtBVm9CLENBUHBCLEVBcUN3QixBQWF4QixhQTFDeUIsYUFmUixxQ0FnQmpCLFNBNkIrQyw0QkE1Qy9DLGVBNkN1Qyw4RUFDakIsa0JBRXRCIiwiZmlsZSI6Ii9Vc2Vycy9qYXNvbi9EZXNrdG9wL0NvZGUvSlMvZ3ltcG9kcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dC9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBmYVNob3BwaW5nQ2FydH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzT3BlbjogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG5hdiBpZD1cInRvcE5hdlwiIGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItdG9nZ2xlYWJsZS1zbSBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodCBzdGlja3ktdG9wXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyIG5hdmJhci10b2dnbGVyLXJpZ2h0XCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIi5uYXZiYXItY29sbGFwc2VcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyLWNvbGxhcHNlXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1jb2xsYXBzZSBjb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9cIj5MaW5rMTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvXCI+TGluazI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kIG14LWF1dG9cIiBocmVmPVwiI1wiPkd5bXBvZHM8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9cIj5MaW5rMTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvXCI+TGluazI8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFyIC5uYXZiYXItbmF2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBIZWFkZXJzID0gKHByb3BzKSA9PiAoXG4gICAgPG5hdiBpZD1cImhlYWRlclwiIGNsYXNzTmFtZT1cImFsdFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxlZnRMaXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmtzIG9uZVwiPjxhIGhyZWY9XCIvXCI+V2UgQXJlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmtzIHR3b1wiPjxhIGhyZWY9XCIvXCI+UG9kczwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxvZ29cIiBocmVmPVwiL1wiPkd5bXBvZHM8L2E+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmlnaHRMaXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmtzIGNhcnRcIj48YSBocmVmPVwiL1wiPkNhcnQoMCk8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua3MgdGhyZWVcIj48YSBocmVmPVwiL1wiPkxvZ2luPC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICNoZWFkZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU2LDI1NiwyNTYsMS4wKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogMC4zcztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4yZW07XG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBbGxlcnRhIFN0ZW5jaWwnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bCA+IC5saW5rcyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGVmdExpc3QgPiAubGlua3Mge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4OyAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlnaHRMaXN0ID4gLmxpbmtzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFuaW1hdGluZyB1bmRlcmxpbmUgYm9yZGVyXG4gICAgICAgICAgICAubGlua3MgPiBhIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlua3MgPiBhOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY2FydCA+IGE6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMmY2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpbmtzID4gYTpob3ZlcjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdGFibGV0L3Bob25lIHN0eWxlc1xuICAgICAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDo5MDBweCl7XG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L25hdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXX0= */\n/*@ sourceURL=/Users/jason/Desktop/Code/JS/gympods/frontend/components/Layout/Header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=product.js.e9a93ea65af241ffb5f8.hot-update.js.map