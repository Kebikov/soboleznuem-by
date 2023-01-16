
function dataUsers() {
    const work = document.querySelector('[data-script="data-users"]');
    if(work) {
        //* reload page
        const go = localStorage.getItem('goBack');
        const sendNewNameUser = localStorage.getItem('sendNewNameUser');
    
        if(go === 'yes' && sendNewNameUser === 'yes') {
            localStorage.removeItem('goBack');
            localStorage.removeItem('sendNewNameUser'); 
            window.location.reload();  
        }   

        //* main code
        const choiceDate = document.querySelector('.curent-data__menu');
        const form = document.forms['date-sort'];
        const dataPopUp = document.querySelector('.data-pop-up');
        const close = document.querySelector('.data-pop-up__close');
        
        close.addEventListener('click', () => {
            dataPopUp.style.display = 'none';
        });

        choiceDate.addEventListener('click', () => {
            dataPopUp.style.display = 'block';
            const date = new Date();
            form.year.value = date.getFullYear();
            form.month.value = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
            form.day.value = date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate();
        });
    }
}

export default dataUsers;