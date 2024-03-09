"use client";


import Link from "next/link";
import "./../css/bootstrap-icons.css";
import "./../css/bootstrap.min.css";
import "./../css/templatemo-topic-listing.css";

export default function S6() {
  return (
    <section className="contact-section section-padding section-bg" id="section_5">
    <div className="container">
        <div className="row">

            <div className="col-lg-12 col-12 text-center">
                <h2 className="mb-5">Get in touch</h2>
            </div>

            <div className="col-lg-5 col-12 mb-4 mb-lg-0">
                <iframe className="google-map" src="https://www.google.com/maps/@35.7001511,51.2563756,17.75z?entry=ttu" width="100%" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mb-3 mb-lg- mb-md-0 ms-auto">
                <h4 className="mb-3">Head office</h4>

                <p>Bay St &amp;, Larkin St, San Francisco, CA 94109, United States</p>

                <hr/>

                <p className="d-flex align-items-center mb-1">
                    <span className="me-2">Phone</span>

                    <Link href="tel: 305-240-9671" className="site-footer-link">
                        09121594246
                    </Link>
                </p>

                <p className="d-flex align-items-center">
                    <span className="me-2">Email</span>

                    <Link href="mailto:info@company.com" className="site-footer-link">
                    rezadro021@gmail.com
                    </Link>
                </p>
            </div>

            <div className="col-lg-3 col-md-6 col-12 mx-auto">
                <h4 className="mb-3">Dubai office</h4>

                <p>Burj Park, Downtown Dubai, United Arab Emirates</p>

                <hr/>

                <p className="d-flex align-items-center mb-1">
                    <span className="me-2">Phone</span>

                    <Link href="tel: 110-220-3400" className="site-footer-link">
                        09121594246
                    </Link>
                </p>

                <p className="d-flex align-items-center">
                    <span className="me-2">Email</span>

                    <Link href="mailto:info@company.com" className="site-footer-link">
                        rezadro021@gmail.com
                    </Link>
                </p>
            </div>

        </div>
    </div>
</section>
  )};