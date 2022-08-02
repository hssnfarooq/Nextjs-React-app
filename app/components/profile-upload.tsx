import { useState } from 'react';

export default function ProfileUpload() {
  

  return (
    <>
      <div className="enjoyer-profile-body-upload">
        <h3 className="enjoyer-profile-body-upload-title">
          Upload Images
        </h3>
        <div className="enjoyer-profile-upload-btn-wrapper">
          <button className="enjoyer-profile-upload-btn">
            Select Files
          </button>
          <input id="idFile" type="file" name="idFile" />
        </div>
      </div>
      <div className="enjoyer-profile-body-upload">
        <h3 className="enjoyer-profile-body-upload-title">
          Upload Videos
        </h3>
        <div className="enjoyer-profile-upload-btn-wrapper">
          <button className="enjoyer-profile-upload-btn">
            Select Files
          </button>
          <input id="idFile" type="file" name="idFile" />
        </div>
      </div>
    </>
  );
}
