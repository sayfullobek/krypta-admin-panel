import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Loader} from "../../../component/Loader";

export const MessageModal = ({modal, setModal, toggle, uzDes, enDes, ruDes, status, withReq, loading}) => {
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
    console.log(withReq)
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
                <ModalHeader>{status === "notification" ? "yuborilgan xabarlar" : "yordam ma'lumotlari"}</ModalHeader>
                <ModalBody>
                    {loading ? (
                        <>
                            {status === "notification" || status === "help" ? (
                                <>
                                    <div className={"m-3 text-center fw-bold"}>
                                        O'zbekcha ma'lumot
                                    </div>
                                    {uzDes}
                                    <div className={"m-3 text-center fw-bold"}>
                                        Inglizcha ma'lumot
                                    </div>
                                    {enDes}
                                    <div className={"m-3 text-center fw-bold"}>
                                        Ruscha ma'lumot
                                    </div>
                                    {ruDes}
                                </>
                            ) : (
                                <>
                                    <div>
                                        ismi : <span
                                        className={"fw-bold"}>{withReq.withDrawalAddress[0].user.firstName} {withReq.withDrawalAddress[0].user.lastName}</span>
                                    </div>
                                    <div>
                                        telefon raqami : <span
                                        className={"fw-bold"}>{withReq.withDrawalAddress[0].user.phoneNumber ? withReq.withDrawalAddress[0].user.phoneNumber : "telefon raqam mavjud emas"}</span>
                                    </div>
                                    <div>
                                        email : <span
                                        className={"fw-bold"}>{withReq.withDrawalAddress[0].user.email ? withReq.withDrawalAddress[0].user.email : "email mavjud emas"}</span>
                                    </div>
                                    <div>
                                        qancha pul chiqarmoqchi : <span
                                        className={"fw-bold"}>{withReq.money} USDT</span>
                                    </div>
                                    <div>
                                        qachon so'rov yubordi : <span
                                        className={"fw-bold"}>{withReq.createdAt.substr(0, 10)} {withReq.createdAt.substr(11, 8)}</span>
                                    </div>
                                    <div>
                                        qanday addressga tashlanadi : <span
                                        className={"fw-bold"}>{withReq.withDrawalAddress[0].withAddress}</span>
                                    </div>
                                    <div>
                                        qanday tur bo'yicha : <span
                                        className={"fw-bold"}>{withReq.withDrawalAddress[0].valyutaType}</span>
                                    </div>
                                    <div>
                                        turning asosiy tarmog'i : <span
                                        className={"fw-bold"}>{withReq.withDrawalAddress[0].primaryTarmoq}}</span>
                                    </div>
                                    <div>
                                        puli hali tashlanmagan
                                    </div>
                                </>
                            )}
                        </>
                    ) : (
                        <Loader/>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>
                        Yopish
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}