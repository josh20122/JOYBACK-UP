"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_EditProduct_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/EditProduct.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/EditProduct.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var _Layouts_AdminNavigation_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Layouts/AdminNavigation.vue */ "./resources/js/Pages/Layouts/AdminNavigation.vue");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["errors", "product", "country", "category", "images"],
  layout: _Layouts_AdminNavigation_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
  components: {
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_1__.VueEditor
  },
  data: function data() {
    return {
      required: [function (v) {
        return !!v || "This field is required";
      }],
      content: null,
      color: null,
      timeout: null,
      processing: null,
      text: null,
      redirect: false,
      form: {
        image1: null,
        country: this.country.country,
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        title: this.product.title,
        category: this.category,
        short_description: this.product.short_description,
        long_description: this.product.long_description,
        price: this.product.price,
        initial_price: this.product.initial_price
      }
    };
  },
  methods: {
    create: function create() {
      var _this = this;

      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post("/admin/product/store", this.form, {
        forceFormData: true,
        preserveScroll: true,
        preserveState: true,
        onStart: function onStart() {
          _this.processing = true;
          _this.timeout = 100000;
          _this.color = "yellow darken-3";
          _this.text = "Product Upload is Processing ...";
        },
        onSuccess: function onSuccess() {
          _this.timeout = 3000;
          _this.color = "green darken-3";
          _this.text = "Product added successfully";
          _this.redirect = true;
        },
        onError: function onError() {
          _this.processing = false;
        }
      });
    }
  },
  watch: {
    redirect: function redirect() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.get("/admin/products");
    }
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      drawer: false,
      links: [{
        page: "dashboard",
        link: "/admin/dashboard",
        icon: "mdi-menu"
      }, {
        page: "customers",
        link: "/admin/users",
        icon: "mdi-account-multiple"
      }],
      groups: [{
        title: "Cartegories",
        active: false,
        icon: "mdi-menu",
        pages: [{
          name: "All Categories",
          link: "/admin/cartegory",
          icon: "mdi-menu"
        }, {
          name: "Create Category",
          link: "/admin/cartegory/create",
          icon: "mdi-menu"
        }]
      }, {
        title: "Sub categories",
        active: false,
        icon: "mdi-menu",
        pages: [{
          name: "All Categories",
          link: "/admin/subcategory/all",
          icon: "mdi-menu"
        }]
      }]
    };
  }
});

/***/ }),

/***/ "./resources/js/Pages/Admin/EditProduct.vue":
/*!**************************************************!*\
  !*** ./resources/js/Pages/Admin/EditProduct.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditProduct_vue_vue_type_template_id_54b447cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProduct.vue?vue&type=template&id=54b447cc& */ "./resources/js/Pages/Admin/EditProduct.vue?vue&type=template&id=54b447cc&");
/* harmony import */ var _EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProduct.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/EditProduct.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditProduct_vue_vue_type_template_id_54b447cc___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditProduct_vue_vue_type_template_id_54b447cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/EditProduct.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Layouts/AdminNavigation.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/Layouts/AdminNavigation.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminNavigation.vue?vue&type=template&id=1dd00304& */ "./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304&");
/* harmony import */ var _AdminNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminNavigation.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Layouts/AdminNavigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/EditProduct.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Admin/EditProduct.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/EditProduct.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminNavigation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNavigation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/EditProduct.vue?vue&type=template&id=54b447cc&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/EditProduct.vue?vue&type=template&id=54b447cc& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_54b447cc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_54b447cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProduct_vue_vue_type_template_id_54b447cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProduct.vue?vue&type=template&id=54b447cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/EditProduct.vue?vue&type=template&id=54b447cc&");


/***/ }),

