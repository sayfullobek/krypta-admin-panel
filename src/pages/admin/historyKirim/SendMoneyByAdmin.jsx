import {FormService} from "../../../component/FormService";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {error} from "../../../utils/MyToast";
import {getOneAbout, Save, SendPhoto} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {Loader} from "../../../component/Loader";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

export const SendMoneyByAdmin = () => {
    const navigate = useNavigate()

    const id = useParams().archiveId
    const [arch, setArch] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getOne = async () => {
            try {
                setArch(await getOneAbout(Apis.archivePay, id, "data"))
                setLoading(true);
            } catch (err) {
            }
        }
        getOne()
    }, [])

    const [money, setPrice] = useState('')

    const archivePaySend = [
        {
            name: "Qancha pul tashlaymiz",
            placeholder: "Qancha pul tashlaymiz",
            type: 'number',
            value: money,
            setValue: setPrice
        }
    ]
    const saveArchive = async () => {
        const check = {
            money: money.trim().length === 0,
        }
        if (check.money) {
            return error("malumot bo'sh bo'lmasin")
        }
        const data = {
            money, archiveId: id
        }
        await Save(data, Apis.meSendMoney, arch.user[0].id, navigate, "history/pay")
    }
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const externalCloseBtn = (
        <button
            type="button"
            className="close"
            style={{position: 'absolute', top: '15px', right: '15px'}}
            onClick={toggle}
        >
            &times;
        </button>
    );
    return (
        <div>
            {loading ? (
                <>
                    <div className={"w-100 d-flex align-items-center justify-content-center mt-5 mb-5"}>
                        <img src={Apis.getPhoto + arch.photoId} width={"200px"} alt={arch.id}
                             style={{boxShadow: '#50474796 0px 0px 10px 1px'}} onClick={toggle}/>
                    </div>
                    <FormService formName={"archivePay saqlash"} formArr={archivePaySend} method={saveArchive}
                                 url={"history/pay"}/>
                    <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
                        <ModalHeader>To'lov</ModalHeader>
                        <ModalBody>
                            <b>To'lov haqidagi rasm</b>
                            <br/>
                            <img width={"100%"} src={Apis.getPhoto + arch.photoId} alt={arch.id}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" onClick={toggle}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>
                </>
            ) : (
                <Loader/>
            )}
        </div>
    )
}