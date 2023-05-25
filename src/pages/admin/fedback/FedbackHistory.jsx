import {useEffect, useState} from "react";
import {embeddedGet, getOneAbout} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {Link} from "react-router-dom";
import {Table} from "../../../component/Table";
import {historyHead, withRequestHead} from "../../../utils/TableHead";
import {Loader} from "../../../component/Loader";

export const FedbackHistory = () => {
    const [loading, setLoading] = useState(false)
    const [fedBack, setFedback] = useState([])
    const [id, setId] = useState('')

    const getAll = async () => {
        try {
            await embeddedGet(Apis.feedback, setFedback, "data")
            setLoading(true)
        } catch (err) {
        }
    }

    useEffect(() => {
        getAll()
    }, [])


    return (
        <div>
            {loading ? (
                <div className={"w-100 p-3 border"}
                     style={{backgroundColor: 'white', boxShadow: '#6d696929 0px 0px 1px 1px', borderRadius: '6px'}}>
                    <h4 className={"text-secondary text-center"}>feedbacklar tarixi</h4>
                    <div className={"w-100 row d-flex align-items-center justify-content-center"}>
                        {fedBack.length === 0 ? (
                            <h4 className={"text-danger text-center"}>hozircha tarix mavjud emas...</h4>
                        ) : (
                            <>
                                {fedBack.map(item => (
                                    <div style={{height:'36vh'}} className={"col-12 col-md-6 col-lg-3 col-sm-12 card p-3 m-2"}>
                                        <h6 className={"text-center text-primary"}>{item.feedbackName === "PROGRAMMING_ERROR" ? "Dasturning xatoligi haqida ma'lumot" : item.feedbackName === "COMPLAINTS_AND_SUGGESTIONS" ? "Shikoyat va takliflar xaqida" : item.feedbackName === "PAGE_DOWN" ? "Sahifa ishdan chiqqani haqidagi ma'lumot" : item.feedbackName === "OTHER" ? "Boshqa" : ""}</h6>
                                        <h6>ma'lumoti : {item.information}</h6>
                                        <h6>userning ismi : {item.firstName}</h6>
                                        <h6>userning familiyasi : {item.lastName}</h6>
                                        {item.phoneNumber ? (
                                            <h6>tel raqami : {item.phoneNumber}</h6>
                                        ) : item.email ? (
                                            <h6>emaili : {item.email}</h6>
                                        ) : (<></>)}
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}