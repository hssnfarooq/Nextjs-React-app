import { NextPage } from "next";
import Head from 'next/head'
import { ReactElement } from "react";
import AdminLayout from "../app/components/Layout/adminLayout";
import staycurious from "../app/images/stayCurious.png";
import yellowStar from "../app/images/yellow-star.svg"
import connectingLine2 from "../app/images/connecting-line-2.svg"
import orangeredStar from "../app/images/orangered-star.svg"
import embrace from "../app/images/embrace.png"
import dareToFeel from "../app/images/dare-to-feel.png"
import intimacy from "../app/images/intimacy.png"
import orangeStar from "../app/images/orange-star.svg"
import greenStar from "../app/images/green-star.svg"
import artToTease from "../app/images/art-to-tease.png";
import Link from "next/link";
import userTypes from "../app/constants/userTypes";

const About = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Euphoria - About</title>
            </Head>
            <main className="about-euphoria-main">
                <section className="about-euphoria">
                    <div className="container">
                        <h1 className="about-euphoria-title">About Euphoria at Seven</h1>
                        <div className="about-euphoria-content">
                            <div className="dotted-border"></div>
                            <p className="about-euphoria-desc">
                                Euphoria at Seven is an exclusive online platform that inspires
                                connection, intimacy, and creativity between both creators and
                                enjoyers
                            </p>
                        </div>
                    </div>
                </section>
                <section className="about-euphoria-services">
                    <div className="container">
                        <div className="about-euphoria-services-content">
                            <div className="about-euphoria-services-content-item margin-item-1">
                                <img
                                    src={staycurious.src}
                                    alt=""
                                    className="about-euphoria-img"
                                />
                                <div className="about-euphoria-services-detail">
                                    <h2 className="about-euphoria-services-detail-title curious-kinky">
                                        <span className="stayCurious">Stay Curious</span>
                                        <span className="kinky">Kinky</span>
                                    </h2>
                                    <p className="about-euphoria-services-detail-text">
                                        Discover what excites and inspires you i.e., talk dirty to
                                        me, pantyhose, feet, etc.
                                    </p>
                                    <img
                                        src={yellowStar.src}
                                        alt=""
                                        className="about-euphoria-services-detail-star-1"
                                    />
                                </div>
                            </div>
                            <img
                                src={connectingLine2.src}
                                alt=""
                                className="connecting-line"
                            />
                            <div className="about-euphoria-services-content-item">
                                <div className="about-euphoria-services-detail">
                                    <img
                                        src={orangeredStar.src}
                                        alt=""
                                        className="about-euphoria-services-detail-star-2"
                                    />
                                    <h2 className="about-euphoria-services-detail-title embrace-acceptance">
                                        <span className="embrace">Embrace</span>
                                        <span className="acceptance">Acceptance</span>
                                    </h2>
                                    <p className="about-euphoria-services-detail-text">
                                        Euphoria at Seven is a safe space to express yourself and
                                        connect.
                                    </p>
                                </div>
                                <img
                                    src={embrace.src}
                                    alt=""
                                    className="about-euphoria-img"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-banner">
                    <div className="about-banner-line"></div>
                    <div className="about-banner-item">
                        <div className="container">
                            <div className="about-banner-content">
                                <div className="about-banner-detail">
                                    <h2 className="about-banner-detail-title">Dare to feel</h2>
                                    <p className="about-banner-detail-text">
                                        New here? Explore and start following new and inspiring
                                        creators today.
                                    </p>
                                    <Link href="/profile">
                                        <a className="about-banner-explore-link"
                                    >Explore creator profiles &#10230;
                                    </a></Link>
                                </div>
                                <div className="about-banner-image">
                                    <img src={dareToFeel.src} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-euphoria-services margin-services">
                    <div className="container">
                        <div className="about-euphoria-services-content">
                            <div className="about-euphoria-services-content-item margin-item-2">
                                <img
                                    src={intimacy.src}
                                    alt=""
                                    className="about-euphoria-img"
                                />
                                <div className="about-euphoria-services-detail">
                                    <h2 className="about-euphoria-services-detail-title intimacy-romance">
                                        <span className="intimacy">Intimacy</span>
                                        <span className="romance">Romance</span>
                                    </h2>
                                    <p className="about-euphoria-services-detail-text">
                                        Experience delight and playfulness through a romantic
                                        conversation and explore your most tantalizing fantasies.
                                    </p>
                                    <img
                                        src={orangeStar.src}
                                        alt=""
                                        className="about-euphoria-services-detail-star-1"
                                    />
                                </div>
                            </div>
                            <img
                                src={connectingLine2.src}
                                alt=""
                                className="connecting-line-2"
                            />
                            <div className="about-euphoria-services-content-item">
                                <div className="about-euphoria-services-detail">
                                    <img
                                        src={greenStar.src}
                                        alt=""
                                        className="about-euphoria-services-detail-star-3"
                                    />
                                    <h2 className="about-euphoria-services-detail-title">
                                        Art of the Tease
                                    </h2>
                                    <p className="about-euphoria-services-detail-text">
                                        From casual conversation to sharing tender moments on
                                        camera. Euphoria at Seven helps inspire new exciting
                                        connentions.
                                    </p>
                                </div>
                                <img
                                    src={artToTease.src}
                                    alt=""
                                    className="about-euphoria-img"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-ready">
                    <div className="container">
                        <div className="about-ready-content">
                            <h3 className="about-ready-title">Ready to Sign Up?</h3>
                            <div className="about-ready-links">
                                <Link href={`/signup?type=${userTypes.creator}`}>

                                    <a className="about-ready-btn-creator">Creator</a>
                                </Link>
                                <Link href={`/signup?type=${userTypes.enjoyer}`}>
                                <a className="about-ready-btn-enjoyer">Enjoyer</a>
                                </Link>
                            </div>
                            <a href="#" className="about-ready-explore-link"
                            >Explore more first</a
                            >
                        </div>
                    </div>
                </section>
            </main>
        </>
    );

}
About.getLayout = function getLayout(page: ReactElement) {
  return (
    <AdminLayout>
      {page}
    </AdminLayout>
  )
}
export default About;
