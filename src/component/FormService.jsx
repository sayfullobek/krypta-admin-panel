import React from "react";
import {Link, useNavigate} from "react-router-dom";

export const FormService = ({formName, formArr, method, sendPhoto, url}) => {
    const photoId = localStorage.getItem("photoId")
    const navigate = useNavigate()
    const deletePhoto = async () => {
        // await deleteService(photoId, Apis.deletePhoto, navigate, "/auth/universal-academy/admin/course")
    }
    return (
        <div>
            <div className="col-md-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{formName}</h4>
                        <p className="card-description">
                            {formName}
                        </p>
                        <form className="forms-sample">
                            {formArr.map(item => (
                                <div className="form-group row">
                                    <label for={`exampleInput${item.name}`}
                                           className="col-sm-3 col-form-label">{item.placeholder}</label>
                                    <div className="col-sm-9">
                                        {item.type === "textarea" ? (
                                            <textarea name={item.name} id={item.name} cols="10" rows="2"
                                                      className="form-control" value={item.value}
                                                      onChange={e => item.setValue(e.target.value)}/>
                                        ) : item.type === "file" ? (
                                            <input type={item.type} multiple accept="image/*" className="form-control"
                                                   name={item.name} id={`exampleInput${item.name}`}
                                                   onChange={(item) => sendPhoto(item)} placeholder={item.name}/>
                                        ) : item.type === "select" ? (
                                            <select name={item.name} id={item.name} className={"form-select"}
                                                    value={item.value} onChange={(e => item.setValue(e.target.value))}>
                                                <option value="0" selected={true}>{item.placeholder}</option>
                                                {item.placeholder === "vipni tanlang" ? (
                                                    <option value="HAMMA">hammaga ochiq</option>
                                                ) : (<></>)}
                                                {item.arr.map(a => (
                                                    <option
                                                        value={a.id}>{a.uzName || a.name || a.firstName && a.lastName}</option>
                                                ))}
                                            </select>
                                        ) : item.type === "dropDown" ? (
                                            <div className="dropdown">
                                                <a className="btn btn-primary dropdown-toggle" href="#" role="button"
                                                   data-bs-toggle="dropdown" aria-expanded="false">
                                                    {item.placeholder}
                                                </a>

                                                <ul className="dropdown-menu">
                                                    {item.arr.map(i => (
                                                        <li>
                                                            <button type={"button"} className="dropdown-item"
                                                                    style={{fontSize: '18px', color: 'blue'}}
                                                                    onClick={() => item.setValue(i.id)}><i
                                                                className={i.id + " " + "m-2"}
                                                            />{i.name}</button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ) : (
                                            <input type={item.type} className="form-control" name={item.name}
                                                   id={`exampleInput${item.name}`} value={item.value}
                                                   onChange={e => item.setValue(e.target.value)}
                                                   placeholder={item.name}/>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <button onClick={() => method()} type="button" className="btn btn-primary mr-2">saqlash
                            </button>
                            <Link className="btn btn-danger" to={`/auth/krypta-valyuta/admin/${url}`}>orqaga
                                qaytish
                                va bekor
                                qilish</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}