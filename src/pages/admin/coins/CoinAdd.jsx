import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Save, SendPhoto} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {error} from "../../../utils/MyToast";
import {FormService} from "../../../component/FormService";

export const CoinAdd = () => {
    const navigate = useNavigate()

    const id = useParams().id

    const [name, setName] = useState('')
    const [percentage, setPercentage] = useState('')
    const [dollar, setDollar] = useState('')
    const [photo, setPhoto] = useState()
    const coinForm = [
        {name: 'photo', placeholder: 'coinning rasimini kiriting', type: 'file', value: photo, setValue: setPhoto},
        {
            name: 'name',
            placeholder: "coinning nomini kiriting",
            type: 'text',
            value: name,
            setValue: setName
        },
        {
            name: 'percentage',
            placeholder: 'coinning foiziini kiriting',
            type: 'number',
            value: percentage,
            setValue: setPercentage
        }, {
            name: 'dollar',
            placeholder: 'coinning narxini kiriting $',
            type: 'number',
            value: dollar,
            setValue: setDollar
        },
    ]
    const saveCoin = async () => {
        const check = {
            name: name.trim().length === 0,
            percentage: percentage <= 0,
            dollar: dollar <= 0,
        }
        if (check.name || check.percentage || check.dollar) {
            return error("malumot bo'sh bo'lmasin")
        }

        let formData = new FormData();
        formData.append("photo", photo)

        await SendPhoto(formData)
        const data = {
            name, percentage, dollar, photoId: localStorage.getItem("__coin_photoId__")
        }
        if (id === undefined || id === "" || id === "undefined") {
            await Save(data, Apis.coin, "", navigate, "coins")
        } else {
            await Save(data, Apis.coin, id, navigate, "coins")
        }
    }

    const sendPhoto = (e) => {
        setPhoto(e.target.files[0])
    }

    return (
        <div>
            <FormService formName={"coinni saqlash"} formArr={coinForm} method={saveCoin} sendPhoto={sendPhoto}
                         url={"coins"}/>
        </div>
    )
}