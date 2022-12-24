(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}const n=function(){function e(t,n,r,o,i,u,c,a,l,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._link=n,this._likes=o,this.id=r,this._isMine=i,this._cardTemplateSelector=c,this._handleCardClick=a,this._handleDeleteCardClick=l,this._userId=u,this._handleLikePress=s}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){var e=document.querySelector(this._cardTemplateSelector).content.querySelector(".gallery__element").cloneNode(!0);return this._isMine||e.removeChild(e.querySelector(".gallery__delete-image-btn")),e}},{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._userId}))}},{key:"_updateLikesView",value:function(){this._likesCounter.textContent=this._likes.length,this._likeBtn.classList.toggle("gallery__image-like-btn_active",this.isLiked())}},{key:"updateLikes",value:function(e){this._likes=e,this._updateLikesView()}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._image.addEventListener("click",this._handleCardClick),this._likeBtn.addEventListener("click",(function(){e._handleLikePress(e.isLiked())})),this._isMine&&this._element.querySelector(".gallery__delete-image-btn").addEventListener("click",(function(){e._handleDeleteCardClick(e)}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._image=this._element.querySelector(".gallery__image"),this._element.querySelector(".gallery__image-title").textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._likesCounter=this._element.querySelector(".gallery__number-of-likes"),this._likeBtn=this._element.querySelector(".gallery__image-like-btn"),this._updateLikesView(),this._setEventListeners(),this._element}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,u(r.key),r)}}function i(e,t,n){return(t=u(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}var c=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_showError",(function(e,t){t.classList.add(r._validationObject.inputErrorClass),e.classList.add(r._validationObject.errorClass),e.textContent=t.validationMessage})),i(this,"_hideError",(function(e,t){t.classList.remove(r._validationObject.inputErrorClass),e.classList.remove(r._validationObject.errorClass),e.textContent=""})),i(this,"disableSubmitBtn",(function(){r._submitBtn.classList.add(r._validationObject.inactiveButtonClass),r._submitBtn.setAttribute("disabled",!0)})),i(this,"_enableSubmitBtn",(function(){r._submitBtn.classList.remove(r._validationObject.inactiveButtonClass),r._submitBtn.removeAttribute("disabled")})),i(this,"_isInvalid",(function(){return Array.from(r._inputArr).some((function(e){return!e.validity.valid}))})),i(this,"_checkButton",(function(){r._isInvalid()?r.disableSubmitBtn():r._enableSubmitBtn()})),i(this,"_handleFormInput",(function(e){var t=e.target,n=r._formElement.querySelector(".input-error-".concat(t.name));t.validity.valid?r._hideError(n,t):r._showError(n,t),r._checkButton()})),this._validationObject=t,this._formElement=n}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this._checkButton(),this._inputArr.forEach((function(t){var n=e._formElement.querySelector(".input-error-".concat(t.name));e._hideError(n,t)}))}},{key:"enableValidation",value:function(){var e=this;this._inputArr=Array.from(this._formElement.querySelectorAll(this._validationObject.inputSelector)),this._submitBtn=this._formElement.querySelector(this._validationObject.submitButtonSelector),this._inputArr.forEach((function(t){t.addEventListener("input",(function(t){e._handleFormInput(t)}))}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();const a=c;function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===l(o)?o:String(o)),r)}var o}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOutOfPopupClick",value:function(e){this.popup===e.target&&this.close()}},{key:"open",value:function(){this.popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this.popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this.popup.addEventListener("click",(function(t){e._handleOutOfPopupClick(t)})),this._closingBtn=this.popup.querySelector(".popup__close-btn"),this._closingBtn.addEventListener("click",(function(){e.close()}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function b(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._formElement=n.popup.querySelector(".popup__form"),n._inputList=n.popup.querySelectorAll(".popup__form-item"),n._submitBtn=n.popup.querySelector(".popup__save-btn"),n._submitBtnText=n._submitBtn.textContent,n}return t=u,n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;this.popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()})),d(v(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._formElement.reset(),d(v(u.prototype),"close",this).call(this)}},{key:"renderLoading",value:function(e){e?this._submitBtn.textContent="Сохранение...":(this._submitBtn.textContent=this._submitBtnText,this.close())}}],n&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==g(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function O(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imageElement=t.popup.querySelector(".picture__image"),t._titleElement=t.popup.querySelector(".picture__title"),t}return t=u,(n=[{key:"open",value:function(e,t){this._imageElement.src=e,this._imageElement.alt=t,this._titleElement.textContent=t,k(j(u.prototype),"open",this).call(this)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function q(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}const U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._button=n.popup.querySelector(".popup__save-btn"),n._handleSubmit=t,n}return t=u,(n=[{key:"open",value:function(e){T(R(u.prototype),"open",this).call(this),this._card=e}},{key:"setEventListeners",value:function(){var e=this;T(R(u.prototype),"setEventListeners",this).call(this),this._button.addEventListener("click",(function(){e._handleSubmit(e._card),e.close()}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}var A=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._usernameElement=document.querySelector(t),this._userInfoElement=document.querySelector(n)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){return{name:this._usernameElement.textContent,about:this._userInfoElement.textContent}}},{key:"setUserInfo",value:function(e,t){this._usernameElement.textContent=e,this._userInfoElement.textContent=t}}],n&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==D(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}var M=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.reverse().forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==N(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}const G=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:this.headers}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}},{key:"getCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:this.headers}).then((function(e){return e.json()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}},{key:"updateUserInfo",value:function(e,t){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e,about:t})}).catch((function(e){console.log("Ошибка: ".concat(e))}))}},{key:"addCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).catch((function(e){console.log("Ошибка: ".concat(e))}))}},{key:"deleteCard",value:function(e){fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.json()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}},{key:"likeCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this.headers}).then((function(e){return e.json()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}},{key:"removeLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this.headers}).then((function(e){return e.json()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).catch((function(e){console.log("Ошибка: ".concat(e))}))}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var H=document.querySelector(".profile__edit-btn"),z=document.querySelector(".profile__add-btn"),K=document.querySelector(".profile__avatar-overlay"),Q={formSelector:".popup__form",inputSelector:".popup__form-item",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_disabled",inputErrorClass:"popup__form-item_invalid",errorClass:"popup__input-error_visible"},W=(document.querySelector(".profile__name"),document.querySelector(".profile__about"),document.querySelector(".profile__avatar")),X=new _(".popup_type_edit-profile",(function(e){X.renderLoading(!0),ee.setUserInfo(e.name,e.about),oe.updateUserInfo(e.name,e.about).finally((function(){X.renderLoading(!1)}))})),Y=new _(".popup_type_add-picture",(function(e){Y.renderLoading(!0);var t={name:e["picture-name"],link:e["picture-link"]};oe.addCard(t).then((function(e){return e.json()})).then((function(e){return ue({name:e.name,link:e.link,likes:e.likes,ownerId:ie.userId,id:e._id})})).then((function(e){ce.addItem(e)})).finally((function(){Y.renderLoading(!1)})).catch((function(e){console.log("Ошибка: ".concat(e))}))})),Z=new U(".popup_type_delete-card",(function(e){e.deleteCard(),oe.deleteCard(e.id)}));Z.setEventListeners();var $=new _(".popup_type_change-avatar",(function(e){$.renderLoading(!0),W.src=e.avatar,oe.updateAvatar(e.avatar).finally((function(){$.renderLoading(!1)}))}));$.setEventListeners();var ee=new A(".profile__name",".profile__about"),te=new a(Q,X.popup),ne=new a(Q,Y.popup),re=new a(Q,$.popup);re.enableValidation();var oe=new G({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-56",headers:{authorization:"2f1089fd-d72d-4f9a-94ac-821334db37b8","Content-Type":"application/json"}}),ie={};oe.getUserInfo().then((function(e){ee.setUserInfo("".concat(e.name),"".concat(e.about)),W.src=e.avatar,ie.userId=e._id,ie.user=e})).catch((function(e){console.log("Ошибка: ".concat(e))})),oe.getCards().then((function(e){return e.map((function(e){return{name:e.name,link:e.link,likes:e.likes,ownerId:e.owner._id,id:e._id}}))})).then((function(e){return new M({items:e,renderer:function(e){var t=ue(e);ce.addItem(t)}},".gallery__list")})).then((function(e){return e.renderItems()})).catch((function(e){console.log("Ошибка: ".concat(e))}));var ue=function(e){var t=new n(e.name,e.link,e.id,e.likes,e.ownerId===ie.userId,ie.userId,"#card",(function(){var t,n;t=e.link,n=e.name,ae.open(t,n)}),(function(){Z.open(t)}),(function(n){n?oe.removeLike(e.id).then((function(e){t.updateLikes(e.likes)})).catch((function(e){console.log("Ошибка: ".concat(e))})):oe.likeCard(e.id).then((function(e){t.updateLikes(e.likes)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}));return t.generateCard()},ce=new M({items:[],renderer:function(e){var t=ue(e);ce.addItem(t)}},".gallery__list");ce.renderItems();var ae=new P(".popup_type_open-picture");ae.setEventListeners(),H.addEventListener("click",(function(){X.setInputValues(ee.getUserInfo()),te.resetValidation(),X.open()})),X.setEventListeners(),te.enableValidation(),z.addEventListener("click",(function(){ne.resetValidation(),Y.open(),ne.disableSubmitBtn()})),Y.setEventListeners(),ne.enableValidation(),K.addEventListener("click",(function(){re.resetValidation(),$.open()}))})();