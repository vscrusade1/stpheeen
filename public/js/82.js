webpackJsonp([82],{

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(507),
  /* template */
  __webpack_require__(508),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Users\\probitousxx\\Code\\projects\\nepan-inventory\\resources\\assets\\js\\components\\StockAdjustments\\ViewStockAdjustment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ViewStockAdjustment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8e3f6088", Component.options)
  } else {
    hotAPI.reload("data-v-8e3f6088", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 507:
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

        this.stockAdjustmentId = this.$route.params.id;
        this.fetchResourceData();
    },


    data: function data() {
        return {
            total: 0.00,
            stockAdjustmentId: null,
            error: null,
            loading: false,
            stockAdjustmentItems: [],
            stockAdjustment: {}
        };
    },
    computed: {
        subTotal: function subTotal() {
            var subTotal = 0.00;
            this.stockAdjustmentItems.forEach(function (row) {
                return subTotal += row.stock_adjustment_item_rate * row.stock_adjustment_item_qty;
            });

            return Number(subTotal).toFixed(2);
        }
    },

    methods: {
        fetchResourceData: function fetchResourceData() {
            var _this = this;

            this.loading = true;
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth__["a" /* default */].app.API_URL + '/stock-adjustments/' + this.stockAdjustmentId).then(function (response) {
                console.log(response.data);
                _this.$set(_this, 'stockAdjustment', response.data.stock_adjustment[0]);
                _this.$set(_this, 'stockAdjustmentItems', response.data.items);
                _this.loading = false;
            }, function (response) {
                _this.loading = false;
                // error
                _this.error = response.statusText;
            });
        }
    }

});

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading && !_vm.error),
      expression: "!loading && !error"
    }],
    staticClass: "page-title"
  }, [_c('div', {
    staticClass: "btn-toolbar pull-right"
  }), _vm._v(" "), _c('div', {
    staticClass: "title"
  }, [_vm._v("\n                STOCK ADJUSTMENT DETAILS\n          ")])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(" Preparing data ... ")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.error),
      expression: "error"
    }]
  }, [_vm._v("\n            " + _vm._s(_vm.error) + "\n        ")]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }],
    staticClass: "col-md-offset-2 col-md-8"
  }, [_c('div', {
    staticClass: "preview-details"
  }, [_c('div', {
    staticClass: "pull-right"
  }, [_c('h3', [_vm._v("STOCK ADJUSTMENT ")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.stockAdjustment.stock_adjustment_no))]), _vm._v(" "), _c('span', {
    staticClass: "label label-success"
  }, [_vm._v("\n                    " + _vm._s(_vm.stockAdjustment.stock_adjustment_status))]), _c('br'), _vm._v(" "), _c('P', [_vm._v("Stock Adjustment Date : " + _vm._s(_vm.stockAdjustment.stock_adjustment_date))])], 1), _vm._v(" "), _c('div', {
    staticClass: "pull-left"
  }, [_c('h5', [_vm._v("WAREHOUSE ")]), _vm._v(" "), _c('p', [_c('strong', [_vm._v(_vm._s(_vm.stockAdjustment.whouse_name))])]), _c('br')]), _vm._v(" "), _c('table', {
    staticClass: "table table-responsive"
  }, [_vm._m(0), _vm._v(" "), _c('tbody', [_vm._l((_vm.stockAdjustmentItems), function(adjustmentItem) {
    return _c('tr', [_c('td', {
      attrs: {
        "width": "55%"
      }
    }, [_vm._v("\n                                [ " + _vm._s(adjustmentItem.item_sku) + " ]  " + _vm._s(adjustmentItem.item_name) + " "), _c('br'), _vm._v(" " + _vm._s(adjustmentItem.item_desc) + " \n\n                            ")]), _vm._v(" "), _c('td', {
      attrs: {
        "width": "25%"
      }
    }, [_vm._v(_vm._s(adjustmentItem.stock_adjustment_item_qty) + "  " + _vm._s(adjustmentItem.purchase_unit_name) + " ")]), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', [_vm._v("\n                                " + _vm._s(adjustmentItem.purchase_price) + "\n                            ")]), _vm._v(" "), _c('td', [_vm._v(" " + _vm._s(_vm._f("currency")(adjustmentItem.stock_adjustment_item_rate * adjustmentItem.stock_adjustment_item_qty, 'PHP', 2)) + " ")])])
  }), _vm._v(" "), _c('tr', [_c('td'), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('td'), _vm._v(" "), _c('td', {
    attrs: {
      "colspan": "2"
    }
  }, [_c('strong', [_vm._v(_vm._s(_vm._f("currency")(_vm.subTotal, 'PHP', 2)))])])])], 2)]), _vm._v(" "), _c('p', [_vm._v("Notes : ")]), _vm._v(" "), _c('Br'), _c('br'), _vm._v("\n                " + _vm._s(_vm.stockAdjustment.stock_adjustment_reason) + "\n\n            ")], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("ITEMS & DESCRIPTION")]), _vm._v(" "), _c('th', [_vm._v("ADJUSTED QTY")]), _vm._v(" "), _c('th'), _vm._v(" "), _c('th', [_vm._v("RATE")]), _vm._v(" "), _c('th', [_vm._v("AMOUNT")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', [_c('strong', [_vm._v("ADJUSTED VALUE")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8e3f6088", module.exports)
  }
}

/***/ })

});