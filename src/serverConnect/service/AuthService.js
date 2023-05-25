import {isSuccess} from "../../handlers/auth"
import {ApiController} from "../ApiController"
import {Apis} from "../Apis"
import {error, success} from "../../utils/MyToast";

export const LoginHandler = async (data, navigate) => {
    try {
        const res = await ApiController.doPost(Apis.login, data)
        console.log(res)
        if (isSuccess(res.status)) {
            saveLocalStorage(res, navigate, "login")
        }
    } catch (err) {
        error(err.response.data.error)
    }
}


export const RegisterSecond = async (id, data, navigate) => {
    console.log(data)
    try {
        const res = await ApiController.doPut(id, Apis.regSecond, data)
        if (isSuccess(res.status)) {
            success(res.data.message)
            navigate("/")
        }
    } catch (err) {
        error(err.message)
    }
}

export const RegisterHandler = async (data, navigate) => {
    try {
        const res = await ApiController.doPost(Apis.register, data)
        if (isSuccess(res.status)) {
            saveLocalStorage(res, navigate, "register")
        }
    } catch (err) {
        error(err.response.data.apiresponse.message)
    }
}

export const uploadPhotoId = async (data, id) => {
    try {
        const res = await ApiController.doPut(id, Apis.uploadPhoto, data)
        if (isSuccess(res.status)) {
            success(res.data.message)
        }
    } catch (err) {
        error(err.message)
    }
}

const saveLocalStorage = (res, navigate, status) => {
    localStorage.setItem('id', status === "login" ? res.data.user.id : res.data.getLogin.user.id)
    localStorage.setItem('token', status === "login" ? res.data.resToken.body : res.data.getLogin.resToken.body)
    localStorage.setItem('tokenType', status === "login" ? res.data.resToken.tokenType : res.data.getLogin.resToken.tokenType)
    // localStorage.setItem('firstName', res.data.getLogin.user.firstName)
    // localStorage.setItem('lastName', res.data.getLogin.user.lastName)
    localStorage.setItem('phoneNumber', status === "login" ? res.data.user.phoneNumber : res.data.getLogin.user.phoneNumber)
    localStorage.setItem('email', status === "login" ? res.data.user.email : res.data.getLogin.user.email)
    localStorage.setItem('referralCode', status === "login" ? res.data.user.referralCode : res.data.getLogin.user.referralCode)
    localStorage.setItem('role', status === "login" ? res.data.user.roles[0].roleName : res.data.getLogin.user.roles[0].roleName)
    success('muvaffaqiyatli')
    console.log(res)
    if (res.data.user.roles[0].roleName === "ADMIN") {
        navigate("/auth/krypta-valyuta/admin")
    }
}