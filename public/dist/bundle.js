/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./public/js/modules/calc.js":
/*!***********************************!*\
  !*** ./public/js/modules/calc.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ calcFn)
/* harmony export */ });
function calcFn () {
    try {
            //находим раздел с выбранными товарами
            const shopForm = document.querySelector('.shop-calc');
            if(shopForm) {
            //получение формы calc
                const formCalc = document.forms.calc;
                let idTotal = 0;
                let numCoffin, numWreath;
                document.addEventListener('click', function (e){
                    const element = e.target;
                    //console.log('element',element);
                    
                    //= гроб 
                    if(element.closest('.coffin__tim')){
                        const elementParent = element.closest('.coffin');
                        const coffinItems = elementParent.querySelectorAll('.coffin__item, .coffin__img, .coffin__label');
                        for(let i of coffinItems){
                            i.classList.toggle('active');
                        }
                    }
                    // клик на выбор гроба
                    if(element.closest('.coffin__item')){
                        //новое значение id
                        idTotal++;
        
                        //получение главного родителя 
                        const mainParent = element.closest('.coffin');
        
                        //получение текушего значения data-total
                        let dataTotal = mainParent.dataset.total;
        
                        //проверка на сушествование id
                        if(!dataTotal){
                            numCoffin = idTotal;
                        }
        
                        //новое значение data-total
                        mainParent.dataset.total = numCoffin;
        
                        const textParent = element.closest('.coffin__item');
                        const imgCoffinElement = textParent.querySelector('.coffin__img');
                        const imgCoffinSrc = imgCoffinElement.getAttribute('src');
                        const textCoffin = textParent.querySelector('.coffin__label').innerHTML;
                        const cashCoffin = textParent.querySelector('.coffin__label').dataset.cash;
                        const title = mainParent.querySelector('.coffin__tim-title');
                        mainParent.querySelector('.coffin__img-tim').setAttribute('src', imgCoffinSrc);
                        title.innerHTML = textCoffin;
        
                        //возврат последнего эл в магазине
                        let lastElementShop = shopForm.lastElementChild;
        
                        //удаляем товар если уже есть в списке
                        //поиск совпадения в выборе и магазине
                        if(document.querySelector(`[data-shop = "${dataTotal}"]`)){
                            //возврат эл магазина
                            const shopElement = document.querySelector(`[data-shop = "${dataTotal}"]`);
                            //возврат эл перед 
                            const shopElementPrevious = shopElement.previousSibling;
                            //удаление элемента
                            shopElement.remove();
                            //замена эл после которого будет вставлен новый эл
                            lastElementShop = shopElementPrevious;
                            numCoffin = dataTotal;
                        }
        
                        //добавляем новый элемент в выбранные товары
                        lastElementShop.insertAdjacentHTML(
                            'afterend',
                            `<div class="shop-calc__list" data-shop="${numCoffin}" data-shop-cash = "${cashCoffin}">
                            <div class="shop-calc__img-box">
                                <img src="${imgCoffinSrc}" alt="#">
                            </div>
                            <div class="shop-calc__info">
                                <div class="shop-calc__text">${textCoffin}</div>
                                <div class="shop-calc__cash">стоимость: ${cashCoffin} руб.</div>
                            </div>
                            <div class="shop-calc__delete">
                                <img src="/img/__calc/delete_icon.png" alt="#">
                            </div>
                        </div>`
                        );
        
                        
        
                        //удаляем классы active
                        const elementParent = element.closest('.coffin');
                        const coffinItems = elementParent.querySelectorAll('.coffin__item, .coffin__img, .coffin__label');
                        for(let i of coffinItems){
                            i.classList.remove('active');
                        }
                    }
        
                    //= Венки 
                    if(element.closest('.wreath__tim')){
                        const elementParent = element.closest('.wreath');
                        const coffinItems = elementParent.querySelectorAll('.wreath__item, .wreath__img, .wreath__label');
                        for(let i of coffinItems){
                            i.classList.toggle('active');
                        }
                    }
                    // клик на выборе венка
                    if(element.closest('.wreath__item')){
                        //новое значение id
                        idTotal++;
                        //получение главного родителя 
                        const mainParent = element.closest('.wreath');
                        //получение текушего значения data-total
                        let dataTotal = mainParent.dataset.total;
                        //проверка на сушествование id
                        if(!dataTotal){
                            //новое значение data-total
                            mainParent.dataset.total =  idTotal;
                            dataTotal = mainParent.dataset.total;
                        }
                        const textParent = element.closest('.wreath__item');
                        const imgCoffinElement = textParent.querySelector('.wreath__img');
                        const imgCoffinSrc = imgCoffinElement.getAttribute('src');
                        const textCoffin = textParent.querySelector('.wreath__label').innerHTML;
                        console.log('textCoffin',textCoffin);
                        const cashCoffin = textParent.querySelector('.wreath__label').dataset.cash;
                        const title = mainParent.querySelector('.wreath__tim-title');
                        //mainParent.querySelector('.wreath__tim-title').dataset.all = cashCoffin;
                        mainParent.querySelector('.wreath__img-tim').setAttribute('src', imgCoffinSrc);
                        title.innerHTML = textCoffin;
        
                        const elementParent = element.closest('.wreath');
                        const coffinItems = elementParent.querySelectorAll('.wreath__item, .wreath__img, .wreath__label');
                        for(let i of coffinItems){
                            i.classList.remove('active');
                        }
        
                        //возврат последнего эл в магазине
                        let lastElementShop = shopForm.lastElementChild;
                        
        
                        //удаляем товар если уже есть в списке
                        //поиск совпадения в выборе и магазине
                        if(document.querySelector(`[data-shop = "${dataTotal}"]`)){
                            //возврат эл магазина
                            const shopElement = document.querySelector(`[data-shop = "${dataTotal}"]`);
                            //возврат эл перед 
                            const shopElementPrevious = shopElement.previousSibling;
                            //удаление элемента
                            shopElement.remove();
                            //замена эл после которого будет вставлен новый эл
                            lastElementShop = shopElementPrevious;
                        }
        
                        //добавление эл в магазин
                        lastElementShop.insertAdjacentHTML(
                            'afterend',
                            `<div class="shop-calc__list" data-shop="${dataTotal}" data-shop-cash = "${cashCoffin}">
                            <div class="shop-calc__img-box">
                                <img src="${imgCoffinSrc}" alt="#">
                            </div>
                            <div class="shop-calc__info">
                                <div class="shop-calc__text">${textCoffin}</div>
                                <div class="shop-calc__cash">стоимость: ${cashCoffin} руб.</div>
                            </div>
                            <div class="shop-calc__delete">
                                <img src="/img/__calc/delete_icon.png" alt="#">
                            </div>
                        </div>`
                        );
                    }
        
                    //= Одежда 
                    if(element.closest('.dress__tim')){
                        const elementParent = element.closest('.dress');
                        const coffinItems = elementParent.querySelectorAll('.dress__item, .dress__img, .dress__label');
                        for(let i of coffinItems){
                            i.classList.toggle('active');
                        }
                    }
                    // клик на выборе одежды 
                    if(element.closest('.dress__item')){
                        //новое значение id
                        idTotal++;
                        //получение главного родителя 
                        const mainParent = element.closest('.dress');
        
                        //получение текушего значения data-total
                        let dataTotal = mainParent.dataset.total;
                        //проверка на сушествование id
                        if(!dataTotal){
                            //новое значение data-total
                            mainParent.dataset.total =  idTotal;
                            dataTotal = mainParent.dataset.total;
                        }
        
                        const textParent = element.closest('.dress__item');
                        const imgCoffinElement = textParent.querySelector('.dress__img');
                        const imgCoffinSrc = imgCoffinElement.getAttribute('src');
                        const textCoffin = textParent.querySelector('.dress__label').innerHTML;
                        const cashCoffin = textParent.querySelector('.dress__label').dataset.cash;
                        const title = mainParent.querySelector('.dress__tim-title');
                        //mainParent.querySelector('.dress__tim-title').dataset.all = cashCoffin;
                        mainParent.querySelector('.dress__img-tim').setAttribute('src', imgCoffinSrc);
                        title.innerHTML = textCoffin;
        
                        const elementParent = element.closest('.dress');
                        const coffinItems = elementParent.querySelectorAll('.dress__item, .dress__img, .dress__label');
                        for(let i of coffinItems){
                            i.classList.remove('active');
                        }
        
                        //возврат последнего эл в магазине
                        let lastElementShop = shopForm.lastElementChild;
                        //удаляем товар если уже есть в списке
                        //поиск совпадения в выборе и магазине
                        if(document.querySelector(`[data-shop = "${dataTotal}"]`)){
                            //возврат эл магазина
                            const shopElement = document.querySelector(`[data-shop = "${dataTotal}"]`);
                            //возврат эл перед 
                            const shopElementPrevious = shopElement.previousSibling;
                            //удаление элемента
                            shopElement.remove();
                            //замена эл после которого будет вставлен новый эл
                            lastElementShop = shopElementPrevious;
                        }
        
                        //добавление эл в магазин(не меняем переменные внутри)
                        lastElementShop.insertAdjacentHTML(
                            'afterend',
                            `<div class="shop-calc__list" data-shop="${dataTotal}" data-shop-cash = "${cashCoffin}">
                            <div class="shop-calc__img-box">
                                <img src="${imgCoffinSrc}" alt="#">
                            </div>
                            <div class="shop-calc__info">
                                <div class="shop-calc__text">${textCoffin}</div>
                                <div class="shop-calc__cash">стоимость: ${cashCoffin} руб.</div>
                            </div>
                            <div class="shop-calc__delete">
                                <img src="/img/__calc/delete_icon.png" alt="#">
                            </div>
                        </div>`
                        );
                    }//end 
        
                    //= Крест 
                    if(element.closest('.cross__tim')){
                        const elementParent = element.closest('.cross');
                        const coffinItems = elementParent.querySelectorAll('.cross__item, .cross__img, .cross__label');
                        for(let i of coffinItems){
                            i.classList.toggle('active');
                        }
                    }
                    // клик на выборе креста 
                    if(element.closest('.cross__item')){
                        //новое значение id
                        idTotal++;
                        //получение главного родителя 
                        const mainParent = element.closest('.cross');
                        //получение текушего значения data-total
                        let dataTotal = mainParent.dataset.total;
                        //проверка на сушествование id
                        if(!dataTotal){
                            //новое значение data-total
                            mainParent.dataset.total =  idTotal;
                            dataTotal = mainParent.dataset.total;
                        }
                        const textParent = element.closest('.cross__item');
                        const imgCoffinElement = textParent.querySelector('.cross__img');
                        const imgCoffinSrc = imgCoffinElement.getAttribute('src');
                        const textCoffin = textParent.querySelector('.cross__label').innerHTML;
                        const cashCoffin = textParent.querySelector('.cross__label').dataset.cash;
                        const title = mainParent.querySelector('.cross__tim-title');
                        mainParent.querySelector('.cross__img-tim').setAttribute('src', imgCoffinSrc);
                        title.innerHTML = textCoffin;
                        const elementParent = element.closest('.cross');
                        const coffinItems = elementParent.querySelectorAll('.cross__item, .cross__img, .cross__label');
                        for(let i of coffinItems){
                            i.classList.remove('active');
                        }
                        //возврат последнего эл в магазине
                        let lastElementShop = shopForm.lastElementChild;
        
                        //удаляем товар если уже есть в списке
                        //поиск совпадения в выборе и магазине
                        if(document.querySelector(`[data-shop = "${dataTotal}"]`)){
                            //возврат эл магазина
                            const shopElement = document.querySelector(`[data-shop = "${dataTotal}"]`);
                            //возврат эл перед 
                            const shopElementPrevious = shopElement.previousSibling;
                            //удаление элемента
                            shopElement.remove();
                            //замена эл после которого будет вставлен новый эл
                            lastElementShop = shopElementPrevious;
        
                        }
        
                        //добавление эл в магазин(не меняем переменные внутри)
                        lastElementShop.insertAdjacentHTML(
                            'afterend',
                            `<div class="shop-calc__list" data-shop="${dataTotal}" data-shop-cash = "${cashCoffin}">
                            <div class="shop-calc__img-box">
                                <img src="${imgCoffinSrc}" alt="#">
                            </div>
                            <div class="shop-calc__info">
                                <div class="shop-calc__text">${textCoffin}</div>
                                <div class="shop-calc__cash">стоимость: ${cashCoffin} руб.</div>
                            </div>
                            <div class="shop-calc__delete">
                                <img src="/img/__calc/delete_icon.png" alt="#">
                            </div>
                        </div>`
                        );
                    }
        
                    //= click delete select 
                    if(element.closest('.shop-calc__delete')){
                        //возврат эл в магазине
                        const searchElementShop = element.closest('.shop-calc__list');
        
                        //возврат значения атрибута который удаляем
                        let idSearch = searchElementShop.dataset.shop;
        
                        //удаление эл
                        searchElementShop.remove();
        
                        //возврат элемента по значению атрибута
                        const searchTotalElement = document.querySelector(`[data-total = "${idSearch}"]`);
                        //возврат элементов по атрибуту
                        const searchImgDefault = searchTotalElement.querySelector('[data-img]');
                        const searchTitleDefault = searchTotalElement.querySelector('[data-title]');
        
                        //возврат значений атрибутов
                        let titleData = searchTitleDefault.dataset.title;
                        let imgData = searchImgDefault.dataset.img;
        
                        //присвоение значений атрибутам по умолчанию
                        searchImgDefault.setAttribute('src', `${imgData}`);
                        searchTitleDefault.textContent = `${titleData}`;
        
                    }
        
                    //= кнопка еще 
                    if(element.closest('.more')){
                        //возврат элемента перед кнопкой
                        const previous = element.previousElementSibling;
                        //возврат класса элемента
                        const classMy = previous.classList.value;
                        idTotal++;
                        //если венки добавляем эл венки
                        if(classMy === 'wreath'){
                            const parent = document.querySelectorAll('.wreath');
                            parent[parent.length - 1].insertAdjacentHTML('afterend',`<div class="title-calc">Ваш выбор ритуального венка:</div>
                            <div class="wreath" data-total="${idTotal}">
                                <div class="wreath__tim">
                                    <img class="wreath__img-tim" src="/img/__calc/wreath/icon.png" alt="#" data-img="/img/__calc/wreath/icon.png">
                                    <span class="wreath__tim-title" data-all="0" data-title="Выбор венка">Выбор венка</span>
                                </div>
                                <div class="wreath__item">
                                    <img class="wreath__img" src="/img/__calc/wreath/1.png" alt="#">
                                    <div class="wreath__label" data-cash="121">Венок ритуальный<br>(1.7 метра)</div>
                                </div>
                                <div class="wreath__item">
                                    <img class="wreath__img" src="/img/__calc/wreath/2.png" alt="#">
                                    <div class="wreath__label" data-cash="89">Венок ритуальный<br>(1.5 метра)</div>
                                </div>
                                <div class="wreath__item">
                                    <img class="wreath__img" src="/img/__calc/wreath/3.png" alt="#">
                                    <div class="wreath__label" data-cash="42">Венок ритуальный<br>(1.3 метра)</div>
                                </div>
                            </div>`);
                        }
        
                        //если одужда добавляем эл одежда
                        if(classMy === 'dress'){
                            const parent = document.querySelectorAll('.dress');
                            parent[parent.length - 1].insertAdjacentHTML('afterend',`<div class="title-calc">Комплект одежды для усопшего:</div>
                            <div class="dress" data-total="${idTotal}">
                                <div class="dress__tim">
                                    <img class="dress__img-tim" src="/img/__calc/dress/dress-icon.png" alt="#" data-img="/img/__calc/dress/dress-icon.png">
                                    <span class="dress__tim-title" data-all="0" data-title="Выбор одежды">Выбор одежды</span>
                                </div>
                                <div class="dress__item">
                                    <img class="dress__img" src="/img/__calc/dress/1.jpg" alt="#">
                                    <div class="dress__label" data-cash="55">Костюм женский</div>
                                </div>
                                <div class="dress__item">
                                    <img class="dress__img" src="/img/__calc/dress/2.jpg" alt="#">
                                    <div class="dress__label" data-cash="35">Обувь женская</div>
                                </div>
                                <div class="dress__item">
                                    <img class="dress__img" src="/img/__calc/dress/3.jpg" alt="#">
                                    <div class="dress__label" data-cash="46">Костюм мужской</div>
                                </div>
                                <div class="dress__item">
                                    <img class="dress__img" src="/img/__calc/dress/4.jpg" alt="#">
                                    <div class="dress__label" data-cash="37">Туфли мужские</div>
                                </div>
                            </div>`);
                        }
                    }
        
                    //= check box  
                    if(!element.closest('.stop') && element.closest('.start')){
                        // воз эл родителя цели
                        let divParent = element.parentElement;
                        //воз зн data-check-id
                        let nameDataCheckId = divParent.dataset.checkId;
                        //воз эл input
                        let divInput = divParent.querySelector('input');
                        //воз эл label
                        let divLable = divParent.querySelector('label');
                        //возврат последнего эл в магазине
                        let lastElementShop = shopForm.lastElementChild;
                        if(divInput){
                            if(divInput.checked){
                                //воз эл лейбл
                                let lableText = divLable.textContent;
                                //воз за цена
                                let cashCheck = divParent.dataset.praice;
                                //вставка эл 
                                lastElementShop.insertAdjacentHTML('afterend',`<div class="check" data-shop-cash="${cashCheck}" data-check-id="${nameDataCheckId}">
                                <div class="check__img">
                                    <img src="/img/__calc/check-icon-shop.png" alt="">
                                </div>
                                <div class="check__info">
                                    <div class="check__title">${lableText}</div>
                                    <div class="check__praice">стоимость: ${cashCheck} руб.</div>
                                </div>
                                <div class="check__del">
                                    <img src="/img/__calc/delete_icon.png" alt="">
                                </div>
                            </div>`);
                            }else{
                                //воз зн имени input
                                let nameInput = divInput.getAttribute('name');
                                if(shopForm.querySelector(`[data-check-id="${nameInput}"]`)){
                                    shopForm.querySelector(`[data-check-id="${nameInput}"]`).remove();
                                }
                            }
                        }
                    }
                    //удаление чекбокс при нажатии на корзину
                    if(element.closest('.check')){
                        //воз зн поля data-check-id
                        let valueCheckId = element.closest('.check').dataset.checkId;
                        //находим в shopForm эл по атрибуту и удаляем его
                        shopForm.querySelector(`[data-check-id="${valueCheckId}"]`).remove();
                        //нах эл по классу, в нем нах эл input
                        let checkFormInput = document.querySelector(`.${valueCheckId}`).querySelector('input');
                        //чекбокс по дефолту
                        checkFormInput.checked = false;
                    };

                    //= подсчет итога 
                    let cash = 0;
                    const allCoffinCashElements = document.querySelectorAll('[data-shop-cash]');
                    for(let i of allCoffinCashElements){
                        const iCash = i.dataset.shopCash;
                        cash = cash + iCash*1;
                    } 
                    document.querySelector('.praice').innerHTML = `Всего: ${cash} руб.`;
        
                });//end click-listener

                //= прилипание praice 
                const footerObserver = new IntersectionObserver((entryAll) => {
                    entryAll.forEach((item) => {
                        if(item.isIntersecting){
                            praiceEl.classList.add('stiki');
                        }else{
                            praiceEl.classList.remove('stiki');
                        }
                    });
                },{});
                const footerEl = document.querySelector('.footer');
                footerObserver.observe(footerEl);
                const praiceEl = document.querySelector('.praice');
            }
        } catch (error) {
            console.log(error);
        }
}







