import { useState } from 'react';
import userprofileImg from "../images/user-profile.png"

export default function ProfileMySubscriptions() {
  

  return (
    <>
      <div className="enjoyer-profile-body-grid">
        <div className="enjoyer-profile-body-grid-dp">
          <img src={userprofileImg.src} alt="user image" />
        </div>
        <div
          className="enjoyer-profile-body-grid-data enjoyer-profile-subscription"
        >
          <div className="enjoyer-profile-body-grid-data-flex">
            <h3 className="enjoyer-profile-subscription">
              Stephanie B.
            </h3>
          </div>
        </div>
      </div>
      <div className="enjoyer-profile-body-grid">
        <div className="enjoyer-profile-body-grid-dp">
          <img src={userprofileImg.src} alt="user image" />
        </div>
        <div className="enjoyer-profile-body-grid-data">
          <div className="enjoyer-profile-body-grid-data-flex">
            <h3 className="enjoyer-profile-subscription">
              Stephanie B.
            </h3>
          </div>
        </div>
      </div>
      <div className="enjoyer-profile-body-grid">
        <div className="enjoyer-profile-body-grid-dp">
          <img src={userprofileImg.src} alt="user image" />
        </div>
        <div className="enjoyer-profile-body-grid-data">
          <div className="enjoyer-profile-body-grid-data-flex">
            <h3 className="enjoyer-profile-subscription">
              Stephanie B.
            </h3>
          </div>
        </div>
      </div>
      <div className="enjoyer-profile-body-grid">
        <div className="enjoyer-profile-body-grid-dp">
          <img src={userprofileImg.src} alt="user image" />
        </div>
        <div className="enjoyer-profile-body-grid-data">
          <div className="enjoyer-profile-body-grid-data-flex">
            <h3 className="enjoyer-profile-subscription">
              Stephanie B.
            </h3>
          </div>
        </div>
      </div>
      <div className="enjoyer-profile-body-grid">
        <div className="enjoyer-profile-body-grid-dp">
          <img src={userprofileImg.src} alt="user image" />
        </div>
        <div className="enjoyer-profile-body-grid-data">
          <div className="enjoyer-profile-body-grid-data-flex">
            <h3 className="enjoyer-profile-subscription">
              Stephanie B.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
