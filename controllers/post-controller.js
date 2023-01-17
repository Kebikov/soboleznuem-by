const createPath = require('../helpers/create-path');
const {pool, promisePool} = require('../helpers/pool');

const postMain = async (req, res) => {
    const {ip, id, city, lan} = req.body;
    let nameCurent = null;
    let addData = '';

    // match IP
    const queryIpMatch = `
        SELECT ip
        FROM node_ip
        WHERE ip = INET_ATON('${ip}')
        AND status != 0`;
    async function getIpMatch() {
        const [rows] = await promisePool.query(queryIpMatch);
        return rows;
    }

    // match id
    const sqlSelectIdMatch = `
    SELECT name
    FROM node_ip
    WHERE user_local_id = '${id}'
    AND name != 'null'`;
    const ipMatch = await getIpMatch();
    const ipStatus = ipMatch.length > 0 ? 1 : 0;
    async function getNames() {
        const [rows] = await promisePool.query(sqlSelectIdMatch);
        return rows;
    }

    const names = await getNames();
    if(names.length > 0) {
        nameCurent = names[0].name;
        addData = `INSERT INTO node_ip (user_local_id, ip, city, lan, status, time, name) VALUES ('${id}', INET_ATON('${ip}'), '${city}', '${lan}', '${ipStatus}', CURTIME(), '${nameCurent}')`;
    }else{
        addData = `INSERT INTO node_ip (user_local_id, ip, city, lan, status, time) VALUES ('${id}', INET_ATON('${ip}'), '${city}', '${lan}', '${ipStatus}', CURTIME())`;
    }

    pool.query(addData, (err, data) => {
        err ? console.log('<<< Error POST >>>', err) : console.log('<<< POST OK >>>');
        res.status(200);
    });
}

const postAccess = (req, res) => {
    const {login, password} = req.body;
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
    const dayFix = day.length < 2 ? '0' + day : day;
    const monthFix = month.length < 2 ? '0' + month : month;

    const selectUserUnique = `SELECT DISTINCT user_local_id, name FROM node_ip WHERE DATE(time) = '${year}-${monthFix}-${dayFix}'`;
    async function getUserUnique() {
        const [rows] = await promisePool.query(selectUserUnique);
        return rows;
    }
    //caunt unique user_local_id in search
    const userUnique = await getUserUnique();

    const arrInfo = [];

    for(let item of userUnique) {
        const selectCountExitAll = `SELECT COUNT(*) FROM node_ip WHERE user_local_id = "${item['user_local_id']}"`;
        const selectCountExitDay = `SELECT COUNT(*) FROM node_ip WHERE user_local_id = "${item['user_local_id']}" AND DATE(time) = '${year}-${monthFix}-${dayFix}'`;
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
        arrInfo.push({id: item['user_local_id'], name: item.name, countExitDay, countExitAll});
    }

    const curentDate = `${dayFix}-${monthFix}-${year}`;
    const infoText = arrInfo.length ? ' данные получены' : ' данных нет';
    const title ='Admin';

    res.render(createPath('data-users'), {curentDate, arrInfo, infoText, title}); 
}

const getPageUserInfo = async (req, res) => {
    const id = req.params.id;
    const selectUserInfo = `SELECT city,INET_NTOA(ip),lan,time,status,name FROM node_ip WHERE user_local_id = '${id}'`;
    async function getUserInfo() {
        const [rows] = await promisePool.query(selectUserInfo);
        return rows;
    }
    const infoUser = await getUserInfo();
    const curentName = infoUser[0].name;
    const title ='Admin';

    res.render(createPath('data-user'), {id, infoUser, curentName, title});
}

const updateStatus = async (req, res) => {
    const {ip, status} = req.body;

    const sqlUpdateStatus = `
        UPDATE node_ip 
        SET status = ${status} 
        WHERE ip = INET_ATON('${ip}')`;

    pool.query(sqlUpdateStatus, (err, date) => {
        if(err) {
            console.log('Error sqlUpdateStatus >>> ', err);
            return
        }
        res.send({res: 'ok data'});
    })
}

const updateName = (req, res) => {
    const {newName, id} = req.body;

    const sqlUpdateName = `
        UPDATE node_ip
        SET name = '${newName}'
        WHERE user_local_id = '${id}'`;

    pool.query(sqlUpdateName, (err, date) => {
        if(err) {
            console.log('Error controller/updateName', err);
            return
        }
        res.send({res: 'update ok'});
    })
}

const updateTextInSite = (req, res) => {
    const {classic, standart,classicPlus,posobie,textPosobie} = req.body;
    console.log('',classic, standart,classicPlus, posobie,textPosobie);
    const queryUpdate = `
        UPDATE site_info
        SET classic = ${classic},
            standart = ${standart},
            classic_plus = ${classicPlus},
            money = ${posobie},
            text_help = '${textPosobie}'
        WHERE id = 1`;
    pool.query(queryUpdate, (err, data) => {
        if(err) {
            console.log('Error post in updateTextInSite()...', err);
            return
        }
        res.send({res: 'ok'});
    });
}

module.exports = {
    postMain,
    postAccess,
    postDataUsers,
    getPageUserInfo,
    updateStatus,  
    updateName,
    updateTextInSite
}