/***/ }),

/***/ "./public/js/modules/changePosobie.js":
/*!********************************************!*\
  !*** ./public/js/modules/changePosobie.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function changePos() {
    try {
        const elTextPraceAll = document.querySelectorAll('[data-textPrace]');
        const elPrace = document.querySelector('[data-prace]');

        const data = new Date();
        const time = data.getTime();

        if(elTextPraceAll){
            fetch(`../../ajax/posobie.json?v=${time}`)
            .then(data => data.json())
            .then(data => {
                elTextPraceAll.forEach(item => {
                item.innerHTML = data.textPrace;
            });
        });
        }

        if(elPrace) {
            fetch(`../../ajax/posobie.json?v=${time}`)
            .then(data => data.json())
            .then(data => {elPrace.innerHTML = data.prace} );
        }

        
        
    } catch (error) {
        console.log(error);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changePos);





/***/ }),

/***/ "./public/js/modules/check_number_phone.js":
/*!*************************************************!*\
  !*** ./public/js/modules/check_number_phone.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkNumberPhone)
/* harmony export */ });
function checkNumberPhone (inputTel, boxInput, styleBox, {classOne, classTwo}) {
    try {
        function symbolPlus (number, symbol) {
            if(inputTel.value.length === number) {
                inputTel.value = inputTel.value.slice(0,number - 1) + symbol + inputTel.value[number - 1];
            }
        }
    
        inputTel.value = '+375';
        inputTel.addEventListener('input', () => {
            if(inputTel.value[inputTel.value.length - 1] === '(' || inputTel.value[inputTel.value.length - 1] === ')' || inputTel.value[inputTel.value.length - 1] === '-') {
                inputTel.value = inputTel.value.slice(0, inputTel.value.length - 1);
            }else {
                if(inputTel.value.length < 4) {
                    inputTel.value = '+375';
                }
                symbolPlus(5, '(');
                symbolPlus(8, ')');
                symbolPlus(12, '-');
                symbolPlus(15, '-');
                if(inputTel.value.length > 16) {
                    inputTel.value = inputTel.value.slice(0,17);
                }
                if(/^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(inputTel.value)){
                    if(styleBox === 0) boxInput.style.boxShadow = '0px 0px 2px 2px rgba(22, 255, 138, 0.663) inset';
                    if(styleBox === 1) inputTel.style.border = '#28b352 2px solid';
                    
                }else {
                    if(styleBox === 0) boxInput.style.boxShadow = '0px 0px 3px 3px rgba(255, 22, 22, 0.9) inset';
                    if(styleBox === 1) inputTel.style.border = '#ec3c3c 2px solid';
                    
                }
            }
            // проверка телефона в конце
            if(inputTel.value.length === 17 && /^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(inputTel.value)) {
                if(boxInput.classList.contains(classOne)) {
                    boxInput.classList.remove(classOne);
                    boxInput.classList.add(classTwo);
                }
            }else {
                if(boxInput.classList.contains(classTwo)) {
                    boxInput.classList.remove(classTwo);
                    boxInput.classList.add(classOne);
                }
            }
        });
        } catch (error) {
            console.log('',error);
        }
}

