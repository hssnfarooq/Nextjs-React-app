import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AdminLayout from '../app/components/Layout/adminLayout'
import { ReactElement, useEffect, useState } from 'react'
import Link from 'next/link'
import NavigationLandingPage from '../app/components/navigationLandingPage'
import menuIcon from "../app/home-assets/Icons_Logos/Hamburger_Menu_Icon.svg"
import accountIcon from "../app/home-assets/Icons_Logos/Account_Icon.svg"
import navLogo from "../app/home-assets/Icons_Logos/Nav_Logo.svg"
import navSearchCloud from "../app/home-assets/Icons_Logos/Clouds_Search_Icon.svg"
import Footer from '../app/components/footer'
import SideNavBar from '../app/components/sideNav'
import AgeGate from '../app/components/ageGate'
import { userService } from '../app/services'

const Home: NextPage = () => {
  const [displaySideBar, setDisplaySideBar] = useState(false);
  const [ageConfirmation, setAgeConfirmation] = useState(window.localStorage.getItem("ageConfirmation"));
  const openNav = () => {
    setDisplaySideBar(true);
    window.document.querySelector('body')?.classList.add('no-scroll');
  }
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const navBar = document.querySelector('.navbar');
      if (window.scrollY > 0) {
        navBar?.classList.add('navbar-scrolled');
      } else {
        navBar?.classList.remove('navbar-scrolled');
      }
    });
  }, []);

  return (
    <>
      <Head>
        {/* <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Euphoria - Home</title>
      </Head>
      <div className="home">
       { !ageConfirmation ? <AgeGate ageConfirmation={ageConfirmation} setAgeConfirmation={setAgeConfirmation} />
        : <><header className="header">
          <div className="header-bg">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-list">
                  <div className="nav-item">
                    <span className="menu-link" onClick={openNav}>
                      <img src={menuIcon.src} alt="Hamburger Menu" />
                      <span className="menu-text">Menu</span>
                    </span>
                      <span className="menu-link" >

                        <span className="menu-text"><Link href={"/profile"}>Explore</Link></span>
                      </span>
                    <img src={accountIcon.src} alt="Account Icon" />
                  </div>
                  <div className="brand-logo">
                    <img src={navLogo.src} alt="Euphoria" />
                  </div>
                  <div className="nav-search">
                    <img src={navSearchCloud.src} alt="Cloud Search Icon" />
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

            <div className="container">
              <div className="hero-content">
                <div className="hero-title">
                  <h1>Everyone deserves</h1>
                  <h1>a happy ending.</h1>
                </div>
                <div className="hero-desc">
                  <p>
                    Discover true connections and lasting memories. Everyone
                    deserves that special someone.
                  </p>
                 {!userService.userValue && <div className="hero-desc-btn">
                    <Link href={"/signup"}>

                    <a className="btn-signup">
                      Sign up
                    </a>
                    </Link>
                    <Link href={"/login"}>

                    <a className="login-link">
                      Log in
                    </a>
                    </Link>
                  </div>}
                </div>
              </div>
            </div>
            <NavigationLandingPage />
          </div>
        </header>
        <Footer />
      </>
}
      </div>
      {displaySideBar && <SideNavBar setDisplaySideBar={setDisplaySideBar} />}

    </>
  );
};
// Home.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <AdminLayout>
//       {page}
//     </AdminLayout>
//   )
// }
export default Home;
