import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ReactElement, useState } from "react";
import { checkServerIdentity } from "tls";
import AdminLayout from "../app/components/Layout/adminLayout";
import editUserIcon from "../app/assets/Icons/edit-user-icon.png"
import { userService } from "../app/services";
import ProfileFilirt from "../app/components/profile-flirt";
import ProfileUpload from "../app/components/profile-upload";
import ProfileMySubscriptions from "../app/components/profile-mySubscriptions";
import ProfileCalls from "../app/components/profile-calls";
import ProfileMessages from "../app/components/profile-messages";
import ProfileSpecialRequest from "../app/components/profile-specialRequest";
import ProfileMyWallet from "../app/components/profile-myWallet";

const MYProfile = () => {
    const [selectedTab, setSelectedTab] = useState("flirts");

    // changeSelectedTab
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Euphoria - About</title>
            </Head>
            <section className="enjoyer-profile">
                <div className="container">
                    <div className="enjoyer-profile-content">
                        <div className="enjoyer-profile-header">
                            <h2 className="enjoyer-profile-name">Hello, {userService.userValue.displayName}</h2>
                            <a href="#" className="enjoyer-profile-edit">
                                <div className="enjoyer-profile-img">
                                    <img
                                        src={editUserIcon.src}
                                        alt="Edit User Icon"
                                    />
                                </div>
                                <span className="enjoyer-profile-edit-text">Edit Profile</span>
                            </a>
                        </div>

                        <div className="enjoyer-profile-body">
                            <div className="enjoyer-profile-body-content">
                                <div className="enjoyer-profile-body-sidebar">
                                    <ul className="enjoyer-profile-body-sidebar-list">
                                        <li className="enjoyer-profile-body-sidebar-list-item">
                                            <span
                                                onClick={() => setSelectedTab('flirts')}
                                                className={`enjoyer-profile-body-sidebar-list-item-link ${selectedTab=== 'flirts' ? 'active' : ''}`}
                                            >
                                                Flirts
                                                <div className="number-circle">5</div>
                                            </span>
                                        </li>
                                        <li className="enjoyer-profile-body-sidebar-list-item">
                                            <span
                                                onClick={() => setSelectedTab('calls')}
                                                className={`enjoyer-profile-body-sidebar-list-item-link ${selectedTab === 'calls' ? 'active' : ''}`}
                                            >
                                                Calls
                                            </span>
                                        </li>
                                        <li className="enjoyer-profile-body-sidebar-list-item">
                                            <span
                                                onClick={() => setSelectedTab('messages')}
                                                className={`enjoyer-profile-body-sidebar-list-item-link ${selectedTab === 'messages' ? 'active' : ''}`}
                                            >
                                                Messages
                                                <div className="number-circle">2</div>
                                            </span>
                                        </li>
                                        <li className="enjoyer-profile-body-sidebar-list-item">
                                            <span
                                                onClick={() => setSelectedTab('specialRequest')}
                                                className={`enjoyer-profile-body-sidebar-list-item-link ${selectedTab === 'specialRequest' ? 'active' : ''}`}
                                            >
                                                Special Requests
                                            </span>
                                        </li>
                                        <li className="enjoyer-profile-body-sidebar-list-item">
                                            <span
                                                onClick={() => setSelectedTab('mySubscriptions')}
                                                className={`enjoyer-profile-body-sidebar-list-item-link ${selectedTab === 'mySubscriptions' ? 'active' : ''}`}
                                            >
                                                My Subscriptions
                                            </span>
                                        </li>
                                        <li className="enjoyer-profile-body-sidebar-list-item">
                                            <span
                                                onClick={() => setSelectedTab('upload')}
                                                className={`enjoyer-profile-body-sidebar-list-item-link ${selectedTab === 'upload' ? 'active' : ''}`}
                                            >
                                                Upload
                                            </span>
                                        </li>
                                        <li className="enjoyer-profile-body-sidebar-list-item">
                                            <span
                                                onClick={() => setSelectedTab('myWallet')}
                                                className={`enjoyer-profile-body-sidebar-list-item-link ${selectedTab === 'myWallet' ? 'active' : ''}`}
                                            >
                                                My Wallet
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="enjoyer-profile-body-item">
                                    {selectedTab === 'flirts' && <ProfileFilirt />}
                                    {selectedTab === 'calls' && <ProfileCalls />}
                                    {selectedTab === 'messages' && <ProfileMessages />}
                                    {selectedTab === 'specialRequest' && <ProfileSpecialRequest />}
                                    {selectedTab === 'mySubscriptions' && <ProfileMySubscriptions />}
                                    {selectedTab === 'upload' && <ProfileUpload />}
                                    {selectedTab === 'myWallet' && <ProfileMyWallet />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
MYProfile.getLayout = function getLayout(page: ReactElement) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}
export default MYProfile;
