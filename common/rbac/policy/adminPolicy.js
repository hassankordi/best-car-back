// const { GET_ALL_USERS, BOLCK_USER } = require('../../../modules/user/userEndpoints')
const { GET_CONTACTS_ADMIN } = require("../../../modules/contacts/contactEndpoints");
const {HOME_PAGE_ADMIN} = require("../../../modules/homePage/homePageEndpoints") ;
const {ITEMS_ADMIN} = require("../../../modules/items/itemsEndpoints");
const { ORDERS_ADMIN } = require("../../../modules/orders/ordersEndpoints");
const { SLIDER_ADMIN } = require("../../../modules/slider/sliderEndpoints");
const { TRAINING_REQ_ADMIN } = require("../../../modules/trainingRequest/trainingReqEndpoints");
const { VIDS_ADMIN } = require("../../../modules/vids/vidsEndpoints");


module.exports = [
   
    HOME_PAGE_ADMIN,


    ITEMS_ADMIN ,


    ORDERS_ADMIN ,


    SLIDER_ADMIN,

    TRAINING_REQ_ADMIN ,


    VIDS_ADMIN ,

    GET_CONTACTS_ADMIN
    


]