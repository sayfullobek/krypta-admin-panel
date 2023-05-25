import {useEffect, useState} from "react";
import {embeddedGet, getOneAbout} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {Link} from "react-router-dom";
import {Table} from "../../../component/Table";
import {historyHead, withRequestHead} from "../../../utils/TableHead";
import {Loader} from "../../../component/Loader";

export const WithdrawalRequest = () => {
    const [loading, setLoading] = useState(false)
    const [withRequest, setWithRequest] = useState([])
    const [id, setId] = useState('')

    const getAll = async () => {
        try {
            await embeddedGet(Apis.moneyExitList, setWithRequest, "data")
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
                <div>
                    <Table tableHead={withRequestHead} tableName="Pul yechish uchun so'rovlar" data={withRequest}
                           status={"withRequests"}
                           id={id} setId={setId}/>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}