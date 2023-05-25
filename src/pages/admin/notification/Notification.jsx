import {useEffect, useState} from "react";
import {embeddedGet} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {Link} from "react-router-dom";
import {Cards} from "../../../component/Cards";
import {Loader} from "../../../component/Loader";
import {Table} from "../../../component/Table";
import {notificationHead, poolsHead} from "../../../utils/TableHead";

export const Notification = () => {
    const [id, setId] = useState('')
    const [loading, setLoading] = useState(false)
    const [notification, setNotification] = useState([])

    const getAll = async () => {
        try {
            await embeddedGet(Apis.notification, setNotification, "data")
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
                    <Link to={"/auth/krypta-valyuta/admin/notification/send-all"}
                          className="btn btn-primary m-3">yuborish</Link>
                    <Table tableHead={notificationHead} tableName="Xabarnomalar" data={notification}
                           status={"notification"}
                           id={id}
                           setId={setId}/>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}