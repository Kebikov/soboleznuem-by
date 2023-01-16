const express = require('express');
const siteRouters = require('./routes/site-routes');
const postRouters = require('./routes/post-routes');
const createPath = require('./helpers/create-path');
const {pool, promisePool} = require('./helpers/pool');
const app = express();
require('dotenv').config();

//* middleware 
app.listen(process.env.PORT, (err) => {
    err ? console.log('ERROR>>>', err) : console.log(`LIstening port ${process.env.PORT}`);
});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//* Routers all 
app.get('/', async (req, res) => {
    const title = 'Ритуальные услуги в Минске - бюро похоронных услуг';
    const description = '➤ Весь спектр похоронных услуг: захоронение, кремация, оформление места захоронения, копка могилы, услуги санитара-патологоанатома, подготовка тела к погребению.';
    const queryTextHelp = `SELECT * FROM site_info`;
    async function getTextHelp() {
        const [rows] = await promisePool.query(queryTextHelp);
        return rows;
    }
    const columtextHelp = await getTextHelp();
    const siteInfo = columtextHelp[0];

    res.render(createPath('index'), { title, description, siteInfo });
});

app.use(siteRouters);
app.use(postRouters);

app.get('/token', (req, res) => {
    const token = process.env.TOKEN;
    res.send(JSON.stringify({res: token}));
});

app.use((req, res) => {
    const title = 'Error Page';
    const description = 'Error page';
    res
        .status(404)
        .render(createPath('error'), {title,description});
});



