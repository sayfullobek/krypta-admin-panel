import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {embeddedGet, Save} from "../../../../serverConnect/service/Service";
import {Apis} from "../../../../serverConnect/Apis";
import {FormService} from "../../../../component/FormService";
import {Loader} from "../../../../component/Loader";
import {error} from "../../../../utils/MyToast";

export const AddInvest = () => {
    const navigate = useNavigate()
    const [id, setId] = useState('')

    const pools = useParams().id

    const [monthly, setMonthly] = useState('')
    const [stakingPool, setStakingPool] = useState('')
    const [howManyDays, setHowManyDays] = useState('')
    const [description, setDescription] = useState('')

    const [min, setMin] = useState('')
    const [max, setMax] = useState('')

    const [financialAmount, setFinancialAmount] = useState('')
    const [vipsId, setVipsId] = useState('')
    const [vip, setVip] = useState([])

    const [load, setLoad] = useState(false)

    const getAll = async () => {
        try {
            await embeddedGet(Apis.vip, setVip, "data")
            setLoad(true)
        } catch (err) {
        }
    }

    useEffect(() => {
        getAll()
    }, [])

    const stacking = [
        {name: "USDT"}
    ]
    const coinForm = [
        {
            name: "Oyiga qancha foiz bo'lishi",
            placeholder: "oyiga qancha foiz bo'lishi",
            type: 'number',
            value: monthly,
            setValue: setMonthly
        }, {
            name: 'Qaysi pul turida investitsiya qilishi',
            placeholder: 'qaysi pul turida investitsiya qilishi',
            type: 'select',
            value: stakingPool,
            setValue: setStakingPool,
            arr: stacking
        }, {
            name: 'Necha kunda ushbu hovuzga invistitsiya kirita olishi',
            placeholder: 'necha kunda ushbu hovuzga invistitsiya kirita olishi',
            type: 'number',
            value: howManyDays,
            setValue: setHowManyDays
        }, {
            name: 'Ushbu hovuz haqida ma\'lumot',
            placeholder: 'ushbu hovuz haqida ma\'lumot',
            type: 'textarea',
            value: description,
            setValue: setDescription
        }, {
            name: 'Ushbu hovuzga minimal kiritladigan summa',
            placeholder: 'minimal summa',
            type: 'number',
            value: min,
            setValue: setMin
        }, {
            name: 'Ushbu hovuzga maximal kiritladigan summa',
            placeholder: 'maximal summa',
            type: 'number',
            value: max,
            setValue: setMax
        }, {
            name: 'Ushbu hovizga qaysi laveldagilar invistitsiya kirital oladi',
            placeholder: 'vipni tanlang',
            type: 'select',
            value: vipsId,
            setValue: setVipsId,
            arr: vip
        },
    ]
    const saveInvest = async () => {
        setFinancialAmount(min + " - " + max)
        const check = {
            monthly: monthly.trim().length === 0,
            stakingPool: stakingPool === "0",
            vipsId: vipsId === "0",
            howManyDays: howManyDays.trim().length === 0,
            description: description.trim().length === 0,
            financialAmount: financialAmount.trim().length === 0,
        }
        if (check.monthly || check.stakingPool || check.vipsId || check.howManyDays || check.description || check.financialAmount) {
            return error("malumot bo'sh bo'lmasin")
        }
        const data = {
            monthly,
            stakingPool,
            howManyDays,
            description,
            financialAmount,
            vipsId,
            pools
        }
        if (id === undefined || id === "" || id === "undefined") {
            await Save(data, Apis.invest, "", navigate, "pool/get-one/" + pools)
        } else {
            await Save(data, Apis.invest, id, navigate, "pool/get-one/" + pools)
        }
    }

    return (
        <div>
            {load ? (
                <FormService formName={"investitsiya saqlash"} formArr={coinForm} method={saveInvest}
                             url={"pool/get-one/" + pools}/>
            ) : (
                <Loader/>
            )}
        </div>
    )
}