import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import AdminLayout from "../app/components/Layout/adminLayout";
import cherryImg from "../app/images/color-cherry.png"
const ContactUs = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Euphoria - Contact</title>
            </Head>
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
ContactUs.getLayout = function getLayout(page: ReactElement) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}
export default ContactUs;
