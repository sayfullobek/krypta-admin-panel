import React, {useState} from "react";
import {DeleteModal} from "./DeleteModal";
import {Link, useNavigate} from "react-router-dom"

export const Table = ({tableName, tableHead, data, status, id, setId, lidStatus, setLidStatus, lidButton}) => {
    const navigate = useNavigate()
    const [message, setMessage] = useState('')
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
                                    ) : (
                                        <></>
                                    )
                                ))}
                                </tbody>
                            </table>
                        </>
                    )}
                </div>
            </div>
            {/*<DeleteModal id={id} url={Apis.aware} navigate={navigate}/>*/}
            {/*<MessageModal message={message}/>*/}
        </div>
    )
}