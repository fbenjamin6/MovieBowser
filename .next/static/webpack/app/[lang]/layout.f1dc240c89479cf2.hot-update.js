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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b85e6a3fc47c\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MzExNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImI4NWU2YTNmYzQ3Y1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/ui/LanguageSwitcher.jsx":
/*!************************************************!*\
  !*** ./src/components/ui/LanguageSwitcher.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LanguageSwitcher: function() { return /* binding */ LanguageSwitcher; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons */ \"(app-pages-browser)/./src/components/ui/Icons.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _hooks_useLang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useLang */ \"(app-pages-browser)/./src/hooks/useLang.js\");\n/* harmony import */ var _hooks_useDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useDropdown */ \"(app-pages-browser)/./src/hooks/useDropdown.js\");\n/* __next_internal_client_entry_do_not_use__ LanguageSwitcher auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction LanguageSwitcher() {\n    _s();\n    const lang = (0,_hooks_useLang__WEBPACK_IMPORTED_MODULE_5__.useLang)();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const { isOpen, blurHandler, openHandler } = (0,_hooks_useDropdown__WEBPACK_IMPORTED_MODULE_6__.useDropdown)();\n    const redirectedPathName = (locale)=>{\n        if (!pathName) return \"/\";\n        const segments = pathName.split(\"/\");\n        segments[1] = locale;\n        const newPathname = segments.join(\"/\");\n        if (searchParams !== 0) {\n            return newPathname + \"?\" + searchParams.toString();\n        }\n        return newPathname;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative font-semibold w-min\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: openHandler,\n                onBlur: blurHandler,\n                \"aria-label\": \"menuClickable\",\n                className: \"relative w-20 flex items-center gap-2  justify-center rounded border transition-colors duration-200 bg-slate-800/30 \".concat(isOpen ? \"border-cyan-500\" : \"border-slate-600\", \" text-white bg-opacity-90 py-0.5 z-50\"),\n                children: [\n                    lang.toLocaleUpperCase(),\n                    \" \",\n                    lang === \"en\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.FlagENIcon, {}, void 0, false, {\n                        fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\LanguageSwitcher.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 53\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.FlagESIcon, {}, void 0, false, {\n                        fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\LanguageSwitcher.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 70\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\LanguageSwitcher.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-full bg-slate-800 bg-opacity-90 rounded-b transition-all duration-200 \\n        \".concat(isOpen ? \"opacity-100 translate-y-0\" : \" opacity-0 -translate-y-2 pointer-events-none\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: redirectedPathName(\"en\"),\n                            scroll: false,\n                            onClick: openHandler,\n                            className: \"flex items-center justify-center gap-2 py-1 cursor-pointer hover:bg-slate-700/20\",\n                            children: [\n                                \"EN \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.FlagENIcon, {}, void 0, false, {\n                                    fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\LanguageSwitcher.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 182\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\LanguageSwitcher.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            href: redirectedPathName(\"es\"),\n                            scroll: false,\n                            onClick: openHandler,\n                            className: \"flex items-center justify-center gap-2.5 py-1 cursor-pointer hover:bg-slate-700/20\",\n                            children: [\n                                \"ES \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons__WEBPACK_IMPORTED_MODULE_2__.FlagESIcon, {}, void 0, false, {\n                                    fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\LanguageSwitcher.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 184\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\LanguageSwitcher.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\LanguageSwitcher.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\LanguageSwitcher.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\web\\\\React projects\\\\MovieBowser\\\\src\\\\components\\\\ui\\\\LanguageSwitcher.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(LanguageSwitcher, \"dEUPgDVC9UExEK3A1WvEmJP+WwQ=\", false, function() {\n    return [\n        _hooks_useLang__WEBPACK_IMPORTED_MODULE_5__.useLang,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams,\n        _hooks_useDropdown__WEBPACK_IMPORTED_MODULE_6__.useDropdown\n    ];\n});\n_c = LanguageSwitcher;\nvar _c;\n$RefreshReg$(_c, \"LanguageSwitcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL0xhbmd1YWdlU3dpdGNoZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3lCO0FBQ3VCO0FBQ2M7QUFDbEM7QUFDaUI7QUFDSTtBQUUxQyxTQUFTUTs7SUFDZCxNQUFNQyxPQUFPSCx1REFBT0E7SUFDcEIsTUFBTUksV0FBV1AsNERBQVdBO0lBQzVCLE1BQU1RLGVBQWVQLGdFQUFlQTtJQUNwQyxNQUFNLEVBQUVRLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUUsR0FBR1AsK0RBQVdBO0lBRXhELE1BQU1RLHFCQUFxQixDQUFDQztRQUMxQixJQUFJLENBQUNOLFVBQVUsT0FBTztRQUN0QixNQUFNTyxXQUFXUCxTQUFTUSxLQUFLLENBQUM7UUFDaENELFFBQVEsQ0FBQyxFQUFFLEdBQUdEO1FBQ2QsTUFBTUcsY0FBY0YsU0FBU0csSUFBSSxDQUFDO1FBQ2xDLElBQUlULGlCQUFpQixHQUFHO1lBQ3RCLE9BQU9RLGNBQWMsTUFBTVIsYUFBYVUsUUFBUTtRQUNsRDtRQUNBLE9BQU9GO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFPQyxTQUFTWDtnQkFBYVksUUFBUWI7Z0JBQWFjLGNBQVc7Z0JBQWdCSixXQUFXLHVIQUF1SyxPQUFoRFgsU0FBUyxvQkFBb0Isb0JBQW1COztvQkFDN1BILEtBQUttQixpQkFBaUI7b0JBQUc7b0JBQUVuQixTQUFTLHFCQUFPLDhEQUFDUiw4Q0FBVUE7Ozs7NkNBQU0sOERBQUNDLDhDQUFVQTs7Ozs7Ozs7Ozs7MEJBRTFFLDhEQUFDb0I7Z0JBQUlDLFdBQVcsOEZBQzJFLE9BQXZGWCxTQUFTLDhCQUE4QjswQkFDekMsNEVBQUNpQjs7c0NBQ0MsOERBQUN4QixpREFBSUE7NEJBQUN5QixNQUFNZixtQkFBbUI7NEJBQU9nQixRQUFROzRCQUFPTixTQUFTWDs0QkFBYVMsV0FBVTs7Z0NBQW1GOzhDQUFHLDhEQUFDdEIsOENBQVVBOzs7Ozs7Ozs7OztzQ0FDdEwsOERBQUNJLGlEQUFJQTs0QkFBQ3lCLE1BQU1mLG1CQUFtQjs0QkFBT2dCLFFBQVE7NEJBQU9OLFNBQVNYOzRCQUFhUyxXQUFVOztnQ0FBcUY7OENBQUcsOERBQUNyQiw4Q0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbE07R0EvQmdCTTs7UUFDREYsbURBQU9BO1FBQ0hILHdEQUFXQTtRQUNQQyw0REFBZUE7UUFDU0csMkRBQVdBOzs7S0FKMUNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VpL0xhbmd1YWdlU3dpdGNoZXIuanN4PzM2MWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmxhZ0VOSWNvbiwgRmxhZ0VTSWNvbiB9IGZyb20gJy4vSWNvbnMnXHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlTGFuZyB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZUxhbmcnXHJcbmltcG9ydCB7IHVzZURyb3Bkb3duIH0gZnJvbSAnQC9ob29rcy91c2VEcm9wZG93bidcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMYW5ndWFnZVN3aXRjaGVyICgpIHtcclxuICBjb25zdCBsYW5nID0gdXNlTGFuZygpXHJcbiAgY29uc3QgcGF0aE5hbWUgPSB1c2VQYXRobmFtZSgpXHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcclxuICBjb25zdCB7IGlzT3BlbiwgYmx1ckhhbmRsZXIsIG9wZW5IYW5kbGVyIH0gPSB1c2VEcm9wZG93bigpXHJcblxyXG4gIGNvbnN0IHJlZGlyZWN0ZWRQYXRoTmFtZSA9IChsb2NhbGUpID0+IHtcclxuICAgIGlmICghcGF0aE5hbWUpIHJldHVybiAnLydcclxuICAgIGNvbnN0IHNlZ21lbnRzID0gcGF0aE5hbWUuc3BsaXQoJy8nKVxyXG4gICAgc2VnbWVudHNbMV0gPSBsb2NhbGVcclxuICAgIGNvbnN0IG5ld1BhdGhuYW1lID0gc2VnbWVudHMuam9pbignLycpXHJcbiAgICBpZiAoc2VhcmNoUGFyYW1zICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiBuZXdQYXRobmFtZSArICc/JyArIHNlYXJjaFBhcmFtcy50b1N0cmluZygpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3UGF0aG5hbWVcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgZm9udC1zZW1pYm9sZCB3LW1pbicgPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29wZW5IYW5kbGVyfSBvbkJsdXI9e2JsdXJIYW5kbGVyfSBhcmlhLWxhYmVsPSdtZW51Q2xpY2thYmxlJyBjbGFzc05hbWU9e2ByZWxhdGl2ZSB3LTIwIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yICBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJvcmRlciB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgYmctc2xhdGUtODAwLzMwICR7aXNPcGVuID8gJ2JvcmRlci1jeWFuLTUwMCcgOiAnYm9yZGVyLXNsYXRlLTYwMCd9IHRleHQtd2hpdGUgYmctb3BhY2l0eS05MCBweS0wLjUgei01MGB9PlxyXG4gICAgICAgIHtsYW5nLnRvTG9jYWxlVXBwZXJDYXNlKCl9IHtsYW5nID09PSAnZW4nID8gPEZsYWdFTkljb24gLz4gOiA8RmxhZ0VTSWNvbiAvPn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdy1mdWxsIGJnLXNsYXRlLTgwMCBiZy1vcGFjaXR5LTkwIHJvdW5kZWQtYiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgXHJcbiAgICAgICAgJHtpc09wZW4gPyAnb3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMCcgOiAnIG9wYWNpdHktMCAtdHJhbnNsYXRlLXktMiBwb2ludGVyLWV2ZW50cy1ub25lJ31gfT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtyZWRpcmVjdGVkUGF0aE5hbWUoJ2VuJyl9IHNjcm9sbD17ZmFsc2V9IG9uQ2xpY2s9e29wZW5IYW5kbGVyfSBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHB5LTEgY3Vyc29yLXBvaW50ZXIgaG92ZXI6Ymctc2xhdGUtNzAwLzIwJz5FTiA8RmxhZ0VOSWNvbiAvPjwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e3JlZGlyZWN0ZWRQYXRoTmFtZSgnZXMnKX0gc2Nyb2xsPXtmYWxzZX0gb25DbGljaz17b3BlbkhhbmRsZXJ9IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIuNSBweS0xIGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLXNsYXRlLTcwMC8yMCc+RVMgPEZsYWdFU0ljb24gLz48L0xpbms+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmxhZ0VOSWNvbiIsIkZsYWdFU0ljb24iLCJ1c2VQYXRobmFtZSIsInVzZVNlYXJjaFBhcmFtcyIsIkxpbmsiLCJ1c2VMYW5nIiwidXNlRHJvcGRvd24iLCJMYW5ndWFnZVN3aXRjaGVyIiwibGFuZyIsInBhdGhOYW1lIiwic2VhcmNoUGFyYW1zIiwiaXNPcGVuIiwiYmx1ckhhbmRsZXIiLCJvcGVuSGFuZGxlciIsInJlZGlyZWN0ZWRQYXRoTmFtZSIsImxvY2FsZSIsInNlZ21lbnRzIiwic3BsaXQiLCJuZXdQYXRobmFtZSIsImpvaW4iLCJ0b1N0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvbkJsdXIiLCJhcmlhLWxhYmVsIiwidG9Mb2NhbGVVcHBlckNhc2UiLCJ1bCIsImhyZWYiLCJzY3JvbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/LanguageSwitcher.jsx\n"));

/***/ })

});