import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Save} from "../serverConnect/service/Service";
import {Apis} from "../serverConnect/Apis";

export const ConfirmModal = ({modal, loading, setModal, toggle, id, navigate}) => {
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
    const confirmation = async () => {
        const data = {money: 0}
        await Save(data, Apis.confirmation, id, navigate, "history/withdrawal-request", "")
        setModal(false)
    }
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
                <ModalBody>
                    <h4 className={"text-center text-success"}>Pul tushganini tasdiqlaysizmi ?</h4>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>
                        Yopish
                    </Button>
                    <Button color="success" onClick={() => confirmation()}>
                        Tasdiqlayman
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}