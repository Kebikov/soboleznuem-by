export default function shopSortFn () {
    try {
        const findBlockJson = document.querySelector('[data-json]');
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
                                            <a class="card__button" href="contacts.html">купить</a>
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
                                    <a class="card__button" href="contacts.html">купить</a>
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
    
        } catch (error) {
            console.log('',error);
        }
}

