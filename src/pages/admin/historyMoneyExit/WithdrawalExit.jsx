import {useEffect, useState} from "react";
import {embeddedGet, getOneAbout} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {Link} from "react-router-dom";
import {Table} from "../../../component/Table";
import {historyHead, withRequestHead} from "../../../utils/TableHead";
import {Loader} from "../../../component/Loader";

export const WithdrawalExit = () => {
    const [loading, setLoading] = useState(false)
    const [withdrawalExit, setWithdrawalExit] = useState([])
    const [id, setId] = useState('')

    const getAll = async () => {
        try {
            await embeddedGet(Apis.moneyExitList, setWithdrawalExit, "data")
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
                    <Table tableHead={withRequestHead} tableName="O'tkazilgan pullar ro'yxati" data={withdrawalExit}
                           status={"withdrawalExit"}
                           id={id} setId={setId}/>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}