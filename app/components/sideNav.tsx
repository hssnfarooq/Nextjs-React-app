import closeIcon from "../images/close-icon.png";
import cloudImg from "../images/cloud-color-trimmy.png";
import smallArrow from "../images/small-search-arrow.png";
import silentImg from "../images/silent-euphoria-logo.png";
import Link from "next/link";
import { userService } from "../services";
type Props = {
    setDisplaySideBar: Function
};
const SideNavBar = ({ setDisplaySideBar }: Props) => {
    console.log("inside sidebar")
  const hideSideNav = () => {
      window.document.querySelector('body')?.classList.remove('no-scroll');
      setDisplaySideBar(false);
  }
  const anchorClick = (url : string) => {
    
  }  
  const logout = () => {
    userService.logout();
  }  
return (
    <div id="myNav" className="overlay">
        <img
            src={silentImg.src}
            alt=""
            className="silent-btm-logo"
        />
        <div className="menu-modal-content">
            <div className="menu-modal-left"></div>
            <div className="menu-modal-right">
                <div className="close-icon">
                    {/* onclick="closeNav()" */}
                    {/* onClick={() => setDisplaySideBar(false)} */}
                    <img onClick={hideSideNav} src={closeIcon.src} alt="" />
                </div>
                <div className="menu-modal-header-links">
                    {(userService.userValue) ? 
                    <>
                            <span className="signup-link">Welcome,</span> 
                    {/* <Link href={"/profile"}> */}
                                {/* <u style={{ color:"#EF9F8F"}}> */}
                                    <a className="signup-link nav-name-underline">{userService.userValue.name}</a>
                                    {/* </u> */}
                     {/* </Link>  */}
                     <div className="menu-modal-footer">
                                <Link href={"/myprofile"}>
                                    <a className="menu-modal-footer-link">My Profile</a>
                                </Link>
                                {/* <Link href={"/faq"}> */}
                                    <a className="menu-modal-footer-link">Account Settings</a>
                                    <span className="" onClick={logout}>Logout</span>
                                {/* </Link> */}
                     </div>
                    </>
                    :
                    (<><Link href={"/signup"}>
                    <a className="signup-link">Sign up</a>
                    </Link>
                    <Link href={"/login"}>

                    <a  className="signin-link">Login</a>
                    </Link>
                    </>) 
}
                </div>
                <div className="menu-modal-search-bar">
                    <img
                        src={cloudImg.src}
                        className="cloud-search-img"
                        alt=""
                    />
                    <div className="menu-modal-search-field">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search"
                        />
                        <img
                            src={smallArrow.src}
                            className="arrow-search-right"
                            alt=""
                        />
                    </div>
                </div>
                <div className="menu-modal-footer">
                    <Link href={"/about"}>
                    <a className="menu-modal-footer-link">About Us</a>
                    </Link>
                    <Link href={"/faq"}>
                    <a className="menu-modal-footer-link">FAQ</a>
                    </Link>
                    <Link href={"contactus"}>
                    <a  className="menu-modal-footer-link">Contact us</a>
                    </Link>
                    <Link href={"/report"}>
                    <a  className="menu-modal-footer-link">Report</a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);
}
export default SideNavBar;