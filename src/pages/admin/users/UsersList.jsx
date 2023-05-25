import {useEffect, useState} from "react";
import {embeddedGet} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {Table} from "../../../component/Table";
import {Loader} from "../../../component/Loader";
import {usersHead} from "../../../utils/TableHead";

export const UsersList = () => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [id, setId] = useState('')

    const getAll = async () => {
        try {
            await embeddedGet(Apis.getAllUser, setUsers, "data")
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
                    <Table tableHead={usersHead} tableName="Foydalanuvchilar ro'yxati" data={users}
                           status={"users"}
                           id={id} setId={setId}/>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}