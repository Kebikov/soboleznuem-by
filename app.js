const express = require('express');
const mysql = require('mysql');
const siteRouters = require('./routes/site-routes');
const createPath = require('./helpers/create-path');
require('dotenv').config();
const app = express();

//* connecting with mySQL
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DB,
    password: process.env.MYSQL_PASSWORD
});

//* middleware 
app.set('view engine', 'ejs');
app.listen(process.env.PORT, (err) => {
    err ? console.log('ERROR>>>', err) : console.log(`LIstening port ${process.env.PORT}`);
});
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//* Routers all 
app.get('/', (req, res) => {
    const title = 'Ритуальные услуги в Минске - бюро похоронных услуг';
    const description = '➤ Весь спектр похоронных услуг: захоронение, кремация, оформление места захоронения, копка могилы, услуги санитара-патологоанатома, подготовка тела к погребению.';
    res.render(createPath('index'), { title, description });
});

app.use(siteRouters);

app.post('/', (req, res) => {
    const {ip, id, city, lan} = req.body;
    let addData = `INSERT INTO node_ip (user_local_id, ip, city, lan, status, time) VALUES ('${id}', INET_ATON('${ip}'), '${city}', '${lan}', 0, CURTIME())`;
    pool.query(addData, (err, data) => {
        err ? console.log('<<< Error POST >>>', err) : console.log('<<< POST OK >>>');
    });
    res.status(200);
});

app.get('/token', (req, res) => {
    const token = process.env.TOKEN;
    res.send(JSON.stringify({res: token}));
});

app.use((req, res) => {
const title = 'Error Page';
res
    .status(404)
    .render(createPath('error'), { title });
});


