export const Apis = {
    //start auth
    login: '/auth/login',
    register: '/auth/register',
    regSecond: '/auth/update',
    uploadPhoto: '/auth/photoUpload',
    //end auth
    sendPhoto: '/attachment/upload',
    deletePhoto: '/attachment',
    getPhoto: 'http://localhost:8080/api/v1/attachment/download?id=',
    coin: '/coin',
    vip: '/vips',
    pools: '/pools',
    invest: '/pools/inv'
}