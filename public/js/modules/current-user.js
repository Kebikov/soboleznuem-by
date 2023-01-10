
async function currentUser() {
    const div = document.querySelector('.coffin-img');
    if(div) {
        let user = await fetch('https://api.ipify.org?format=json')
            .then(res =>  res.json())
            .then(data => {
                const ip = data.ip;
                //* POST 
                fetch('/', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ip}),
                })
                .then(res => console.log('Status Fetch >>>', res.status))
                .catch(err => console.log('Error fetch >>>', err));
                //*---
            });
        
    }
}



export default currentUser;