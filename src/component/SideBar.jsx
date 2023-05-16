import React from "react";
import {Link, useLocation} from "react-router-dom";
import admin from '../utils/admin.json'

export const SideBar = () => {
    const location = useLocation().pathname;
    const sideBardUtils = [
        {type: 'premitive', name: 'Dashboard1', icon: 'icon-grid menu-icon', link: '/auth/krypta-valyuta/admin'},
        {
            type: 'premitive',
            name: 'coin',
            icon: 'bi bi-globe menu-icon',
            link: '/auth/krypta-valyuta/admin/coins'
        }, {
            type: 'premitive',
            name: 'vip',
            icon: 'bi bi-globe menu-icon',
            link: '/auth/krypta-valyuta/admin/vips'
        }, {
            type: 'premitive',
            name: 'hovuzlar',
            icon: 'bi bi-globe menu-icon',
            link: '/auth/krypta-valyuta/admin/pool'
        }, {
            type: 'premitive',
            name: 'tarmoqlar',
            icon: 'bi bi-globe menu-icon',
            link: '/auth/krypta-valyuta/admin/coins'
        }, {
            type: 'premitive',
            name: 'tarmoqlar',
            icon: 'bi bi-globe menu-icon',
            link: '/auth/krypta-valyuta/admin/coins'
        }, {
            type: 'premitive',
            name: 'tarmoqlar',
            icon: 'bi bi-globe menu-icon',
            link: '/auth/krypta-valyuta/admin/coins'
        }, {
            type: 'premitive',
            name: 'tarmoqlar',
            icon: 'bi bi-globe menu-icon',
            link: '/auth/krypta-valyuta/admin/coins'
        }, {
            type: 'premitive',
            name: 'tarmoqlar',
            icon: 'bi bi-globe menu-icon',
            link: '/auth/krypta-valyuta/admin/coins'
        }, {
            type: 'premitive',
            name: 'tarmoqlar',
            icon: 'bi bi-globe menu-icon',
            link: '/auth/krypta-valyuta/admin/coins'
        }, {
            type: 'premitive',
            name: 'tarmoqlar',
            icon: 'bi bi-globe menu-icon',
            link: '/auth/krypta-valyuta/admin/coins'
        }, {
            type: 'premitive',
            name: 'tarmoqlar',
            icon: 'bi bi-globe menu-icon',
            link: '/auth/krypta-valyuta/admin/coins'
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
                        <Link className="nav-link"
                              style={location === item.link ? {
                                  backgroundColor: 'rgba(79,110,210,0.5)',
                                  color: 'white'
                              } : {}}
                              to={item.link}>
                            <i className={item.icon} style={location === item.link ? {color: 'white'} : {}}/>
                            <span className="menu-title">{item.name}</span>
                        </Link>
                    </li>
                )
            ))}
        </>
    )
}