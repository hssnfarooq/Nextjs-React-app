import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'
import Link from 'next/link'
import React from 'react'
// import footerLogo from "../assets/images/f"
import footerLogo from "../images/footer-logo.png"
const Footer= () => {
  return (
      <footer className="footer">
          <div className="container">
              <div className="footer-content">
                  <div className="footer-links">
                      <div className="footer-links-item">
                          <h4 className="footer-links-title">About Us</h4>
                          <Link href={"/about"}>
                          <a  className="footer-link">Learn more</a>
                          </Link>
                          <Link href={"/faq"}>
                          <a  className="footer-link">FAQs</a>
                          </Link>
                          <Link href={"/contactus"}>
                          <a className="footer-link">Contact Us</a>
                          </Link>
                      </div>
                      <div className="footer-links-item">
                          <h4 className="footer-links-title">Social</h4>
                          <Link href={"https://www.instagram.com/"}>
                          <a  className="footer-link">Instagram</a>
                          </Link>
                          <Link href={"https://www.facebook.com/"}>
                          <a  className="footer-link">Facebook</a>
                          </Link>
                          <Link href={"https://www.youtube.com/"}>
                          <a  className="footer-link">Youtube</a>
                          </Link>
                      </div>
                  </div>
                  <div className="footer-description">
                      <div className="footer-logo">
                          <img src={footerLogo.src} alt="Euphoria" />
                      </div>
                      <p className="footer-text">Copyirght © 2022, Eupheme LLC</p>
                      <div className="footer-description-links">
                          <Link href={"/terms&condition"}>
                          <a className="footer-desc-link">Terms & conditions</a>
                          </Link>
                          <Link href="/privacy-policy">
                          <a className="footer-desc-link">Privacy policy</a>
                          </Link>
                          <Link href="/legal">
                              <a className="footer-desc-link">Legal</a>
                              </Link>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer