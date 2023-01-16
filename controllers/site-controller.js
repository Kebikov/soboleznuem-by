const createPath = require('../helpers/create-path');
const {pool, promisePool} = require('../helpers/pool');

const getPageShopWreaths = (req, res) => {
    const title = 'Венок ритуальный купить в Минске - цена венков для похорон';
    const description = 'У нас представлен большой ассортимент венков для похорон. Возможно купить вариант с ленточкой, надписью или без. 🚚 Доставка по всему Минску!';
    res.render(createPath('shop-wreaths'), {title,description});
}

const getPageBurial = (req, res) => {
    const title = 'Услуги захоронения в Минске';
    const description = '➤ Окажем помощь в организации всего процесса захоронения. Доступные цены на ритуальные услуги в Минске и Минской области.';
    res.render(createPath('burial'), {title,description});
}

const getPageCremation = (req, res) => {
    const title = 'Кремация в Минске - цена кремации человека сколько стоит';
    const description = '➤ Организуем кремацию вашего умершего близкого по доступным ценам в Минске. Звоните! - проконсультируем и поможем с крематорием.';
    res.render(createPath('cremation'), {title,description});
}

const getPageRitualAgent = (req, res) => {
    const title = 'Ритуальный агент в Минске - цена услуг похоронного агента';
    const description = '➤ Наш ритуальный агент оперативно проконсультирует и поможет в организации полного процесса похорон вашего близкого человека на должном уровне.';
    res.render(createPath('ritual-agent'), {title,description});
}

const getPageCopterGraves = (req, res) => {
    const title = 'Копка могилы в Минске и Минской области - услуга выкопать могилу';
    const description = '☑️ Оказываем услуги по копке могилы. Копка могилы на кладбище может осуществляться как вручную, так и с использованием специальной техники.';
    res.render(createPath('copter-graves'), {title,description});
}

const getPageRentCatatal = (req, res) => {
    const title = 'Аренда катафалка в Минске - услуги катафалка заказать';
    const description = '➤ Заказать машину на похороны у нас можно в любое время суток. ✅ Мы работаем без выходных и круглосуточно.';
    res.render(createPath('rent-catatal'), {title,description});
}

const getPageLoaders = (req, res) => {
    const title = 'Носильщики гроба в Минске и Минской области - ритуальные грузчики';
    const description = '➤ Услуги ритуальных грузчиков в Минске и Минской области. ✅ Ответственные носильщики гроба по доступной цене.';
    res.render(createPath('loaders'), {title,description});
}

const getPageСargo200 = (req, res) => {
    const title = 'Перевозка умерших груз 200 - услуги репатриации в Минске';
    const description = '➤ Если ваш близкий родственник или близкий человек скончался в другой стране и требуется доставить тело на родину - наша компания поможет с перевозкой тела.';
    res.render(createPath('cargo-200'), {title,description});
}

const getPageProductionOfMonuments = (req, res) => {
    const title = 'Заказать памятник на могилу в Минске под заказ';
    const description = '➤ Поможем в выборе и заказе памятника по приемлемой цене. Ответственный подход к выполнению заказа и оперативная доставка!';
    res.render(createPath('production-of-monuments'), {title,description});
}

const getPageShopCoffins = (req, res) => {
    const title = 'Гроб купить в Минске - где купить по недорогой цене гроб для похорон';
    const description = '➤ Гроб у нас можно купить обитый тканью, полированный, разных размеров и формы. Цена на всю продукцию невысокая. 🚚 Доставка по Минску.';
    res.render(createPath('shop-coffins'), {title,description});
}

const getPageShopBaskets = (req, res) => {
    const title = 'Корзины ритуальные';
    const description = '';
    res.render(createPath('shop-baskets'), {title,description});
}

const getPageShopCrosses = (req, res) => {
    const title = 'Крест для похорон купить в Минске: цена католического православного';
    const description = '➤ Оформление заказа креста ☦ осуществляется круглосуточно. Сделать это можно по ☎ телефону или оставив заявку на сайте.';
    res.render(createPath('shop-crosses'), {title,description});
}

const getPageShopClothes = (req, res) => {
    const title = 'Погребальная одежда, обувь для женщин и мужчин купить в Минске';
    const description = 'Недорогую обувь и одежду для похорон можно купить в нашем магазине. Цена на погребальные наряды доступна каждому. Доставка по Минску!';
    res.render(createPath('shop-clothes'), {title,description});
}

const getPageShopPayment = (req, res) => {
    const title = 'Доставка и оплата';
    const description = '🚚 Оказываем доставку товаров с нашего магазина c 08:00 до 20:00 без выходных. Доставка по Минску 7 р. При заказе более 150 р. – доставка бесплатно.';
    res.render(createPath('shop-payment'), {title,description});
}

const getPageInformation = (req, res) => {
    const title = 'Важная и полезная информация, рекомендации при смерти человека';
    const description = 'Здесь мы собрали всю самую важную и необходимую информацию, которая поможет все сделать правильно при захоронении своего близкого человека.';
    res.render(createPath('information'), {title,description});
}

