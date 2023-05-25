import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Save, SendPhoto} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {error} from "../../../utils/MyToast";
import {FormService} from "../../../component/FormService";

export const VipsAdd = () => {
    const navigate = useNavigate()

    const id = useParams().id

    const [name, setName] = useState('')
    const [minQuantifyAmount, setMinQuantifyAmount] = useState('')
    const [maxQuantifyAmount, setMaxQuantifyAmount] = useState('')
    const [shareRatio, setShareRatio] = useState('')
    const [effectiveEmount, setEffectiveEmount] = useState('')
    const [directlyPromoteMembers, setDirectlyPromoteMembers] = useState('')
    const [secondThridGenerationMembers, setSecondThridGenerationMembers] = useState('')
    const [profits, setProfits] = useState('')
    const [metaGORobotsAvailablePerDay, setMetaGORobotsAvailablePerDay] = useState('')
    const [teamAward, setTeamAward] = useState('')
    const [photo, setPhoto] = useState()
    const coinForm = [
        {name: 'photo', placeholder: 'vipng rasimini kiriting', type: 'file', value: photo, setValue: setPhoto},
        {
            name: "nomi",
            placeholder: "vipng nomini kiriting",
            type: 'text',
            value: name,
            setValue: setName
        }, {
            name: 'minimal pul miqdorini kiriting',
            placeholder: 'minimal pul miqdorini kiriting',
            type: 'number',
            value: minQuantifyAmount,
            setValue: setMinQuantifyAmount
        }, {
            name: 'maximal pul miqdorini kiriting',
            placeholder: 'minimal pul miqdorini kiriting',
            type: 'number',
            value: maxQuantifyAmount,
            setValue: setMaxQuantifyAmount
        }, {
            name: 'vip uchun ulush miqdorini kiriting',
            placeholder: 'vip uchun ulush miqdorini kiriting %',
            type: 'number',
            value: shareRatio,
            setValue: setShareRatio
        }, {
            name: 'samarali miqdorini kiriting',
            placeholder: 'samarali miqdorini kiriting',
            type: 'number',
            value: effectiveEmount,
            setValue: setEffectiveEmount
        }, {
            name: 'a\'zolarni bevosita targib qilish soni',
            placeholder: 'a\'zolarni bevosita targib qilish soni',
            type: 'number',
            value: directlyPromoteMembers,
            setValue: setDirectlyPromoteMembers
        }, {
            name: 'ikkinchi va uchinchi avlod vakillari soni',
            placeholder: "ikkinchi va uchinchi avlod vakillari soni",
            type: 'number',
            value: secondThridGenerationMembers,
            setValue: setSecondThridGenerationMembers
        }, {
            name: 'qancha foyda olish foizi',
            placeholder: "qancha foyda olish foizi",
            type: 'number',
            value: profits,
            setValue: setProfits
        }, {
            name: 'kuniga tekshirish soni',
            placeholder: "kuniga tekshirish soni",
            type: 'number',
            value: metaGORobotsAvailablePerDay,
            setValue: setMetaGORobotsAvailablePerDay
        }, {
            name: 'jamoa mukofoti foizi',
            placeholder: "jamoa mukofoti foizi",
            type: 'number',
            value: teamAward,
            setValue: setTeamAward
        },
    ]
    const saveVips = async () => {
        const check = {
            name: name.trim().length === 0,
            minQuantifyAmount: minQuantifyAmount <= 0,
            maxQuantifyAmount: maxQuantifyAmount <= 0,
            shareRatio: shareRatio <= 0,
            effectiveEmount: effectiveEmount <= 0,
            directlyPromoteMembers: directlyPromoteMembers <= 0,
            secondThridGenerationMembers: secondThridGenerationMembers <= 0,
            profits: profits <= 0,
            metaGORobotsAvailablePerDay: metaGORobotsAvailablePerDay <= 0,
            teamAward: teamAward <= 0,
        }
        if (check.name || check.minQuantifyAmount || check.maxQuantifyAmount || check.shareRatio || check.effectiveEmount || check.directlyPromoteMembers || check.secondThridGenerationMembers || check.profits || check.metaGORobotsAvailablePerDay || check.teamAward) {
            return error("malumot bo'sh bo'lmasin")
        }

        let formData = new FormData();
        formData.append("photo", photo)

        await SendPhoto(formData, "__vip_photoId__")
        const data = {
            name,
            minQuantifyAmount,
            maxQuantifyAmount,
            photoId: localStorage.getItem("__vip_photoId__"),
            shareRatio,
            effectiveEmount,
            directlyPromoteMembers,
            secondThridGenerationMembers,
            profits,
            metaGORobotsAvailablePerDay,
            teamAward
        }
        if (id === undefined || id === "" || id === "undefined") {
            await Save(data, Apis.vip, "", navigate, "vips")
        } else {
            await Save(data, Apis.vip, id, navigate, "vips")
        }
    }

    const sendPhoto = (e) => {
        setPhoto(e.target.files[0])
    }

    return (
        <div>
            <FormService formName={"vip saqlash"} formArr={coinForm} method={saveVips} sendPhoto={sendPhoto}
                         url={"vips"}/>
        </div>
    )
}