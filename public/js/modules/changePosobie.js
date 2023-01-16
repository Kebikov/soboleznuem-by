function changePos() {
    try {
        //const elTextPraceAll = document.querySelectorAll('[data-textPrace]');
        const elPrace = document.querySelector('[data-prace]');

        const data = new Date();
        const time = data.getTime();

        // if(elTextPraceAll){
        //     fetch(`../../ajax/posobie.json?v=${time}`)
        //     .then(data => data.json())
        //     .then(data => {
        //         elTextPraceAll.forEach(item => {
        //         item.innerHTML = data.textPrace;
        //     });
        // });
        // }

        if(elPrace) {
            fetch(`../../ajax/posobie.json?v=${time}`)
            .then(data => data.json())
            .then(data => {elPrace.innerHTML = data.prace} );
        }

        
        
    } catch (error) {
        console.log(error);
    }
}

export default changePos;



