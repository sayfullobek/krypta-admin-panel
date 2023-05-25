import React from "react";
import {Link, useLocation} from "react-router-dom";
import admin from '../utils/admin.json'

export const SideBar = () => {
    const location = useLocation().pathname;
    const sideBardUtils = [
        {type: 'premitive', name: 'Asosiy', icon: 'icon-grid menu-icon', link: '/auth/krypta-valyuta/admin'},
        {
            type: 'premitive',
            name: 'coin',
            icon: 'bi bi-cash-coin menu-icon',
            link: '/auth/krypta-valyuta/admin/coins'
        }, {
            type: 'premitive',
            name: 'vip',
            icon: 'bi bi-bar-chart-steps menu-icon',
            link: '/auth/krypta-valyuta/admin/vips'
        }, {
            type: 'premitive',
            name: 'hovuzlar',
            icon: 'bi bi-arrow-repeat menu-icon',
            link: '/auth/krypta-valyuta/admin/pool'
        }, {
            type: 'premitive',
            name: 'xabarlar',
            icon: 'bi bi-chat-dots menu-icon',
            link: '/auth/krypta-valyuta/admin/notification'
        }, {
            type: 'premitive',
            name: 'yordam',
            icon: 'bi bi-info-square menu-icon',
            link: '/auth/krypta-valyuta/admin/help'
        }, {
            type: 'premitive',
            name: 'kirimlar tarixi',
            icon: 'bi bi-repeat-1 menu-icon',
            link: '/auth/krypta-valyuta/admin/history/pay'
        }, {
            type: 'premitive',
            name: 'tashlangan pul',
            icon: 'bi bi-cash menu-icon',
            link: '/auth/krypta-valyuta/admin/history/exit-pay'
        }, {
            type: 'premitive',
            name: 'pul yechish',
            icon: 'bi bi-reply-all menu-icon',
            link: '/auth/krypta-valyuta/admin/history/withdrawal-request'
        }, {
            type: 'premitive',
            name: 'yechilgan pul',
            icon: 'bi bi-wallet2 menu-icon',
            link: '/auth/krypta-valyuta/admin/history/withdrawal-request-exit'
        }, {
            type: 'premitive',
            name: 'feedback tarixi',
            icon: 'bi bi-envelope menu-icon',
            link: '/auth/krypta-valyuta/admin/history/feedback'
        }, {
            type: 'premitive',
            icon: 'bi bi-person-fill-gear menu-icon',
            name: 'foydalauvchilar',
            link: '/auth/krypta-valyuta/admin/users-list'
        },
    ]
    return (
        <>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1"
                 id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="canvas-title" id="offcanvasWithBothOptionsLabel">{admin.name}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                            aria-label="Close"/>
                </div>
                <div className="offcanvas-body sidebar" style={{width: '100%', padding: '0'}} id={""}>
                    <ul className="nav" style={{height: '100vh'}}>
                        <GetBtn sideBardUtils={sideBardUtils} location={location}/>
                    </ul>
                </div>
            </div>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav" style={{height: '100vh'}}>
                    <GetBtn sideBardUtils={sideBardUtils} location={location}/>
                </ul>
            </nav>
        </>
    )
}

const GetBtn = ({sideBardUtils, location}) => {
    return (
        <>
            {sideBardUtils.map(item => (
                item.type === "non" ? (
                    <li className="nav-item" style={{width: '80%'}}>
                        <a className="nav-link" href={item.link} data-toggle="collapse" href={`#ui-basic`}
                           aria-expanded="false" aria-controls={`ui-basic`}>
                            <i className="icon-layout menu-icon"/>
                            <span className="menu-title">{item.name}</span>
                            <i className="menu-arrow"/>
                        </a>
                        <div className="collapse" id={`ui-basic`}>
                            <ul className="nav flex-column sub-menu">
                                {item.sub.map(i => (
                                    <li className="nav-item">
                                        <Link className="nav-link" style={location === i.link ? {
                                            backgroundColor: '#6610f2',
                                            color: 'white'
                                        } : {}} to={i.link}>
                                            <i className={i.icon}
                                               style={location === i.link ? {color: 'white'} : {}}/>
                                            <span className="menu-title">{i.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ) : (
                    <li className="nav-item" style={{width: '80%'}}>
                        <Link
                            className={location === item.link ? "bg-primary nav-link w-100 btn" : "bg-light nav-link w-100 btn"}
                            to={item.link}>
                            <i className={item.icon}
                               style={location === item.link ? {color: 'white'} : {color: 'black'}}/>
                            <span
                                className={location === item.link ? "menu-title text-light" : "menu-title text-dark"}>{item.name}</span>
                        </Link>
                    </li>
                )
            ))}
        </>
    )
}