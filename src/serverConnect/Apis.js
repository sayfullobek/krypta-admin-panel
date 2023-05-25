import {baseUrl} from "./baseUrl";

export const Apis = {
    //start auth
    getAllUser: '/auth',
    getOneUser: "/auth/get-me",
    login: '/auth/login',
    register: '/auth/register',
    regSecond: '/auth/update',
    uploadPhoto: '/auth/photoUpload',
    //end auth
    sendPhoto: '/attachment/upload',
    deletePhoto: '/attachment',
    getPhoto: baseUrl + '/attachment/download?id=',
    // getPhoto: 'https://krypta-server.herokuapp.com/api/v1/attachment/download?id=',
    coin: '/coin',
    vip: '/vips',
    pools: '/pools',
    invest: '/pools/inv',
    notification: '/notification',
    message: '/notification/message',
    help: '/help',
    archivePay: '/archive-pay',
    meSendMoney: '/auth/me-money-send',
    moneyExitList: '/auth/list-of-funds-to-be-withdrawn',
    confirmation: '/auth/me-withdrawal-of-money-from-the-account/confirmation',
    aboutAppUpdate: '/about-the-app/about-the-app-update',
    aboutAppGet: '/about-the-app',
    feedback: '/feedback',
}