const getPagePlaceCemetery = (req, res) => {
    const title = 'Место на кладбище в Минске - как получить, как оформить место';
    const description = 'По вопросам получения свободного места на кладбище, а также организации похорон, вы можете обратиться в нашу компанию.';
    res.render(createPath('place-cemetery'), {title,description});
}

const getPageColumbaria = (req, res) => {
    const title = 'Колумбарии Минска - колумбарные стены для захоронения праха';
    const description = 'На территории Минска и Минской области находится больше 6 колумбариев. Как купить место в колумбарии и сколько стоит место.';
    res.render(createPath('columbaria'), {title,description});
}

const getPageCrematoriumMinsk = (req, res) => {
    const title = 'Крематорий в Минске - услуги кремации на северном кладбище цена';
    const description = 'Наша компания организует кремацию вашего близкого умершего на достойном уровне. Доступная цена. Все под ключ.';
    res.render(createPath('crematorium-minsk'), {title,description});
}

const getPageCemeteryMinsk = (req, res) => {
    const title = 'Кладбища Минска - действующие места захоронения';
    const description = 'На территории Минска и Минской области находится около 20 кладбищ. Какие у них адреса и особенности на нашем сайте.';
    res.render(createPath('cemetery-minsk'), {title,description});
}

const getPageBurialAllowance = (req, res) => {
    const title = 'Пособие на погребение - размер пособия, документы для получения';
    const description = 'Какой актуальный размер пособия на погребение в Беларуси, как получить пособие для захоронения и какие документы для этого необходимы.';
    res.render(createPath('burial-allowance'), {title,description});
}

const getPageIfDied = (req, res) => {
    const title = 'Что делать, если умер близкий человек советы рекомендации';
    const description = 'Смерть близкого человека – это всегда потрясение и эмоциональный шок, поэтому главное взять себя в руки и не совершать ошибок!';
    res.render(createPath('if-died'), {title,description});
}

const getPageMorguesInMinsk = (req, res) => {
    const title = 'Морги в Минске телефоны, адреса, время работы';
    const description = '☑️ По какому адресу находятся морги в Минске, какой у них график работы и телефоны. Проконсультироваться по захоронения можно у нас.';
    res.render(createPath('morgues-in-minsk'), {title,description});
}

const getPageReviews = (req, res) => {
    const title = 'Отзывы компании похороны в Минске ИП Шусталик С.А.';
    const description = 'Здесь мы собрали отзывы наших благодарных клиентов, к которым мы пришли на помощь в сложное для них время.';
    res.render(createPath('reviews'), {title,description});
}

const getPageContacts = (req, res) => {
    const title = 'Контакты';
    const description = 'Здесь мы собрали контактные данные нашей компании, по которым вы можете связаться с нами. ☎ Звоните за консультацией!';
    res.render(createPath('contacts'), {title,description});
}

const getPageCalc = (req, res) => {
    const title = 'Ритуальные услуги в Минске - бюро похоронных услуг';
    const description = '➤ Весь спектр похоронных услуг: захоронение, кремация, оформление места захоронения, копка могилы, услуги санитара-патологоанатома, подготовка тела к погребению.';
    const praice = '<div class="praice">Всего: 0</div>';
    res.render(createPath('calc'), {title,description,praice});
}

const getPageAdminFilippov = (req, res) => {
    const title = 'Admin';
    const description = 'Admin';
    res.render(createPath('admin-filippov'), {title,description});
}

const getPageDataStart = (req, res) => {
    const title = 'Admin';
    const description = 'DataStart';
    res.render(createPath('data-start'), {title,description});
}

const getPageDataUsers = (req, res) => {
    const title ='Admin';
    const curentDate = 'Выберите дату для сортировки.'
    const arrInfo = [];
    res.render(createPath('data-users'), {curentDate, arrInfo, title});
}

const getPageDataChangeInfo = async (req, res) => {
    const title ='Admin';
    const queryTextHelp = `SELECT * FROM site_info`;
    async function getTextHelp() {
        const [rows] = await promisePool.query(queryTextHelp);
        return rows;
    }
    const columtextHelp = await getTextHelp();
    const siteInfo = columtextHelp[0];

    res.render(createPath('data-change-info'), {title, siteInfo});
}

module.exports = {
    getPageContacts,
    getPageShopWreaths,
    getPageBurial,
    getPageCremation,
    getPageRitualAgent,
    getPageCopterGraves,
    getPageRentCatatal,
    getPageLoaders,
    getPageСargo200,
    getPageProductionOfMonuments,
    getPageShopCoffins,
    getPageShopBaskets,
    getPageShopCrosses,
    getPageShopClothes,
    getPageShopPayment,
    getPageInformation,
    getPagePlaceCemetery,
    getPageColumbaria,
    getPageCrematoriumMinsk,
    getPageCemeteryMinsk,
    getPageBurialAllowance,
    getPageIfDied,
    getPageMorguesInMinsk,
    getPageReviews,
    getPageCalc,
    getPageAdminFilippov,
    getPageDataStart,
    getPageDataUsers,
    getPageDataChangeInfo
};








