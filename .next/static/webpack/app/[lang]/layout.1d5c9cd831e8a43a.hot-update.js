"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[lang]/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2387ce33f30b\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MzExNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjIzODdjZTMzZjMwYlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/ui/Browser.jsx":
/*!***************************************!*\
  !*** ./src/components/ui/Browser.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Browser: function() { return /* binding */ Browser; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons */ \"(app-pages-browser)/./src/components/ui/Icons.jsx\");\n/* harmony import */ var _lib_hooks_useBrowser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/hooks/useBrowser */ \"(app-pages-browser)/./src/lib/hooks/useBrowser.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ Browser auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Browser() {\n    _s();\n    const { handleSubmit, handleValue, handleFocus, handleVisible, value, isFocus, isVisible, lang, media } = (0,_lib_hooks_useBrowser__WEBPACK_IMPORTED_MODULE_3__.useBrowser)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>handleSubmit(e),\n                action: \"\",\n                className: \"flex rounded-md border px-2.5 py-1.5 h-9 transition-all ease-out duration-200 group  hover:w-[280px]  \".concat(isFocus ? \"border-cyan-500 w-[280px]\" : \"border-transparent hover:border-white w-[36px]\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"browserSearch\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"browserSearch\",\n                        type: \"text\",\n                        \"aria-label\": \"menuClickable\",\n                        value: value,\n                        onChange: (e)=>handleValue(e.target.value),\n                        onFocus: ()=>{\n                            (value === null || value === void 0 ? void 0 : value.length) > 3 ? handleVisible(true) : handleVisible(false);\n                            handleFocus(true);\n                        },\n                        onBlur: (e)=>{\n                            var _e_relatedTarget;\n                            if ((_e_relatedTarget = e.relatedTarget) === null || _e_relatedTarget === void 0 ? void 0 : _e_relatedTarget.className.includes(\"browserItem\")) return;\n                            handleVisible(false);\n                            handleFocus(false);\n                        },\n                        className: \"w-full bg-transparent focus-visible:outline-none transition-colors text-white\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.LoupeIcon, {}, void 0, false, {\n                            fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 32\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"\".concat(isVisible ? \"opacity-100 \" : \" opacity-0 pointer-events-none\", \" transition-opacity flex flex-col rounded absolute bg-gray-900/60 backdrop-blur w-full max-h-[400px] overflow-auto scroll\"),\n                children: media === null || media === void 0 ? void 0 : media.map((media, index)=>{\n                    var _media_date;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hover:bg-gray-950/70 backdrop-blur\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: \"/\".concat(lang, \"/\").concat(media.mediaType, \"/title?id=\").concat(media.id),\n                            className: \"browserItem flex gap-3 items-center p-3\",\n                            onClick: ()=>{\n                                handleFocus(false);\n                                handleVisible(false);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://image.tmdb.org/t/p/w200/\".concat(media.poster),\n                                    alt: \"Poster of \".concat(media.title),\n                                    className: \"w-[50px]\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"font-semibold\",\n                                            children: media.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-gray-400\",\n                                            children: (_media_date = media.date) === null || _media_date === void 0 ? void 0 : _media_date.slice(0, 4)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Browser, \"E9zIZjgcQQErSXgNVDZK93Hr7jA=\", false, function() {\n    return [\n        _lib_hooks_useBrowser__WEBPACK_IMPORTED_MODULE_3__.useBrowser\n    ];\n});\n_c = Browser;\nvar _c;\n$RefreshReg$(_c, \"Browser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL0Jyb3dzZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN5QjtBQUNVO0FBQ29CO0FBQzNCO0FBRXJCLFNBQVNJOztJQUNkLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHWCxpRUFBVUE7SUFFcEgscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBS0MsVUFBVSxDQUFDQyxJQUFNYixhQUFhYTtnQkFBSUMsUUFBTztnQkFBR0osV0FBVyx5R0FBa00sT0FBekZMLFVBQVUsOEJBQThCOztrQ0FDNU0sOERBQUNVO3dCQUFNQyxTQUFROzs7Ozs7a0NBQ2YsOERBQUNDO3dCQUFNQyxJQUFHO3dCQUFnQkMsTUFBSzt3QkFBT0MsY0FBVzt3QkFBZ0JoQixPQUFPQTt3QkFDeEVpQixVQUFVLENBQUNSLElBQU1aLFlBQVlZLEVBQUVTLE1BQU0sQ0FBQ2xCLEtBQUs7d0JBQzNDbUIsU0FBUzs0QkFDUG5CLENBQUFBLGtCQUFBQSw0QkFBQUEsTUFBT29CLE1BQU0sSUFBRyxJQUFJckIsY0FBYyxRQUFRQSxjQUFjOzRCQUN4REQsWUFBWTt3QkFDZDt3QkFDQXVCLFFBQVEsQ0FBQ1o7Z0NBQ0hBOzRCQUFKLEtBQUlBLG1CQUFBQSxFQUFFYSxhQUFhLGNBQWZiLHVDQUFBQSxpQkFBaUJILFNBQVMsQ0FBQ2lCLFFBQVEsQ0FBQyxnQkFBZ0I7NEJBQ3hEeEIsY0FBYzs0QkFDZEQsWUFBWTt3QkFDZDt3QkFFQVEsV0FBVzs7Ozs7O2tDQUNYLDhEQUFDa0I7d0JBQU9ULE1BQUs7a0NBQVUsNEVBQUN2Qiw2Q0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR25DLDhEQUFDaUM7Z0JBQUduQixXQUFXLEdBQWlFLE9BQTlESixZQUFZLGlCQUFpQixrQ0FBaUM7MEJBQzdFRSxrQkFBQUEsNEJBQUFBLE1BQU9zQixHQUFHLENBQUMsQ0FBQ3RCLE9BQU91Qjt3QkFXdUJ2QjtvQkFWekMscUJBQ0UsOERBQUN3Qjt3QkFBZXRCLFdBQVU7a0NBQ3hCLDRFQUFDWixpREFBSUE7NEJBQUNtQyxNQUFNLElBQVl6QixPQUFSRCxNQUFLLEtBQStCQyxPQUE1QkEsTUFBTTBCLFNBQVMsRUFBQyxjQUFxQixPQUFUMUIsTUFBTVUsRUFBRTs0QkFBSVIsV0FBVTs0QkFDMUV5QixTQUFTO2dDQUNQakMsWUFBWTtnQ0FDWkMsY0FBYzs0QkFDaEI7OzhDQUNFLDhEQUFDaUM7b0NBQUlDLEtBQUssbUNBQWdELE9BQWI3QixNQUFNOEIsTUFBTTtvQ0FBSUMsS0FBSyxhQUF5QixPQUFaL0IsTUFBTWdDLEtBQUs7b0NBQUk5QixXQUFVOzs7Ozs7OENBQ3hHLDhEQUFDRDs7c0RBQ0MsOERBQUNnQzs0Q0FBRy9CLFdBQVU7c0RBQWlCRixNQUFNZ0MsS0FBSzs7Ozs7O3NEQUMxQyw4REFBQ0U7NENBQUtoQyxXQUFVO3VEQUFpQkYsY0FBQUEsTUFBTW1DLElBQUksY0FBVm5DLGtDQUFBQSxZQUFZb0MsS0FBSyxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFUbkRiOzs7OztnQkFjYjs7Ozs7Ozs7Ozs7O0FBSVI7R0E1Q2dCaEM7O1FBQzRGRiw2REFBVUE7OztLQUR0R0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdWkvQnJvd3Nlci5qc3g/YWIwMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMb3VwZUljb24gfSBmcm9tICcuL0ljb25zJ1xyXG5pbXBvcnQgeyB1c2VCcm93c2VyIH0gZnJvbSAnLi4vLi4vbGliL2hvb2tzL3VzZUJyb3dzZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCcm93c2VyICgpIHtcclxuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgaGFuZGxlVmFsdWUsIGhhbmRsZUZvY3VzLCBoYW5kbGVWaXNpYmxlLCB2YWx1ZSwgaXNGb2N1cywgaXNWaXNpYmxlLCBsYW5nLCBtZWRpYSB9ID0gdXNlQnJvd3NlcigpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUnPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdChlKX0gYWN0aW9uPVwiXCIgY2xhc3NOYW1lPXtgZmxleCByb3VuZGVkLW1kIGJvcmRlciBweC0yLjUgcHktMS41IGgtOSB0cmFuc2l0aW9uLWFsbCBlYXNlLW91dCBkdXJhdGlvbi0yMDAgZ3JvdXAgIGhvdmVyOnctWzI4MHB4XSAgJHtpc0ZvY3VzID8gJ2JvcmRlci1jeWFuLTUwMCB3LVsyODBweF0nIDogJ2JvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItd2hpdGUgdy1bMzZweF0nfWB9PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdicm93c2VyU2VhcmNoJz48L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBpZD0nYnJvd3NlclNlYXJjaCcgdHlwZT1cInRleHRcIiBhcmlhLWxhYmVsPSdtZW51Q2xpY2thYmxlJyB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgb25Gb2N1cz17KCkgPT4ge1xyXG4gICAgICAgICAgdmFsdWU/Lmxlbmd0aCA+IDMgPyBoYW5kbGVWaXNpYmxlKHRydWUpIDogaGFuZGxlVmlzaWJsZShmYWxzZSlcclxuICAgICAgICAgIGhhbmRsZUZvY3VzKHRydWUpXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkJsdXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZS5yZWxhdGVkVGFyZ2V0Py5jbGFzc05hbWUuaW5jbHVkZXMoJ2Jyb3dzZXJJdGVtJykpIHJldHVyblxyXG4gICAgICAgICAgaGFuZGxlVmlzaWJsZShmYWxzZSlcclxuICAgICAgICAgIGhhbmRsZUZvY3VzKGZhbHNlKVxyXG4gICAgICAgIH19XHJcblxyXG4gICAgICAgIGNsYXNzTmFtZT17J3ctZnVsbCBiZy10cmFuc3BhcmVudCBmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWNvbG9ycyB0ZXh0LXdoaXRlJ30vPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiID48TG91cGVJY29uLz48L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17YCR7aXNWaXNpYmxlID8gJ29wYWNpdHktMTAwICcgOiAnIG9wYWNpdHktMCBwb2ludGVyLWV2ZW50cy1ub25lJ30gdHJhbnNpdGlvbi1vcGFjaXR5IGZsZXggZmxleC1jb2wgcm91bmRlZCBhYnNvbHV0ZSBiZy1ncmF5LTkwMC82MCBiYWNrZHJvcC1ibHVyIHctZnVsbCBtYXgtaC1bNDAwcHhdIG92ZXJmbG93LWF1dG8gc2Nyb2xsYCB9ID5cclxuICAgICAgICB7bWVkaWE/Lm1hcCgobWVkaWEsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdob3ZlcjpiZy1ncmF5LTk1MC83MCBiYWNrZHJvcC1ibHVyJz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7bGFuZ30vJHttZWRpYS5tZWRpYVR5cGV9L3RpdGxlP2lkPSR7bWVkaWEuaWR9YH0gY2xhc3NOYW1lPSdicm93c2VySXRlbSBmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlciBwLTMnXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlRm9jdXMoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93MjAwLyR7bWVkaWEucG9zdGVyfWB9IGFsdD17YFBvc3RlciBvZiAke21lZGlhLnRpdGxlfWB9IGNsYXNzTmFtZT0ndy1bNTBweF0nLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQnPnttZWRpYS50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtZ3JheS00MDAnPnttZWRpYS5kYXRlPy5zbGljZSgwLCA0KX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTG91cGVJY29uIiwidXNlQnJvd3NlciIsIkxpbmsiLCJCcm93c2VyIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlVmFsdWUiLCJoYW5kbGVGb2N1cyIsImhhbmRsZVZpc2libGUiLCJ2YWx1ZSIsImlzRm9jdXMiLCJpc1Zpc2libGUiLCJsYW5nIiwibWVkaWEiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJlIiwiYWN0aW9uIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJhcmlhLWxhYmVsIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbkZvY3VzIiwibGVuZ3RoIiwib25CbHVyIiwicmVsYXRlZFRhcmdldCIsImluY2x1ZGVzIiwiYnV0dG9uIiwidWwiLCJtYXAiLCJpbmRleCIsImxpIiwiaHJlZiIsIm1lZGlhVHlwZSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJwb3N0ZXIiLCJhbHQiLCJ0aXRsZSIsImg0Iiwic3BhbiIsImRhdGUiLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/Browser.jsx\n"));

/***/ })

});