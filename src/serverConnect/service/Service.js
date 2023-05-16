// import {toast} from "react-toastify"
// import {isSuccess} from "../../handlers/auth";
// import {ApiController} from "../ApiController"
// import {Apis} from "../Apis";
//
// export const SendMessage = async (data, url) => {
//     try {
//         const res = await ApiController.doPost(url, data)
//         if (isSuccess(res.status)) {
//             toast.success("xabar yuborildi")
//         }
//     } catch (err) {
//         toast.error(err.message)
//     }
// }
//
import toast from "react-hot-toast";

export const Save = async (data, url, id, navigate, navigateUrl) => {
    try {
        let res = ''
        if (id === undefined || id === "" || id === "undefined") {
            res = await ApiController.doPost(url, data)
        } else {
            res = await ApiController.doPut(id, url, data)
        }
        if (isSuccess(res.status)) {
            toast.success(res.data.message)
            navigate(`/auth/krypta-valyuta/admin/${navigateUrl}`)
            localStorage.setItem("__coin_photoId__", "")
        }
    } catch (err) {
        toast.error(err.response.data.message)
    }
}


export const GetPhoto = async (id, setPhoto) => {
    try {
        const res = await ApiController.doGet(Apis.getPhoto + id)
        // console.log(res);
        setPhoto(res);
    } catch (err) {
    }
}

export const embeddedGet = async (url, setData, status) => {
    try {
        const res = await ApiController.doGet(url)
        if (status === "data") {
            setData(res.data)
        } else if (status === "embedded") {
            setData(res.data._embedded.list)
        }
    } catch (err) {
    }
}

export const getOneAbout = async (url, id, setData, status) => {
    try {
        const res = await ApiController.doGetOne(id, url)
        if (status === "data") {
            setData(res.data)
        } else if (status === "embedded") {
            setData(res.data._embedded.list)
        }
    } catch (err) {
    }
}

export const deleteService = async (id, url, navigate, navigateName, setModal, getAll) => {
    try {
        localStorage.setItem("photoId", "")
        const res = await ApiController.doDelete(id, url)
        if (isSuccess(res.status)) {
            navigate(navigateName)
            getAll()
            setModal(false)
            success(res.data.message)
        }
    } catch (err) {
        error("xatolik")
    }
}


import {isSuccess} from "../../handlers/auth";
import {ApiController} from "../ApiController";
import {Apis} from "../Apis";
import {error, success} from "../../utils/MyToast";

export const SendPhoto = async (data) => {
    try {
        const res = await ApiController.doPost(Apis.sendPhoto, data)
        localStorage.setItem("__coin_photoId__", res.data)
    } catch (err) {
        error("xatolik")
    }
}