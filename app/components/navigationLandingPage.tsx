import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { createBrotliCompress } from 'zlib';
import aboutImg from '../home-assets/Images/About_Creators_Subscribe_Blog/About_@2x.png';
import rightArrowHover from '../images/arrow-right-image.png';
import creatorsImg from '../home-assets/Images/About_Creators_Subscribe_Blog/Creators_@2x.png';
import subscriberImg from '../home-assets/Images/About_Creators_Subscribe_Blog/Subscribe_@2x.png';
import blogImg from '../home-assets/Images/About_Creators_Subscribe_Blog/Blog_@2x.png';
export default function NavigationLandingPage() {
  return (
    <section className="content-sections">
      <div className="container">
        <div className="content-section-item">
          <a href="" className="content-section-image">
            <span className="content-section-img-overlay">
              <img className="content-section-img" src={aboutImg.src} alt="" />
            </span>

            <h2 className="content-img-title nohover">About</h2>
            <img
              src={rightArrowHover.src}
              alt=""
              className="arrow-right-hover "
            />
          </a>
          <a href="" className="content-section-image">
            <span className="content-section-img-overlay">
              <img
                className="content-section-img"
                src={creatorsImg.src}
                alt=""
              />
            </span>
            <h2 className="content-img-title nohover">Creators</h2>

            <img
              src={rightArrowHover.src}
              alt=""
              className="arrow-right-hover"
            />
          </a>

          <a href="" className="content-section-image">
            <span className="content-section-img-overlay">
              <img
                className="content-section-img"
                src={subscriberImg.src}
                alt=""
              />
            </span>
            <h2 className="content-img-title nohover">Subscribe</h2>
            <img
              src={rightArrowHover.src}
              alt=""
              className="arrow-right-hover"
            />
          </a>

          <a href="" className="content-section-image">
            <span className="content-section-img-overlay">
              <img className="content-section-img" src={blogImg.src} alt="" />
            </span>
            <h2 className="content-img-title nohover">Blog</h2>
            <img
              src={rightArrowHover.src}
              alt=""
              className="arrow-right-hover"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
