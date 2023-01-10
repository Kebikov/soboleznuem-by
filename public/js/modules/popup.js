import checkNumberPhone from "./check_number_phone";

export default function popUpFn () {
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
            inputTel.addEventListener('click', () => checkNumberPhone(inputTel, divInputTel, 1, {classOne: '_grey', classTwo: '_green'}));
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
