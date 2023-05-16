import {useLocation, useNavigate} from "react-router-dom";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import {deleteService} from "../serverConnect/service/Service";


export const DeleteModal = ({id, url, modal, setModal, getAll, navigateName}) => {
    const navigate = useNavigate()
    const location = useLocation().pathname
    const deleteAbout = async () => {
        try {
            if (navigateName === "") {
                await deleteService(id, url, navigate, location, setModal, getAll)
            } else {
                await deleteService(id, url, navigate, navigateName, setModal, getAll)
            }
        } catch (err) {
        }
    }

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
            <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
                <ModalHeader>
                    <h6>o'chirasizmi?</h6>
                </ModalHeader>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        bekor qilish
                    </Button>{' '}
                    <Button color="danger" onClick={deleteAbout}>
                        o'chirish
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}