import {useEffect, useState} from "react";
import {embeddedGet} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {Link} from "react-router-dom";
import {Table} from "../../../component/Table";
import {helpHead} from "../../../utils/TableHead";
import {Loader} from "../../../component/Loader";

export const Help = () => {
    const [loading, setLoading] = useState(false)
    const [help, setHelp] = useState([])
    const [id, setId] = useState('')
    const getAll = async () => {
        try {
            await embeddedGet(Apis.help, setHelp, "embedded")
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
                    <Link to={"/auth/krypta-valyuta/admin/help/add"} className="btn btn-primary m-3">+qo'shish</Link>
                    <Table tableHead={helpHead} tableName="yordam" data={help} status={"help"} id={id} setId={setId}/>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}