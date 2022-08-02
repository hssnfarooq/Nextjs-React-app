import { useState } from "react";
import silentLogo from "../images/silent-euphoria-logo.png"
import modalFirst from "../images/logo-modal-first.png"
import { Router, useRouter } from "next/router";
type Props = {
    ageConfirmation: string|null,
    setAgeConfirmation:Function
};
export default function AgeGate({ ageConfirmation, setAgeConfirmation}: Props) {
    const [isShowing, setIsShowing] = useState(false);
    const router = useRouter();
    const ageConfirm = (bool :string) => {
        window.localStorage.setItem("ageConfirmation",bool);
        setAgeConfirmation(bool)
    };
    const redirectAbout = () => {
        router.push('/about');
    }

    return (
        (ageConfirmation !== "true") ? <div id="myNav" className="modal-first">
            <img
                src={silentLogo.src}
                alt=""
                className="silent-btm-logo-modal-first"
            />
            <div className="modal-first-img"></div>
            <div className="modal-first-footer"></div>

            <div className="modal-first-box">
                <div className="container">
                    <header className="modal-first-header">
                        <img src={modalFirst.src} alt="" />
                    </header>
                    <div className="modal-first-card">
                        <h1 className="modal-first-card-title">18+</h1>
                        <h2 className="modal-first-card-subtitle">Adult only</h2>
                        <p className="modal-first-card-text">
                            Please confirm that you are 18+
                        </p>
                        <div className="modal-first-card-button">
                            <a onClick={() =>ageConfirm("true")} className="modal-first-card-btn">I'm 18+</a>
                            <a onClick={redirectAbout} className="modal-first-card-btn">Oops, exit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>:null
            );
}
