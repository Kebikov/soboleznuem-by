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

export default dataUsers;