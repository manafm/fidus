function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_organisations_organisations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/organisations/organisations.component */
    "./src/app/components/organisations/organisations.component.ts");
    /* harmony import */


    var _components_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/users/users-list/users-list.component */
    "./src/app/components/users/users-list/users-list.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_consumers_consumers_consumers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/consumers/consumers/consumers.component */
    "./src/app/components/consumers/consumers/consumers.component.ts");
    /* harmony import */


    var _components_providers_providers_providers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/providers/providers/providers.component */
    "./src/app/components/providers/providers/providers.component.ts");
    /* harmony import */


    var _components_consultation_consultation_consultation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/consultation/consultation/consultation.component */
    "./src/app/components/consultation/consultation/consultation.component.ts");
    /* harmony import */


    var _components_configuration_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/configuration/configuration/configuration.component */
    "./src/app/components/configuration/configuration/configuration.component.ts");

    var routes = [{
      path: '',
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    }, // { path: 'dashboard', component: DashboardComponent },
    {
      path: 'user-list',
      component: _components_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_3__["UsersListComponent"]
    }, {
      path: 'organisations',
      component: _components_organisations_organisations_component__WEBPACK_IMPORTED_MODULE_2__["OrganisationsComponent"]
    }, {
      path: 'Consumers',
      component: _components_consumers_consumers_consumers_component__WEBPACK_IMPORTED_MODULE_5__["ConsumersComponent"]
    }, {
      path: 'Providers',
      component: _components_providers_providers_providers_component__WEBPACK_IMPORTED_MODULE_6__["ProvidersComponent"]
    }, {
      path: 'Consultation',
      component: _components_consultation_consultation_consultation_component__WEBPACK_IMPORTED_MODULE_7__["ConsultationComponent"]
    }, {
      path: 'Configuration',
      component: _components_configuration_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_8__["ConfigurationComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_helloworld_helloworld_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/helloworld/helloworld.service */
    "./src/app/services/helloworld/helloworld.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(hello) {
        _classCallCheck(this, AppComponent);

        this.hello = hello;
        this.title = 'Projet Fidus ';
        this.persons = [];
      }

      _createClass(AppComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.helloSub.unsubscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// this.helloSub = this.hello.listUsers().subscribe(
          //   data => this.persons = data,
          //   error => console.error('err---', error)
          // );
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_helloworld_helloworld_service__WEBPACK_IMPORTED_MODULE_1__["HelloworldService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_helloworld_helloworld_service__WEBPACK_IMPORTED_MODULE_1__["HelloworldService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, HttpLoaderFactory */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/esm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/index.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_consumers_consumers_consumers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/consumers/consumers/consumers.component */
    "./src/app/components/consumers/consumers/consumers.component.ts");
    /* harmony import */


    var _components_providers_providers_providers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/providers/providers/providers.component */
    "./src/app/components/providers/providers/providers.component.ts");
    /* harmony import */


    var _components_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/users/users-list/users-list.component */
    "./src/app/components/users/users-list/users-list.component.ts");
    /* harmony import */


    var _components_organisations_organisations_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/organisations/organisations.component */
    "./src/app/components/organisations/organisations.component.ts");
    /* harmony import */


    var _components_consultation_consultation_consultation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/consultation/consultation/consultation.component */
    "./src/app/components/consultation/consultation/consultation.component.ts");
    /* harmony import */


    var _components_configuration_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/configuration/configuration/configuration.component */
    "./src/app/components/configuration/configuration/configuration.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var ngx_captcha__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ngx-captcha */
    "./node_modules/ngx-captcha/__ivy_ngcc__/fesm2015/ngx-captcha.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts"); // import ngx-translate and the http loader
    // Cookie Consent
    // core module
    // shared module


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [primeng__WEBPACK_IMPORTED_MODULE_18__["MessageService"], primeng__WEBPACK_IMPORTED_MODULE_18__["TreeDragDropService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]],
      imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_39__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
        }
      }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["CheckboxModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["InputSwitchModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["TreeModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["DialogModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_39__["AppRoutingModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["PasswordModule"], ngx_captcha__WEBPACK_IMPORTED_MODULE_38__["NgxCaptchaModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["ToolbarModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["CardModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_36__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_34__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_23__["MatTreeModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], _components_organisations_organisations_component__WEBPACK_IMPORTED_MODULE_14__["OrganisationsComponent"], _components_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_13__["UsersListComponent"], _components_consumers_consumers_consumers_component__WEBPACK_IMPORTED_MODULE_11__["ConsumersComponent"], _components_providers_providers_providers_component__WEBPACK_IMPORTED_MODULE_12__["ProvidersComponent"], _components_consultation_consultation_consultation_component__WEBPACK_IMPORTED_MODULE_15__["ConsultationComponent"], _components_configuration_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_16__["ConfigurationComponent"]],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_39__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__["BsDropdownModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["CheckboxModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["InputSwitchModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["TreeModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["DialogModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_39__["AppRoutingModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["PasswordModule"], ngx_captcha__WEBPACK_IMPORTED_MODULE_38__["NgxCaptchaModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["ToolbarModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["CardModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_36__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_34__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_23__["MatTreeModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"], _components_organisations_organisations_component__WEBPACK_IMPORTED_MODULE_14__["OrganisationsComponent"], _components_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_13__["UsersListComponent"], _components_consumers_consumers_consumers_component__WEBPACK_IMPORTED_MODULE_11__["ConsumersComponent"], _components_providers_providers_providers_component__WEBPACK_IMPORTED_MODULE_12__["ProvidersComponent"], _components_consultation_consultation_consultation_component__WEBPACK_IMPORTED_MODULE_15__["ConsultationComponent"], _components_configuration_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_16__["ConfigurationComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_39__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["ModalModule"].forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
            }
          }), _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["CheckboxModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["InputSwitchModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["TreeModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["DialogModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_39__["AppRoutingModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["PasswordModule"], ngx_captcha__WEBPACK_IMPORTED_MODULE_38__["NgxCaptchaModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["ToolbarModule"], primeng__WEBPACK_IMPORTED_MODULE_18__["CardModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_36__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_34__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_33__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_23__["MatTreeModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltipModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"]],
          providers: [primeng__WEBPACK_IMPORTED_MODULE_18__["MessageService"], primeng__WEBPACK_IMPORTED_MODULE_18__["TreeDragDropService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './app/i18n/', '.json');
    }
    /***/

  },

  /***/
  "./src/app/components/configuration/configuration/configuration.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/configuration/configuration/configuration.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ConfigurationComponent */

  /***/
  function srcAppComponentsConfigurationConfigurationConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function () {
      return ConfigurationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ConfigurationComponent =
    /*#__PURE__*/
    function () {
      function ConfigurationComponent() {
        _classCallCheck(this, ConfigurationComponent);
      }

      _createClass(ConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConfigurationComponent;
    }();

    ConfigurationComponent.ɵfac = function ConfigurationComponent_Factory(t) {
      return new (t || ConfigurationComponent)();
    };

    ConfigurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfigurationComponent,
      selectors: [["app-configuration"]],
      decls: 2,
      vars: 0,
      template: function ConfigurationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "configuration works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-configuration',
          templateUrl: './configuration.component.html',
          styleUrls: ['./configuration.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/consultation/consultation/consultation.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/consultation/consultation/consultation.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ConsultationComponent */

  /***/
  function srcAppComponentsConsultationConsultationConsultationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsultationComponent", function () {
      return ConsultationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ConsultationComponent =
    /*#__PURE__*/
    function () {
      function ConsultationComponent() {
        _classCallCheck(this, ConsultationComponent);
      }

      _createClass(ConsultationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConsultationComponent;
    }();

    ConsultationComponent.ɵfac = function ConsultationComponent_Factory(t) {
      return new (t || ConsultationComponent)();
    };

    ConsultationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConsultationComponent,
      selectors: [["app-consultation"]],
      decls: 2,
      vars: 0,
      template: function ConsultationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "consultation works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uc3VsdGF0aW9uL2NvbnN1bHRhdGlvbi9jb25zdWx0YXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsultationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-consultation',
          templateUrl: './consultation.component.html',
          styleUrls: ['./consultation.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/consumers/consumers/consumers.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/consumers/consumers/consumers.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ConsumersComponent */

  /***/
  function srcAppComponentsConsumersConsumersConsumersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsumersComponent", function () {
      return ConsumersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ConsumersComponent =
    /*#__PURE__*/
    function () {
      function ConsumersComponent() {
        _classCallCheck(this, ConsumersComponent);
      }

      _createClass(ConsumersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConsumersComponent;
    }();

    ConsumersComponent.ɵfac = function ConsumersComponent_Factory(t) {
      return new (t || ConsumersComponent)();
    };

    ConsumersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConsumersComponent,
      selectors: [["app-consumers"]],
      decls: 2,
      vars: 0,
      template: function ConsumersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "consumers works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uc3VtZXJzL2NvbnN1bWVycy9jb25zdW1lcnMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsumersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-consumers',
          templateUrl: './consumers.component.html',
          styleUrls: ['./consumers.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fidus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../fidus.service */
    "./src/app/fidus.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/user-list"];
    };

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(fidus) {
        _classCallCheck(this, DashboardComponent);

        this.fidus = fidus;
        this.consumers = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Bienvenue au Dashboard!'); // this.fidus.fetchConsumers().subscribe(
          //   consumersFromDB => this.consumers = consumersFromDB
          // );
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fidus_service__WEBPACK_IMPORTED_MODULE_1__["FidusService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 7,
      vars: 3,
      consts: [[1, "consumer"], ["onclick", ""], [3, "routerLink"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Display User List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Consumers: ", ctx.consumers.length, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _fidus_service__WEBPACK_IMPORTED_MODULE_1__["FidusService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/organisations/organisations.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/organisations/organisations.component.ts ***!
    \*********************************************************************/

  /*! exports provided: OrganisationsComponent */

  /***/
  function srcAppComponentsOrganisationsOrganisationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganisationsComponent", function () {
      return OrganisationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrganisationsComponent =
    /*#__PURE__*/
    function () {
      function OrganisationsComponent() {
        _classCallCheck(this, OrganisationsComponent);
      }

      _createClass(OrganisationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrganisationsComponent;
    }();

    OrganisationsComponent.ɵfac = function OrganisationsComponent_Factory(t) {
      return new (t || OrganisationsComponent)();
    };

    OrganisationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrganisationsComponent,
      selectors: [["app-organisations"]],
      decls: 2,
      vars: 0,
      template: function OrganisationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "organisations works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JnYW5pc2F0aW9ucy9vcmdhbmlzYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrganisationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-organisations',
          templateUrl: './organisations.component.html',
          styleUrls: ['./organisations.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/providers/providers/providers.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/providers/providers/providers.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ProvidersComponent */

  /***/
  function srcAppComponentsProvidersProvidersProvidersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProvidersComponent", function () {
      return ProvidersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProvidersComponent =
    /*#__PURE__*/
    function () {
      function ProvidersComponent() {
        _classCallCheck(this, ProvidersComponent);
      }

      _createClass(ProvidersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProvidersComponent;
    }();

    ProvidersComponent.ɵfac = function ProvidersComponent_Factory(t) {
      return new (t || ProvidersComponent)();
    };

    ProvidersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProvidersComponent,
      selectors: [["app-providers"]],
      decls: 2,
      vars: 0,
      template: function ProvidersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "providers works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvdmlkZXJzL3Byb3ZpZGVycy9wcm92aWRlcnMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProvidersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-providers',
          templateUrl: './providers.component.html',
          styleUrls: ['./providers.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/users/users-list/users-list.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/users/users-list/users-list.component.ts ***!
    \*********************************************************************/

  /*! exports provided: UsersListComponent */

  /***/
  function srcAppComponentsUsersUsersListUsersListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersListComponent", function () {
      return UsersListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_helloworld_helloworld_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/helloworld/helloworld.service */
    "./src/app/services/helloworld/helloworld.service.ts");

    var UsersListComponent =
    /*#__PURE__*/
    function () {
      function UsersListComponent(hello) {
        _classCallCheck(this, UsersListComponent);

        this.hello = hello;
        this.title = 'Projet Fidus ';
        this.persons = [];
      }

      _createClass(UsersListComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.helloSub.unsubscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.helloSub = this.hello.getPerson().subscribe(function (data) {
            return _this.person = data;
          }, function (error) {
            return console.error('err---', error);
          });
        }
      }]);

      return UsersListComponent;
    }();

    UsersListComponent.ɵfac = function UsersListComponent_Factory(t) {
      return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_helloworld_helloworld_service__WEBPACK_IMPORTED_MODULE_1__["HelloworldService"]));
    };

    UsersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UsersListComponent,
      selectors: [["app-users-list"]],
      decls: 2,
      vars: 0,
      template: function UsersListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "users-list works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-users-list',
          templateUrl: './users-list.component.html',
          styleUrls: ['./users-list.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_helloworld_helloworld_service__WEBPACK_IMPORTED_MODULE_1__["HelloworldService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/footer/footer.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/components/footer/footer.component.ts ***!
    \************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppCoreComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/esm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function FooterComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FooterComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(translateService) {
        _classCallCheck(this, FooterComponent);

        this.translateService = translateService;
        this.translate = translateService;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 30,
      vars: 27,
      consts: [[1, "footer", "interior"], [4, "ngIf"], ["href", "tel: +32-2-801-00-00"], [1, "fas", "fa-phone"], ["target", "_blank", 3, "href"], [1, "fas", "fa-envelope"], [1, "far", "fa-copyright"], ["routerLink", "/terms-conditions", 3, "title"], ["href", "http://be.brussels/brussels?set_language=en", "title", "Brussels Capital Region"], ["alt", "Brussels", "src", "/assets/img/RBC-BHG.png", 1, "img-fluid"], ["href", "http://be.brussels/bruxelles?set_language=fr", "title", "Region Bruxelles Capital"], ["alt", "Bruxelles", "src", "/assets/img/RBC.png", 1, "img-fluid"], ["href", "http://be.brussels/brussel?set_language=nl", "title", "Brussels Hoofdstedelijk Gewest"], ["alt", "Brussel", "src", "/assets/img/BHG.png", 1, "img-fluid"], ["href", "http://bric.brussels", "title", "BRIC"], ["alt", "BRIC", "src", "/assets/img/logo-cirb-cibg.png", 1, "img-fluid"], ["href", "http://cirb.brussels", "title", "CIRB"], ["alt", "CIRB", "src", "/assets/img/logo-cirb-cibg.png", 1, "img-fluid"], ["href", "http://cibg.brussels", "title", "CIBG"], ["alt", "CIBG", "src", "/assets/img/logo-cirb-cibg.png", 1, "img-fluid"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterComponent_li_2_Template, 3, 0, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FooterComponent_li_3_Template, 3, 0, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FooterComponent_li_4_Template, 3, 0, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FooterComponent_li_5_Template, 3, 0, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FooterComponent_li_6_Template, 3, 0, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FooterComponent_li_7_Template, 3, 0, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Tel. +32 2 801 00 00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.translate.currentLang === "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.translate.currentLang === "fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.translate.currentLang === "nl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.translate.currentLang === "en");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.translate.currentLang === "fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.translate.currentLang === "nl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, "footer.bric"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 15, "footer.address"), " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 17, "footer.email"), "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 19, "footer.contact"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 21, "footer.rights"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 23, "footer.policy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 25, "footer.policy"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/navbar/navbar.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/components/navbar/navbar.component.ts ***!
    \************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppCoreComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/esm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_ui_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/ui-notification.service */
    "./src/app/core/services/ui-notification.service.ts");
    /* harmony import */


    var _services_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/spinner.service */
    "./src/app/services/spinner.service.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");

    function NavbarComponent_ul_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.notificationMessage);
      }
    }

    function NavbarComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "access.demand.details.myprofile.my.ad"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx_r10.myAccessDemandsCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "access.demand.details.myprofile.my.ad"), "");
      }
    }

    function NavbarComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "access.demand.details.title.requests"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx_r11.accessDemandsToProcessCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "access.demand.details.title.requests"), " ");
      }
    }

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(location, element, router, translateService, uiNotificationService, spinnerService) {
        _classCallCheck(this, NavbarComponent);

        this.element = element;
        this.router = router;
        this.translateService = translateService;
        this.uiNotificationService = uiNotificationService;
        this.spinnerService = spinnerService;
        this.mobile_menu_visible = 0;
        this.isMyProfile = false;
        this.notificationMessage = '';
        this.isDataMissingData = false;
        this.isCitizen = false;
        this.accessDemandsToProcessCount = 0;
        this.myAccessDemandsCount = 0; // @Output() languageChanged = new EventEmitter();

        this.isLoggedIn = false;
        this.location = location;
        this.sidebarVisible = false;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var navbar = this.element.nativeElement;
          this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
          this.router.events.subscribe(function (event) {
            // this.sidebarClose();
            _this2.$layer = document.getElementsByClassName('close-layer')[0];

            if (_this2.$layer) {
              _this2.$layer.remove();

              _this2.mobile_menu_visible = 0;
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "getTitle",
        value: function getTitle() {
          var titlee = this.location.prepareExternalUrl(this.location.path());

          if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
          }

          titlee = titlee.split('/').pop();

          for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
              return this.listTitles[item].title;
            }
          }

          return 'Dashboard';
        }
      }, {
        key: "changePreferredLanguage",
        value: function changePreferredLanguage(code) {
          // this.languageService.getLanguage(code).then(lang => this.currentLanguage = lang);
          this.translateService.use(code);
          localStorage.setItem('lang', code);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ui_notification_service__WEBPACK_IMPORTED_MODULE_4__["UiNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 13,
      vars: 9,
      consts: [["class", "navbar-nav", 4, "ngIf"], [1, "xs-hidden"], [4, "ngIf"], [3, "routerLink", "click"], [1, "navbar-nav"], [1, "nav-item"], [1, "fa", "fa-commenting", 2, "color", "#a21309"], ["routerLink", "", 3, "title"], ["matBadgeColor", "warn", "fontSet", "fas", "fontIcon", "fa-tasks fa-lg", 3, "matBadge"], ["routerLink", "/access-demand", 3, "title"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarComponent_ul_0_Template, 4, 1, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_li_2_Template, 6, 7, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NavbarComponent_li_3_Template, 6, 7, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_5_listener() {
            return ctx.changePreferredLanguage("fr");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_8_listener() {
            return ctx.changePreferredLanguage("nl");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() {
            return ctx.changePreferredLanguage("en");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "En");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notificationMessage !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMyProfile && ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMyProfile && ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.location.path());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx.translateService.currentLang == "fr" ? "link active" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.location.path());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx.translateService.currentLang == "nl" ? "link active" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.location.path());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx.translateService.currentLang == "en" ? "link active" : "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadge"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: ["a[_ngcontent-%COMP%]:hover{\r\n  color: #1c79c0;\r\n  text-decoration:underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYTpob3ZlcntcclxuICBjb2xvcjogIzFjNzljMDtcclxuICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _services_ui_notification_service__WEBPACK_IMPORTED_MODULE_4__["UiNotificationService"]
        }, {
          type: _services_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/page-not-found/page-not-found.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/core/components/page-not-found/page-not-found.component.ts ***!
    \****************************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppCoreComponentsPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/esm2015/ngx-translate-core.js");

    var PageNotFoundComponent =
    /*#__PURE__*/
    function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 13,
      vars: 9,
      consts: [[1, "row", "justify-content-center"], [1, "col-md-12", "text-center"], [1, "display-1", "d-block"], [1, "mb-4", "lead"], ["routerLink", "", "routerLinkActive", "active", "href", "#", 1, "nav-link"]],
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "page.not.found.title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, "page.not.found.message"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, "page.not.found.back"));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/sidebar/sidebar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/components/sidebar/sidebar.component.ts ***!
    \**************************************************************/

  /*! exports provided: ROUTES_PROFILE, ROUTES_PROFILE_WITHOUT_ACCOUNT, ROUTES, ROUTE_BE_ADMIN, SidebarComponent */

  /***/
  function srcAppCoreComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES_PROFILE", function () {
      return ROUTES_PROFILE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES_PROFILE_WITHOUT_ACCOUNT", function () {
      return ROUTES_PROFILE_WITHOUT_ACCOUNT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTE_BE_ADMIN", function () {
      return ROUTE_BE_ADMIN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_ui_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/ui-notification.service */
    "./src/app/core/services/ui-notification.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/esm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_spinner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/spinner.service */
    "./src/app/services/spinner.service.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function SidebarComponent_nav_16_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menuItem_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](menuItem_r8["class"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", menuItem_r8.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, menuItem_r8.path));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](menuItem_r8.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, menuItem_r8.title), " ");
      }
    }

    function SidebarComponent_nav_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_nav_16_a_1_Template, 4, 13, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.menuItems);
      }
    }

    var ROUTES_PROFILE = [{
      path: 'myprofile/dashboard',
      title: 'header.myDashboard',
      icon: 'fas fa-home',
      "class": 'mdl-navigation__link'
    }, {
      path: 'myprofile/update',
      title: 'access.demand.details.myprofile.update',
      icon: 'fas fa-user-edit',
      "class": 'mdl-navigation__link'
    }, {
      path: 'myprofile/access-demand',
      title: 'access.demand.details.myprofile.create.ad',
      icon: 'far fa-question-circle',
      "class": 'mdl-navigation__link'
    }, {
      path: 'myprofile/all-access-demands',
      title: 'access.demand.details.myprofile.my.ad',
      icon: 'fa fa-tasks',
      "class": 'mdl-navigation__link'
    }];
    var ROUTES_PROFILE_WITHOUT_ACCOUNT = [{
      path: 'myprofile/update',
      title: 'access.demand.details.myprofile.update',
      icon: 'fas fa-user-edit',
      "class": 'mdl-navigation__link'
    }];
    var ROUTES = [{
      path: 'dashboard',
      title: 'sidebar.dashboard',
      icon: 'fas fa-home',
      "class": 'mdl-navigation__link'
    }, {
      path: 'user-management',
      title: 'sidebar.users',
      icon: 'fas fa-users-cog',
      "class": 'mdl-navigation__link'
    }, {
      path: 'access-demand',
      title: 'access.demand.details.list',
      icon: 'fas fa-tasks',
      "class": 'mdl-navigation__link'
    }, {
      path: 'organisation-management',
      title: 'sidebar.organisations',
      icon: 'fas fa-city',
      "class": 'mdl-navigation__link'
    }, {
      path: 'role-management',
      title: 'sidebar.roles',
      icon: 'fas fa-user-tag',
      "class": 'mdl-navigation__link'
    }, {
      path: 'resource-management',
      title: 'sidebar.resources',
      icon: 'fas fa-desktop',
      "class": 'mdl-navigation__link'
    }];
    var ROUTE_BE_ADMIN = [{
      path: 'stored-event-management/stored-event-list',
      title: 'sidebar.eventstore',
      icon: 'fas fa-user-secret',
      "class": 'mdl-navigation__link'
    }];

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(location, router, uiNotificationService, translateService, spinnerService) {
        _classCallCheck(this, SidebarComponent);

        this.router = router;
        this.uiNotificationService = uiNotificationService;
        this.translateService = translateService;
        this.spinnerService = spinnerService; // @Output() languageChanged = new EventEmitter();

        this.isLoggedIn = false;
        this.isMyProfile = false;
        this.location = location;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.spinnerService.show();
          this.uiNotificationService.updateMenuItems(ROUTES);
          this.uiNotificationService.menuItems$.subscribe(function (data) {
            _this3.menuItems = data;
          });
          this.spinnerService.hide();
        }
      }, {
        key: "isMobileMenu",
        value: function isMobileMenu() {
          if ($(window).width() > 991) {
            return false;
          }

          return true;
        }
      }, {
        key: "changePreferredLanguage",
        value: function changePreferredLanguage(code) {
          // this.languageService.getLanguage(code).then(lang => this.currentLanguage = lang);
          this.translateService.use(code);
          localStorage.setItem('lang', code);
        }
      }, {
        key: "updateMyProfilePage",
        value: function updateMyProfilePage() {// this.router.navigate(['/myprofile/update']);
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ui_notification_service__WEBPACK_IMPORTED_MODULE_3__["UiNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 17,
      vars: 7,
      consts: [[1, "demo-drawer-header"], ["href", "#"], ["src", "/assets/img/IAM.png", "alt", "IAM", "title", "IAM", 1, "img-fluid"], [1, "xs-visible"], ["routerLink", ""], ["fontSet", "fas", "fontIcon", "fa-user fa-lg"], [1, "lang"], [3, "routerLink", "click"], ["class", "mdl-navigation", 4, "ngIf"], [1, "mdl-navigation"], ["routerLinkActive", "active", 3, "class", "id", "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "id", "routerLink"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_8_listener() {
            return ctx.changePreferredLanguage("fr");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Fr ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_11_listener() {
            return ctx.changePreferredLanguage("nl");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Nl ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_14_listener() {
            return ctx.changePreferredLanguage("en");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " En ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SidebarComponent_nav_16_Template, 2, 1, "nav", 8);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.location.path());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx.translateService.currentLang == "fr" ? "link active" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.location.path());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx.translateService.currentLang == "nl" ? "link active" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.location.path());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx.translateService.currentLang == "en" ? "link active" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_ui_notification_service__WEBPACK_IMPORTED_MODULE_3__["UiNotificationService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _services_spinner_service__WEBPACK_IMPORTED_MODULE_5__["SpinnerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/ui-notification/ui-notification.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/core/components/ui-notification/ui-notification.component.ts ***!
    \******************************************************************************/

  /*! exports provided: UiNotificationComponent */

  /***/
  function srcAppCoreComponentsUiNotificationUiNotificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiNotificationComponent", function () {
      return UiNotificationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_ui_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/ui-notification.service */
    "./src/app/core/services/ui-notification.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng.js");

    var UiNotificationComponent =
    /*#__PURE__*/
    function () {
      function UiNotificationComponent(uiNotificationService, router) {
        _classCallCheck(this, UiNotificationComponent);

        this.uiNotificationService = uiNotificationService;
        this.router = router;
        this.notifications = [];
      }

      _createClass(UiNotificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.uiNotificationService.notification$.subscribe(function (data) {
            _this4.notifications = data;
          });
        }
      }, {
        key: "deleteMessage",
        value: function deleteMessage(message) {
          this.uiNotificationService.deleteMessage(message);
        }
      }]);

      return UiNotificationComponent;
    }();

    UiNotificationComponent.ɵfac = function UiNotificationComponent_Factory(t) {
      return new (t || UiNotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ui_notification_service__WEBPACK_IMPORTED_MODULE_1__["UiNotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    UiNotificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UiNotificationComponent,
      selectors: [["app-ui-notification"]],
      decls: 1,
      vars: 0,
      consts: [[3, "onClose"]],
      template: function UiNotificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-toast", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClose", function UiNotificationComponent_Template_p_toast_onClose_0_listener($event) {
            return ctx.deleteMessage($event.message);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [primeng__WEBPACK_IMPORTED_MODULE_3__["Toast"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy91aS1ub3RpZmljYXRpb24vdWktbm90aWZpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiNotificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ui-notification',
          templateUrl: './ui-notification.component.html',
          styleUrls: ['./ui-notification.component.css']
        }]
      }], function () {
        return [{
          type: _services_ui_notification_service__WEBPACK_IMPORTED_MODULE_1__["UiNotificationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/esm2015/ngx-translate-core.js");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/core/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/core/components/footer/footer.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/core/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component */
    "./src/app/core/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _components_ui_notification_ui_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/ui-notification/ui-notification.component */
    "./src/app/core/components/ui-notification/ui-notification.component.ts");
    /* harmony import */


    var _services_activated_route_stub_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/activated-route-stub.service */
    "./src/app/core/services/activated-route-stub.service.ts");
    /* harmony import */


    var _services_http_error_handler_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/http-error-handler.service */
    "./src/app/core/services/http-error-handler.service.ts");
    /* harmony import */


    var _services_ui_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/ui-notification.service */
    "./src/app/core/services/ui-notification.service.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _services_component_can_deactivate_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/component-can-deactivate.directive */
    "./src/app/core/services/component-can-deactivate.directive.ts");
    /* harmony import */


    var primeng__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! primeng */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var CoreModule =
    /*#__PURE__*/
    function () {
      function CoreModule(parentModule) {
        _classCallCheck(this, CoreModule);

        if (parentModule) {
          throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
      }

      _createClass(CoreModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: CoreModule
          };
        }
      }]);

      return CoreModule;
    }();

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12));
      },
      providers: [_services_http_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["HttpErrorHandlerService"], _services_activated_route_stub_service__WEBPACK_IMPORTED_MODULE_9__["ActivatedRouteStubService"], _services_ui_notification_service__WEBPACK_IMPORTED_MODULE_11__["UiNotificationService"], _services_component_can_deactivate_directive__WEBPACK_IMPORTED_MODULE_14__["CanDeactivateGuard"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"], primeng__WEBPACK_IMPORTED_MODULE_15__["ToastModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        declarations: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"], _components_ui_notification_ui_notification_component__WEBPACK_IMPORTED_MODULE_8__["UiNotificationComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"], primeng__WEBPACK_IMPORTED_MODULE_15__["ToastModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"]],
        exports: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"], _components_ui_notification_ui_notification_component__WEBPACK_IMPORTED_MODULE_8__["UiNotificationComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"], primeng__WEBPACK_IMPORTED_MODULE_15__["ToastModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"]],
          providers: [_services_http_error_handler_service__WEBPACK_IMPORTED_MODULE_10__["HttpErrorHandlerService"], _services_activated_route_stub_service__WEBPACK_IMPORTED_MODULE_9__["ActivatedRouteStubService"], _services_ui_notification_service__WEBPACK_IMPORTED_MODULE_11__["UiNotificationService"], _services_component_can_deactivate_directive__WEBPACK_IMPORTED_MODULE_14__["CanDeactivateGuard"]],
          declarations: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"], _components_ui_notification_ui_notification_component__WEBPACK_IMPORTED_MODULE_8__["UiNotificationComponent"]],
          exports: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"], _components_ui_notification_ui_notification_component__WEBPACK_IMPORTED_MODULE_8__["UiNotificationComponent"]]
        }]
      }], function () {
        return [{
          type: CoreModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/activated-route-stub.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/core/services/activated-route-stub.service.ts ***!
    \***************************************************************/

  /*! exports provided: ActivatedRouteStubService */

  /***/
  function srcAppCoreServicesActivatedRouteStubServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivatedRouteStubService", function () {
      return ActivatedRouteStubService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ActivatedRouteStubService =
    /*#__PURE__*/
    function () {
      function ActivatedRouteStubService() {
        _classCallCheck(this, ActivatedRouteStubService);

        // Observable that contains a map of the parameters
        this.subjectParamMap = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(_angular_router__WEBPACK_IMPORTED_MODULE_2__["convertToParamMap"])(this.testParamMap));
        this.paramMap = this.subjectParamMap.asObservable(); // Observable that contains a map of the query parameters

        this.subjectQueryParamMap = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](Object(_angular_router__WEBPACK_IMPORTED_MODULE_2__["convertToParamMap"])(this.testParamMap));
        this.queryParamMap = this.subjectQueryParamMap.asObservable();
      }

      _createClass(ActivatedRouteStubService, [{
        key: "testParamMap",
        get: function get() {
          return this._testParamMap;
        },
        set: function set(params) {
          this._testParamMap = Object(_angular_router__WEBPACK_IMPORTED_MODULE_2__["convertToParamMap"])(params);
          this.subjectParamMap.next(this._testParamMap);
        }
      }, {
        key: "testQueryParamMap",
        get: function get() {
          return this._testQueryParamMap;
        },
        set: function set(params) {
          this._testQueryParamMap = Object(_angular_router__WEBPACK_IMPORTED_MODULE_2__["convertToParamMap"])(params);
          this.subjectQueryParamMap.next(this._testQueryParamMap);
        }
      }, {
        key: "snapshot",
        get: function get() {
          return {
            paramMap: this.testParamMap,
            queryParamMap: this.testQueryParamMap
          };
        }
      }]);

      return ActivatedRouteStubService;
    }();

    ActivatedRouteStubService.ɵfac = function ActivatedRouteStubService_Factory(t) {
      return new (t || ActivatedRouteStubService)();
    };

    ActivatedRouteStubService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ActivatedRouteStubService,
      factory: ActivatedRouteStubService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivatedRouteStubService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/component-can-deactivate.directive.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/core/services/component-can-deactivate.directive.ts ***!
    \*********************************************************************/

  /*! exports provided: ComponentCanDeactivateDirective, FormCanDeactivate, CanDeactivateGuard */

  /***/
  function srcAppCoreServicesComponentCanDeactivateDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentCanDeactivateDirective", function () {
      return ComponentCanDeactivateDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormCanDeactivate", function () {
      return FormCanDeactivate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function () {
      return CanDeactivateGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ComponentCanDeactivateDirective =
    /*#__PURE__*/
    function () {
      function ComponentCanDeactivateDirective() {
        _classCallCheck(this, ComponentCanDeactivateDirective);
      }

      _createClass(ComponentCanDeactivateDirective, [{
        key: "unloadNotification",
        value: function unloadNotification($event) {
          if (!this.canDeactivate()) {
            $event.returnValue = true;
          }
        }
      }]);

      return ComponentCanDeactivateDirective;
    }();

    ComponentCanDeactivateDirective.ɵfac = function ComponentCanDeactivateDirective_Factory(t) {
      return new (t || ComponentCanDeactivateDirective)();
    };

    ComponentCanDeactivateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ComponentCanDeactivateDirective,
      hostBindings: function ComponentCanDeactivateDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function ComponentCanDeactivateDirective_beforeunload_HostBindingHandler($event) {
            return ctx.unloadNotification($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentCanDeactivateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
      }], null, {
        unloadNotification: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeunload', ['$event']]
        }]
      });
    })();

    var FormCanDeactivate =
    /*#__PURE__*/
    function (_ComponentCanDeactiva) {
      _inherits(FormCanDeactivate, _ComponentCanDeactiva);

      var _super = _createSuper(FormCanDeactivate);

      function FormCanDeactivate() {
        _classCallCheck(this, FormCanDeactivate);

        return _super.apply(this, arguments);
      }

      _createClass(FormCanDeactivate, [{
        key: "canDeactivate",
        value: function canDeactivate() {
          return this.form.submitted || !this.form.dirty;
        }
      }]);

      return FormCanDeactivate;
    }(ComponentCanDeactivateDirective);

    var CanDeactivateGuard =
    /*#__PURE__*/
    function () {
      function CanDeactivateGuard() {
        _classCallCheck(this, CanDeactivateGuard);
      }

      _createClass(CanDeactivateGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component) {
          if (!component.canDeactivate()) {
            if (confirm('You have unsaved changes! If you leave, your changes will be lost.')) {
              return true;
            } else {
              return false;
            }
          }

          return true;
        }
      }]);

      return CanDeactivateGuard;
    }();

    CanDeactivateGuard.ɵfac = function CanDeactivateGuard_Factory(t) {
      return new (t || CanDeactivateGuard)();
    };

    CanDeactivateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CanDeactivateGuard,
      factory: CanDeactivateGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanDeactivateGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/http-error-handler.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/services/http-error-handler.service.ts ***!
    \*************************************************************/

  /*! exports provided: HttpErrorHandlerService */

  /***/
  function srcAppCoreServicesHttpErrorHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorHandlerService", function () {
      return HttpErrorHandlerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var HttpErrorHandlerService =
    /*#__PURE__*/
    function () {
      function HttpErrorHandlerService() {
        var _this5 = this;

        _classCallCheck(this, HttpErrorHandlerService);

        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function () {
          var serviceName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          return function () {
            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return _this5.handleError(serviceName, operation, result);
          };
        };
      }
      /**
       * Returns a function that handles Http operation failures.
       * This error handler lets the app continue to run as if no error occurred.
       * @param serviceName = name of the data service that attempted the operation
       * @param operation - name of the operation that failed
       * @param result - optional value to return as the observable result
       */


      _createClass(HttpErrorHandlerService, [{
        key: "handleError",
        value: function handleError() {
          var serviceName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'operation';
          var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return function (error) {
            console.error(error); // log to console instead
            // TODO: send the error to remote logging infrastructure
            // Let the app keep running by returning a safe result.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
          };
        }
      }]);

      return HttpErrorHandlerService;
    }();

    HttpErrorHandlerService.ɵfac = function HttpErrorHandlerService_Factory(t) {
      return new (t || HttpErrorHandlerService)();
    };

    HttpErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpErrorHandlerService,
      factory: HttpErrorHandlerService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/ui-notification.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/services/ui-notification.service.ts ***!
    \**********************************************************/

  /*! exports provided: UiNotificationService */

  /***/
  function srcAppCoreServicesUiNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiNotificationService", function () {
      return UiNotificationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_notification_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/notification-config */
    "./src/app/models/notification-config.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/esm2015/ngx-translate-core.js");
    /* harmony import */


    var _services_error_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/error-message.service */
    "./src/app/services/error-message.service.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-api.js"); // @Injectable({
    //   providedIn: 'root'
    // })


    var UiNotificationService =
    /*#__PURE__*/
    function () {
      function UiNotificationService(translateService, errorMessageService, messageService) {
        _classCallCheck(this, UiNotificationService);

        this.translateService = translateService;
        this.errorMessageService = errorMessageService;
        this.messageService = messageService;
        this.SEVERITY = {
          INFO: 'info',
          SUCCESS: 'success',
          WARN: 'warn',
          ERROR: 'error'
        };
        this.DEFAULT_SUMMARY = {
          INFO: 'global.info',
          SUCCESS: 'global.success',
          WARN: 'global.warning',
          ERROR: 'global.error'
        };
        this.DEFAULT_DETAIL = {
          ERROR: 'errorMessage.ErrorOccurred'
        };
        this.notifications = [];
        this.menuItems = [];
        this.notificationsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.menuItemsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.notification$ = this.notificationsSubject.asObservable();
        this.menuItems$ = this.menuItemsSubject.asObservable();
      }

      _createClass(UiNotificationService, [{
        key: "add",
        value: function add(severity, notification, param) {
          // Object assign is necessary to set default value to properties that may not have been set. ex: unique and translate.
          notification = Object.assign(new _models_notification_config__WEBPACK_IMPORTED_MODULE_2__["NotificationConfig"](), notification);
          var message = this.createMessage(severity, notification, param);

          if (!notification.unique) {
            return this.addMessage(message, notification.life);
          } else {
            var existingMessage = this.notifications.find(function (m) {
              return m.detail === message.detail && m.severity === message.severity;
            });

            if (existingMessage) {
              this.deleteMessage(existingMessage);
            }

            return this.addMessage(message, notification.life);
          }
        }
      }, {
        key: "createMessage",
        value: function createMessage(severity, notification, param) {
          var message = {
            severity: severity
          };

          if (param === undefined) {
            param = '';
          }

          if (notification.hasOwnProperty('clearOnRouteChange')) {
            message.clearOnRouteChange = notification.clearOnRouteChange;
          } else {
            message.clearOnRouteChange = severity !== this.SEVERITY.SUCCESS;
          }

          if (notification.life) {
            message.life = notification.life;
          }

          if (!notification.summary) {
            notification.summary = this.getDefaultSummary(severity, notification.translate);
          }

          if (notification.translate) {
            if (notification.summaryParams) {
              this.translateService.get(notification.summary, notification.summaryParams).subscribe(function (response) {
                return message.summary = response;
              });
            } else {
              this.translateService.get(notification.summary).subscribe(function (response) {
                message.summary = response;
              });
            }

            if (notification.detailParams) {
              if (notification.errorMessage) {
                message.detail = this.errorMessageService.getMessage(notification.detail, notification.detailParams) + ' ' + param;
              } else {
                this.translateService.get(notification.detail).subscribe(function (response) {
                  return message.detail = response;
                });
              }
            } else {
              if (notification.errorMessage) {
                message.detail = this.errorMessageService.getMessage(notification.detail) + ' ' + param;
              } else {
                this.translateService.get(notification.detail).subscribe(function (response) {
                  return message.detail = response + ' ' + param;
                });
              }
            }
          } else {
            message.summary = notification.summary;
            message.detail = notification.detail + ' ' + param;
          }

          return message;
        }
      }, {
        key: "addMessage",
        value: function addMessage(message, life) {
          var _this6 = this;

          this.notifications = [].concat(_toConsumableArray(this.notifications), [message]);
          this.notificationsSubject.next(this.notifications);

          if (life) {
            setTimeout(function () {
              _this6.deleteMessage(message);
            }, life);
          }

          this.messageService.add(message);
          return message;
        }
      }, {
        key: "updateMenuItems",
        value: function updateMenuItems(items) {
          this.menuItems = items.filter(function (menuItem) {
            return menuItem;
          });
          this.menuItemsSubject.next(this.menuItems);
          return items;
        }
      }, {
        key: "getDefaultSummary",
        value: function getDefaultSummary(severity, translate) {
          var summary;

          if (translate) {
            // actual translation done later
            summary = this.DEFAULT_SUMMARY[severity.toUpperCase()];
          } else {
            // translation won't happen later so do it now
            this.translateService.get(this.DEFAULT_SUMMARY[severity.toUpperCase()]).subscribe(function (response) {
              return summary = response;
            });
          }

          return summary;
        }
      }, {
        key: "info",
        value: function info(notification) {
          notification.life = 4000;
          return this.add(this.SEVERITY.INFO, notification);
        }
      }, {
        key: "success",
        value: function success(notification) {
          if (!notification.life && notification.life !== 0) {
            notification.life = 4000;
          }

          return this.add(this.SEVERITY.SUCCESS, notification);
        }
      }, {
        key: "warn",
        value: function warn(notification) {
          notification.life = 4000;
          return this.add(this.SEVERITY.WARN, notification);
        }
      }, {
        key: "error",
        value: function error(notification, param) {
          var severity = this.SEVERITY.ERROR;
          notification.life = 12000;

          if (!notification) {
            return this.add(severity, {
              detail: this.DEFAULT_DETAIL.ERROR
            }, param);
          } else {
            return this.add(severity, notification, param);
          }
        }
      }, {
        key: "notification",
        value: function notification(severity, _notification, param) {
          switch (severity) {
            case this.SEVERITY.ERROR:
              this.error(_notification, param);
              break;

            case this.SEVERITY.WARN:
              this.warn(_notification);
              break;

            case this.SEVERITY.INFO:
              this.info(_notification);
              break;

            case this.SEVERITY.SUCCESS:
              this.success(_notification);
              break;

            default:
              console.error(' Invalid notification type/severity : ' + severity);
          }
        }
      }, {
        key: "clearOnRouteChange",
        value: function clearOnRouteChange() {
          // only keep messages that explicity have 'clearOnRouteChange' set to false.
          this.notifications = this.notifications.filter(function (message) {
            if (message.hasOwnProperty('clearOnRouteChange') && !message.clearOnRouteChange) {
              return message;
            }
          });
          this.notificationsSubject.next(this.notifications);
        }
      }, {
        key: "deleteMessage",
        value: function deleteMessage(message) {
          // this condition is necessary otherwise this.notifications is always recreated when calling deleteMessage
          // event when there is not to delete which can cause visual glitch
          if (this.notifications.find(function (m) {
            return m === message;
          })) {
            this.notifications = this.notifications.filter(function (m) {
              return m !== message;
            });
            this.notificationsSubject.next(this.notifications);
          }
        }
      }, {
        key: "closeMessage",
        value: function closeMessage() {
          this.notifications = [];
          this.notificationsSubject.next(this.notifications);
        }
      }, {
        key: "clearWarningMessages",
        value: function clearWarningMessages() {
          this.notifications = this.notifications.filter(function (n) {
            return n.severity !== 'warn';
          });
          this.notificationsSubject.next(this.notifications);
        }
      }, {
        key: "removeErrorMessage",
        value: function removeErrorMessage(notification) {
          var message = this.createMessage(this.SEVERITY.ERROR, notification, '');

          if (this.notifications.find(function (m) {
            return m.detail === message.detail;
          })) {
            this.notifications = this.notifications.filter(function (m) {
              return m.detail !== message.detail;
            });
            this.notificationsSubject.next(this.notifications);
          }
        }
      }]);

      return UiNotificationService;
    }();

    UiNotificationService.ɵfac = function UiNotificationService_Factory(t) {
      return new (t || UiNotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_error_message_service__WEBPACK_IMPORTED_MODULE_4__["ErrorMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]));
    };

    UiNotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UiNotificationService,
      factory: UiNotificationService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiNotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _services_error_message_service__WEBPACK_IMPORTED_MODULE_4__["ErrorMessageService"]
        }, {
          type: primeng_api__WEBPACK_IMPORTED_MODULE_5__["MessageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/fidus.service.ts":
  /*!**********************************!*\
    !*** ./src/app/fidus.service.ts ***!
    \**********************************/

  /*! exports provided: FidusService */

  /***/
  function srcAppFidusServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FidusService", function () {
      return FidusService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var FidusService =
    /*#__PURE__*/
    function () {
      function FidusService(http) {
        _classCallCheck(this, FidusService);

        this.http = http;
        this.basePath = 'http://localhost:8081';
      }

      _createClass(FidusService, [{
        key: "fetchConsumers",
        value: function fetchConsumers() {
          return this.http.get("".concat(this.basePath, "/consumers"));
        }
      }]);

      return FidusService;
    }();

    FidusService.ɵfac = function FidusService_Factory(t) {
      return new (t || FidusService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    FidusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FidusService,
      factory: FidusService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FidusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/notification-config.ts":
  /*!***********************************************!*\
    !*** ./src/app/models/notification-config.ts ***!
    \***********************************************/

  /*! exports provided: NotificationConfig */

  /***/
  function srcAppModelsNotificationConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationConfig", function () {
      return NotificationConfig;
    });

    var NotificationConfig = function NotificationConfig() {
      _classCallCheck(this, NotificationConfig);

      if (!this.hasOwnProperty('translate')) {
        this.translate = true;
      }

      if (!this.hasOwnProperty('unique')) {
        this.unique = true;
      }
    };
    /***/

  },

  /***/
  "./src/app/services/abstract-base-service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/abstract-base-service.ts ***!
    \***************************************************/

  /*! exports provided: AbstractBaseService */

  /***/
  function srcAppServicesAbstractBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractBaseService", function () {
      return AbstractBaseService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AbstractBaseService =
    /*#__PURE__*/
    function () {
      function AbstractBaseService(http, backApiServiceUrl) {
        _classCallCheck(this, AbstractBaseService);

        this.http = http;
        this.backApiServiceUrl = backApiServiceUrl; // this.accessToken = this.briamOidcService.accessToken;
        // this.briamOidcService.isAuthenticated$.subscribe(isAuth => {
        //   if (isAuth) {
        //     this.connectedUserService.getCurrentUser().subscribe(user => {
        //       this.connectedUser = user;
        //     });
        //   }
        // });
      }

      _createClass(AbstractBaseService, [{
        key: "buildRestUrl",
        value: function buildRestUrl(urlSuffix) {
          return this.backApiServiceUrl + urlSuffix;
        }
      }, {
        key: "callGet",
        value: function callGet(urlSuffix, parameters, options) {
          /*
          if (parameters == null) {
            options = this.initOptions(options, true);
          } else {
            options = this.initOptions(options, true, parameters);
          }
          */
          options = this.initOptions(options, true, parameters);
          return this.http.get(this.buildRestUrl(urlSuffix), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
      }, {
        key: "callDelete",
        value: function callDelete(urlSuffix, parameters, options) {
          options = this.initOptions(options, true, parameters);
          return this.http["delete"](this.buildRestUrl(urlSuffix), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
      }, {
        key: "callPost",
        value: function callPost(urlSuffix, body, options) {
          options = this.initOptions(options, true);
          return this.http.post(this.buildRestUrl(urlSuffix), body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
      }, {
        key: "callPut",
        value: function callPut(urlSuffix, body, options) {
          options = this.initOptions(options, true);
          return this.http.put(this.buildRestUrl(urlSuffix), body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError));
        }
      }, {
        key: "initOptions",
        value: function initOptions(options, withContentType, parameters) {
          /* Normally no longer necessary with auto refresh
          if (!this.briamOidcService.hasValidAccessToken()) {
            console.log('API service : accesst token invalid so Silent refresh called!!');
            // TODO is this necessary ??
            // this.briamOidcService.getOAuthService().oidc = false;
            this.briamOidcService.refresh();
          }*/
          if (!options) {
            options = {
              headers: {
                'Accept': 'application/json'
              }
            };
          }

          if (!options.hasOwnProperty('headers')) {
            options['headers'] = {
              'Accept': 'application/json'
            };
          }

          if (!options.headers.hasOwnProperty('Accept')) {
            options['headers']['Accept'] = 'application/json';
          }

          if (withContentType && !options.headers.hasOwnProperty('Content-Type')) {
            options['headers']['Content-Type'] = 'application/json';
          } // if (!options.hasOwnProperty('withCredentials')) {
          //   options['withCredentials'] = true;
          // }


          if (parameters) {
            options['params'] = parameters;
          }

          return options;
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          // In a real world app, we might use a remote logging infrastructure
          // We'd also dig deeper into the error to get a better message
          var errMsg = error.message ? error.message : error.status ? "".concat(error.status, " - ").concat(error.statusText) : 'Server error';

          if (error.error.messages) {
            errMsg = 'Backend error with code : ' + error.error.messages[0].code + ' meaning : ' + error.error.messages[0].description;
          }

          console.error(errMsg + ' : ', error); // log to console instead

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }
      }, {
        key: "extractData",
        value: function extractData(data) {
          if (data === null || data === undefined) {
            return null;
          } else {
            if (data.response === undefined || data.response === null) {
              return data;
            }

            return data.response;
          }
        }
      }]);

      return AbstractBaseService;
    }();
    /***/

  },

  /***/
  "./src/app/services/error-message.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/error-message.service.ts ***!
    \***************************************************/

  /*! exports provided: ErrorMessageService */

  /***/
  function srcAppServicesErrorMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorMessageService", function () {
      return ErrorMessageService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/esm2015/ngx-translate-core.js");

    var ErrorMessageService =
    /*#__PURE__*/
    function () {
      function ErrorMessageService(translateService) {
        var _this7 = this;

        _classCallCheck(this, ErrorMessageService);

        this.translateService = translateService;
        this.config = {
          'required': function required() {
            return _this7.translateService.get('errorMessage.required').subscribe(function (response) {
              return response;
            });
          },
          'email.invalid': function emailInvalid() {
            return _this7.translateService.get('errorMessage.email.invalid').subscribe(function (response) {
              return response;
            });
          },
          '1201': function _(code) {
            return _this7.translateService.get('errorMessage.1201', {
              code: code
            }).subscribe(function (response) {
              return response;
            });
          }
        };
      }

      _createClass(ErrorMessageService, [{
        key: "getMessage",
        value: function getMessage(errorCode, param) {
          var result = this.config[errorCode];

          if (result) {
            return result(param);
          } else {
            console.warn('error code not found : ', errorCode);
          }
        }
      }]);

      return ErrorMessageService;
    }();

    ErrorMessageService.ɵfac = function ErrorMessageService_Factory(t) {
      return new (t || ErrorMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    ErrorMessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorMessageService,
      factory: ErrorMessageService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/helloworld/helloworld.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/services/helloworld/helloworld.service.ts ***!
    \***********************************************************/

  /*! exports provided: HelloworldService */

  /***/
  function srcAppServicesHelloworldHelloworldServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelloworldService", function () {
      return HelloworldService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _abstract_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../abstract-base-service */
    "./src/app/services/abstract-base-service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HelloworldService =
    /*#__PURE__*/
    function (_abstract_base_servic) {
      _inherits(HelloworldService, _abstract_base_servic);

      var _super2 = _createSuper(HelloworldService);

      function HelloworldService(http) {
        var _this8;

        _classCallCheck(this, HelloworldService);

        _this8 = _super2.call(this, http, 'http://localhost:8081/fidus-monitoring/');
        _this8.baseUrl = 'welcome/';
        return _this8;
      }

      _createClass(HelloworldService, [{
        key: "helloWorld",
        value: function helloWorld() {
          return this.http.get('http://localhost:8081/');
        }
      }, {
        key: "listUsers",
        value: function listUsers() {
          return this.http.get('http://localhost:8081/users');
        }
      }, {
        key: "getPerson",
        value: function getPerson() {
          var uri = 'person';
          return this.callGet(uri).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            console.log('Hello Wget personorld ::::', resp);
            return resp;
          }));
        }
      }]);

      return HelloworldService;
    }(_abstract_base_service__WEBPACK_IMPORTED_MODULE_2__["AbstractBaseService"]);

    HelloworldService.ɵfac = function HelloworldService_Factory(t) {
      return new (t || HelloworldService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    HelloworldService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HelloworldService,
      factory: HelloworldService.ɵfac,
      providedIn: 'root' //ce parametre c'est pour dire que cette class est un service injectable

    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelloworldService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root' //ce parametre c'est pour dire que cette class est un service injectable

        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/spinner.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/spinner.service.ts ***!
    \*********************************************/

  /*! exports provided: SpinnerService */

  /***/
  function srcAppServicesSpinnerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerService", function () {
      return SpinnerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SpinnerService =
    /*#__PURE__*/
    function () {
      function SpinnerService() {
        _classCallCheck(this, SpinnerService);

        this._visible = false;
      }

      _createClass(SpinnerService, [{
        key: "show",
        value: function show() {
          this._visible = true;
        }
      }, {
        key: "hide",
        value: function hide() {
          this._visible = false;
        }
      }, {
        key: "visible",
        get: function get() {
          return this._visible;
        }
      }]);

      return SpinnerService;
    }();

    SpinnerService.ɵfac = function SpinnerService_Factory(t) {
      return new (t || SpinnerService)();
    };

    SpinnerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SpinnerService,
      factory: SpinnerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/dialog/dialog-yess-no/dialog-yess-no.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/shared/components/dialog/dialog-yess-no/dialog-yess-no.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: DialogYessNoComponent */

  /***/
  function srcAppSharedComponentsDialogDialogYessNoDialogYessNoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogYessNoComponent", function () {
      return DialogYessNoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/esm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var DialogYessNoComponent =
    /*#__PURE__*/
    function () {
      function DialogYessNoComponent(translateService, dialogRef, data) {
        _classCallCheck(this, DialogYessNoComponent);

        this.translateService = translateService;
        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DialogYessNoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dialogRef._containerInstance._config.maxWidth = 120;
        }
      }]);

      return DialogYessNoComponent;
    }();

    DialogYessNoComponent.ɵfac = function DialogYessNoComponent_Factory(t) {
      return new (t || DialogYessNoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
    };

    DialogYessNoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogYessNoComponent,
      selectors: [["app-dialog-yess-no"]],
      viewQuery: function DialogYessNoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 15,
      vars: 14,
      consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", 1, "row"], ["mat-flat-button", "", "color", "primary", 1, "btn", "mat-accent", 3, "mat-dialog-close"], [1, "fa", "fa-check"], ["mat-flat-button", "", "color", "warn", "cdkFocusInitial", "", 1, "btn-delete", 3, "mat-dialog-close"], [1, "fa", "fa-window-close"]],
      template: function DialogYessNoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx.data.title), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, ctx.data.message), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, "global.yes"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 12, "global.no"), "");
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy9kaWFsb2cteWVzcy1uby9kaWFsb2cteWVzcy1uby5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogYessNoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog-yess-no',
          templateUrl: './dialog-yess-no.component.html',
          styleUrls: ['./dialog-yess-no.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/spinner/spinner.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
    \****************************************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppSharedComponentsSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/spinner.service */
    "./src/app/services/spinner.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SpinnerComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SpinnerComponent =
    /*#__PURE__*/
    function () {
      function SpinnerComponent(spinnerService) {
        _classCallCheck(this, SpinnerComponent);

        this.spinnerService = spinnerService;
        this.visible = false;
      }

      _createClass(SpinnerComponent, [{
        key: "isVisible",
        get: function get() {
          return this.visible || this.spinnerService.visible;
        }
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
      return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"]));
    };

    SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SpinnerComponent,
      selectors: [["app-spinner"]],
      inputs: {
        visible: "visible"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "loading", 4, "ngIf"], [1, "loading"], [1, "bric-spinner-blue"]],
      template: function SpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 2, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isVisible);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".loading[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    z-index: 999;\r\n    height: 2em;\r\n    width: 2em;\r\n    overflow: show;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n\r\n.loading[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    display: block;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.15);\r\n  }\r\n.bric-spinner-green[_ngcontent-%COMP%] {\r\n    margin: -90px -90px;\r\n    background-image: url('/assets/img/bric-spinner-green.gif');\r\n    width: 180px;\r\n    height: 180px;\r\n  }\r\n.bric-spinner-blue[_ngcontent-%COMP%] {\r\n    margin: -90px -90px;\r\n    background-image: url('/assets/img/bric-spinner-blue.gif');\r\n    width: 180px;\r\n    height: 180px;\r\n  }\r\n.three-bounce-spinner[_ngcontent-%COMP%] {\r\n    margin: 25px auto;\r\n    width: 70px;\r\n  }\r\n.three-bounce-spinner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 19px;\r\n    height: 19px;\r\n  \r\n    border-radius: 100%;\r\n    background-color: #499F91;\r\n    border: 1px solid #696969;\r\n    \r\n    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n    animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n  }\r\n.three-bounce-spinner[_ngcontent-%COMP%]   .bounce1[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: -0.32s;\r\n    animation-delay: -0.32s;\r\n  }\r\n.three-bounce-spinner[_ngcontent-%COMP%]   .bounce2[_ngcontent-%COMP%] {\r\n    -webkit-animation-delay: -0.16s;\r\n    animation-delay: -0.16s;\r\n  }\r\n@-webkit-keyframes sk-bouncedelay {\r\n    0%, 80%, 100% {\r\n      -webkit-transform: scale(0)\r\n    }\r\n    40% {\r\n      -webkit-transform: scale(1.0)\r\n    }\r\n  }\r\n@keyframes sk-bouncedelay {\r\n    0%, 80%, 100% {\r\n      transform: scale(0);\r\n    }\r\n    40% {\r\n      transform: scale(1.0);\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsUUFBUTtFQUNWO0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtDQUFrQztFQUNwQztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDJEQUEyRDtJQUMzRCxZQUFZO0lBQ1osYUFBYTtFQUNmO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsMERBQTBEO0lBQzFELFlBQVk7SUFDWixhQUFhO0VBQ2Y7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTs7SUFFWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHlCQUF5Qjs7SUFFekIsZ0VBQWdFO0lBQ2hFLHdEQUF3RDtFQUMxRDtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0UsK0JBQStCO0lBQy9CLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0U7TUFDRTtJQUNGO0lBQ0E7TUFDRTtJQUNGO0VBQ0Y7QUFFQTtJQUNFO01BRUUsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFFRSxxQkFBcUI7SUFDdkI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWJzb2x1dGUgQ2VudGVyIFNwaW5uZXIgKi9cclxuLmxvYWRpbmcge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICB3aWR0aDogMmVtO1xyXG4gICAgb3ZlcmZsb3c6IHNob3c7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRyYW5zcGFyZW50IE92ZXJsYXkgKi9cclxuICAubG9hZGluZzpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5icmljLXNwaW5uZXItZ3JlZW4ge1xyXG4gICAgbWFyZ2luOiAtOTBweCAtOTBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvYnJpYy1zcGlubmVyLWdyZWVuLmdpZicpO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICB9XHJcblxyXG4gIC5icmljLXNwaW5uZXItYmx1ZSB7XHJcbiAgICBtYXJnaW46IC05MHB4IC05MHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9icmljLXNwaW5uZXItYmx1ZS5naWYnKTtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgfVxyXG5cclxuICAudGhyZWUtYm91bmNlLXNwaW5uZXIge1xyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgICB3aWR0aDogNzBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRocmVlLWJvdW5jZS1zcGlubmVyID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTlGOTE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjk2OTY5O1xyXG4gICAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlZGVsYXkgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xyXG4gICAgYW5pbWF0aW9uOiBzay1ib3VuY2VkZWxheSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC50aHJlZS1ib3VuY2Utc3Bpbm5lciAuYm91bmNlMSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7XHJcbiAgfVxyXG4gIFxyXG4gIC50aHJlZS1ib3VuY2Utc3Bpbm5lciAuYm91bmNlMiB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2VkZWxheSB7XHJcbiAgICAwJSwgODAlLCAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApXHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHNrLWJvdW5jZWRlbGF5IHtcclxuICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xyXG4gICAgfVxyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-spinner',
          templateUrl: './spinner.component.html',
          styleUrls: ['./spinner.component.css']
        }]
      }], function () {
        return [{
          type: _services_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"]
        }];
      }, {
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared-domain/shared-domain.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/shared-domain/shared-domain.module.ts ***!
    \**************************************************************/

  /*! exports provided: SharedDomainModule */

  /***/
  function srcAppSharedSharedDomainSharedDomainModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedDomainModule", function () {
      return SharedDomainModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SharedDomainModule = function SharedDomainModule() {
      _classCallCheck(this, SharedDomainModule);
    };

    SharedDomainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedDomainModule
    });
    SharedDomainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedDomainModule_Factory(t) {
        return new (t || SharedDomainModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedDomainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/esm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/fileupload */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-fileupload.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-table.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _shared_domain_shared_domain_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared-domain/shared-domain.module */
    "./src/app/shared/shared-domain/shared-domain.module.ts");
    /* harmony import */


    var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/spinner/spinner.component */
    "./src/app/shared/components/spinner/spinner.component.ts");
    /* harmony import */


    var primeng_dataview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! primeng/dataview */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dataview.js");
    /* harmony import */


    var _components_dialog_dialog_yess_no_dialog_yess_no_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/dialog/dialog-yess-no/dialog-yess-no.component */
    "./src/app/shared/components/dialog/dialog-yess-no/dialog-yess-no.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var primeng__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! primeng */
    "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _services_spinner_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../services/spinner.service */
    "./src/app/services/spinner.service.ts");
    /* harmony import */


    var _services_error_message_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../services/error-message.service */
    "./src/app/services/error-message.service.ts"); // angular imports
    // primeng imports
    // ngx imports
    // our imports
    // Components
    // services
    // Directives


    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      providers: [_services_spinner_service__WEBPACK_IMPORTED_MODULE_23__["SpinnerService"], _services_error_message_service__WEBPACK_IMPORTED_MODULE_24__["ErrorMessageService"], primeng__WEBPACK_IMPORTED_MODULE_21__["ConfirmationService"]],
      imports: [[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["AutoCompleteModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TriStateCheckboxModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MultiSelectModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["SpinnerModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputTextModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputTextareaModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputMaskModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MessageModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MessagesModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["KeyFilterModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["AccordionModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["RadioButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TabViewModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TooltipModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["PickListModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ConfirmDialogModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["PanelModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["FieldsetModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["SelectButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TreeTableModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], _shared_domain_shared_domain_module__WEBPACK_IMPORTED_MODULE_8__["SharedDomainModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["CheckboxModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["DialogModule"], primeng_dataview__WEBPACK_IMPORTED_MODULE_10__["DataViewModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["OrderListModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ListboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"]], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["AutoCompleteModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TriStateCheckboxModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MultiSelectModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["SpinnerModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputTextModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputTextareaModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputMaskModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MessageModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MessagesModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["KeyFilterModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["AccordionModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["RadioButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TabViewModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TooltipModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["PickListModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ConfirmDialogModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["PanelModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["FieldsetModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["SelectButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TreeTableModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], _shared_domain_shared_domain_module__WEBPACK_IMPORTED_MODULE_8__["SharedDomainModule"], primeng_dataview__WEBPACK_IMPORTED_MODULE_10__["DataViewModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["OrderListModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ListboxModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _components_dialog_dialog_yess_no_dialog_yess_no_component__WEBPACK_IMPORTED_MODULE_11__["DialogYessNoComponent"]],
        imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["AutoCompleteModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TriStateCheckboxModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MultiSelectModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["SpinnerModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputTextModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputTextareaModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputMaskModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MessageModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MessagesModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["KeyFilterModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["AccordionModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["RadioButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TabViewModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TooltipModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["PickListModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ConfirmDialogModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["PanelModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["FieldsetModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["SelectButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TreeTableModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], _shared_domain_shared_domain_module__WEBPACK_IMPORTED_MODULE_8__["SharedDomainModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["CheckboxModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["DialogModule"], primeng_dataview__WEBPACK_IMPORTED_MODULE_10__["DataViewModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["OrderListModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ListboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"]],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["AutoCompleteModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TriStateCheckboxModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MultiSelectModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["SpinnerModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputTextModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputTextareaModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputMaskModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MessageModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MessagesModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["KeyFilterModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["AccordionModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["RadioButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TabViewModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TooltipModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["PickListModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ConfirmDialogModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["PanelModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["FieldsetModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["SelectButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TreeTableModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], _shared_domain_shared_domain_module__WEBPACK_IMPORTED_MODULE_8__["SharedDomainModule"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], primeng_dataview__WEBPACK_IMPORTED_MODULE_10__["DataViewModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["OrderListModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ListboxModule"], _components_dialog_dialog_yess_no_dialog_yess_no_component__WEBPACK_IMPORTED_MODULE_11__["DialogYessNoComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["AutoCompleteModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TriStateCheckboxModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MultiSelectModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["SpinnerModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputTextModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputTextareaModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputMaskModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MessageModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MessagesModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["KeyFilterModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["AccordionModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["RadioButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TabViewModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TooltipModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["PickListModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ConfirmDialogModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["PanelModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["FieldsetModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["SelectButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TreeTableModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], _shared_domain_shared_domain_module__WEBPACK_IMPORTED_MODULE_8__["SharedDomainModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["CheckboxModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["DialogModule"], primeng_dataview__WEBPACK_IMPORTED_MODULE_10__["DataViewModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["OrderListModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ListboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"]],
          declarations: [_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _components_dialog_dialog_yess_no_dialog_yess_no_component__WEBPACK_IMPORTED_MODULE_11__["DialogYessNoComponent"]],
          providers: [_services_spinner_service__WEBPACK_IMPORTED_MODULE_23__["SpinnerService"], _services_error_message_service__WEBPACK_IMPORTED_MODULE_24__["ErrorMessageService"], primeng__WEBPACK_IMPORTED_MODULE_21__["ConfirmationService"]],
          exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["AutoCompleteModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TriStateCheckboxModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MultiSelectModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["SpinnerModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputTextModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputTextareaModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["InputMaskModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MessageModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["MessagesModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["KeyFilterModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["AccordionModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["RadioButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TabViewModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TooltipModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["PickListModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ConfirmDialogModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["PanelModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["FieldsetModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["SelectButtonModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["TreeTableModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], _shared_domain_shared_domain_module__WEBPACK_IMPORTED_MODULE_8__["SharedDomainModule"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], primeng_dataview__WEBPACK_IMPORTED_MODULE_10__["DataViewModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["OrderListModule"], primeng__WEBPACK_IMPORTED_MODULE_21__["ListboxModule"], _components_dialog_dialog_yess_no_dialog_yess_no_component__WEBPACK_IMPORTED_MODULE_11__["DialogYessNoComponent"]],
          entryComponents: [_components_dialog_dialog_yess_no_dialog_yess_no_component__WEBPACK_IMPORTED_MODULE_11__["DialogYessNoComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      backApiServiceUrl: 'http://localhost:7000/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\home\Fidus\fidus\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map