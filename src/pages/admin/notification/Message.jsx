import {useEffect, useState} from "react";
import {embeddedGet} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {Link, useParams} from "react-router-dom";
import {Table} from "../../../component/Table";
import {megHead, messageHead} from "../../../utils/TableHead";
import {Loader} from "../../../component/Loader";

export const Message = () => {
    const ids = useParams().id
    const [id, setId] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState([])

    const getAll = async () => {
        try {
            await embeddedGet(Apis.message + "/" + ids, setMessage, "data")
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
                    <Link to={`/auth/krypta-valyuta/admin/notification/send-message/${ids}/add`}
                          className="btn btn-primary m-3">yuborish</Link>
                    <Table tableHead={megHead} tableName="Xabarnomalar" data={message}
                           status={"message"}
                           id={id}
                           setId={setId}/>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}