/***/ }),

/***/ "./public/js/modules/current-user.js":
/*!*******************************************!*\
  !*** ./public/js/modules/current-user.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");


//= currentUser 
async function currentUser() {
    let id = null;
    console.log('Run def', (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])());
    const div = document.querySelector('.coffin-img');
    //localStorage.clear();

    if(div) {
        const getId = localStorage.getItem('idLog');
        if(getId) {
            console.log('id есть уже !');
            id = getId;
        }else{
            console.log('устанавливаем id !');
            const currentId = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
            localStorage.setItem('idLog', currentId);
            id = currentId;
        }
        getToken();
        
    }; // if end

    //* getToken 
    async function getToken() {
        fetch('/token')
            .then(res => res.json())
            .then(data => {
                ipinfo(data.res);
            })
            .catch(err => console.log('Error fetch /token >>>', err));
    }
    //* ipinfo 
    async function ipinfo(token) {
        fetch(`https://ipinfo.io/json?token=${token}`)
            .then(res => res.json())
            .then(json => {
                console.log('SEND >>> ', json.ip, json.city, json.org, id);
                const ip = json.ip;
                const city = json.city;
                const lan = json.org;
                sendPost(ip, id, city, lan);
            })
            .catch(err => console.log('Error fetch https://ipinfo.io >>>', err));
    }
    //* sendPost 
    async function sendPost(ip, id, city, lan) {
        fetch('/', { 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ip, id, city, lan}),
        })
        .then(res => console.log('Status Fetch >>>', res.status))
        .catch(err => console.log('Error fetch / >>>', err));
    }

//= end 
}; 



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentUser);






















//* definition 
        // let user = await fetch('https://api.ipify.org?format=json')
        //     .then(res =>  res.json())
        //     .then(data => {
        //         const ip = data.ip;
        //         //* POST 
        //         fetch('/', {
        //             method: 'POST',
        //             headers: {'Content-Type': 'application/json'},
        //             body: JSON.stringify({ip, id}),
        //         })
        //         .then(res => console.log('Status Fetch >>>', res.status))
        //         .catch(err => console.log('Error fetch >>>', err));
        //         //*---
        //     });

/***/ }),

