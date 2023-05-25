import {useNavigate, useParams} from "react-router-dom";
import React, {useState} from "react";
import {error} from "../../../utils/MyToast";
import {Save} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {FormService} from "../../../component/FormService";

export const SendMessage = () => {
    const navigate = useNavigate()

    const idd = useParams().id

    const [id, setId] = useState('')
    const [uzName, setUzName] = useState('')
    const [enName, setEnName] = useState('')
    const [ruName, setRuName] = useState('')
    const [uzDescription, setUzDescription] = useState('')
    const [enDescription, setEnDescription] = useState('')
    const [ruDescription, setRuDescription] = useState('')
    const notificationForm = [
        {
            name: "Xabarnomaning O'zbekcha nomini kiriting",
            placeholder: "Xabarnomaning O'zbekcha nomini kiriting",
            type: 'text',
            value: uzName,
            setValue: setUzName
        }, {
            name: "Xabarnomaning Inglizcha nomini kiriting",
            placeholder: "Xabarnomaning Inglizcha nomini kiriting",
            type: 'text',
            value: enName,
            setValue: setEnName
        }, {
            name: "Xabarnomaning Ruscha nomini kiriting",
            placeholder: "Xabarnomaning Ruscha nomini kiriting",
            type: 'text',
            value: ruName,
            setValue: setRuName
        },
        {
            name: "Xabarnoma xaqidagi O'zbekcha ma'lumot",
            placeholder: 'Xabarnoma xaqidagi Oz\'bekcha malumotni kiriting',
            type: 'textarea',
            value: uzDescription,
            setValue: setUzDescription
        }, {
            name: "Xabarnoma xaqidagi Inglizcha ma'lumot",
            placeholder: 'Xabarnoma xaqidagi Inglizcha ma\'lumotni kiriting',
            type: 'textarea',
            value: enDescription,
            setValue: setEnDescription
        }, {
            name: "Xabarnoma xaqidagi Ruscha ma'lumot",
            placeholder: 'Xabarnoma xaqidagi Ruscha ma\'lumotni kiriting',
            type: 'textarea',
            value: ruDescription,
            setValue: setRuDescription
        }
    ]
    const sendNotification = async () => {
        const check = {
            uzName: uzName.trim().length === 0,
            enName: enName.trim().length === 0,
            ruName: ruName.trim().length === 0,
            uzDescription: uzDescription.trim().length === 0,
            enDescription: enDescription.trim().length === 0,
            ruDescription: ruDescription.trim().length === 0,
        }
        if (check.uzName || check.enName || check.ruName || check.uzDescription || check.enDescription || check.ruDescription) {
            error("malumot bo'sh bo'lmasin")
        }
        let notificationId = Number.parseInt(idd)
        const data = {
            uzName, enName, ruName, uzDescription, enDescription, ruDescription, notificationId
        }
        if (id === undefined || id === "" || id === "undefined") {
            await Save(data, Apis.message, "", navigate, "notification/send-message/" + idd)
        } else {
            await Save(data, Apis.message, id, navigate, "notification/send-message/" + idd)
        }
    }

    return (
        <div>
            <FormService formName={"notificationni saqlash"} formArr={notificationForm} method={sendNotification}
                         url={"notification"}/>
        </div>
    )
}