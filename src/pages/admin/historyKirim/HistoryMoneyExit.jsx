import {useEffect, useState} from "react";
import {embeddedGet, getOneAbout} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {Link} from "react-router-dom";
import {Table} from "../../../component/Table";
import {historyHead} from "../../../utils/TableHead";
import {Loader} from "../../../component/Loader";

export const HistoryMoneyExit = () => {
    const [loading, setLoading] = useState(false)
    const [historyPay, setHistory] = useState([])
    const [id, setId] = useState('')

    const getAll = async () => {
        try {
            await embeddedGet(Apis.archivePay, setHistory, "data")
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
                    <Table tableHead={historyHead} tableName="O'tkazilgan pullar ro'yxati" data={historyPay}
                           status={"historyExit"}
                           id={id} setId={setId}/>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}