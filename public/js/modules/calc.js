export default function calcFn () {
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





