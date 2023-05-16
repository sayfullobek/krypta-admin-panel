import {useEffect, useState} from "react";
import {embeddedGet} from "../../../serverConnect/service/Service";
import {Link} from "react-router-dom";
import {Apis} from "../../../serverConnect/Apis";
import {Loader} from "../../../component/Loader";
import {Cards} from "../../../component/Cards";

export const Coins = () => {
    const [loading, setLoading] = useState(false)
    const [coin, setCoins] = useState([])


    const getAll = async () => {
        try {
            await embeddedGet(Apis.coin, setCoins, "data")
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
                    <Link to={"/auth/krypta-valyuta/admin/coins/add"} className="btn btn-primary m-3">+qo'shish</Link>
                    <Cards arr={coin} getAll={getAll}/>
                </div>
            ) : (
                <Loader/>
            )}
        </div>
    )
}