/***/ "./public/js/modules/data-users.js":
/*!*****************************************!*\
  !*** ./public/js/modules/data-users.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dataUsers() {
    const work = document.querySelector('[data-script="data-users"]');
    if(work) {
        const choiceDate = document.querySelector('.curent-data__menu');
        const form = document.forms['date-sort'];

        choiceDate.addEventListener('click', () => {
            const dataPopUp = document.querySelector('.data-pop-up');
            dataPopUp.style.display = 'block';
            const date = new Date();
            form.year.value = date.getFullYear();
            form.month.value = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
            form.day.value = date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate();
        });

        // form.addEventListener('submit', (e) => {
        //     e.preventDefault();
        //     const obj = {
        //         year: form.year.value,
        //         month: form.month.value,
        //         day: form.day.value
        //     }

        //     console.log('',obj);
        //     fetch('/data-users', {
        //         method: 'POST',
        //         headers: {'Content-Type': 'application/json'},
        //         body: JSON.stringify(obj)
        //     })
        //     .then(() => {});
        // });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataUsers);

/***/ }),

/***/ "./public/js/modules/input-password.js":
/*!*********************************************!*\
  !*** ./public/js/modules/input-password.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function inputPassword() {
    const work = document.querySelector('[data-script="admin"]');
    if(work){
        const form = document.forms.admin;
        let login = localStorage.getItem('login');
        let password = localStorage.getItem('password');
        if(login) {
            form.login.value = login;
            form.password.value = password;
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            login = form.login.value;
            password = form.password.value;
            localStorage.setItem('login', login);
            localStorage.setItem('password', password);

            fetch('/admin-filippov', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({login, password})
            })
            .then(res => res.json())
            .then(data => {
                if(data.res) {
                    localStorage.setItem('access', 'ok');
                    window.location.href = '/data-start';
                }else{
                    delete localStorage.access;
                    return
                }
            });
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputPassword);

/***/ }),

