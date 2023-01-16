import mainFn from "./modules/main";
import calcFn from './modules/calc';
import shopSortFn from "./modules/shop-sort";
import popUpFn from './modules/popup';
import changePos from './modules/changePosobie';
import currentUser from "./modules/current-user";
import inputPassword from "./modules/input-password";
import dataUsers from "./modules/data-users";
import dataUser from "./modules/data-user";

window.addEventListener('DOMContentLoaded', () => {
    mainFn();
    calcFn();
    shopSortFn();
    popUpFn();
    changePos();
    currentUser();
    inputPassword();
    dataUsers();
    dataUser();
});
