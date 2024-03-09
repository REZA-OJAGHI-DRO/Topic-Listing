"use client";

import Image from "next/image";
import Link from "next/link";
import "./../../css/bootstrap-icons.css";
import "./../../css/bootstrap.min.css";
import "./../../css/templatemo-topic-listing.css";

export default function S1() {
  return (
<header className="site-header d-flex flex-column justify-content-center align-items-center">
                <div className="container">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-lg-5 col-12 mb-5">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Homepage</a></li>

                                    <li className="breadcrumb-item active" aria-current="page">Web Design</li>
                                </ol>
                            </nav>

                            <h2 className="text-white">Introduction to <br/> Web Design 101</h2>

                            <div className="d-flex align-items-center mt-5">
                                <Link href="#topics-detail" className="btn custom-btn custom-border-btn smoothscroll me-4">Read More</Link>

                                <Link href="#top" className="custom-icon bi-bookmark smoothscroll"></Link>
                            </div>
                        </div>

                        <div className="col-lg-5 col-12">
                            <div className="topics-detail-block bg-white shadow-lg">
                            <Image
                  src="/images/topics/undraw_Remote_design_team_re_urdx.png"
                  alt="Picture of the author"
                  className="topics-detail-block-image img-fluid"
                  width='4000000000'
                  height='4000000000'
                />
                            </div>
                        </div>

                    </div>
                </div>
            </header>
  )};