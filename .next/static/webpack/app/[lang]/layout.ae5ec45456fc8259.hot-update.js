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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"f7c9c01cc303\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MzExNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImY3YzljMDFjYzMwM1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/ui/Browser.jsx":
/*!***************************************!*\
  !*** ./src/components/ui/Browser.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Browser: function() { return /* binding */ Browser; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons */ \"(app-pages-browser)/./src/components/ui/Icons.jsx\");\n/* harmony import */ var _lib_hooks_useBrowser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/hooks/useBrowser */ \"(app-pages-browser)/./src/lib/hooks/useBrowser.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ Browser auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Browser() {\n    _s();\n    const { handleSubmit, handleValue, handleFocus, handleVisible, value, isFocus, isVisible, lang, media } = (0,_lib_hooks_useBrowser__WEBPACK_IMPORTED_MODULE_3__.useBrowser)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: (e)=>handleSubmit(e),\n                action: \"\",\n                className: \"flex rounded-md border px-2.5 py-1.5 h-9 transition-all ease-out duration-200 group w-[36px] hover:w-[280px] focus-within:w-[280px] \".concat(isFocus ? \"border-cyan-500\" : \"border-transparent hover:border-white\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"browserSearch\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"browserSearch\",\n                        type: \"text\",\n                        \"aria-label\": \"menuClickable\",\n                        value: value,\n                        onChange: (e)=>handleValue(e.target.value),\n                        onFocus: ()=>{\n                            (value === null || value === void 0 ? void 0 : value.length) > 3 ? handleVisible(true) : handleVisible(false);\n                            handleFocus(true);\n                        },\n                        onBlur: (e)=>{\n                            var _e_relatedTarget;\n                            if ((_e_relatedTarget = e.relatedTarget) === null || _e_relatedTarget === void 0 ? void 0 : _e_relatedTarget.className.includes(\"browserItem\")) return;\n                            handleVisible(false);\n                            handleFocus(false);\n                        },\n                        className: \"w-full bg-transparent focus-visible:outline-none transition-colors text-white\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.LoupeIcon, {}, void 0, false, {\n                            fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 32\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"\".concat(isVisible ? \"opacity-100 \" : \" opacity-0 pointer-events-none\", \" transition-opacity flex flex-col rounded absolute bg-gray-900/60 backdrop-blur w-full max-h-[400px] overflow-auto scroll\"),\n                children: media === null || media === void 0 ? void 0 : media.map((media, index)=>{\n                    var _media_date;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hover:bg-gray-950/70 backdrop-blur\",\n                        onClick: ()=>{\n                            // handleFocus(false)\n                            handleVisible(false);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: \"/\".concat(lang, \"/\").concat(media.mediaType, \"/title?id=\").concat(media.id),\n                            className: \"browserItem flex gap-3 items-center p-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://image.tmdb.org/t/p/w200/\".concat(media.poster),\n                                    alt: \"Poster of \".concat(media.title),\n                                    className: \"w-[50px]\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"font-semibold\",\n                                            children: media.title\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-gray-400\",\n                                            children: (_media_date = media.date) === null || _media_date === void 0 ? void 0 : _media_date.slice(0, 4)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, this)\n                    }, index, false, {\n                        fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\Browser.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Browser, \"E9zIZjgcQQErSXgNVDZK93Hr7jA=\", false, function() {\n    return [\n        _lib_hooks_useBrowser__WEBPACK_IMPORTED_MODULE_3__.useBrowser\n    ];\n});\n_c = Browser;\nvar _c;\n$RefreshReg$(_c, \"Browser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL0Jyb3dzZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN5QjtBQUNVO0FBQ29CO0FBQzNCO0FBRXJCLFNBQVNJOztJQUNkLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHWCxpRUFBVUE7SUFFcEgscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBS0MsVUFBVSxDQUFDQyxJQUFNYixhQUFhYTtnQkFBSUMsUUFBTztnQkFBR0osV0FBVyx1SUFBNk0sT0FBdEVMLFVBQVUsb0JBQW9COztrQ0FDaE8sOERBQUNVO3dCQUFNQyxTQUFROzs7Ozs7a0NBQ2YsOERBQUNDO3dCQUFNQyxJQUFHO3dCQUFnQkMsTUFBSzt3QkFBT0MsY0FBVzt3QkFBZ0JoQixPQUFPQTt3QkFDeEVpQixVQUFVLENBQUNSLElBQU1aLFlBQVlZLEVBQUVTLE1BQU0sQ0FBQ2xCLEtBQUs7d0JBQzNDbUIsU0FBUzs0QkFDUG5CLENBQUFBLGtCQUFBQSw0QkFBQUEsTUFBT29CLE1BQU0sSUFBRyxJQUFJckIsY0FBYyxRQUFRQSxjQUFjOzRCQUN4REQsWUFBWTt3QkFDZDt3QkFDQXVCLFFBQVEsQ0FBQ1o7Z0NBQ0hBOzRCQUFKLEtBQUlBLG1CQUFBQSxFQUFFYSxhQUFhLGNBQWZiLHVDQUFBQSxpQkFBaUJILFNBQVMsQ0FBQ2lCLFFBQVEsQ0FBQyxnQkFBZ0I7NEJBQ3hEeEIsY0FBYzs0QkFDZEQsWUFBWTt3QkFDZDt3QkFFQVEsV0FBVzs7Ozs7O2tDQUNYLDhEQUFDa0I7d0JBQU9ULE1BQUs7a0NBQVUsNEVBQUN2Qiw2Q0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR25DLDhEQUFDaUM7Z0JBQUduQixXQUFXLEdBQWlFLE9BQTlESixZQUFZLGlCQUFpQixrQ0FBaUM7MEJBQzdFRSxrQkFBQUEsNEJBQUFBLE1BQU9zQixHQUFHLENBQUMsQ0FBQ3RCLE9BQU91Qjt3QkFXdUJ2QjtvQkFWekMscUJBQ0UsOERBQUN3Qjt3QkFBZXRCLFdBQVU7d0JBQzFCdUIsU0FBUzs0QkFDUCxxQkFBcUI7NEJBQ3JCOUIsY0FBYzt3QkFDaEI7a0NBQ0UsNEVBQUNMLGlEQUFJQTs0QkFBQ29DLE1BQU0sSUFBWTFCLE9BQVJELE1BQUssS0FBK0JDLE9BQTVCQSxNQUFNMkIsU0FBUyxFQUFDLGNBQXFCLE9BQVQzQixNQUFNVSxFQUFFOzRCQUFJUixXQUFVOzs4Q0FDeEUsOERBQUMwQjtvQ0FBSUMsS0FBSyxtQ0FBZ0QsT0FBYjdCLE1BQU04QixNQUFNO29DQUFJQyxLQUFLLGFBQXlCLE9BQVovQixNQUFNZ0MsS0FBSztvQ0FBSTlCLFdBQVU7Ozs7Ozs4Q0FDeEcsOERBQUNEOztzREFDQyw4REFBQ2dDOzRDQUFHL0IsV0FBVTtzREFBaUJGLE1BQU1nQyxLQUFLOzs7Ozs7c0RBQzFDLDhEQUFDRTs0Q0FBS2hDLFdBQVU7dURBQWlCRixjQUFBQSxNQUFNbUMsSUFBSSxjQUFWbkMsa0NBQUFBLFlBQVlvQyxLQUFLLENBQUMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQVRuRGI7Ozs7O2dCQWNiOzs7Ozs7Ozs7Ozs7QUFJUjtHQTVDZ0JoQzs7UUFDNEZGLDZEQUFVQTs7O0tBRHRHRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91aS9Ccm93c2VyLmpzeD9hYjAyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExvdXBlSWNvbiB9IGZyb20gJy4vSWNvbnMnXHJcbmltcG9ydCB7IHVzZUJyb3dzZXIgfSBmcm9tICcuLi8uLi9saWIvaG9va3MvdXNlQnJvd3NlcidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJyb3dzZXIgKCkge1xyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCBoYW5kbGVWYWx1ZSwgaGFuZGxlRm9jdXMsIGhhbmRsZVZpc2libGUsIHZhbHVlLCBpc0ZvY3VzLCBpc1Zpc2libGUsIGxhbmcsIG1lZGlhIH0gPSB1c2VCcm93c2VyKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSc+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VibWl0KGUpfSBhY3Rpb249XCJcIiBjbGFzc05hbWU9e2BmbGV4IHJvdW5kZWQtbWQgYm9yZGVyIHB4LTIuNSBweS0xLjUgaC05IHRyYW5zaXRpb24tYWxsIGVhc2Utb3V0IGR1cmF0aW9uLTIwMCBncm91cCB3LVszNnB4XSBob3Zlcjp3LVsyODBweF0gZm9jdXMtd2l0aGluOnctWzI4MHB4XSAke2lzRm9jdXMgPyAnYm9yZGVyLWN5YW4tNTAwJyA6ICdib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6Ym9yZGVyLXdoaXRlJ31gfT5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj0nYnJvd3NlclNlYXJjaCc+PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgaWQ9J2Jyb3dzZXJTZWFyY2gnIHR5cGU9XCJ0ZXh0XCIgYXJpYS1sYWJlbD0nbWVudUNsaWNrYWJsZScgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlVmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIG9uRm9jdXM9eygpID0+IHtcclxuICAgICAgICAgIHZhbHVlPy5sZW5ndGggPiAzID8gaGFuZGxlVmlzaWJsZSh0cnVlKSA6IGhhbmRsZVZpc2libGUoZmFsc2UpXHJcbiAgICAgICAgICBoYW5kbGVGb2N1cyh0cnVlKVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25CbHVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGUucmVsYXRlZFRhcmdldD8uY2xhc3NOYW1lLmluY2x1ZGVzKCdicm93c2VySXRlbScpKSByZXR1cm5cclxuICAgICAgICAgIGhhbmRsZVZpc2libGUoZmFsc2UpXHJcbiAgICAgICAgICBoYW5kbGVGb2N1cyhmYWxzZSlcclxuICAgICAgICB9fVxyXG5cclxuICAgICAgICBjbGFzc05hbWU9eyd3LWZ1bGwgYmctdHJhbnNwYXJlbnQgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnMgdGV4dC13aGl0ZSd9Lz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiA+PExvdXBlSWNvbi8+PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9e2Ake2lzVmlzaWJsZSA/ICdvcGFjaXR5LTEwMCAnIDogJyBvcGFjaXR5LTAgcG9pbnRlci1ldmVudHMtbm9uZSd9IHRyYW5zaXRpb24tb3BhY2l0eSBmbGV4IGZsZXgtY29sIHJvdW5kZWQgYWJzb2x1dGUgYmctZ3JheS05MDAvNjAgYmFja2Ryb3AtYmx1ciB3LWZ1bGwgbWF4LWgtWzQwMHB4XSBvdmVyZmxvdy1hdXRvIHNjcm9sbGAgfSA+XHJcbiAgICAgICAge21lZGlhPy5tYXAoKG1lZGlhLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT0naG92ZXI6YmctZ3JheS05NTAvNzAgYmFja2Ryb3AtYmx1cidcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIGhhbmRsZUZvY3VzKGZhbHNlKVxyXG4gICAgICAgICAgICAgIGhhbmRsZVZpc2libGUoZmFsc2UpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvJHtsYW5nfS8ke21lZGlhLm1lZGlhVHlwZX0vdGl0bGU/aWQ9JHttZWRpYS5pZH1gfSBjbGFzc05hbWU9J2Jyb3dzZXJJdGVtIGZsZXggZ2FwLTMgaXRlbXMtY2VudGVyIHAtMyc+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3cyMDAvJHttZWRpYS5wb3N0ZXJ9YH0gYWx0PXtgUG9zdGVyIG9mICR7bWVkaWEudGl0bGV9YH0gY2xhc3NOYW1lPSd3LVs1MHB4XScvPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCc+e21lZGlhLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTQwMCc+e21lZGlhLmRhdGU/LnNsaWNlKDAsIDQpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMb3VwZUljb24iLCJ1c2VCcm93c2VyIiwiTGluayIsIkJyb3dzZXIiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVWYWx1ZSIsImhhbmRsZUZvY3VzIiwiaGFuZGxlVmlzaWJsZSIsInZhbHVlIiwiaXNGb2N1cyIsImlzVmlzaWJsZSIsImxhbmciLCJtZWRpYSIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJhY3Rpb24iLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsImFyaWEtbGFiZWwiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uRm9jdXMiLCJsZW5ndGgiLCJvbkJsdXIiLCJyZWxhdGVkVGFyZ2V0IiwiaW5jbHVkZXMiLCJidXR0b24iLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJvbkNsaWNrIiwiaHJlZiIsIm1lZGlhVHlwZSIsImltZyIsInNyYyIsInBvc3RlciIsImFsdCIsInRpdGxlIiwiaDQiLCJzcGFuIiwiZGF0ZSIsInNsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/Browser.jsx\n"));

/***/ })

});