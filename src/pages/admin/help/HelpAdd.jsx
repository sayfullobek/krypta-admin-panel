import {useNavigate, useParams} from "react-router-dom";
import React, {useState} from "react";
import {error} from "../../../utils/MyToast";
import {Save, SendPhoto} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {FormService} from "../../../component/FormService";

export const HelpAdd = () => {
    const navigate = useNavigate()

    const id = useParams().id

    const [uzName, setUzName] = useState('')
    const [enName, setEnName] = useState('')
    const [ruName, setRuName] = useState('')
    const [helpName, setHelpName] = useState('0')
    const [uzInfo, setUzInfo] = useState('')
    const [enInfo, setEnInfo] = useState('')
    const [ruInfo, setRuInfo] = useState('')
    const helpArr = [
        {id: 'ACCOUNT_PROBLEMS', name: 'Hisob bilan bog\'liq muammolar'},
        {id: 'PROBLEM_OF_INCOME', name: 'Daromad muammolari'},
        {id: 'OTHER_PROBLEMS', name: 'Boshqa muammolar'},
    ]
    const coinForm = [
        {
            name: "Yordamning turini tanlang",
            placeholder: "Iltimos yordamning turini tanlang",
            type: 'select',
            arr: helpArr,
            value: helpName,
            setValue: setHelpName
        }, {
            name: "Yordamning O'zbekcha nomi",
            placeholder: "Iltimos yordamning O'zbekcha nomini kiriting",
            type: 'text',
            value: uzName,
            setValue: setUzName
        }, {
            name: "Yordamning Inlgizcha nomi",
            placeholder: "Iltimos yordamning Inlgizcha nomini kiriting",
            type: 'text',
            value: enName,
            setValue: setEnName
        }, {
            name: "Yordamning Ruscha nomi",
            placeholder: "Iltimos yordamning Ruscha nomini kiriting",
            type: 'text',
            value: ruName,
            setValue: setRuName
        }, {
            name: "Yordamning asosiy O'zbekcha ma'lumotini kiriting",
            placeholder: "Iltimos yordamning asosiy O'zbekcha ma'lumotini kiriting",
            type: 'textarea',
            value: uzInfo,
            setValue: setUzInfo
        }, {
            name: "Yordamning asosiy Inlgilzcha ma'lumotini kiriting",
            placeholder: "Iltimos yordamning asosiy Inlgilzcha ma'lumotini kiriting",
            type: 'textarea',
            value: enInfo,
            setValue: setEnInfo
        }, {
            name: "Yordamning asosiy Ruscha ma'lumotini kiriting",
            placeholder: "Iltimos yordamning asosiy Ruscha ma'lumotini kiriting",
            type: 'textarea',
            value: ruInfo,
            setValue: setRuInfo
        },
    ]
    const saveHelp = async () => {
        const check = {
            uzName: uzName.trim().length === 0,
            enName: enName.trim().length === 0,
            ruName: ruName.trim().length === 0,
            uzInfo: uzInfo.trim().length === 0,
            enInfo: enInfo.trim().length === 0,
            ruInfo: ruInfo.trim().length === 0,
            helpName: helpName === '0',
        }
        if (check.uzName || check.enName || check.ruName || check.uzInfo || check.enInfo || check.ruInfo || check.helpName) {
            return error("malumot bo'sh bo'lmasin")
        }
        const data = {
            uzName,
            enName,
            ruName,
            uzInfo,
            enInfo,
            ruInfo,
            helpName
        }
        if (id === undefined || id === "" || id === "undefined") {
            await Save(data, Apis.help, "", navigate, "help")
        } else {
            await Save(data, Apis.help, id, navigate, "help")
        }
    }

    return (
        <div>
            <FormService formName={"yordam saqlash"} formArr={coinForm} method={saveHelp}
                         url={"help"}/>
        </div>
    )
}