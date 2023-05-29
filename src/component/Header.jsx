import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {logout} from "../handlers/auth";
import admin from '../utils/admin.json'

export const Header = ({setBtn}) => {
    const navigate = useNavigate()
    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <Link className="navbar-brand brand-logo mr-5" to="/auth/krypta-valyuta/admin">
                    <span className="text-primary ">{admin.name.substr(0, 1)}</span>{admin.name.substring(1)}
                </Link>
                <Link className="navbar-brand brand-logo-mini" to="/auth/universal-academy/admin/"><span
                    className={"text-primary"}>{admin.name}</span></Link>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <button className="navbar-toggler align-self-center" type="button"
                        data-toggle="minimize">
                    <span className="icon-menu"/>
                </button>
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item nav-profile dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                            <img src={"myImg"} alt="profile"/>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown"
                             aria-labelledby="profileDropdown">
                            <Link to={"/auth/universal-academy/admin/setting"} className="dropdown-item">
                                <i className="ti-settings text-primary"/>
                                Settings
                            </Link>
                            <button className="dropdown-item" onClick={() => logout(navigate)}>
                                <i className="ti-power-off text-primary"/>
                                Logout
                            </button>
                        </div>
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                        data-toggle="offcanvas" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"
                        onClick={() => setBtn(true)}>
                    <span className="icon-menu"/>
                </button>
            </div>
        </nav>
    )
}