/***/ "./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminNavigation_vue_vue_type_template_id_1dd00304___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminNavigation.vue?vue&type=template&id=1dd00304& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/EditProduct.vue?vue&type=template&id=54b447cc&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/EditProduct.vue?vue&type=template&id=54b447cc& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AdminNavigation",
    [
      _c(
        "v-container",
        {},
        [
          _c(
            "v-row",
            [
              _c("v-col", [
                _c("div", { staticClass: "display-1" }, [
                  _vm._v("Create Product"),
                ]),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { sm: "4", cols: "12" } },
                [
                  _c(
                    "v-row",
                    { attrs: { dense: "" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Cover Image *"),
                          ]),
                          _vm._v(" "),
                          _c("v-file-input", {
                            attrs: {
                              type: "file",
                              outlined: "",
                              dense: "",
                              rules: _vm.required,
                              placeholder: "Cover Image",
                              "error-messages": _vm.errors.image1,
                            },
                            model: {
                              value: _vm.form.image1,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "image1", $$v)
                              },
                              expression: "form.image1",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Image 2"),
                          ]),
                          _vm._v(" "),
                          _c("v-file-input", {
                            attrs: {
                              type: "file",
                              outlined: "",
                              dense: "",
                              rules: _vm.required,
                              placeholder: "Cover Image",
                              "error-messages": _vm.errors.image2,
                            },
                            model: {
                              value: _vm.form.image2,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "image2", $$v)
                              },
                              expression: "form.image2",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Image 3"),
                          ]),
                          _vm._v(" "),
                          _c("v-file-input", {
                            attrs: {
                              type: "file",
                              outlined: "",
                              dense: "",
                              rules: _vm.required,
                              placeholder: "Cover Image",
                              "error-messages": _vm.errors.image3,
                            },
                            model: {
                              value: _vm.form.image3,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "image3", $$v)
                              },
                              expression: "form.image3",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Image 4"),
                          ]),
                          _vm._v(" "),
                          _c("v-file-input", {
                            attrs: {
                              type: "file",
                              outlined: "",
                              dense: "",
                              rules: _vm.required,
                              placeholder: "Cover Image",
                              "error-messages": _vm.errors.image4,
                            },
                            model: {
                              value: _vm.form.image4,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "image4", $$v)
                              },
                              expression: "form.image4",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("label", { attrs: { for: "" } }, [
                            _vm._v("Image 5"),
                          ]),
                          _vm._v(" "),
                          _c("v-file-input", {
                            attrs: {
                              type: "file",
                              outlined: "",
                              dense: "",
                              rules: _vm.required,
                              placeholder: "Cover Image",
                              "error-messages": _vm.errors.image5,
                            },
                            model: {
                              value: _vm.form.image5,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "image5", $$v)
                              },
                              expression: "form.image5",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "8" } },
                [
                  _c(
                    "v-card",
                    { attrs: { outlined: "" } },
                    [
                      _c("v-card-title", [_vm._v(" Product Details ")]),
                      _vm._v(" "),
                      _c("v-divider", {}),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-form",
                            [
                              _c(
                                "v-container",
                                { staticClass: "pa-0" },
                                [
                                  _c(
                                    "v-row",
                                    { attrs: { dense: "" } },
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Title *"),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              placeholder: "Product full title",
                                              outlined: "",
                                              dense: "",
                                              "error-messages":
                                                _vm.errors.title,
                                              rules: _vm.required,
                                            },
                                            model: {
                                              value: _vm.form.title,
                                              callback: function ($$v) {
                                                _vm.$set(_vm.form, "title", $$v)
                                              },
                                              expression: "form.title",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Country *"),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              placeholder: "Please Select",
                                              value: _vm.country.country,
                                              readonly: "",
                                              outlined: "",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Product Category *"),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              placeholder: "Please Select",
                                              outlined: "",
                                              readonly: "",
                                              value: _vm.form.category,
                                              "item-text": "title",
                                              "item-value": "id",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Confirm Currency"),
                                          ]),
                                          _vm._v(" "),
                                          _vm.form.country
                                            ? _c("v-text-field", {
                                                attrs: {
                                                  readonly: "",
                                                  outlined: "",
                                                  dense: "",
                                                  value: _vm.country.currency,
                                                },
                                              })
                                            : _vm._e(),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Initial Price *"),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              placeholder:
                                                "Product initial price",
                                              outlined: "",
                                              dense: "",
                                              "error-messages":
                                                _vm.errors.initial_price,
                                              rules: _vm.required,
                                            },
                                            model: {
                                              value: _vm.form.initial_price,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "initial_price",
                                                  $$v
                                                )
                                              },
                                              expression: "form.initial_price",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Current Price *"),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              placeholder:
                                                "Product current price",
                                              outlined: "",
                                              dense: "",
                                              "error-messages":
                                                _vm.errors.price,
                                              rules: _vm.required,
                                            },
                                            model: {
                                              value: _vm.form.price,
                                              callback: function ($$v) {
                                                _vm.$set(_vm.form, "price", $$v)
                                              },
                                              expression: "form.price",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v("Short Description *"),
                                          ]),
                                          _vm._v(" "),
                                          _c("v-textarea", {
                                            attrs: {
                                              placeholder:
                                                "Short product description",
                                              outlined: "",
                                              dense: "",
                                              "error-messages":
                                                _vm.errors.short_description,
                                              rules: _vm.required,
                                            },
                                            model: {
                                              value: _vm.form.short_description,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "short_description",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.short_description",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("label", { attrs: { for: "" } }, [
                                            _vm._v(
                                              " Full Description (Optional)"
                                            ),
                                          ]),
                                          _vm._v(" "),
                                          _c("VueEditor", {
                                            model: {
                                              value: _vm.form.long_description,
                                              callback: function ($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "long_description",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "form.long_description",
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("div", {
                                            staticClass: "text-xs text-red-500",
                                            domProps: {
                                              textContent: _vm._s(
                                                _vm.errors.long_description
                                              ),
                                            },
                                          }),
                                          _vm._v(" "),
                                          _c("div", {
                                            domProps: {
                                              innerHTML: _vm._s(
                                                _vm.form.long_description
                                              ),
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-row", [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.images) +
                                        "\n                  "
                                    ),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "flex justify-end pb-4 pr-4",
                                      },
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "white--text",
                                            attrs: {
                                              elevation: "",
                                              color: "blue",
                                            },
                                            on: {
                                              click: function ($event) {
                                                return _vm.create()
                                              },
                                            },
                                          },
                                          [_vm._v("Create Product")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              staticClass: "white--text",
              attrs: { timeout: _vm.timeout, color: _vm.color, tile: "" },
              model: {
                value: _vm.processing,
                callback: function ($$v) {
                  _vm.processing = $$v
                },
                expression: "processing",
              },
            },
            [
              _c("div", {
                staticClass: "font-sembold text-lg",
                domProps: { textContent: _vm._s(_vm.text) },
              }),
            ]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Layouts/AdminNavigation.vue?vue&type=template&id=1dd00304& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-navigation-drawer",
        { attrs: { app: "", value: _vm.drawer, color: "drawer" } },
        [
          _c(
            "v-list",
            [
              _c(
                "v-list-item",
                [
                  _c("v-row", { attrs: { justify: "start" } }, [
                    _c(
                      "div",
                      [
                        _c("v-img", {
                          attrs: {
                            contain: "",
                            "max-height": "35",
                            src: "/storage/logo.png",
                          },
                        }),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", {}),
              _vm._v(" "),
              _vm._l(_vm.links, function (page) {
                return _c(
                  "v-list-item",
                  { key: page.links },
                  [
                    _c(
                      "Link",
                      { attrs: { href: page.link } },
                      [
                        _c(
                          "v-list-item-icon",
                          {},
                          [
                            _c("v-icon", {
                              attrs: { color: "grey lighten-4" },
                              domProps: { textContent: _vm._s(page.icon) },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-list-item-content",
                      {},
                      [
                        _c(
                          "Link",
                          { attrs: { href: page.link } },
                          [
                            _c("v-list-item-title", {
                              staticClass: "text-white capitalize",
                              domProps: { textContent: _vm._s(page.page) },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _vm._l(_vm.groups, function (group) {
                return _c(
                  "v-list-group",
                  {
                    key: group.name,
                    staticClass: "white--text",
                    attrs: {
                      "prepend-icon": group.icon,
                      color: "white",
                      "no-action": "",
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function () {
                            return [
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-title", {
                                    staticClass: "white--text",
                                    domProps: {
                                      textContent: _vm._s(group.title),
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ],
                      null,
                      true
                    ),
                    model: {
                      value: group.active,
                      callback: function ($$v) {
                        _vm.$set(group, "active", $$v)
                      },
                      expression: "group.active",
                    },
                  },
                  [
                    _vm._v(" "),
                    _vm._l(group.pages, function (page) {
                      return _c(
                        "v-list-item",
                        { key: page.name },
                        [
                          _c(
                            "v-list-item-icon",
                            [
                              _c(
                                "Link",
                                { attrs: { href: page.link } },
                                [
                                  _c("v-icon", {
                                    attrs: { color: "white" },
                                    domProps: {
                                      textContent: _vm._s(page.icon),
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c(
                                "Link",
                                { attrs: { href: page.link } },
                                [
                                  _c("v-list-item-title", {
                                    staticClass: "white--text",
                                    domProps: {
                                      textContent: _vm._s(page.name),
                                    },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    }),
                  ],
                  2
                )
              }),
            ],
            2
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        { attrs: { flat: "", color: "blue darken-1", app: "" } },
        [
          _c(
            "v-row",
            { attrs: { justify: "space-between" } },
            [
              _c("v-col", [
                _c(
                  "div",
                  { staticClass: "grid justify-start" },
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: {
                          icon: "",
                          elevation: "",
                          color: "grey lighten-4",
                        },
                        on: {
                          click: function ($event) {
                            _vm.drawer = !_vm.drawer
                          },
                        },
                      },
                      [_c("v-icon", [_vm._v("mdi-menu")])],
                      1
                    ),
                  ],
                  1
                ),
              ]),
              _vm._v(" "),
              _c("v-col", [
                _c(
                  "div",
                  { staticClass: "flex justify-end align-middle space-x-2" },
                  [
                    _c("div", { staticClass: "white--text pt-2" }, [
                      _vm._v("Admin"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-avatar",
                      [_c("v-img", { attrs: { src: "/storage/slide-1.jpg" } })],
                      1
                    ),
                  ],
                  1
                ),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-main", [_vm._t("default")], 2),
      _vm._v(" "),
      _c("v-footer", { attrs: { app: "" } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);