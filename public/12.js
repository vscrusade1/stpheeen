webpackJsonp([12],{

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(177);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(178)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./vue-instant.css", function() {
			var newContent = require("!!../../css-loader/index.js!./vue-instant.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "\n.sbx-facebook {\n  display: inline-block;\n  position: relative;\n  width: 450px;\n  height: 27px;\n  white-space: nowrap;\n  box-sizing: border-box;\n  font-size: 13px;\n}\n.sbx-facebook__wrapper {\n  width: 100%;\n  height: 100%;\n}\n.sbx-facebook__input {\n  position: absolute !important;\n  left:0 !important;\n  top: 0 !important;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 4px;\n  box-shadow: inset 0 0 0 0px #CCCCCC;\n  background: rgba(255, 255, 255, 0);\n  padding: 0;\n  padding-right: 62px;\n  padding-left: 11px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.sbx-facebook__input-placeholder {\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 4px;\n  box-shadow: inset 0 0 0 0px #CCCCCC;\n  background: #FFFFFF;\n  padding: 0;\n  padding-right: 62px;\n  padding-left: 11px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.sbx-facebook__input::-webkit-search-decoration, .sbx-facebook__input::-webkit-search-cancel-button, .sbx-facebook__input::-webkit-search-results-button, .sbx-facebook__input::-webkit-search-results-decoration {\n  display: none;\n}\n.sbx-facebook__input:hover {\n  box-shadow: inset 0 0 0 0px #b3b3b3;\n}\n.sbx-facebook__input:focus, .sbx-facebook__input:active {\n  outline: 0;\n  box-shadow: inset 0 0 0 0px #3E82F7;\n  background: rgba(255, 255, 255, 0)\n}\n.sbx-facebook__input::-webkit-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-facebook__input::-moz-placeholder {\n  color: #AAAAAA;\n}\n.sbx-facebook__input:-ms-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-facebook__input::placeholder {\n  color: #AAAAAA;\n}\n.sbx-facebook__submit {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: inherit;\n  margin: 0;\n  border: 0;\n  border-radius: 0 3px 3px 0;\n  background-color: #f6f7f8;\n  padding: 0;\n  width: 35px;\n  height: 100%;\n  vertical-align: middle;\n  text-align: center;\n  font-size: inherit;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.sbx-facebook__submit::before {\n  display: inline-block;\n  margin-right: -4px;\n  height: 100%;\n  vertical-align: middle;\n  content: '';\n}\n.sbx-facebook__submit:hover, .sbx-facebook__submit:active {\n  cursor: pointer;\n}\n.sbx-facebook__submit:focus {\n  outline: 0;\n}\n.sbx-facebook__submit svg {\n  width: 15px;\n  height: 15px;\n  vertical-align: middle;\n  fill: #3C5BA2;\n}\n.sbx-facebook__reset {\n  display: none;\n  position: absolute;\n  top: 3px;\n  right: 41px;\n  margin: 0;\n  border: 0;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  font-size: inherit;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  fill: rgba(0, 0, 0, 0.5);\n}\n.sbx-facebook__reset:focus {\n  outline: 0;\n}\n.sbx-facebook__reset svg {\n  display: block;\n  margin: 4px;\n  width: 13px;\n  height: 13px;\n}\n.sbx-facebook__input:valid ~ .sbx-facebook__reset {\n  display: block;\n  -webkit-animation-name: sbx-reset-in;\n          animation-name: sbx-reset-in;\n  -webkit-animation-duration: .15s;\n          animation-duration: .15s;\n}\n@-webkit-keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n            transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n}\n}\n@keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n            transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n}\n}\n\n\n\n/* amazon*/\n.sbx-amazon {\n  display: inline-block;\n  position: relative;\n  width: 600px;\n  height: 39px;\n  white-space: nowrap;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.sbx-amazon__wrapper {\n  width: 100%;\n  height: 100%;\n}\n.sbx-amazon__input {\n  display: inline-block;\n  position: absolute !important;\n  left:0 !important;\n  top:0 !important;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 4px;\n  box-shadow: inset 0 0 0 1px #FFFFFF;\n  background: rgba(255, 255, 255, 0);\n  padding: 0;\n  padding-right: 75px;\n  padding-left: 11px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.sbx-amazon__input-placeholder {\n  display: inline-block;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 4px;\n  box-shadow: inset 0 0 0 1px #FFFFFF;\n  background: #FFFFFF;\n  padding: 0;\n  padding-right: 75px;\n  padding-left: 11px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.sbx-amazon__input::-webkit-search-decoration, .sbx-amazon__input::-webkit-search-cancel-button, .sbx-amazon__input::-webkit-search-results-button, .sbx-amazon__input::-webkit-search-results-decoration {\n  display: none;\n}\n.sbx-amazon__input:hover {\n  box-shadow: inset 0 0 0 1px #e6e6e6;\n}\n.sbx-amazon__input:focus, .sbx-amazon__input:active {\n  outline: 0;\n  box-shadow: inset 0 0 0 1px #FFBF58;\n  background: rgba(255, 255, 255, 0)\n}\n.sbx-amazon__input::-webkit-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-amazon__input::-moz-placeholder {\n  color: #AAAAAA;\n}\n.sbx-amazon__input:-ms-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-amazon__input::placeholder {\n  color: #AAAAAA;\n}\n.sbx-amazon__submit {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: inherit;\n  margin: 0;\n  border: 0;\n  border-radius: 0 3px 3px 0;\n  background-color: #ffbf58;\n  padding: 0;\n  width: 47px;\n  height: 100%;\n  vertical-align: middle;\n  text-align: center;\n  font-size: inherit;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.sbx-amazon__submit::before {\n  display: inline-block;\n  margin-right: -4px;\n  height: 100%;\n  vertical-align: middle;\n  content: '';\n}\n.sbx-amazon__submit:hover, .sbx-amazon__submit:active {\n  cursor: pointer;\n}\n.sbx-amazon__submit:focus {\n  outline: 0;\n}\n.sbx-amazon__submit svg {\n  width: 21px;\n  height: 21px;\n  vertical-align: middle;\n  fill: #202F40;\n}\n.sbx-amazon__reset {\n  display: none;\n  position: absolute;\n  top: 9px;\n  right: 54px;\n  margin: 0;\n  border: 0;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  font-size: inherit;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  fill: rgba(0, 0, 0, 0.5);\n}\n.sbx-amazon__reset:focus {\n  outline: 0;\n}\n.sbx-amazon__reset svg {\n  display: block;\n  margin: 4px;\n  width: 13px;\n  height: 13px;\n}\n.sbx-amazon__input:valid ~ .sbx-amazon__reset {\n  display: block;\n  -webkit-animation-name: sbx-reset-in;\n          animation-name: sbx-reset-in;\n  -webkit-animation-duration: .15s;\n          animation-duration: .15s;\n}\n@-webkit-keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n            transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n}\n}\n@keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n            transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n}\n}\n\n/*  google */\n.sbx-google {\n  display: inline-block;\n  position: relative;\n  width: 500px;\n  height: 41px;\n  white-space: nowrap;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.sbx-google__wrapper {\n  width: 100%;\n  height: 100%;\n}\n.sbx-google__input {\n  display: inline-block;\n  position: absolute !important;\n  left: 0 !important;\n  top:0 !important;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 4px;\n  box-shadow: inset 0 0 0 1px #CCCCCC;\n  background: rgba(255, 255, 255, 0);\n  padding: 0;\n  padding-right: 77px;\n  padding-left: 11px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.sbx-google__input-placeholder {\n  display: inline-block;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 4px;\n  box-shadow: inset 0 0 0 1px #CCCCCC;\n  background: #FFFFFF;\n  padding: 0;\n  padding-right: 77px;\n  padding-left: 11px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.sbx-google__input::-webkit-search-decoration, .sbx-google__input::-webkit-search-cancel-button, .sbx-google__input::-webkit-search-results-button, .sbx-google__input::-webkit-search-results-decoration {\n  display: none;\n}\n.sbx-google__input:hover {\n  box-shadow: inset 0 0 0 1px #b3b3b3;\n}\n.sbx-google__input:focus, .sbx-google__input:active {\n  outline: 0;\n  box-shadow: inset 0 0 0 1px #3E82F7;\n  background: rgba(255, 255, 255, 0)\n}\n.sbx-google__input::-webkit-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-google__input::-moz-placeholder {\n  color: #AAAAAA;\n}\n.sbx-google__input:-ms-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-google__input::placeholder {\n  color: #AAAAAA;\n}\n.sbx-google__submit {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: inherit;\n  margin: 0;\n  border: 0;\n  border-radius: 0 3px 3px 0;\n  background-color: #3e82f7;\n  padding: 0;\n  width: 49px;\n  height: 100%;\n  vertical-align: middle;\n  text-align: center;\n  font-size: inherit;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.sbx-google__submit::before {\n  display: inline-block;\n  margin-right: -4px;\n  height: 100%;\n  vertical-align: middle;\n  content: '';\n}\n.sbx-google__submit:hover, .sbx-google__submit:active {\n  cursor: pointer;\n}\n.sbx-google__submit:focus {\n  outline: 0;\n}\n.sbx-google__submit svg {\n  width: 21px;\n  height: 21px;\n  vertical-align: middle;\n  fill: #FFFFFF;\n}\n.sbx-google__reset {\n  display: none;\n  position: absolute;\n  top: 10px;\n  right: 56px;\n  margin: 0;\n  border: 0;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  font-size: inherit;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  fill: rgba(0, 0, 0, 0.5);\n}\n.sbx-google__reset:focus {\n  outline: 0;\n}\n.sbx-google__reset svg {\n  display: block;\n  margin: 4px;\n  width: 13px;\n  height: 13px;\n}\n.sbx-google__input:valid ~ .sbx-google__reset {\n  display: block;\n  -webkit-animation-name: sbx-reset-in;\n          animation-name: sbx-reset-in;\n  -webkit-animation-duration: .15s;\n          animation-duration: .15s;\n}\n@-webkit-keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n            transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n}\n}\n@keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n            transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n}\n}\n\n\n/* twitter */\n.sbx-twitter {\n  display: inline-block;\n  position: relative;\n  width: 200px;\n  height: 33px;\n  white-space: nowrap;\n  box-sizing: border-box;\n  font-size: 12px;\n}\n.sbx-twitter__wrapper {\n  width: 100%;\n  height: 100%;\n}\n.sbx-twitter__input {\n  display: inline-block;\n  position: absolute;\n  left: 0 !important;\n  top: 0 !important;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 17px;\n  box-shadow: inset 0 0 0 1px #E1E8ED;\n  background: rgba(255, 255, 255, 0);\n  padding: 0;\n  padding-right: 52px;\n  padding-left: 16px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.sbx-twitter__input-placeholder {\n  display: inline-block;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 17px;\n  box-shadow: inset 0 0 0 1px #E1E8ED;\n  background: rgba(255, 255, 255, 0);\n  padding: 0;\n  padding-right: 52px;\n  padding-left: 16px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.sbx-twitter__input::-webkit-search-decoration, .sbx-twitter__input::-webkit-search-cancel-button, .sbx-twitter__input::-webkit-search-results-button, .sbx-twitter__input::-webkit-search-results-decoration {\n  display: none;\n}\n.sbx-twitter__input:hover {\n  box-shadow: inset 0 0 0 1px #c1d0da;\n}\n.sbx-twitter__input:focus, .sbx-twitter__input:active {\n  outline: 0;\n  box-shadow: inset 0 0 0 1px #D6DEE3;\n  background: rgba(255, 255, 255, 0)\n}\n.sbx-twitter__input::-webkit-input-placeholder {\n  color: #9AAEB5;\n}\n.sbx-twitter__input::-moz-placeholder {\n  color: #9AAEB5;\n}\n.sbx-twitter__input:-ms-input-placeholder {\n  color: #9AAEB5;\n}\n.sbx-twitter__input::placeholder {\n  color: #9AAEB5;\n}\n.sbx-twitter__submit {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: inherit;\n  margin: 0;\n  border: 0;\n  border-radius: 0 16px 16px 0;\n  background-color: rgba(62, 130, 247, 0);\n  padding: 0;\n  width: 33px;\n  height: 100%;\n  vertical-align: middle;\n  text-align: center;\n  font-size: inherit;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.sbx-twitter__submit::before {\n  display: inline-block;\n  margin-right: -4px;\n  height: 100%;\n  vertical-align: middle;\n  content: '';\n}\n.sbx-twitter__submit:hover, .sbx-twitter__submit:active {\n  cursor: pointer;\n}\n.sbx-twitter__submit:focus {\n  outline: 0;\n}\n.sbx-twitter__submit svg {\n  width: 13px;\n  height: 13px;\n  vertical-align: middle;\n  fill: #657580;\n}\n.sbx-twitter__reset {\n  display: none;\n  position: absolute;\n  top: 7px;\n  right: 33px;\n  margin: 0;\n  border: 0;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  font-size: inherit;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  fill: rgba(0, 0, 0, 0.5);\n}\n.sbx-twitter__reset:focus {\n  outline: 0;\n}\n.sbx-twitter__reset svg {\n  display: block;\n  margin: 4px;\n  width: 11px;\n  height: 11px;\n}\n.sbx-twitter__input:valid ~ .sbx-twitter__reset {\n  display: block;\n  -webkit-animation-name: sbx-reset-in;\n          animation-name: sbx-reset-in;\n  -webkit-animation-duration: .15s;\n          animation-duration: .15s;\n}\n@-webkit-keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n            transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n}\n}\n@keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n            transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n}\n}\n\n\n/* spotify */\n.sbx-spotify {\n  display: inline-block;\n  position: relative;\n  width: 200px;\n  height: 25px;\n  white-space: nowrap;\n  box-sizing: border-box;\n  font-size: 12px;\n}\n.sbx-spotify__wrapper {\n  width: 100%;\n  height: 100%;\n}\n.sbx-spotify__input {\n  display: inline-block;\n  position: absolute;\n  left: 0 !important;\n  top: 0 !important;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 13px;\n  box-shadow: inset 0 0 0 0px #FFFFFF;\n  background: rgba(255, 255, 255, 0);\n  padding: 0;\n  padding-right: 20px;\n  padding-left: 25px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.sbx-spotify__input-placeholder {\n  display: inline-block;\n  -webkit-transition: box-shadow .4s ease, background .4s ease;\n  transition: box-shadow .4s ease, background .4s ease;\n  border: 0;\n  border-radius: 13px;\n  box-shadow: inset 0 0 0 0px #FFFFFF;\n  background: #FFFFFF;\n  padding: 0;\n  padding-right: 20px;\n  padding-left: 25px;\n  width: 100%;\n  height: 100%;\n  vertical-align: middle;\n  white-space: normal;\n  font-size: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n.sbx-spotify__input::-webkit-search-decoration, .sbx-spotify__input::-webkit-search-cancel-button, .sbx-spotify__input::-webkit-search-results-button, .sbx-spotify__input::-webkit-search-results-decoration {\n  display: none;\n}\n.sbx-spotify__input:hover {\n  box-shadow: inset 0 0 0 0px #e6e6e6;\n}\n.sbx-spotify__input:focus, .sbx-spotify__input:active {\n  outline: 0;\n  box-shadow: inset 0 0 0 0px #FFFFFF;\n  background: rgba(255, 255, 255, 0)\n}\n.sbx-spotify__input::-webkit-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-spotify__input::-moz-placeholder {\n  color: #AAAAAA;\n}\n.sbx-spotify__input:-ms-input-placeholder {\n  color: #AAAAAA;\n}\n.sbx-spotify__input::placeholder {\n  color: #AAAAAA;\n}\n.sbx-spotify__submit {\n  position: absolute;\n  top: 0;\n  right: inherit;\n  left: 0;\n  margin: 0;\n  border: 0;\n  border-radius: 12px 0 0 12px;\n  background-color: rgba(255, 255, 255, 0);\n  padding: 0;\n  width: 25px;\n  height: 100%;\n  vertical-align: middle;\n  text-align: center;\n  font-size: inherit;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.sbx-spotify__submit::before {\n  display: inline-block;\n  margin-right: -4px;\n  height: 100%;\n  vertical-align: middle;\n  content: '';\n}\n.sbx-spotify__submit:hover, .sbx-spotify__submit:active {\n  cursor: pointer;\n}\n.sbx-spotify__submit:focus {\n  outline: 0;\n}\n.sbx-spotify__submit svg {\n  width: 17px;\n  height: 17px;\n  vertical-align: middle;\n  fill: #222222;\n}\n.sbx-spotify__reset {\n  display: none;\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  margin: 0;\n  border: 0;\n  background: none;\n  cursor: pointer;\n  padding: 0;\n  font-size: inherit;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  fill: rgba(0, 0, 0, 0.5);\n}\n.sbx-spotify__reset:focus {\n  outline: 0;\n}\n.sbx-spotify__reset svg {\n  display: block;\n  margin: 4px;\n  width: 13px;\n  height: 13px;\n}\n.sbx-spotify__input:valid ~ .sbx-spotify__reset {\n  display: block;\n  -webkit-animation-name: sbx-reset-in;\n          animation-name: sbx-reset-in;\n  -webkit-animation-duration: .15s;\n          animation-duration: .15s;\n}\n@-webkit-keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n            transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n}\n}\n@keyframes sbx-reset-in {\n0% {\n    -webkit-transform: translate3d(-20%, 0, 0);\n            transform: translate3d(-20%, 0, 0);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 1;\n}\n}\n.vue-instant__suggestions {\n     position: absolute;\n     left: 0;\n     top: 110%;\n     margin: 0;\n     background-color: #fff;\n     border: 1px solid #D3DCE6;\n     width: 100%;\n     padding: 6px 0;\n     z-index: 10;\n     border-radius: 2px;\n     max-height: 280px;\n     box-sizing: border-box;\n     overflow: auto;\n     box-shadow: 0 0 6px 0 rgba(0,0,0,.04), 0 2px 4px 0 rgba(0,0,0,.12);\n     margin-top:3px;\n}\n.vue-instant__suggestions li {\n     list-style: none;\n     line-height: 36px;\n     padding: 0 10px;\n     margin: 0;\n     cursor: pointer;\n     color: #475669;\n     font-size: 14px;\n     white-space: nowrap;\n     overflow: hidden;\n     text-overflow: ellipsis;\n}\n.vue-instant__suggestions li.highlighted__spotify {\n     background-color: black;\n     color: #fff;\n}\n.vue-instant__suggestions li.highlighted__twitter {\n     background-color: #20a0ff;\n     color: #fff;\n}\n.vue-instant__suggestions li.highlighted__google {\n     background-color: #EEEEEE;\n     color: black;\n}\n.vue-instant__suggestions li.highlighted__facebook {\n     background-color: #3e5da0;\n     color: #fff;\n}\n.vue-instant__suggestions li.highlighted__amazon {\n     background-color: #232F3E;\n     color: #fff;\n}\n.el-input-group__append {\n   border: 0px !important;\n}\n.sbx-custom__input {\n  position: absolute;\n  left: 0 !important;\n  background: rgba(255, 255, 255, 0) !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(179);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 179:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports=function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=1)}([function(module,exports,__webpack_require__){__webpack_require__(3);var Component=__webpack_require__(4)(__webpack_require__(2),__webpack_require__(5),null,null);module.exports=Component.exports},function(module,__webpack_exports__,__webpack_require__){"use strict";function install(Vue){Vue.component("vueInstant",__WEBPACK_IMPORTED_MODULE_0__components_VueInstant_vue___default.a)}Object.defineProperty(__webpack_exports__,"__esModule",{value:!0}),__webpack_exports__.install=install;var __WEBPACK_IMPORTED_MODULE_0__components_VueInstant_vue__=__webpack_require__(0),__WEBPACK_IMPORTED_MODULE_0__components_VueInstant_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_VueInstant_vue__);__webpack_require__.d(__webpack_exports__,"VueInstant",function(){return __WEBPACK_IMPORTED_MODULE_0__components_VueInstant_vue___default.a});var plugin={version:"1.0.2",install:install};__webpack_exports__.default=plugin;var GlobalVue=null;"undefined"!=typeof window?GlobalVue=window.Vue:"undefined"!=typeof global&&(GlobalVue=global.Vue),GlobalVue&&GlobalVue.use(plugin)},function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_vue_clickaway__=__webpack_require__(6);__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_clickaway__);__webpack_exports__.default={name:"vueInstant",mixins:[__WEBPACK_IMPORTED_MODULE_0_vue_clickaway__.mixin],props:{value:{type:String,required:!0},suggestions:{type:Array,required:!0},suggestionAttribute:{type:String,required:!0},placeholder:{type:String,default:"write something..."},minMatch:{type:Number,default:2},name:{type:String,default:"vueInstant"},autofocus:{type:Boolean,default:!0},disabled:{type:Boolean},type:{type:String,default:"facebook"},showAutocomplete:{type:Boolean,default:!0}},data:function(){return{selectedEvent:null,selectedSuggest:null,inputChanged:!1,suggestionsIsVisible:!0,highlightedIndex:0,highlightedIndexMax:7,similiarData:[],placeholderVal:this.placeholder,types:[{name:"facebook",formClass:"searchbox sbx-facebook",classWrapper:"sbx-facebook__wrapper",classInput:"sbx-facebook__input",classInputPlaceholder:"sbx-facebook__input-placeholder",classSubmit:"sbx-facebook__submit",svgSearch:"#sbx-icon-search-8",classReset:"sbx-facebook__reset",svgClear:"#sbx-icon-clear-4",highlighClass:"highlighted__facebook"},{name:"google",formClass:"searchbox sbx-google",classWrapper:"sbx-google__wrapper",classInput:"sbx-google__input",classInputPlaceholder:"sbx-google__input-placeholder",classSubmit:"sbx-google__submit",svgSearch:"#sbx-icon-search-8",classReset:"sbx-google__reset",svgClear:"#sbx-icon-clear-4",highlighClass:"highlighted__google"},{name:"amazon",formClass:"searchbox sbx-amazon",classWrapper:"sbx-amazon__wrapper",classInput:"sbx-amazon__input",classInputPlaceholder:"sbx-amazon__input-placeholder",classSubmit:"sbx-amazon__submit",svgSearch:"#sbx-icon-search-8",classReset:"sbx-amazon__reset",svgClear:"#sbx-icon-clear-4",highlighClass:"highlighted__amazon"},{name:"twitter",formClass:"searchbox sbx-twitter",classWrapper:"sbx-twitter__wrapper",classInput:"sbx-twitter__input",classInputPlaceholder:"sbx-twitter__input-placeholder",classSubmit:"sbx-twitter__submit",svgSearch:"#sbx-icon-search-8",classReset:"sbx-twitter__reset",svgClear:"#sbx-icon-clear-4",highlighClass:"highlighted__twitter"},{name:"spotify",formClass:"searchbox sbx-spotify",classWrapper:"sbx-spotify__wrapper",classInput:"sbx-spotify__input",classInputPlaceholder:"sbx-spotify__input-placeholder",classSubmit:"sbx-spotify__submit",svgSearch:"#sbx-icon-search-8",classReset:"sbx-spotify__reset",svgClear:"#sbx-icon-clear-4",highlighClass:"highlighted__spotify"},{name:"custom",formClass:"searchbox sbx-custom",classWrapper:"sbx-custom__wrapper",classInput:"sbx-custom__input",classInputPlaceholder:"sbx-custom__input-placeholder",classSubmit:"sbx-custom__submit",svgSearch:"#sbx-icon-search-8",classReset:"sbx-custom__reset",svgClear:"#sbx-icon-clear-4",highlighClass:"highlighted__custom"}]}},watch:{placeholder:function(val){this.textValIsEmpty()&&(this.placeholderVal=val)}},computed:{getPlaceholder:function(){if(this.inputChanged||this.textValIsEmpty())return this.placeholderVal},modeIsFull:function(){return this.showAutocomplete},showSuggestions:function(){return this.similiarData.length>=this.minMatch},getPropertiesClass:function(){return this.getType().properties},getFormClass:function(){return this.getType().formClass},getClassWrapper:function(){return this.getType().classWrapper},getClassInput:function(){return this.getType().classInput},getClassInputPlaceholder:function(){return this.getType().classInputPlaceholder},getClassSubmit:function(){return this.getType().classSubmit},getSVGSearch:function(){return this.getType().svgSearch},getClassReset:function(){return this.getType().classReset},getSVGClear:function(){return this.getType().svgClear},textVal:{get:function(){return this.value},set:function(v){this.$emit("input",v)}}},methods:{decrementHighlightedIndex:function(){this.highlightedIndex-=1},incrementHighlightedIndex:function(){this.highlightedIndex+=1},escapeAction:function(){this.clearHighlightedIndex(),this.clearSimilarData(),this.clearSelected(),this.setBlur(),this.emitEscape()},arrowRightAction:function(){this.setPlaceholderAndTextVal(),this.emitKeyRight()},arrowDownAction:function(){this.arrowDownValidation()?(this.incrementHighlightedIndex(),this.setPlaceholderAndTextVal(),this.emitKeyDown()):this.clearHighlightedIndex()},arrowUpAction:function(){this.highlightedIndex>0?(this.decrementHighlightedIndex(),this.setPlaceholderAndTextVal(),this.emitKeyUp()):this.clearHighlightedIndex()},enterAction:function(){this.setFinalTextValue(),this.clearHighlightedIndex(),this.clearSimilarData(),this.emitEnter()},selectedAction:function(index){this.highlightedIndex=index,this.setFinalTextValue(),this.clearPlaceholder(),this.clearSimilarData(),this.emitSelected()},addRegister:function(o){this.isSimilar(o)&&this.textValIsNotEmpty()&&this.addSuggestion(o)},addSuggestion:function(o){this.findSuggestionTextIsRepited(o)||this.addToSimilarData(o)},addToSimilarData:function(o){this.canAddToSimilarData()&&(this.placeholderVal=this.letterProcess(o),this.selectedSuggest=o,this.emitSelected(),this.similiarData.unshift(o))},setTextValue:function(e){e.target.value.trim()&&(this.textVal=e.target.value,this.emitChange())},setSelectedAsTextValue:function(){this.textVal=this.selected},setInitialTextValue:function(){this.textVal=this.value},setFinalTextValue:function(){this.finalTextValueValidation()?(this.setPlaceholderAndTextVal(),this.emitChange()):this.clearAll()},setPlaceholderAndTextVal:function(){if(void 0!==this.similiarData[this.highlightedIndex]){var suggest=this.similiarData[this.highlightedIndex];this.placeholderVal=suggest[this.suggestionAttribute],this.textVal=suggest[this.suggestionAttribute],this.selectedSuggest=suggest,this.emitSelected()}},setInitialPlaceholder:function(){this.placeholderVal=this.placeholder},setBlur:function(){this.$el.blur()},getType:function(){return this.types.find(this.isSameType)},getClassHighlighted:function(index){if(this.highlightedIndex===index){return this.getType().highlighClass}},letterProcess:function(o){var remoteText=o[this.suggestionAttribute].split("");return this.textVal.split("").forEach(function(letter,key){letter!==remoteText[key]&&(remoteText[key]=letter)}),remoteText.join("")},findSuggests:function(){this.suggestionsPropIsDefined()&&this.suggestions.forEach(this.addRegister)},arrowDownValidation:function(){return this.highlightedIndex<this.highlightedIndexMax&&this.highlightedIndex<this.similiarData.length-1},lowerFirst:function(string){return string.charAt(0).toLowerCase()+string.slice(1)},controlEvents:function(){var uncaptz=this.lowerFirst(this.selectedEvent+"Action"),fnName=this[uncaptz];this.fnExists(fnName)&&fnName()},findRepited:function(similarItem,o){return similarItem[this.suggestionAttribute]===o[this.suggestionAttribute]},findSuggestionTextIsRepited:function(o){return this.similiarData.find(this.findRepited.bind(this,o))},finalTextValueValidation:function(){return void 0!==this.similiarData[this.highlightedIndex]||""===this.placeholderVal&&0!==this.highlightedIndex},isSimilar:function(o){if(o)return o[this.suggestionAttribute].toLowerCase().startsWith(this.textVal.toLowerCase())},isSameType:function(o){return o.name===this.type},fnExists:function(fnName){return"function"==typeof fnName},canAddToSimilarData:function(){return this.similiarData.length<this.highlightedIndexMax},suggestionsPropIsDefined:function(){return void 0!==this.suggestions},notArrowKeysEvent:function(){return"ArrowUp"!==this.selectedEvent&&"ArrowDown"!==this.selectedEvent&&"ArrowRight"!==this.selectedEvent},notEnterKeyEvent:function(){return"Enter"!==this.selectedEvent},textValIsEmpty:function(){return""===this.textVal},textValIsNotEmpty:function(){return""!==this.textVal},reset:function(){this.clearValue(),this.clearSelected(),this.clearPlaceholder(),this.clearSimilarData(),this.clearSelectedSuggest(),this.emitClear(),this.emitSelected()},clearAll:function(){this.clearSelected(),this.clearPlaceholder(),this.clearSimilarData(),this.clearSelectedSuggest()},clearValue:function(){this.textVal=""},clearSelected:function(){this.selected=null},clearSelectedSuggest:function(){this.selectedSuggest=null},clearSimilarData:function(){this.similiarData=[]},clearPlaceholder:function(){this.textValIsEmpty()?(this.clearSimilarData(),this.setInitialPlaceholder()):this.placeholderVal=""},clearHighlightedIndex:function(){this.highlightedIndex=0},changeText:function(e){this.selectedEvent=e.code,this.setTextValue(e),this.processChangeText(),this.controlEvents(e)},processChangeText:function(e){this.notEnterKeyEvent()&&(this.inputChanged=!0,this.suggestionsIsVisible=!0,this.clearAllAndFindSuggest())},clearAllAndFindSuggest:function(){this.notArrowKeysEvent()&&(this.clearAll(),this.findSuggests())},away:function(){this.suggestionsIsVisible=!1,this.emitSelected()},emitChange:function(){},emitClickInput:function(event){this.$emit("click-input",event)},emitClickButton:function(event){this.$emit("click-button",this.textVal)},emitEnter:function(){this.$emit("enter")},emitKeyUp:function(){this.$emit("key-up")},emitKeyDown:function(){this.$emit("key-down",this.selectedSuggest)},emitKeyRight:function(){this.$emit("key-right")},emitClear:function(){this.$emit("clear")},emitEscape:function(){this.$emit("escape")},emitSelected:function(){this.$emit("selected",this.selectedSuggest)}}}},function(module,exports){},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_c("div",{staticClass:"main"},[_c("form",{class:_vm.getFormClass,attrs:{novalidate:"novalidate",onsubmit:"return false;"}},[_c("div",{class:_vm.getClassWrapper,attrs:{role:"search"}},[_c("input",{class:_vm.getClassInputPlaceholder,attrs:{type:"search",name:"search",placeholder:_vm.getPlaceholder,autocomplete:"off",required:"required",tabindex:"-1"}}),_vm._v(" "),_c("input",{directives:[{name:"model",rawName:"v-model",value:_vm.textVal,expression:"textVal"}],class:_vm.getClassInput,attrs:{disabled:_vm.disabled,type:"search",name:_vm.name,placeholder:"",autocomplete:"off",required:"required",autofocus:_vm.autofocus},domProps:{value:_vm.textVal},on:{click:_vm.emitClickInput,keyup:_vm.changeText,input:function($event){$event.target.composing||(_vm.textVal=$event.target.value)}}}),_vm._v(" "),_c("button",{class:_vm.getClassSubmit,attrs:{type:"submit",tabindex:"-1"},on:{click:_vm.emitClickButton}},[_c("svg",{attrs:{role:"img","aria-label":"Search"}},[_c("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":_vm.getSVGSearch}})])]),_vm._v(" "),_c("button",{class:_vm.getClassReset,attrs:{type:"reset",tabindex:"-1"},on:{click:_vm.reset}},[_c("svg",{attrs:{role:"img","aria-label":"Reset"}},[_c("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":_vm.getSVGClear}})])]),_vm._v(" "),_vm.modeIsFull?_c("div",{staticClass:"el-input-group__append"},[_vm.suggestionsIsVisible&&_vm.showSuggestions?_c("ul",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:_vm.away,expression:"away"}],staticClass:"vue-instant__suggestions"},_vm._l(_vm.similiarData,function(item,index){return _c("li",{class:_vm.getClassHighlighted(index),on:{click:function($event){_vm.selectedAction(index)}}},[_vm._v(_vm._s(item[_vm.suggestionAttribute]))])})):_vm._e()]):_vm._e()])])]),_vm._v(" "),_c("svg",{staticStyle:{display:"none"},attrs:{xmlns:"http://www.w3.org/2000/svg"}},[_c("symbol",{attrs:{xmlns:"http://www.w3.org/2000/svg",id:"sbx-icon-search-8",viewBox:"0 0 40 40"}},[_c("path",{attrs:{d:"M16 32c8.835 0 16-7.165 16-16 0-8.837-7.165-16-16-16C7.162 0 0 7.163 0 16c0 8.835 7.163 16 16 16zm0-5.76c5.654 0 10.24-4.586 10.24-10.24 0-5.656-4.586-10.24-10.24-10.24-5.656 0-10.24 4.584-10.24 10.24 0 5.654 4.584 10.24 10.24 10.24zM28.156 32.8c-1.282-1.282-1.278-3.363.002-4.643 1.282-1.284 3.365-1.28 4.642-.003l6.238 6.238c1.282 1.282 1.278 3.363-.002 4.643-1.283 1.283-3.366 1.28-4.643.002l-6.238-6.238z","fill-rule":"evenodd"}})]),_vm._v(" "),_c("symbol",{attrs:{xmlns:"http://www.w3.org/2000/svg",id:"sbx-icon-clear-4",viewBox:"0 0 20 20"}},[_c("path",{attrs:{d:"M11.664 9.877l4.485 4.485-1.542 1.54-4.485-4.485-4.485 4.485-1.54-1.54 4.485-4.485-4.485-4.485 1.54-1.54 4.485 4.484 4.485-4.485 1.54 1.542-4.484 4.485zM10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10z","fill-rule":"evenodd"}})])])])},staticRenderFns:[]}},function(module,exports){module.exports=__webpack_require__(181)}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vue = __webpack_require__(17);
Vue = 'default' in Vue ? Vue['default'] : Vue;

var version = '2.1.0';

var compatible = (/^2\./).test(Vue.version);
if (!compatible) {
  Vue.util.warn('VueClickaway ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}



// @SECTION: implementation

var HANDLER = '_vue_clickaway_handler';

function bind(el, binding) {
  unbind(el);

  var callback = binding.value;
  if (typeof callback !== 'function') {
    if (true) {
      Vue.util.warn(
        'v-' + binding.name + '="' +
        binding.expression + '" expects a function value, ' +
        'got ' + callback
      );
    }
    return;
  }

  // @NOTE: Vue binds directives in microtasks, while UI events are dispatched
  //        in macrotasks. This causes the listener to be set up before
  //        the "origin" click event (the event that lead to the binding of
  //        the directive) arrives at the document root. To work around that,
  //        we ignore events until the end of the "initial" macrotask.
  // @REFERENCE: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  // @REFERENCE: https://github.com/simplesmiler/vue-clickaway/issues/8
  var initialMacrotaskEnded = false;
  setTimeout(function() {
    initialMacrotaskEnded = true;
  }, 0);

  el[HANDLER] = function(ev) {
    // @NOTE: IE 5.0+
    // @REFERENCE: https://developer.mozilla.org/en/docs/Web/API/Node/contains
    if (initialMacrotaskEnded && !el.contains(ev.target)) {
      return callback(ev);
    }
  };

  document.documentElement.addEventListener('click', el[HANDLER], false);
}

function unbind(el) {
  document.documentElement.removeEventListener('click', el[HANDLER], false);
  delete el[HANDLER];
}

var directive = {
  bind: bind,
  update: function(el, binding) {
    if (binding.value === binding.oldValue) return;
    bind(el, binding);
  },
  unbind: unbind,
};

var mixin = {
  directives: { onClickaway: directive },
};

exports.version = version;
exports.directive = directive;
exports.mixin = mixin;

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_instant_dist_vue_instant_css__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_instant_dist_vue_instant_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_instant_dist_vue_instant_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_instant_dist_vue_instant_common__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_instant_dist_vue_instant_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_instant_dist_vue_instant_common__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





Vue.use(__WEBPACK_IMPORTED_MODULE_2_vue_instant_dist_vue_instant_common___default.a);

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {

        this.fetchContacts();
    },


    data: function data() {
        return {

            // vue-instant 
            inputSKU: '',
            suggestionAttribute: 'contact_company_name',
            suggestions: [],
            transactionPurchaseOrders: [],
            transactionItems: [],
            contacts: [],
            contact_company_name: null,
            selectedEvent: "",

            formIsSubmitted: false,
            createText: '<i class="fa fa-spinner fa-spin"></i> CREATING...',
            saveText: '<i class="fa fa-spinner fa-spin"></i> SAVING...',
            buttonText: 'SAVE',
            loading: false,
            error: false

        };
    },

    methods: {
        fetchTransactions: function fetchTransactions(index) {
            var _this = this;

            this.loading = true;
            var vm = this;

            //find the index
            var queryResult = linq.from(this.contacts).where(function (contact) {
                console.log(vm.contact_company_name);
                return contact.contact_company_name == vm.contact_company_name;
            }).toArray();

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/reports/generate/per-principal/' + queryResult[0].contact_id).then(function (response) {
                console.log(response.statusText);
                _this.$set(_this, 'transactionPurchaseOrders', response.data.purchase_orders);
                _this.$set(_this, 'transactionItems', response.data.items);
                _this.loading = false;
            });
        },


        clear: function clear(index) {},

        changed: function changed() {

            var vm = this;

            // search from the loaded items to enchance performance
            this.contacts.forEach(function (contact) {
                vm.suggestions.push(contact);
            });
            return false;
        },

        fetchContacts: function fetchContacts() {
            var _this2 = this;

            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__Auth_auth_js__["a" /* default */].app.API_URL + '/contacts').then(function (response) {
                console.log(response.statusText);
                _this2.$set(_this2, 'contacts', response.data);
            });
        },
        viewPurchaseOrder: function viewPurchaseOrder(poId) {
            this.$router.push({ path: '/purchase-orders/' + poId });
        }
    }

});

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-12", staticStyle: { "margin-top": "20px" } },
      [
        _vm._v("\n            Select Principal : "),
        _c("vue-instant", {
          attrs: {
            "suggestion-attribute": _vm.suggestionAttribute,
            disabled: false,
            "show-autocomplete": true,
            autofocus: true,
            suggestions: _vm.suggestions,
            name: "customName",
            placeholder: "Search by principal name and hit enter",
            type: "google"
          },
          on: {
            input: function($event) {
              _vm.changed()
            },
            enter: function($event) {
              _vm.fetchTransactions(_vm.index)
            },
            clear: _vm.clear
          },
          model: {
            value: _vm.contact_company_name,
            callback: function($$v) {
              _vm.contact_company_name = $$v
            },
            expression: "contact_company_name"
          }
        }),
        _vm._v(" "),
        _c("h3", [_vm._v("Transactions")]),
        _vm._v(" "),
        _c("div", { staticClass: "panel panel-default" }, [
          _c("div", { staticClass: "panel-body" }, [
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.loading,
                    expression: "loading"
                  }
                ],
                staticStyle: { "margin-top": "14rem" },
                attrs: { align: "center" }
              },
              [
                _c("i", { staticClass: "fa fa-spinner fa-spin fa-3x fa-fw" }),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticStyle: {
                      "font-size": "13px",
                      "font-family": "Proxima Nova Regular",
                      "margin-top": "5px"
                    }
                  },
                  [_vm._v(" Fetching data... ")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.loading,
                    expression: "!loading"
                  }
                ],
                staticClass: "panel panel-default"
              },
              [
                _c("div", { staticClass: "panel-heading" }, [
                  _vm._v(
                    "\n                          Purchase Orders\n\n                      "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "panel-body" }, [
                  _c("table", { staticClass: "table table-hover" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm.loading
                          ? _c(
                              "div",
                              {
                                staticStyle: {
                                  "margin-top": "20px",
                                  "margin-left": "150"
                                },
                                attrs: { align: "center" }
                              },
                              [
                                _c("i", {
                                  staticClass:
                                    "fa fa-spinner fa-spin fa-2x fa-fw"
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.transactionPurchaseOrders, function(
                          transaction
                        ) {
                          return _vm.transactionPurchaseOrders.length != 0
                            ? _c(
                                "tr",
                                {
                                  staticStyle: { cursor: "pointer" },
                                  on: {
                                    click: function($event) {
                                      _vm.viewPurchaseOrder(transaction.po_id)
                                    }
                                  }
                                },
                                [
                                  _c("td", [
                                    _vm._v(
                                      " " + _vm._s(transaction.po_no) + " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      " " + _vm._s(transaction.po_ref_no) + " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      " " + _vm._s(transaction.po_date) + " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm._f("currency")(
                                            transaction.po_total_amount,
                                            "PHP",
                                            2
                                          )
                                        ) +
                                        " "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      " " + _vm._s(transaction.po_status) + " "
                                    )
                                  ])
                                ]
                              )
                            : _vm._e()
                        })
                      ],
                      2
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.loading,
                    expression: "!loading"
                  }
                ],
                staticClass: "panel panel-default"
              },
              [
                _c("div", { staticClass: "panel-heading" }, [
                  _vm._v(
                    "\n                    LOGS OF ITEM ORDERED\n          "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "panel-body" }, [
                  _c("table", { staticClass: "table table-hover" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm.loading
                          ? _c(
                              "div",
                              {
                                staticStyle: {
                                  "margin-top": "20px",
                                  "margin-left": "150"
                                },
                                attrs: { align: "center" }
                              },
                              [
                                _c("i", {
                                  staticClass:
                                    "fa fa-spinner fa-spin fa-2x fa-fw"
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.transactionItems, function(transaction) {
                          return _vm.transactionItems.length != 0
                            ? _c("tr", [
                                _c("td", [
                                  _vm._v(
                                    " " + _vm._s(transaction.item_sku) + " "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    " " + _vm._s(transaction.item_name) + " "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    " " + _vm._s(transaction.item_desc) + " "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    " " +
                                      _vm._s(
                                        transaction.purchse_order_item_qty
                                      ) +
                                      " "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    " PHP" +
                                      _vm._s(
                                        transaction.purchse_order_item_rate
                                      ) +
                                      " "
                                  )
                                ])
                              ])
                            : _vm._e()
                        })
                      ],
                      2
                    )
                  ])
                ])
              ]
            )
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-title" }, [
      _c("div", { staticClass: " pull-right" }, [
        _c("div", { staticClass: "btn-toolbar" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "title" }, [_vm._v("Report By Principal")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Purchase Order# ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Reference#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Sku ")]),
        _vm._v(" "),
        _c("th", [_vm._v("Item Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Description")]),
        _vm._v(" "),
        _c("th", [_vm._v("Qty ordered")]),
        _vm._v(" "),
        _c("th", [_vm._v("Rate")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bf88780e", module.exports)
  }
}

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(462)
/* template */
var __vue_template__ = __webpack_require__(463)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\Reports\\ReportPerPrincipal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bf88780e", Component.options)
  } else {
    hotAPI.reload("data-v-bf88780e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});