import {useEffect, useState} from "react";
import {embeddedGet} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {Link} from "react-router-dom";
import {Cards} from "../../../component/Cards";
import {Loader} from "../../../component/Loader";
import {Table} from "../../../component/Table";
import {vipHead} from "../../../utils/TableHead";

export const Vips = () => {
    const [loading, setLoading] = useState(false)
    const [vip, setVip] = useState([])
    const [id, setId] = useState('')
    const getAll = async () => {
        try {
            await embeddedGet(Apis.vip, setVip, "data")
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
                    <Link to={"/auth/krypta-valyuta/admin/vips/add"} className="btn btn-primary m-3">+qo'shish</Link>
                    <Table tableHead={vipHead} tableName="viplar" data={vip} status={"vips"} id={id} setId={setId}/>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}