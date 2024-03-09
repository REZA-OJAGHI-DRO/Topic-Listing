"use client";

import Image from "next/image";
import Link from "next/link";
import "./../../css/bootstrap-icons.css";
import "./../../css/bootstrap.min.css";
import "./../../css/templatemo-topic-listing.css";

export default function S2() {
  return (
    <section className="section-padding">
    <div className="container">
        <div className="row">

            <div className="col-lg-12 col-12 text-center">
                <h3 className="mb-4">Popular Topics</h3>
            </div>

            <div className="col-lg-8 col-12 mt-3 mx-auto">
                <div className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
                    <div className="d-flex">
                        <Image
                  src="/images/topics/undraw_Remote_design_team_re_urdx.png"
                  alt="Picture of the author"
                  className="custom-block-image img-fluid"
                  width='4000000000'
                  height='4000000000'
                />
                        <div className="custom-block-topics-listing-info d-flex">
                            <div>
                                <h5 className="mb-2">Web Design</h5>

                                <p className="mb-0">Topic Listing includes home, listing, detail and contact pages. Feel free to modify this template for your custom websites.</p>

                                <Link href="/page2" className="btn custom-btn mt-3 mt-lg-4">Learn More</Link>
                            </div>

                            <span className="badge bg-design rounded-pill ms-auto">14</span>
                        </div>
                    </div>
                </div>

                <div className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
                    <div className="d-flex">
                        <Image
                  src="/images/topics/undraw_online_ad_re_ol62.png"
                  alt="Picture of the author"
                  className="custom-block-image img-fluid"
                  width='4000000000'
                  height='4000000000'
                />
                        <div className="custom-block-topics-listing-info d-flex">
                            <div>
                                <h5 className="mb-2">Advertising</h5>

                                <p className="mb-0">Visit TemplateMo website to download free CSS templates. Lorem ipsum dolor, sit amet consectetur adipisicing elit animi necessitatibus</p>

                                <Link href="/page2" className="btn custom-btn mt-3 mt-lg-4">Learn More</Link>
                            </div>

                            <span className="badge bg-advertising rounded-pill ms-auto">30</span>
                        </div>
                    </div>
                </div>

                <div className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
                    <div className="d-flex">
                        <Image
                  src="/images/topics/undraw_Podcast_audience_re_4i5q.png"
                  alt="Picture of the author"
                  className="custom-block-image img-fluid"
                  width='4000000000'
                  height='4000000000'
                />
                        <div className="custom-block-topics-listing-info d-flex">
                            <div>
                                <h5 className="mb-2">Podcast</h5>

                                <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit animi necessitatibus</p>

                                <Link href="/page2" className="btn custom-btn mt-3 mt-lg-4">Learn More</Link>
                            </div>

                            <span className="badge bg-music rounded-pill ms-auto">20</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-12 col-12">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mb-0">
                        <li className="page-item">
                            <Link className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">Prev</span>
                            </Link>
                        </li>

                        <li className="page-item active" aria-current="page">
                            <Link className="page-link" href="#">1</Link>
                        </li>
                        
                        <li className="page-item">
                            <Link className="page-link" href="#">2</Link>
                        </li>
                        
                        <li className="page-item">
                            <Link className="page-link" href="#">3</Link>
                        </li>

                        <li className="page-item">
                            <Link className="page-link" href="#">4</Link>
                        </li>

                        <li className="page-item">
                            <Link className="page-link" href="#">5</Link>
                        </li>
                        
                        <li className="page-item">
                            <Link className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">Next</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    </div>
</section>
  )};