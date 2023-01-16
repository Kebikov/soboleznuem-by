function changeInfo() {
    const work = document.querySelector('[data-script="data-change"]');
    if(work) {
        document.querySelector('.change__close').addEventListener('click', () => {
            window.location.href = '/data-start';
        });

        const form = document.forms['date-sort'];
        const loading = document.querySelector('.loading');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const classic = form.classic.value;
            const standart = form.standart.value;
            const classicPlus = form.classicPlus.value;
            const posobie = form.sumPosobie.value;
            const textPosobie = form.textPosobie.value;
            console.log('',classic, standart, classicPlus, posobie);
            console.log('',textPosobie);

            fetch('/data-change-info', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    classic,
                    standart,
                    classicPlus,
                    posobie,
                    textPosobie
                })
            })
            .then(res => {
                loading.style.display = 'block';
                return res.json();
            })
            .then(data => {
                if(data.res === 'ok') {
                    setTimeout(() => {
                        loading.style.display = 'none';
                    }, 1000);
                    return
                }
                console.log('Error fetch /data-change-info...');
            })

        });
    }
}

export default changeInfo;