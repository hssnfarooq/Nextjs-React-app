import Link from 'next/link';
import { useState } from 'react';
import cherryImg from "../images/color-cherry.png"
export default function ProfileSpecialRequest() {
  

  return (
    <>
      <section className="coming-soon">
        <div className="container">
          <h1 className="coming-soon-title">Coming Soon...</h1>
          <div className="coming-soon-content">
            <div className="dotted-border"></div>
            <p className="coming-soon-desc">
              Good things are in store for those who wait. Check back soon for
              our latest blog entries.
            </p>
            <p className="coming-soon-desc">
              You won’t want to miss it. In the meantime,
              <span className="rms-link"><Link href={"/about"}> read more about</Link></span>
              Euphoria at Seven
            </p>
            <img
              src={cherryImg.src}
              alt="Cherry"
              className="coming-soon-cherry"
            />
          </div>
        </div>
      </section>
    </>
  );
}
