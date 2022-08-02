import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import menuDark from "../images/menu-dark.png"
import userDark from "../images/user-dark.png"
import logoDark from "../images/logo-euphoria-dark.png"
import cloudDark from "../images/cloud-1-dark.png"
import SideNavBar from './sideNav'

function header() {
    const [displaySideBar, setDisplaySideBar] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const navBar = document.querySelector('.navbar');
            if (window.scrollY > 0) {
                navBar?.classList.add('navbar-scrolled');
            } else {
                navBar?.classList.remove('navbar-scrolled');
            }
        });
    }, [displaySideBar])

    const openNav = () => {
        setDisplaySideBar(true);
        window.document.querySelector('body')?.classList.add('no-scroll');
    }
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-list">
                        <div className="nav-item">
                            <span className="menu-link" onClick={openNav}>
                                <img src={menuDark.src} alt="Hamburger Menu" />
                                <span className="menu-text">Menu</span>
                            </span>
                            <span className="menu-link" >
                                
                                <span className="menu-text">Explore</span>
                            </span>

                            <img src={userDark.src} alt="Account Icon" />
                        </div>
                        <div className="brand-logo">
                            <img src={logoDark.src} alt="Euphoria" />
                        </div>
                        <div className="nav-search">
                            <img
                                src={cloudDark.src}
                                alt="Cloud Search Icon"
                                className="cloud-color"
                            />
                            <input
                                type="text"
                                name="search"
                                id="search-home"
                                className="nav-search-field"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                </div>
            </nav>
            {displaySideBar && <SideNavBar setDisplaySideBar={setDisplaySideBar} />}
        </>
    )
}

export default header