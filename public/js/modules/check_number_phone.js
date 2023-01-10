export default function checkNumberPhone (inputTel, boxInput, styleBox, {classOne, classTwo}) {
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