/***/ "./public/js/modules/main.js":
/*!***********************************!*\
  !*** ./public/js/modules/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mainFn)
/* harmony export */ });
function mainFn () {
    try {
        (function () {
    
            document.addEventListener('click', listenerClick);
            window.addEventListener('scroll', listenerScroll);
            
            // при клике на меню(логика) -----------------------------------------------------------------  
            function listenerClick (odject) {
                const clickOdject = odject.target;
                
                if(clickOdject.closest('.header__button')){
                    document.querySelector('body').classList.toggle('active');
            
                    const clickOdjectParent = clickOdject.closest('.header__button');
                    clickOdjectParent.classList.toggle('active');
            
                    clickOdjectParent.closest('.header__burger').classList.toggle('active');
            
                    const lineAll = document.querySelectorAll('.header__line');
                    lineAll.forEach(function (line){
                        line.classList.toggle('active');
                    });
            
                    const linkAll = document.querySelectorAll('.header__link');
                    linkAll.forEach(function (link){
                        link.classList.toggle('active');
                    });
            
                    if(!clickOdject.classList.contains('active')){
                        const activeSub = document.querySelectorAll('.active-sub');
                        activeSub.forEach(function(activeSubItem){
                            activeSubItem.classList.remove('active-sub');
                        });
                    }
                }
            
                if(clickOdject.closest('.header__line') && window.innerWidth <= 1020){
            
                    const headerLine = clickOdject.closest('.header__line');
                    const headerLink = headerLine.querySelector('.header__link');
            
                    if(headerLink.classList.contains('_sub')){
                        headerLine.classList.toggle('active-sub');
                    }
                    
                    const listSubAll = headerLine.querySelectorAll('.header__list-sub');
                    listSubAll.forEach(function (listSub){
                        listSub.classList.toggle('active-sub');
                    });
            
                    const lineSubAll = headerLine.querySelectorAll('.header__line-sub');
                    lineSubAll.forEach(function (lineSub){
                        lineSub.classList.toggle('active-sub');
                    });
            
                    const linkSubAll = headerLine.querySelectorAll('.header__link-sub');
                    linkSubAll.forEach(function (linkSub){
                        linkSub.classList.toggle('active-sub');
                    });
            
                }
            }
            
            // hover ----------------------------------------------------------------------------------------
            const hoverAll = document.querySelectorAll('._sub');
            
            hoverAll.forEach(function (hover){
            hover.addEventListener('mouseover', hoverOver);
            hover.addEventListener('mouseout', hoverOut);
            });
            
            function hoverOver (hover){
                const width = window.innerWidth;
            
                if(width > 1020){
            
                const over = hover.target;
            
                const overParent = over.closest('.header__line');
            
                const overListSub = overParent.querySelector('.header__list-sub');
                overListSub.classList.add('hover-sub');
            
                overListSub.addEventListener('mouseover', hoverOverSub);
                overListSub.addEventListener('mouseout', hoverOutSub);
            
            
                function hoverOverSub (e){
                    const overLineSub = overParent.querySelectorAll('.header__line-sub');
                    overListSub.classList.add('hover-sub');
                    overLineSub.forEach(function(e){
                        e.classList.add('hover-sub');
                    });
                
                    const overLinkSub = overParent.querySelectorAll('.header__link-sub');
                    overLinkSub.forEach(function(e){
                    e.classList.add('hover-sub');
                    });
                }
            
                function hoverOutSub (e){
                    const overLineSub = overParent.querySelectorAll('.header__line-sub');
                    overListSub.classList.remove('hover-sub');
                    overLineSub.forEach(function(e){
                        e.classList.remove('hover-sub');
                    });
                
                    const overLinkSub = overParent.querySelectorAll('.header__link-sub');
                    overLinkSub.forEach(function(e){
                    e.classList.remove('hover-sub');
                    });
                }
            
                const overLineSub = overParent.querySelectorAll('.header__line-sub');
                    overLineSub.forEach(function(e){
                    e.classList.add('hover-sub');
                });
            
                const overLinkSub = overParent.querySelectorAll('.header__link-sub');
                overLinkSub.forEach(function(e){
                e.classList.add('hover-sub');
                });
                }
            }
            
            function hoverOut (hover){
                const out = hover.target;
                const outParent = out.closest('.header__line');
            
                const outListSub = outParent.querySelector('.header__list-sub');
                outListSub.classList.remove('hover-sub');
            
                const outLineSub = outParent.querySelectorAll('.header__line-sub');
                outLineSub.forEach(function(e){
                    e.classList.remove('hover-sub');
                });
            
                const outLinkSub = outParent.querySelectorAll('.header__link-sub');
                outLinkSub.forEach(function(e){
                    e.classList.remove('hover-sub');
                });  
                
            }
            
            // крепеж бургера ---------------------------------------------------------------------
            const burger = document.querySelector('.header__burger');
            const burgerPxTop = burger.getBoundingClientRect().top;
            const headerList = document.querySelector('.header__list');
            
            
            // высота меню для скрола
            function fnHeaderList (){
                const burgerPxBottom = document.documentElement.clientHeight - burger.getBoundingClientRect().bottom;
                headerList.style.cssText = `max-height: ${burgerPxBottom}px;`;
            }
            fnHeaderList();
            //---
            
            function listenerScroll () {
                // высота меню для скрола
                fnHeaderList();
                //---
            
                if(burgerPxTop <= window.scrollY){
                    burger.classList.add('fix-burger');
                    headerList.classList.add('fix-burger');
            
                }else{
                    burger.classList.remove('fix-burger');
                    headerList.classList.remove('fix-burger');
                }
            }
            
            // бегуший текст------------------------------------------------
            
            const age17 = document.querySelector('.age-17');
            
            if(age17){
            
                window.addEventListener('scroll', numberScroll);
                let flag = 0;
                let age17Show = age17.getBoundingClientRect().bottom - document.documentElement.clientHeight;
                function numberScroll () {
                    if(window.scrollY >= age17Show && flag === 0){
                        startTime();
                        flag = 1;
                    }
                }
            }
            
            function startTime(){
                const elAge = document.getElementById('age');
                let timeAge = Number(elAge.dataset.time);
                let startAge = Number(elAge.dataset.start);
                let endAge = Number(elAge.dataset.end);
            
                const elAge1 = document.getElementById('age1');
                let timeAge1 = Number(elAge1.dataset.time);
                let startAge1 = Number(elAge1.dataset.start);
                let endAge1 = Number(elAge1.dataset.end);
                
                const elBurial = document.getElementById('burial');
                let timeBurial = Number(elBurial.dataset.time);
                let startBurial = Number(elBurial.dataset.start);
                let endBurial = Number(elBurial.dataset.end);
                
                const elCremation = document.getElementById('cremation');
                let timeCremation = Number(elCremation.dataset.time);
                let startCremation = Number(elCremation.dataset.start);
                let endCremation = Number(elCremation.dataset.end);
                
                showText(timeCremation, startCremation, endCremation, elCremation);
                showText(timeAge, startAge, endAge, elAge);
                showText(timeAge1, startAge1, endAge1, elAge1);
                showText(timeBurial, startBurial, endBurial, elBurial);
            }
            
            function showText (time, start, end, el) {
                const timeInterval = time / end;
                let step = 1;
                if(timeInterval < 10){
                    let proc = Math.trunc(10 / timeInterval);
                    step = proc;
                }
                let timeOut =  setTimeout(showText, timeInterval, time, step + start, end, el);
                if (start >= end) {
                    clearTimeout(timeOut);
                    start = end;
                }
                el.innerText = start + '+';
            }
            }());
        } catch (error) {
            console.log('',error);
        }
}

