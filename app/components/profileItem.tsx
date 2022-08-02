import { useState } from 'react';
import userprofileImg from "../images/user-profile.png"
import Mail2 from "../images/Mail2.png"
import Lovers1 from "../images/Lovers1.png"

export default function ProfileItem({galleryImg, title}) {
  

  return (
  <>
      <div className="gallery-card">
        <img src={galleryImg} alt="" />
        <h3 className="gallery-card-name">{title}</h3>
      </div>
  </>
  );
}
