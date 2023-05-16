import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Save, SendPhoto} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {error} from "../../../utils/MyToast";
import {FormService} from "../../../component/FormService";

export const PoolAdd = () => {
    const navigate = useNavigate()

    const id = useParams().id

    const [uzName, setUzName] = useState('')
    const [enName, setEnName] = useState('')
    const [ruName, setRuName] = useState('')
    const [photoId, setPhotoId] = useState('')
    const [annualizedInterest, setAnnualizedInterest] = useState('')
    const [stakingMinimum, setStakingMinimum] = useState('')
    const [photo, setPhoto] = useState()
    const coinForm = [
        {name: 'photo', placeholder: 'poolsng rasimini kiriting', type: 'file', value: photo, setValue: setPhoto},
        {
            name: "Hovuzning O'zbekcha nomini kiriting",
            placeholder: "Hovuzning O'zbekcha nomini kiriting",
            type: 'text',
            value: uzName,
            setValue: setUzName
        }, {
            name: 'Hovuzning Inglizcha nomini kiriting',
            placeholder: 'Hovuzning Inglizcha nomini kiriting',
            type: 'text',
            value: enName,
            setValue: setEnName
        }, {
            name: 'Hovuzning Ruscha nomini kiriting',
            placeholder: 'Hovuzning Ruscha nomini kiriting',
            type: 'text',
            value: ruName,
            setValue: setRuName
        }, {
            name: 'Ushbu hovuzning yillik foizi',
            placeholder: 'Ushbu hovuzning yillik foizi %',
            type: 'number',
            value: annualizedInterest,
            setValue: setAnnualizedInterest
        }, {
            name: 'Minimal stavka',
            placeholder: 'Minimal stavka',
            type: 'number',
            value: stakingMinimum,
            setValue: setStakingMinimum
        }
    ]
    const saveVips = async () => {
        const check = {
            uzName: uzName.trim().length === 0,
            enName: enName.trim().length === 0,
            ruName: ruName.trim().length === 0,
            annualizedInterest: annualizedInterest.trim().length === 0,
            stakingMinimum: stakingMinimum.trim().length === 0,
        }
        if (check.uzName || check.enName || check.ruName || check.annualizedInterest || check.stakingMinimum) {
            return error("malumot bo'sh bo'lmasin")
        }

        let formData = new FormData();
        formData.append("photo", photo)

        await SendPhoto(formData)
        const data = {
            uzName,
            enName,
            ruName,
            photoId: localStorage.getItem("__coin_photoId__"),
            annualizedInterest,
            stakingMinimum
        }
        if (id === undefined || id === "" || id === "undefined") {
            await Save(data, Apis.pools, "", navigate, "pool")
        } else {
            await Save(data, Apis.pools, id, navigate, "pool")
        }
    }

    const sendPhoto = (e) => {
        setPhoto(e.target.files[0])
    }

    return (
        <div>
            <FormService formName={"hovuz saqlash"} formArr={coinForm} method={saveVips} sendPhoto={sendPhoto}
                         url={"pool"}/>
        </div>
    )
}