/***/ }),

/***/ "./public/js/modules/popup.js":
/*!************************************!*\
  !*** ./public/js/modules/popup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ popUpFn)
/* harmony export */ });
/* harmony import */ var _check_number_phone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check_number_phone */ "./public/js/modules/check_number_phone.js");


function popUpFn () {
    try {
        //= popup блок  
    const orderCall = document.querySelector('.order-call');
        //* всплытие popup   
        (function popup () {
            const orderCall = document.querySelector('.order-call');
            const openAll = document.querySelectorAll('[data-popup="open"]');
            const title = orderCall.querySelector('.order-call__title');
            const body = document.body;
            //open
            openAll.forEach(item => {
                item.addEventListener('click', () => {
                    orderCall.style.display = 'flex';
                    body.style.overflow = 'hidden';
                    if(item.hasAttribute('data-name-button')) {
                        title.textContent = item.getAttribute('data-name-button');
                    }
                });
            });
            //close
            orderCall.addEventListener('click', (e) => {
                body.style.overflow = 'auto';
                if(e.target.closest('.order-call__x')) {
                    orderCall.style.display = 'none';
                }
            });
            
        }());
        //* проверка телефона и трубка зеленая/серая   
        (function phoneInput () {
            const inputTel = document.querySelector('.order-call__tel');
            const divInputTel = document.querySelector('.order-call__tel-div');
            inputTel.addEventListener('click', () => (0,_check_number_phone__WEBPACK_IMPORTED_MODULE_0__["default"])(inputTel, divInputTel, 1, {classOne: '_grey', classTwo: '_green'}));
        }());
        //* проверка имени   
        const orderCallName = document.querySelector('.order-call__name');
        function nameTest () {
            let name = orderCallName.value;
            if(name.length < 3) {
                orderCallName.value = '';
                orderCallName.setAttribute('placeholder', 'Минимум 3 символа.');
            }
        }
        //* отправка на почту с анимацией  
        (function emaiPopUp () {
            const button = document.querySelector('.order-call__button');
            const inputTel = document.querySelector('.order-call__tel');
            const bodyDis = document.body;
            const animeMeil = document.querySelector('.anime-meil');

            button.addEventListener('click', clickPopUp);

            function clickPopUp (e) {
                const orderTitle = document.querySelector('.order-call__title');
                let title = orderTitle.textContent;
                console.log('',title);
                e.preventDefault;
                nameTest();
                const  form = document.forms.popup;
                if(inputTel.value.length === 17 && /^\+375\(?\d?\d?\)?\d?\d?\d?-?\d?\d?-?\d?\d?$/.test(inputTel.value) && orderCallName.value) {
                    let formData = new FormData(form);
                    formData.set('title', title);
                    bodyDis.style.overflow = 'hidden';
                    animeMeil.style.display = 'block';
                    fetch('popup.php', {
                        method: 'POST',
                        body: formData
                    })
                    .then(data => {
                        if(data.status === 200) {
                            bodyDis.style.overflow = 'auto';
                            animeMeil.style.display = 'none';
                            button.textContent = 'заявка отправлена';
                            orderCallName.value = '';
                            inputTel.value = 'Cпасибо за заказ !';
                            setTimeout(() => {
                                orderCall.style.display = 'none';
                            },1500);
                        }
                    });
                }else {
                    button.textContent = 'проверьте данные';
                    setTimeout(()=>{
                        button.textContent = 'заказать по акции';
                    },2000);
                }
            }
        }());
    
        } catch (error) {
            console.log('',error);
        }
}


