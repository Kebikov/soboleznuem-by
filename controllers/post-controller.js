const createPath = require('../helpers/create-path');
const {pool, promisePool} = require('../helpers/pool');

const postMain = (req, res) => {
    const {ip, id, city, lan} = req.body;

    let addData = `INSERT INTO node_ip (user_local_id, ip, city, lan, status, time) VALUES ('${id}', INET_ATON('${ip}'), '${city}', '${lan}', 0, CURTIME())`;

    pool.query(addData, (err, data) => {
        err ? console.log('<<< Error POST >>>', err) : console.log('<<< POST OK >>>');
        res.status(200);
    });
}

const postAccess = (req, res) => {
    const {login, password} = req.body;
    console.log('LOGIN >>> ', login, password);
    const select = 'SELECT name,password FROM admin WHERE id = 1';
    pool.query(select, (err, data) => {
        err ? console.log('<<< Error query admin >>>', err) : console.log('<<< query admin OK >>>', data[0].name);
        if(login === data[0].name && password === data[0].password) {
            res.send({res: 'ok'});
        }else{
            res.send({res: null});
        }
    });
}

const postDataUsers = async (req, res) => {
    const {year, month, day} = req.body;
    console.log('year, month, day >>> ', req.body);

    //количество уникальных клиентов
    const selectUserUnique = `SELECT DISTINCT user_local_id FROM node_ip WHERE DATE(time) = '${year}-${month}-${day}'`;
    async function getUserUnique() {
        const [rows] = await promisePool.query(selectUserUnique);
        return rows;
    }
    const userUnique = await getUserUnique();


    const arrInfo = [];
    for(let item of userUnique) {
        const selectCountExitAll = `SELECT COUNT(*) FROM node_ip WHERE user_local_id = "${item['user_local_id']}"`;
        const selectCountExitDay = `SELECT COUNT(*) FROM node_ip WHERE user_local_id = "${item['user_local_id']}" AND DATE(time) = '${year}-${month}-${day}'`;

        async function getCountExitDay() {
            const [rows] = await promisePool.query(selectCountExitDay);
            return rows[0]['COUNT(*)'];
        }
        const countExitDay = await getCountExitDay();
        
        async function getCountExitAll() {
            const [rows] = await promisePool.query(selectCountExitAll);
            return rows[0]['COUNT(*)'];
        }
        const countExitAll = await getCountExitAll();

        arrInfo.push({id: item['user_local_id'], countExitDay, countExitAll});
    }

    const curentDate = `${day}-${month}-${year}`;
    console.log('',arrInfo);

    res.render(createPath('data-users'), {curentDate, arrInfo}); 
}

module.exports = {
    postMain,
    postAccess,
    postDataUsers
}