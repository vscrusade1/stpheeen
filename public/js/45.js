webpackJsonp([45],{

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth_auth__ = __webpack_require__(24);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    this.fetchSalesOrders();
  },


  data: function data() {
    return {
      styleClass: 'table table-hover',
      salesOrders: [],
      error: false,
      loading: false,
      columns: [{
        label: 'DATE',
        field: 'so_order_date',
        type: 'string',
        html: false,
        width: '150px',
        filterable: true
      }, {
        label: 'SALES ORDER #',
        field: 'so_no',
        html: false,
        filterable: true,
        width: '180px'
      }, {
        label: 'CUSTOMER NAME',
        field: 'contact_company_name',
        html: false,
        filterable: true,
        width: '300px'
      }, {
        label: 'STATUS',
        field: 'so_status',
        html: false,
        width: '100px'
      }, {
        label: 'REFERENCE #',
        field: 'so_ref_no',
        html: false,
        width: '100px'
      }, {
        label: 'AMOUNT (PHP)',
        field: 'so_total_amount',
        html: false,
        width: '100px'
      }]
    };
  },

  methods: {

    fetchSalesOrders: function fetchSalesOrders() {
      var _this = this;

      this.loading = true;

      this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/sales-orders').then(function (response) {
        _this.$set(_this, 'salesOrders', response.data);
        _this.loading = false;
      }, function (response) {

        _this.error = response.status;
        _this.loading = false;
      });
    },

    viewData: function viewData(row) {

      this.$router.push({ path: '/sales-orders/' + row.so_id });
    }
  }

});

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.error && !_vm.loading),
      expression: "!error && !loading"
    }],
    staticClass: "page-title"
  }, [_c('div', {
    staticClass: "btn-toolbar pull-right"
  }, [_c('router-link', {
    staticClass: "btn btn-primary btn-outline",
    attrs: {
      "to": "/sales-orders/new"
    }
  }, [_vm._v("\n               ADD New\n            ")]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("Sales Orders")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticStyle: {
      "margin-top": "14rem"
    },
    attrs: {
      "align": "center"
    }
  }, [_c('i', {
    staticClass: "fa fa-spinner fa-spin fa-3x fa-fw"
  }), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "13px",
      "font-family": "Proxima Nova Regular",
      "margin-top": "5px"
    }
  }, [_vm._v(" Preparing data... ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.error),
      expression: "error"
    }]
  }, [_c('div', {
    staticClass: "load-error"
  }, [_vm._v(" " + _vm._s(_vm.error))]), _vm._v(" "), _c('p', {
    attrs: {
      "align": "center"
    }
  }, [_vm._v(" An error occured while we load your data. ")])]), _vm._v(" "), _c('vue-good-table', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading && !_vm.error),
      expression: "!loading && !error"
    }],
    attrs: {
      "onClick": _vm.viewData,
      "columns": _vm.columns,
      "rows": _vm.salesOrders,
      "paginate": true,
      "lineNumbers": true,
      "styleClass": _vm.styleClass
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "btn btn-success btn-icon-icon btn-md mr5"
  }, [_c('i', {
    staticClass: "fa fa-bars"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2fd68319", module.exports)
  }
}

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(360),
  /* template */
  __webpack_require__(425),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\Sales Orders\\AllSalesOrders.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AllSalesOrders.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2fd68319", Component.options)
  } else {
    hotAPI.reload("data-v-2fd68319", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});