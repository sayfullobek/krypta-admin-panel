import photo from '../../assets/alfa-coin.jpg'
import {useEffect, useState} from "react";
import {embeddedGet, getOneAbout, Save} from "../../serverConnect/service/Service";
import {Apis} from "../../serverConnect/Apis";
import {Loader} from "../../component/Loader";
import {AboutUpdateModal} from "./AboutUpdateModal";
import {useNavigate} from 'react-router-dom'
import {error} from "../../utils/MyToast";
import {findRenderedComponentWithType} from "react-dom/test-utils";

export const Main = () => {
    const [aboutApp, setAboutApp] = useState({})
    const [loading, setLoading] = useState(false)
    const [id, setId] = useState('')
    const navigate = useNavigate();

    const getAppAbout = async () => {
        try {
            await embeddedGet(Apis.aboutAppGet, setAboutApp, "data")
            setLoading(true)
        } catch (err) {
        }
    }

    useEffect(() => {
        getAppAbout()
    }, [])
    const [uzAbout, setUzAbout] = useState(loading ? aboutApp.uzAbout : "")
    const [enAbout, setEnAbout] = useState(loading ? aboutApp.enAbout : "")
    const [ruAbout, setRuAbout] = useState(loading ? aboutApp.ruAbout : "")
    const [dayAppLaunched, setDayAppLaunched] = useState(loading ? aboutApp.dayAppLaunched : "")
    const [howMuchMoneyApp, setHowMuchMoneyApp] = useState(loading ? aboutApp.howMuchMoneyApp : "")
    const [appContactLink, setAppContactLink] = useState(loading ? aboutApp.appContactLink : "")

    const [status, setStatus] = useState('')
    const [modal, setModal] = useState(false)

    const toggle = (status) => {
        setStatus(status)
        setModal(!modal)
    }

    const aboutArr = [
        {
            name: 'alfa-coin qancha kundan beri ish yuritadi',
            body: aboutApp.dayAppLaunched,
            color: 'card-tale',
            m: '4',
            status: 'appLaunched'
        },
        {
            name: 'alfa-coinda qancha pul aylangan',
            body: aboutApp.howMuchMoneyApp + " $",
            color: 'card-dark-blue',
            m: '4', status: "moneyApp"
        },
        {
            name: 'alfa-coin contact link',
            body: aboutApp.appContactLink,
            color: 'card-light-blue',
            m: '0',
            status: "link"
        },
        {
            name: 'alfa-coinning nechta foydalanuvchisi mavjud',
            body: "alfa-coin haqidagi ma'lumot",
            color: 'card-light-danger',
            m: '0',
            status: "name"
        },
    ]

    const formArrAbout = [
        {
            val: uzAbout,
            setVal: setUzAbout,
            name: 'programma haqidagi O\'zbekcha ma\'lumotni kiriting',
            type: 'text',
            ab: 'name'
        },
        {
            val: enAbout,
            setVal: setEnAbout,
            name: 'programma haqidagi Inglizcha ma\'lumotni kiriting',
            type: 'text',
            ab: 'name'
        },
        {
            val: ruAbout,
            setVal: setRuAbout,
            name: 'programma haqidagi Ruscha ma\'lumotni kiriting',
            type: 'text',
            ab: 'name'
        },
        {
            val: dayAppLaunched,
            setVal: setDayAppLaunched,
            name: 'necha kundan beri ishlayapmiz',
            type: 'number',
            ab: 'appLaunched'
        },
        {
            val: howMuchMoneyApp,
            setVal: setHowMuchMoneyApp,
            name: 'progremmada qancha pul aylangan',
            type: 'number',
            ab: 'moneyApp'
        },
        {val: appContactLink, setVal: setAppContactLink, name: 'contact link', type: 'url', ab: 'link'},
    ]
    const updateAbout = async () => {
        if (status === "name") {
            if (uzAbout.trim().length === 0 || enAbout.trim().length === 0 || ruAbout.trim().length === 0)
                return error("ma'lumot bo'sh bolishi mumkin emas")
        }
        if (status === "appLaunched") {
            if (dayAppLaunched <= 0) {
                return error("ma'lumot bo'lishi shart")
            }
        }
        if (status === "moneyApp") {
            if (howMuchMoneyApp <= 0) {
                return error("ma'lumot bo'sh bo'lmasin")
            }
        }
        if (status === "link") {
            if (appContactLink.trim().length === 0) {
                return error("ma'lumot bo'lishi shart")
            }
        }
        let data = {}
        if (status === "name") {
            data = {uzAbout, enAbout, ruAbout, status}
        } else if (status === "appLaunched") {
            data = {dayAppLaunched, status}
        } else if (status === "moneyApp") {
            data = {howMuchMoneyApp, status}
        } else if (status === "link") {
            data = {appContactLink, status}
        }
        await Save(data, Apis.aboutAppUpdate, "1ad04f63-92c7-4c3b-bf62-ffb18363d45c", navigate, "/", "data")
        setModal(false)
        await getAppAbout()
    }

    console.log()
    return (
        <div>
            {loading ? (
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card tale-bg">
                            <div className="card-people mt-auto">
                                <img src={photo} alt="people" style={{height: '100%', width: '100%'}}/>
                                <div className="weather-info">
                                    <div className="d-flex">
                                        <div>
                                            <h2 className="mb-0 font-weight-normal"><i
                                                className="icon-sun mr-2"/>31<sup>C</sup></h2>
                                        </div>
                                        <div className="ml-2">
                                            <h4 className="location font-weight-normal">Bangalore</h4>
                                            <h6 className="font-weight-normal">India</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 grid-margin transparent">
                        <div className="row">
                            {aboutArr.map(item => (
                                <div className={`col-md-6 mb-${item.m} stretch-card transparent`}
                                     onClick={() => toggle(item.status)}>
                                    <div className={`card ${item.color}`}>
                                        <div className="card-body">
                                            <p className="mb-4">{item.name}</p>
                                            <p className="fs-20 mb-2">{item.body}</p>
                                            <p>taxrirlash uchun ustiga bosing</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <AboutUpdateModal status={status} modal={modal} toggle={toggle} setModal={setModal}
                                      navigate={navigate} id={id}
                                      loading={loading} arr={formArrAbout} updateAbout={updateAbout}/>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}