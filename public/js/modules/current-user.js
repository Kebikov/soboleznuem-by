import { v4 as uuidv4 } from 'uuid';

//= currentUser 
async function currentUser() {
    let id = null;
    const div = document.querySelector('.coffin-img');
    //delete localStorage.idLog;

    if(div) {
        const getId = localStorage.getItem('idLog');
        if(getId) {
            id = getId;
        }else{
            console.log('устанавливаем id !');
            const currentId = uuidv4();
            localStorage.setItem('idLog', currentId); 
            id = currentId;
        }
        getToken();
        
    }; // if end

    //* getToken 
    async function getToken() {
        fetch('/token')
            .then(res => res.json())
            .then(data => {
                ipinfo(data.res);
            })
            .catch(err => console.log('Error fetch /token >>>', err));
    }
    //* ipinfo 
    async function ipinfo(token) {
        fetch(`https://ipinfo.io/json?token=${token}`)
            .then(res => res.json())
            .then(json => {
                //console.log('SEND >>> ', json.ip, json.city, json.org, id);
                const ip = json.ip;
                const city = json.city;
                const lan = json.org;
                sendPost(ip, id, city, lan);
            })
            .catch(err => console.log('Error fetch https://ipinfo.io >>>', err));
    }
    //* sendPost 
    async function sendPost(ip, id, city, lan) {
        fetch('/', { 
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ip, id, city, lan}),
        })
        .then(res => res.text())
        .then(data => console.log('Status Fetch >>>', data))
        .catch(err => console.log('Error fetch / >>>', err));
    }

//= end 
}; 



export default currentUser;






















//* definition 
        // let user = await fetch('https://api.ipify.org?format=json')
        //     .then(res =>  res.json())
        //     .then(data => {
        //         const ip = data.ip;
        //         //* POST 
        //         fetch('/', {
        //             method: 'POST',
        //             headers: {'Content-Type': 'application/json'},
        //             body: JSON.stringify({ip, id}),
        //         })
        //         .then(res => console.log('Status Fetch >>>', res.status))
        //         .catch(err => console.log('Error fetch >>>', err));
        //         //*---
        //     });