
async function currentUser() {
    console.log('Run def');
    const div = document.querySelector('.coffin-img');
    localStorage.clear();
    if(div) {
        //* Local User
        let id = null;
        const getId = localStorage.getItem('idLog');
        if(getId) {
            console.log('id есть уже !');
            id = getId;
        }else{
            console.log('устанавливаем id !');
            const currentId = new Date().getTime() - 1673480605000 -124000;
            localStorage.setItem('idLog', currentId);
            id = currentId;
        }
        
        //* definition 
        let user = await fetch('https://api.ipify.org?format=json')
            .then(res =>  res.json())
            .then(data => {
                const ip = data.ip;
                //* POST 
                fetch('/', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ip, id}),
                })
                .then(res => console.log('Status Fetch >>>', res.status))
                .catch(err => console.log('Error fetch >>>', err));
                //*---
            });
        
    }
}



export default currentUser;