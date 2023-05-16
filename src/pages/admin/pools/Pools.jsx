import {useEffect, useState} from "react";
import {embeddedGet} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {Link} from "react-router-dom";
import {Cards} from "../../../component/Cards";
import {Loader} from "../../../component/Loader";
import {Table} from "../../../component/Table";
import {poolsHead} from "../../../utils/TableHead";

export const Pools = () => {
    const [loading, setLoading] = useState(false)
    const [pools, setPools] = useState([])
    const [id, setId] = useState('')
    const getAll = async () => {
        try {
            await embeddedGet(Apis.pools, setPools, "data")
            setLoading(true)
        } catch (err) {
        }
    }
    console.log(pools)

    useEffect(() => {
        getAll()
    }, [])

    return (
        <div>
            {loading ? (
                <div>
                    <Link to={"/auth/krypta-valyuta/admin/pool/add"} className="btn btn-primary m-3">+qo'shish</Link>
                    <Table tableHead={poolsHead} tableName="hovuzlar" data={pools} status={"pools"} id={id}
                           setId={setId}/>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}