import React, {useState} from "react";
import {error} from "../../../utils/MyToast";
import {Save, SendPhoto} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {FormService} from "../../../component/FormService";
import {useNavigate, useParams} from "react-router-dom";

export const NotificationSend = () => {
    const navigate = useNavigate()

    const id = useParams().id

    const [uzName, setUzName] = useState('')
    const [enName, setEnName] = useState('')
    const [ruName, setRuName] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState()
    const notificationForm = [
        {
            name: 'Rasmni tanlang',
            placeholder: "Xabarnoma bo'limining rasmini tanlang",
            type: 'file',
            value: photo,
            setValue: setPhoto
        },
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
            name: "Xabarnoma xaqidagi ma'lumot",
            placeholder: 'Xabarnoma xaqidagi ma\'lumotni kiriting',
            type: 'textarea',
            value: description,
            setValue: setDescription
        }
    ]
    const sendNotification = async () => {
        const check = {
            uzName: uzName.trim().length === 0,
            enName: enName.trim().length === 0,
            ruName: ruName.trim().length === 0,
            description: description.trim().length === 0,
        }
        if (check.uzName || check.enName || check.ruName || check.description) {
            error("malumot bo'sh bo'lmasin")
        }

        let formData = new FormData();
        formData.append("photo", photo)

        await SendPhoto(formData, "__notification_photoId__")
        const data = {
            uzName, enName, ruName, photoId: localStorage.getItem("__notification_photoId__"), description
        }
        if (id === undefined || id === "" || id === "undefined") {
            await Save(data, Apis.notification, "", navigate, "notification")
        } else {
            await Save(data, Apis.notification, id, navigate, "notification")
        }
    }

    const sendPhoto = (e) => {
        setPhoto(e.target.files[0])
    }

    return (
        <div>
            <FormService formName={"notificationni saqlash"} formArr={notificationForm} method={sendNotification}
                         sendPhoto={sendPhoto}
                         url={"notification"}/>
        </div>
    )
}