import {Link, useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {embeddedGet, getOneAbout} from "../../../serverConnect/service/Service";
import {Apis} from "../../../serverConnect/Apis";
import {Loader} from "../../../component/Loader";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {Card, CardImg} from "react-bootstrap";
import {DeleteModal} from "../../../component/DeleteModal";

export const PoolItem = () => {
    const id = useParams().id
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [pools, setPools] = useState({})

    const [invModal, setInvModal] = useState(false)

    const [invests, setInvests] = useState([])
    const getOne = async () => {
        try {
            setPools(await getOneAbout(Apis.pools, id, "data"))
            await embeddedGet(Apis.invest + "/pool/" + id, setInvests, "data")
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getOne()
    }, [])

    const showInvModal = () => {
        setInvModal(!modal)
    }
    return (
        <div>
            {pools.id ? (
                loading ? (
                    <div className={"row"}>
                        <div className="col col-12">
                            <Link to={"/auth/krypta-valyuta/admin/pool"}
                                  className={"btn btn-info m-2"}>
                                orqaga
                            </Link>
                            <Button color={"danger"} className={"m-2"} onClick={() => setModal(true)}>
                                o'chirish
                            </Button>
                            <Link to={""} className={"btn btn-warning m-2"}>
                                taxrirlash
                            </Link>
                            <Link to={`/auth/krypta-valyuta/admin/pool/get-one/${id}/invest-add`}
                                  className={"btn btn-primary m-2"}>
                                invistitsiya qo'shish
                            </Link>
                        </div>

                        <div className={"row col-12 mt-3"}>
                            <>
                                <div className="col-md-12 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <p className="card-title mb-0">Top Products</p>
                                            <div className={"row"}>
                                                <div className="col-12 col-md-6">
                                                    <Card inverse>
                                                        <CardImg
                                                            alt="Card image cap"
                                                            src={Apis.getPhoto + pools.photoId}
                                                            style={{
                                                                height: "60vh"
                                                            }}
                                                            width="100%"
                                                        />
                                                    </Card>
                                                    <h5 className={"m-3"}>O'zbekcha nomi : {pools.uzName}</h5>
                                                    <h5 className={"m-3"}>Inlgizcha nomi : {pools.enName}</h5>
                                                    <h5 className={"m-3"}>Ruscha nomi : {pools.ruName}</h5>
                                                    <h5 className={"m-3"}>vip uchun minimum pul miqdori
                                                        : {pools.annualizedInterest}</h5>
                                                    <h5 className={"m-3"}>vip uchun maximal pul miqdori
                                                        : {pools.stakingMinimum}</h5>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <div className="table-responsive">
                                                        <table className="table table-striped ">
                                                            <thead>
                                                            <tr>
                                                                <th>fozi</th>
                                                                <th>pul turi</th>
                                                                <th>ochilishi</th>
                                                                <th>Status</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            {
                                                                invests.map(item => (
                                                                    <tr onClick={() => showInvModal(item.id)}>
                                                                        <td>{item.monthly}%</td>
                                                                        <td className="font-weight-bold">{item.stakingPool}</td>
                                                                        <td>{item.howManyDays} kun</td>
                                                                        <td className="font-weight-medium">
                                                                            <div
                                                                                className={item.active ? "badge badge-success" : "badge badge-danger"}>{item.active ? "ishlamoqda" : "ishlamayapti"}
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                            }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        </div>
                        <Modal isOpen={invModal} toggle={showInvModal} fullscreen>
                            <ModalHeader toggle={showInvModal}>Modal title</ModalHeader>
                            <ModalBody>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={showInvModal}>
                                    Do Something
                                </Button>{' '}
                                <Button color="secondary" onClick={showInvModal}>
                                    Cancel
                                </Button>
                            </ModalFooter>
                        </Modal>
                        <DeleteModal id={id} modal={modal} setModal={setModal} url={Apis.pools} getAll={getOne}
                                     navigateName={"/auth/krypta-valyuta/admin/pool"}/>
                    </div>
                ) : (
                    <Loader/>
                )
            ) : (
                <div>
                    <Link className={"btn btn-primary"} to={"/auth/krypta-valyuta/admin/pool"}>Orqaga</Link>
                    <h1 className={"text-center text-danger"}>
                        Bunday hovuz mavjud emas!!!
                    </h1>
                </div>
            )}
        </div>
    )
}