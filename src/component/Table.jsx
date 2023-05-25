import React, {useState} from "react";
import {DeleteModal} from "./DeleteModal";
import {Link, useNavigate} from "react-router-dom"
import {Apis} from "../serverConnect/Apis";
import {Button} from "reactstrap";
import {MessageModal} from "../pages/admin/notification/MessageModal";
import {ConfirmModal} from "./ConfirmModal";

export const Table = ({tableName, tableHead, data, status, id, setId, lidStatus, setLidStatus, lidButton}) => {
    const navigate = useNavigate()
    const [modal, setModal] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [withReqId, setWithReqId] = useState('')
    const confirmToggle = () => setConfirmModal(!confirmModal);
    const [uzDes, setUzDes] = useState('')
    const [enDes, setEnDes] = useState('')
    const [ruDes, setRuDes] = useState('')
    const [about, setAbout] = useState('')
    const [loading, setLoading] = useState(false)
    const [withdrawalReq, setWithdrawalReq] = useState({})
    const openModal = (photoId, uz, en, ru, stat, withReq) => {
        if (stat === "notification" || stat === "help") {
            setUzDes(uz)
            setEnDes(en)
            setRuDes(ru)
        } else {
            setWithdrawalReq(withReq)
        }
        setModal(!modal)
        setAbout(stat)
        setLoading(true)
    }

    const confirmation = (item) => {
        setWithReqId(item.id)
        setConfirmModal(!confirmModal)
    }
    console.log(data)
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{tableName}</h4>
                <p className="card-description">
                    {tableName} <code>.jadvali{}</code>
                </p>
                {status === "pupil" ? (
                    <div className="col mb-3">
                        {lidButton.map(btn => (
                            <button className={btn.id === lidStatus ? "btn btn-primary m-2" : "btn m-2"}
                                    onClick={() => setLidStatus(btn.id)}>
                                {btn.name}
                            </button>
                        ))}
                    </div>
                ) : ("")}
                <div className="table-responsive">
                    {data.length === 0 ? (
                        <h3 className="text-center text-danger">hozircha {tableName} mavjud emas...</h3>
                    ) : (
                        <>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    {tableHead.map(item => (
                                        item.name === "sozlamalar" ? (
                                            <th colSpan={"2"}>
                                                {item.name}
                                            </th>
                                        ) : (
                                            <th className={"col-2"}>
                                                {item.name}
                                            </th>
                                        )
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {data.map((item, i) => (
                                    status === "vips" ? (
                                        <tr>
                                            <td className="col-2">{i + 1}</td>
                                            <td className={"col-4"}>{item.name}</td>
                                            <td>
                                                <Link className={"btn btn-info"} style={{margin: "0 10px"}}
                                                      to={`/auth/krypta-valyuta/admin/vips/get-one/${item.id}`}>batafsil</Link>
                                                {/*<button type="button" onClick={() => setId(item.id)}*/}
                                                {/*        className="btn btn-danger" data-bs-toggle="modal"*/}
                                                {/*        data-bs-target="#exampleModal">*/}
                                                {/*    o'chirish*/}
                                                {/*</button>*/}
                                            </td>
                                        </tr>
                                    ) : status === "pools" ? (
                                        <tr>
                                            <td className="col-2">{i + 1}</td>
                                            <td className={"col-4"}>{item.uzName}</td>
                                            <td>
                                                <Link className={"btn btn-info"} style={{margin: "0 10px"}}
                                                      to={`/auth/krypta-valyuta/admin/pool/get-one/${item.id}`}>batafsil</Link>
                                            </td>
                                        </tr>
                                    ) : status === "notification" ? (
                                        <tr>
                                            <td className="col-1">{i + 1}</td>
                                            <td className={"col-1"}><img src={Apis.getPhoto + item.photoId}
                                                                         alt={i + 1}/></td>
                                            <td className={"col-1"}>{item.uzName}</td>
                                            <td className={"col-1"}>{item.enName}</td>
                                            <td className={"col-1"}>{item.ruName}</td>
                                            <td className={"col-1"}>{item.systemInformationDate.substr(0, 10)}</td>
                                            <td className={"col-1"}>
                                                <Link className={"btn btn-info"} style={{margin: "0 10px"}}
                                                      to={`/auth/krypta-valyuta/admin/notification/send-message/${item.id}`}>Xabar
                                                    yuborish</Link>
                                            </td>
                                        </tr>
                                    ) : status === "message" ? (
                                        <tr>
                                            <td className="col-1">{i + 1}</td>
                                            <td className={"col-1"}>{item.uzName}</td>
                                            <td className={"col-1"}>{item.enName}</td>
                                            <td className={"col-1"}>{item.ruName}</td>
                                            <td className={"col-1"}>{item.whenWrite.substr(0, 10)}</td>
                                            <td className={"col-1"}>
                                                <Button color="btn btn-info"
                                                        onClick={() => openModal(item.uzDescription, item.enDescription, item.ruDescription, "notification")}>
                                                    Click Me
                                                </Button>
                                            </td>
                                        </tr>
                                    ) : status === "help" ? (
                                        <tr>
                                            <td className="col-1">{i + 1}</td>
                                            <td className={"col-3"}>{item.uzName}</td>
                                            <td className={"col-3"}>{item.enName}</td>
                                            <td className={"col-3"}>{item.ruName}</td>
                                            <td className={"col-2"}>
                                                <Button color="btn btn-info"
                                                        onClick={() => openModal(item.uzInfo, item.enInfo, item.ruInfo, "help")}>
                                                    Click Me
                                                </Button>
                                            </td>
                                        </tr>
                                    ) : status === "historyPays" ? (
                                        item.pulTushdimi === false ? (
                                            <tr>
                                                <td className="col-3">{i + 1}</td>
                                                <td className="col-3">{item.user[0].firstName} {item.user[0].lastName}</td>
                                                <td className="col-3">{item.createdAt.substr(0, 10)} {item.createdAt.substr(11, 8)}</td>
                                                <td className={"col-3"}>
                                                    <Link className="btn btn-info"
                                                          to={`/auth/krypta-valyuta/admin/history/pay/send-money/${item.id}`}>
                                                        batafsil
                                                    </Link>
                                                </td>
                                            </tr>
                                        ) : (
                                            <></>
                                        )
                                    ) : status === "historyExit" ? (
                                        item.pulTushdimi === true ? (
                                            <tr>
                                                <td className="col-3">{i + 1}</td>
                                                <td className="col-3">{item.user[0].firstName} {item.user[0].lastName}</td>
                                                <td className="col-3">{item.createdAt.substr(0, 10)} {item.createdAt.substr(11, 8)}</td>
                                                <td className={"col-3"}>
                                                    <button className="btn btn-info">
                                                        batafsil
                                                    </button>
                                                </td>
                                            </tr>
                                        ) : (
                                            <></>
                                        )
                                    ) : status === "withRequests" ? (
                                        item.wasTheMoneyThrownAway === false ? (
                                            <tr>
                                                <td className="col-1">{i + 1}</td>
                                                <td className="col-1">{item.money} USDT</td>
                                                <td className="col-1">{item.withDrawalAddress[0].withAddress}</td>
                                                <td className="col-1">{item.withDrawalAddress[0].primaryTarmoq}</td>
                                                <td className="col-1">{item.createdAt.substr(0, 10)} {item.createdAt.substr(11, 8)}</td>
                                                <td className={"col-1"}>
                                                    <button className="btn btn-info m-1"
                                                            onClick={() => openModal("", "", "", "", "withdrawalRequest", item)}>
                                                        batafsil
                                                    </button>
                                                    <button className="btn btn-success m-1"
                                                            onClick={() => confirmation(item)}>
                                                        Tasdiqlash
                                                    </button>
                                                </td>
                                            </tr>
                                        ) : (
                                            <></>
                                        )
                                    ) : status === "withdrawalExit" ? (
                                        item.wasTheMoneyThrownAway === true ? (
                                            <tr>
                                                <td className="col-1">{i + 1}</td>
                                                <td className="col-1">{item.money} USDT</td>
                                                <td className="col-1">{item.withDrawalAddress[0].withAddress}</td>
                                                <td className="col-1">{item.withDrawalAddress[0].primaryTarmoq}</td>
                                                <td className="col-1">{item.createdAt.substr(0, 10)} {item.createdAt.substr(11, 8)}</td>
                                                <td className={"col-1"}>
                                                    <button className="btn btn-info m-1"
                                                            onClick={() => openModal("", "", "", "", "withdrawalRequest", item)}>
                                                        batafsil
                                                    </button>
                                                    <button className="btn btn-success m-1"
                                                            onClick={() => confirmation(item)}>
                                                        Tasdiqlash
                                                    </button>
                                                </td>
                                            </tr>
                                        ) : (
                                            <></>
                                        )
                                    ) : status === "users" ? (
                                        item.roles[0].roleName === "USER" ? (
                                            <tr>
                                                <td className="col-1">{i}</td>
                                                <td className="col-1">{item.firstName}</td>
                                                <td className="col-1">{item.lastName}</td>
                                                <td className="col-1">{item.phoneNumber ? item.phoneNumber : "Hali telefon raqam saqlamagan"}</td>
                                                <td className="col-1">{item.email ? item.email : "Hali email saqlamagan"}</td>
                                                <td className={"col-1"}>
                                                    <Link className="btn btn-info m-1"
                                                          to={`/auth/krypta-valyuta/admin/users-list/${item.id}`}>
                                                        batafsil
                                                    </Link>
                                                </td>
                                            </tr>
                                        ) : (
                                            <></>
                                        )
                                    ) : (
                                        <></>
                                    )
                                ))}
                                </tbody>
                            </table>
                            <MessageModal loading={loading} modal={modal} setModal={setModal} toggle={toggle}
                                          uzDes={uzDes} enDes={enDes}
                                          ruDes={ruDes} status={about} withReq={withdrawalReq}/>
                            <ConfirmModal setModal={setConfirmModal} toggle={confirmToggle} modal={confirmModal}
                                          loading={loading} id={withReqId} navigate={navigate}/>
                        </>
                    )}
                </div>
            </div>
            {/*<DeleteModal id={id} url={Apis.aware} navigate={navigate}/>*/}
            {/*<MessageModal message={message}/>*/}
        </div>
    )
}