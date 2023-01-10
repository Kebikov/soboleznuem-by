import mainFn from "./modules/main";
import calcFn from './modules/calc';
import shopSortFn from "./modules/shop-sort";
import popUpFn from './modules/popup';
import changePos from './modules/changePosobie';

window.addEventListener('DOMContentLoaded', () => {
    mainFn();
    calcFn();
    shopSortFn();
    popUpFn();
    changePos();
});
