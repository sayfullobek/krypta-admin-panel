import React, {useState} from "react";
import {DeleteModal} from "./DeleteModal";
import {Link} from "react-router-dom";
import {Apis} from "../serverConnect/Apis";

export const Cards = ({arr, getAll}) => {
    const [id, setId] = useState('')
    const [modal, setModal] = useState(false);
    const getModal = (id) => {
        setId(id)
        setModal(true)
    }
    return (
        <div className="col-md-12 grid-margin transparent">
            <div className="row">
                {arr.map(item => (
                    <div className="mt-4 col-md-3 mb-lg-0 stretch-card transparent"
                    >
                        <div className="card" style={{
                            backgroundImage: `url(${Apis.getPhoto + item.photoId})`,
                            baclgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <div className="card-body"
                                 style={{fontWeight: 'bold'}}>
                                <p className="mb-4 text-light" style={{textShadow: '0px 2px 1px black'}}>{item.name}</p>
                                <p className="fs-30 mb-2 text-light"
                                   style={{textShadow: '0px 5px 2px black'}}>{item.price} so'm</p>
                                <p style={{textShadow: '0px 2px 1px black'}}
                                   className={"text-light"}>{item.expireMonth} oy</p>
                                <button className="btn btn-danger m-2" onClick={() => getModal(item.id)}>o'chirish
                                </button>
                                <Link to={"/auth/krypta-valyuta/admin/coins/edit/" + item.id}
                                      className="btn btn-warning m-2">taxrirlash</Link>
                            </div>
                        </div>
                    </div>
                ))}
                <DeleteModal id={id} url={Apis.coin} setModal={setModal} modal={modal} getAll={getAll}/>
            </div>
        </div>
    )
}