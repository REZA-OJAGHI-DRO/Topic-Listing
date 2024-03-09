"use client";

import Image from "next/image";
import Link from "next/link";
import "./../../css/bootstrap-icons.css";
import "./../../css/bootstrap.min.css";
import "./../../css/templatemo-topic-listing.css";

export default function S3() {
  return (
    <section className="section-padding section-bg">
    <div className="container">
        <div className="row">

            <div className="col-lg-12 col-12">
                <h3 className="mb-4">Trending Topics</h3>
            </div>

            <div className="col-lg-6 col-md-6 col-12 mt-3 mb-4 mb-lg-0">
                <div className="custom-block bg-white shadow-lg">
                    <Link href="/page2">
                        <div className="d-flex">
                            <div>
                                <h5 className="mb-2">Investment</h5>

                                <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                            </div>

                            <span className="badge bg-finance rounded-pill ms-auto">30</span>
                        </div>
                        <Image
                  src="/images/topics/undraw_Finance_re_gnv2.png"
                  alt="Picture of the author"
                  className="custom-block-image img-fluid"
                  width='4000000000'
                  height='4000000000'
                />
                    </Link>
                </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12 mt-lg-3">
                <div className="custom-block custom-block-overlay">
                    <div className="d-flex flex-column h-100">

                        <div className="custom-block-overlay-text d-flex">
                            <div>
                                <h5 className="text-white mb-2">Finance</h5>

                                <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint animi necessitatibus aperiam repudiandae nam omnis</p>

                                <Link href="/page2" className="btn custom-btn mt-2 mt-lg-3">Learn More</Link>
                            </div>

                            <span className="badge bg-finance rounded-pill ms-auto">25</span>
                        </div>

                        <div className="social-share d-flex">
                            <p className="text-white me-4">Share:</p>

                            <ul className="social-icon">
                                <li className="social-icon-item">
                                    <Link href="#" className="social-icon-link bi-twitter"></Link>
                                </li>

                                <li className="social-icon-item">
                                    <Link href="#" className="social-icon-link bi-facebook"></Link>
                                </li>

                                <li className="social-icon-item">
                                    <Link href="#" className="social-icon-link bi-pinterest"></Link>
                                </li>
                            </ul>

                            <Link href="#" className="custom-icon bi-bookmark ms-auto"></Link>
                        </div>

                        <div className="section-overlay"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
  )};