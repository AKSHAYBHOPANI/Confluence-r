"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/serp.js":
/*!***********************!*\
  !*** ./pages/serp.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Serp; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/akshaybhopani/GitHub/Confluence-r/pages/serp.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Serp() {\n  _s();\n\n  var axios = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\").default;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      url = _useState[0],\n      seturl = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      Keyword = _useState2[0],\n      setKeyword = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      Results = _useState3[0],\n      setResults = _useState3[1];\n\n  function Search(e) {\n    e.preventDefault();\n    document.getElementById('logo').style.display = \"block\";\n    var options = {\n      method: 'POST',\n      url: 'https://google-search3.p.rapidapi.com/api/v1/serp/',\n      headers: {\n        'content-type': 'application/json',\n        'x-rapidapi-key': '52710cf555mshb56a0572752d388p15061cjsn8c2f34cf0d65',\n        'x-rapidapi-host': 'google-search3.p.rapidapi.com'\n      },\n      data: {\n        query: \"q=\".concat(Keyword, \"&num=100\"),\n        website: \"\".concat(url)\n      }\n    };\n    axios.request(options).then(function (response) {\n      setResults(response);\n      document.getElementById('logo').style.display = \"none\";\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: !Results ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"audit\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n        style: {\n          color: \"white;\"\n        },\n        children: \"Analyze Your Website's Search Engine Page Ranking [SERP]\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 1\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n        onSubmit: Search,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n          id: \"keyword\",\n          type: \"text\",\n          name: \"\",\n          placeholder: \"Keyword\",\n          value: Keyword,\n          onChange: function onChange(e) {\n            return setKeyword(event.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 1\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n          className: \"button\",\n          id: \"url\",\n          type: \"text\",\n          name: \"\",\n          placeholder: \"URL\",\n          value: url,\n          onChange: function onChange(e) {\n            return seturl(event.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 1\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n          className: \"button\",\n          type: \"submit\",\n          children: \"Go\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 1\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          id: \"logo\",\n          className: \"loadingio-spinner-rolling-kswyn6f3gj7\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"ldio-c9p079igqka\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 1\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 66\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 1\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 1\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        id: \"position\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 1\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 1\n    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"audit\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n        children: [\"You Rank at Position \", Results.data.position, \" for Keyword \", Keyword, \" as checked in \", Results.data.searched_results, \" search results\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 3\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        children: \"We can help you improve your Google Search Rankings with our Website Solutions\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 3\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 88\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"a\", {\n        href: \"./contact\",\n        className: \"button\",\n        children: \"Contact Us\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 3\n      }, this), \";\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 2\n    }, this)\n  }, void 0, false);\n}\n\n_s(Serp, \"CXp+ImM1XQtWPpkzmP4tBLs+0lQ=\");\n\n_c = Serp;\n\nvar _c;\n\n$RefreshReg$(_c, \"Serp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxlQUlBO0FBQUssWUFBRSxFQUFDLE1BQVI7QUFBZSxtQkFBUyxFQUFDLHVDQUF6QjtBQUFBLGlDQUFpRTtBQUFLLHFCQUFTLEVBQUMsa0JBQWY7QUFBQSxtQ0FDakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURpRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkEsZUFVQTtBQUFHLFVBQUUsRUFBQztBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERSxnQkFjRDtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsOEJBQ0M7QUFBQSw0Q0FBMEJ2QixPQUFPLENBQUNZLElBQVIsQ0FBYVksUUFBdkMsbUJBQThEMUIsT0FBOUQscUJBQXNGRSxPQUFPLENBQUNZLElBQVIsQ0FBYWEsZ0JBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRCxlQUVzRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRnRGLGVBR0M7QUFBRyxZQUFJLEVBQUMsV0FBUjtBQUFvQixpQkFBUyxFQUFDLFFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkUsbUJBREQ7QUF3QkQ7O0dBMUR1QmhDOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZXJwLmpzP2Y1NTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnAoKSB7XG5cbmNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xuY29uc3QgW3VybCwgc2V0dXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuY29uc3QgW0tleXdvcmQsIHNldEtleXdvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5jb25zdCBbUmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShudWxsKTtcblxuZnVuY3Rpb24gU2VhcmNoKGUpIHtcbmUucHJldmVudERlZmF1bHQoKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJykuc3R5bGUuZGlzcGxheT1cImJsb2NrXCJcbmNvbnN0IG9wdGlvbnMgPSB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICB1cmw6ICdodHRwczovL2dvb2dsZS1zZWFyY2gzLnAucmFwaWRhcGkuY29tL2FwaS92MS9zZXJwLycsXG4gIGhlYWRlcnM6IHtcbiAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICd4LXJhcGlkYXBpLWtleSc6ICc1MjcxMGNmNTU1bXNoYjU2YTA1NzI3NTJkMzg4cDE1MDYxY2pzbjhjMmYzNGNmMGQ2NScsXG4gICAgJ3gtcmFwaWRhcGktaG9zdCc6ICdnb29nbGUtc2VhcmNoMy5wLnJhcGlkYXBpLmNvbSdcbiAgfSxcbiAgZGF0YToge3F1ZXJ5OiBgcT0ke0tleXdvcmR9Jm51bT0xMDBgLCB3ZWJzaXRlOiBgJHt1cmx9YH1cbn07XG5cbmF4aW9zLnJlcXVlc3Qob3B0aW9ucykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgc2V0UmVzdWx0cyhyZXNwb25zZSk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvJykuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjsgICAgICAgICAgIFxuICAgICAgICBcblxufSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICBcbn0pO1xuXG59XG5cblxuICByZXR1cm4gKFxuICBcdDw+XG4geyFSZXN1bHRzID8gKFxuPGRpdiBjbGFzc05hbWU9XCJhdWRpdFwiPlxuPGgyIHN0eWxlPXt7Y29sb3I6XCJ3aGl0ZTtcIn19PkFuYWx5emUgWW91ciBXZWJzaXRlJmFwb3M7cyBTZWFyY2ggRW5naW5lIFBhZ2UgUmFua2luZyBbU0VSUF08L2gyPlxuPGZvcm0gb25TdWJtaXQ9e1NlYXJjaH0+XG48aW5wdXQgaWQ9XCJrZXl3b3JkXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgcGxhY2Vob2xkZXI9XCJLZXl3b3JkXCIgdmFsdWU9e0tleXdvcmR9IG9uQ2hhbmdlPXsoZSk9PiBzZXRLZXl3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSl9Lz5cbjxpbnB1dCBjbGFzc05hbWU9J2J1dHRvbicgaWQ9XCJ1cmxcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJcIiBwbGFjZWhvbGRlcj1cIlVSTFwiIHZhbHVlPXt1cmx9IG9uQ2hhbmdlPXsoZSk9PiBzZXR1cmwoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlxuPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbicgdHlwZT1cInN1Ym1pdFwiID5HbzwvYnV0dG9uPlxuPGRpdiBpZD1cImxvZ29cIiBjbGFzc05hbWU9XCJsb2FkaW5naW8tc3Bpbm5lci1yb2xsaW5nLWtzd3luNmYzZ2o3XCI+PGRpdiBjbGFzc05hbWU9XCJsZGlvLWM5cDA3OWlncWthXCI+XG48ZGl2PjwvZGl2PlxuPC9kaXY+PC9kaXY+XG48L2Zvcm0+XG48cCBpZD1cInBvc2l0aW9uXCI+PC9wPlxuPC9kaXY+XG4gICAgKSA6IChcblx0PGRpdiBjbGFzc05hbWU9XCJhdWRpdFwiPlxuXHQgPGgyPllvdSBSYW5rIGF0IFBvc2l0aW9uIHtSZXN1bHRzLmRhdGEucG9zaXRpb259IGZvciBLZXl3b3JkIHtLZXl3b3JkfSBhcyBjaGVja2VkIGluIHtSZXN1bHRzLmRhdGEuc2VhcmNoZWRfcmVzdWx0c30gc2VhcmNoIHJlc3VsdHM8L2gyPlxuXHQgPHA+V2UgY2FuIGhlbHAgeW91IGltcHJvdmUgeW91ciBHb29nbGUgU2VhcmNoIFJhbmtpbmdzIHdpdGggb3VyIFdlYnNpdGUgU29sdXRpb25zPC9wPjxici8+XG5cdCA8YSBocmVmPScuL2NvbnRhY3QnIGNsYXNzTmFtZT0nYnV0dG9uJz5Db250YWN0IFVzPC9hPjtcblx0PC9kaXY+XG4pfVxuXHRcdDwvPlxuICBcdClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJJbWFnZSIsIlNlcnAiLCJheGlvcyIsInJlcXVpcmUiLCJ1cmwiLCJzZXR1cmwiLCJLZXl3b3JkIiwic2V0S2V5d29yZCIsIlJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiU2VhcmNoIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsInF1ZXJ5Iiwid2Vic2l0ZSIsInJlcXVlc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJjb2xvciIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJwb3NpdGlvbiIsInNlYXJjaGVkX3Jlc3VsdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/serp.js\n");

/***/ })

});