/***/ }),

/***/ "./public/js/modules/shop-sort.js":
/*!****************************************!*\
  !*** ./public/js/modules/shop-sort.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shopSortFn)
/* harmony export */ });
function shopSortFn () {
    try {
        const findBlockJson = document.querySelector('[data-json]');
        if(findBlockJson) {
            (function () {
                const 
                shopBlock = document.querySelector('.shop-block'),
                buttonSort = document.querySelector('.button-sort'),
                inputPrace = document.querySelector('.button-sort__praice-box'),
                inputFrom = document.querySelector('[name="from"]'),
                inputBefore = document.querySelector('[name="before"]'),
                ajax = shopBlock.getAttribute('data-json');
            
                let 
                inputBeforeValue = 0, 
                inputFromValue = 0;
                
                //= function 
                //вывод на экран
                function inputCoffins (arr) {
                    if(ajax === 'ajax/coffins.json') {
                        arr.forEach(item => {
                            shopBlock.insertAdjacentHTML('beforeend',`
                            <div class="shop-block__item flex_coffins">
                                        <div class="card">
                                            <div class="card__body">
                                                <div class="card__title">${item.title}</div>
                                                <div class="card__img card__img_height">
                                                    <picture>
                                                        <source srcset='${item.img1}'>
                                                        <source srcset='${item.img2}'>
                                                        <source srcset='${item.img3}'>
                                                        <img src='${item.img4}' alt="гроб">
                                                    </picture>
                                                </div>
                                                <div class="card__prais">${item.prais}</div>
                                                <a class="card__button" href="contacts">купить</a>
                                            </div>
                                        </div>
                                    </div>
                            `);
                        });
                    }
                    if(ajax === 'ajax/wreaths.json') {
                        arr.forEach(item => {
                            shopBlock.insertAdjacentHTML('beforeend',`
                            <div class="shop-block">    
                                <div class="shop-block__item  flex-wreaths">
                                    <div class="card">
                                        <div class="card__body">
                                            <div class="card__title">${item.title}</div>
                                            <div class="card__img card__img_height-wreaths">
                                                <picture>
                                                    <source srcset=${item.img1} type="image/webp">
                                                    <img src=${item.img2} alt="Венок ритуальный">
                                                </picture>
                                        </div>
                                        <div class="card__prais">${item.prais}</div>
                                        <a class="card__button" href="contacts">купить</a>
                                    </div>
                                </div>
                            </div>
                            `);
                        });
                    }
                }
            
                function sortArreyMinMax (arr) {
                    return arr.sort(fnSort);
                }
            
                function sortArreyMaxMin (arr) {
                    return sortArreyMinMax(arr).reverse();
                }
            
                function fnSort (x, y) {
                    let a = +`${x.prais}`.match(/\d+.?\d+?/g).join('');
                    let b = +`${y.prais}`.match(/\d+.?\d+?/g).join('');
                    if(a > b) return 1;
                    if(a < b) return -1;
                    if(a === b) return 0;
                }
            
                //очистка всего магазина
                function delShopElements () {
                    shopBlock.innerHTML = '';
                }
            
                function removeClassButton (thisTarget) {
                    document.querySelectorAll('._sort-color').forEach(item => {
                        item.classList.remove('_sort-color');
                    });
                    thisTarget.classList.add('_sort-color');
                }
            
                function sortNum (fn) {
                    if(!inputFrom.value) {
                        inputFromValue = 0;
                    }else {
                        inputFromValue = +inputFrom.value;
                    } 
                    if(!inputBefore.value) {
                        inputBeforeValue = 10000;
                    }else {
                        inputBeforeValue = +inputBefore.value;
                    }
                    fetch(ajax)
                    .then(data => data.json())
                    .then(objArrey => {
                        shopBlock.innerHTML = '';
                        let inputSort = objArrey.filter((item, key, arr) => {
                            let numSort = +(item.prais).match(/\d+.?\d+?/g).join('');
                            if (inputBeforeValue > numSort && numSort > inputFromValue) {
                                return arr;
                            }
                        });
                        if(!inputSort.length) {
                            shopBlock.insertAdjacentHTML('beforeend', '<div class="shop-block__not">Извините, нет подходящих товаров.</div>');
                        } 
                        inputCoffins(fn(inputSort));
                        });
                }
            
                //= CODE 
            
                fetch(ajax)
                .then(data => data.json())
                .then(objArrey => {
                    inputCoffins(sortArreyMaxMin(objArrey));
                });
            
                buttonSort.addEventListener('click', (e) => {
                    let target = e.target;
                    if(target.classList.contains('button-sort__cheap')) {
                        removeClassButton(target);
                        sortNum(sortArreyMinMax);
                    }
                    if(target.classList.contains('button-sort__lot')) {
                        removeClassButton(target);
                        sortNum(sortArreyMaxMin);
                    }
                });
            
                inputPrace.addEventListener('input', () => {
            
                    let maxOrMin = document.querySelector('._sort-color');
            
                    if(maxOrMin.classList.contains('button-sort__lot')) {
                        sortNum(sortArreyMaxMin);
                    }else {
                        sortNum(sortArreyMinMax);
                    }
                });
            }());
        }else{
            return;
        }
        } catch (error) {
            console.log('',error);
        }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./public/js/script.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/main */ "./public/js/modules/main.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calc */ "./public/js/modules/calc.js");
/* harmony import */ var _modules_shop_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/shop-sort */ "./public/js/modules/shop-sort.js");
/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popup */ "./public/js/modules/popup.js");
/* harmony import */ var _modules_changePosobie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changePosobie */ "./public/js/modules/changePosobie.js");
/* harmony import */ var _modules_current_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/current-user */ "./public/js/modules/current-user.js");
/* harmony import */ var _modules_input_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/input-password */ "./public/js/modules/input-password.js");
/* harmony import */ var _modules_data_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/data-users */ "./public/js/modules/data-users.js");









window.addEventListener('DOMContentLoaded', () => {
    (0,_modules_main__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_shop_sort__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_popup__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_changePosobie__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_modules_current_user__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_input_password__WEBPACK_IMPORTED_MODULE_6__["default"])();
    (0,_modules_data_users__WEBPACK_IMPORTED_MODULE_7__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map