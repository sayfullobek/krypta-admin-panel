import React from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

export const AboutUpdateModal = ({status, modal, loading, setModal, toggle, id, navigate, arr, updateAbout}) => {
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
            <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
                <ModalHeader>
                    taxrirlang
                </ModalHeader>
                <ModalBody>
                    {arr.map(item => (
                        item.ab === status ? (
                            <>
                                <label className={"text-primary"} htmlFor={item.name}>{item.name}</label>
                                <input type={item.type} placeholder={item.name} name={item.name} id={item.name}
                                       value={item.val} onChange={e => item.setVal(e.target.value)}
                                       className={"form-control mb-4"}/>
                            </>
                        ) : (<></>)
                    ))}
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>
                        Yopish
                    </Button>
                    <Button color="success" onClick={() => updateAbout()}>
                        Tasdiqlayman
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}