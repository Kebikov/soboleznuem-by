const express = require('express');
const router = express.Router();

const {
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
} = require('../controllers/site-controller');

router.get('/contacts', getPageContacts);
router.get('/shop-wreaths', getPageShopWreaths);
router.get('/burial', getPageBurial);
router.get('/cremation', getPageCremation);
router.get('/ritual-agent', getPageRitualAgent);
router.get('/copter-graves', getPageCopterGraves);
router.get('/rent-catatal', getPageRentCatatal);
router.get('/loaders', getPageLoaders);
router.get('/cargo-200', getPageСargo200);
router.get('/production-of-monuments', getPageProductionOfMonuments);
router.get('/shop-coffins', getPageShopCoffins);
router.get('/shop-baskets', getPageShopBaskets);
router.get('/shop-crosses', getPageShopCrosses);
router.get('/shop-clothes', getPageShopClothes);
router.get('/shop-payment', getPageShopPayment);
router.get('/information', getPageInformation);
router.get('/place-cemetery', getPagePlaceCemetery);
router.get('/columbaria', getPageColumbaria);
router.get('/crematorium-minsk', getPageCrematoriumMinsk);
router.get('/cemetery-minsk', getPageCemeteryMinsk);
router.get('/burial-allowance', getPageBurialAllowance);
router.get('/if-died', getPageIfDied);
router.get('/morgues-in-minsk', getPageMorguesInMinsk);
router.get('/reviews', getPageReviews);
router.get('/calc', getPageCalc); 
router.get('/admin-filippov', getPageAdminFilippov);
router.get('/data-start', getPageDataStart);
router.get('/data-users', getPageDataUsers);
router.get('/data-change-info', getPageDataChangeInfo);

module.exports = router;