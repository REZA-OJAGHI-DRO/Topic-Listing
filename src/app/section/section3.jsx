"use client";

import Image from "next/image";
import Link from "next/link";
import "./../css/bootstrap-icons.css";
import "./../css/bootstrap.min.css";
import "./../css/templatemo-topic-listing.css";
import { useRef } from "react";

export default function S3() {

  const p1=useRef()
  const p2=useRef()
  const p3=useRef()
  const p4=useRef()
  const p5=useRef()

  function clickP(x){
    if(x==1){
      p1.current.style.display='block'
      p2.current.style.display='none'
      p3.current.style.display='none'
      p4.current.style.display='none'
      p5.current.style.display='none'
    }else if(x==2){
      p2.current.style.display='block'
      p1.current.style.display='none'
      p3.current.style.display='none'
      p4.current.style.display='none'
      p5.current.style.display='none'
    }else if(x==3){
      p3.current.style.display='block'
      p1.current.style.display='none'
      p2.current.style.display='none'
      p4.current.style.display='none'
      p5.current.style.display='none'
    }else if(x==4){
      p4.current.style.display='block'
      p1.current.style.display='none'
      p2.current.style.display='none'
      p3.current.style.display='none'
      p5.current.style.display='none'
    }else if(x==5){
      p5.current.style.display='block'
      p1.current.style.display='none'
      p2.current.style.display='none'
      p3.current.style.display='none'
      p4.current.style.display='none'
    }
  }

  return (
    <section className="explore-section section-padding" id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="mb-4">Browse Topics</h2>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
               data-status='off'
               onClick={()=>clickP(1)}
                className="nav-link active"
                id="design-tab"
                data-bs-toggle="tab"
                data-bs-target="#design-tab-pane"
                type="button"
                role="tab"
                aria-controls="design-tab-pane"
                aria-selected="true"
              >
                Design
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
               data-status='off'
               onClick={()=>clickP(2)}
                className="nav-link"
                id="marketing-tab"
                data-bs-toggle="tab"
                data-bs-target="#marketing-tab-pane"
                type="button"
                role="tab"
                aria-controls="marketing-tab-pane"
                aria-selected="false"
              >
                Marketing
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
               data-status='off'
               onClick={()=>clickP(3)}
                className="nav-link"
                id="finance-tab"
                data-bs-toggle="tab"
                data-bs-target="#finance-tab-pane"
                type="button"
                role="tab"
                aria-controls="finance-tab-pane"
                aria-selected="false"
              >
                Finance
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
               data-status='off'
               onClick={()=>clickP(4)}
                className="nav-link"
                id="music-tab"
                data-bs-toggle="tab"
                data-bs-target="#music-tab-pane"
                type="button"
                role="tab"
                aria-controls="music-tab-pane"
                aria-selected="false"
              >
                Music
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
              data-status='off'
              onClick={()=>clickP(5)}
                className="nav-link"
                id="education-tab"
                data-bs-toggle="tab"
                data-bs-target="#education-tab-pane"
                type="button"
                role="tab"
                aria-controls="education-tab-pane"
                aria-selected="false"
              >
                Education
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tab-content" id="myTabContent">

              <div
              ref={p1}
              style={{display:'block',}}
                className="tab-pane fade show"
                id="design-tab-pane"
                role="tabpanel"
                aria-labelledby="design-tab"
                tabindex="0"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                    <div className="custom-block bg-white shadow-lg">
                      <Link href="/page2">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Web Design</h5>

                            <p className="mb-0">
                              Topic Listing Template based on Bootstrap 5
                            </p>
                          </div>

                          <span className="badge bg-design rounded-pill ms-auto">
                            14
                          </span>
                        </div>
                        <Image
                          src="/images/topics/undraw_Remote_design_team_re_urdx.png"
                          alt="Picture of the author"
                          className="custom-block-image img-fluid"
                          width="4000000000"
                          height="4000000000"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                    <div className="custom-block bg-white shadow-lg">
                      <Link href="/page2">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Graphic</h5>

                            <p className="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span className="badge bg-design rounded-pill ms-auto">
                            75
                          </span>
                        </div>
                        <Image
                          src="/images/topics/undraw_Redesign_feedback_re_jvm0.png"
                          alt="Picture of the author"
                          className="custom-block-image img-fluid"
                          width="4000000000"
                          height="4000000000"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="custom-block bg-white shadow-lg">
                      <Link href="/page2">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Logo Design</h5>

                            <p className="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span className="badge bg-design rounded-pill ms-auto">
                            100
                          </span>
                        </div>
                        <Image
                          src="/images/topics/colleagues-working-cozy-office-medium-shot.png"
                          alt="Picture of the author"
                          className="custom-block-image img-fluid"
                          width="4000000000"
                          height="4000000000"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
              ref={p2}
              style={{display:'none',}}
                className="tab-pane fade active show"
                id="marketing-tab-pane"
                role="tabpanel"
                aria-labelledby="marketing-tab"
                tabindex="0"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                      <Link href="/page2">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Advertising</h5>

                            <p className="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span className="badge bg-advertising rounded-pill ms-auto">
                            30
                          </span>
                        </div>
                        <Image
                          src="/images/topics/undraw_online_ad_re_ol62.png"
                          alt="Picture of the author"
                          className="custom-block-image img-fluid"
                          width="4000000000"
                          height="4000000000"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                      <Link href="/page2">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Video Content</h5>

                            <p className="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span className="badge bg-advertising rounded-pill ms-auto">
                            65
                          </span>
                        </div>
                        <Image
                          src="/images/topics/undraw_Group_video_re_btu7.png"
                          alt="Picture of the author"
                          className="custom-block-image img-fluid"
                          width="4000000000"
                          height="4000000000"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="custom-block bg-white shadow-lg">
                      <Link href="/page2">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Viral Tweet</h5>

                            <p className="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span className="badge bg-advertising rounded-pill ms-auto">
                            50
                          </span>
                        </div>
                        <Image
                          src="/images/topics/undraw_viral_tweet_gndb.png"
                          alt="Picture of the author"
                          className="custom-block-image img-fluid"
                          width="4000000000"
                          height="4000000000"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
               ref={p3}
               style={{display:'none',}}
                className="tab-pane fade show"
                id="finance-tab-pane"
                role="tabpanel"
                aria-labelledby="finance-tab"
                tabindex="0"
              >
                {/* {" "} */}
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-0">
                    <div className="custom-block bg-white shadow-lg">
                      <Link href="/page2">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Investment</h5>

                            <p className="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span className="badge bg-finance rounded-pill ms-auto">
                            30
                          </span>
                        </div>
                        <Image
                          src="/images/topics/undraw_Finance_re_gnv2.png"
                          alt="Picture of the author"
                          className="custom-block-image img-fluid"
                          width="4000000000"
                          height="4000000000"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="custom-block custom-block-overlay">
                      <div className="d-flex flex-column h-100">
                        {/* <Image
                          src="/images/businesswoman-using-tablet-analysis-graph-company-finance-strategy-statistics-success-concept-planning-future-office-room.jpg"
                          alt="Picture of the author"
                          className="custom-block-image img-fluid"
                          width="4000000000"
                          height="4000000000"
                        /> */}
                        <div className="custom-block-overlay-text d-flex">
                          <div>
                            <h5 className="text-white mb-2">Finance</h5>

                            <p className="text-white">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Sint animi necessitatibus
                              aperiam repudiandae nam omnis
                            </p>

                            <Link
                              href="/page2"
                              className="btn custom-btn mt-2 mt-lg-3"
                            >
                              Learn More
                            </Link>
                          </div>

                          <span className="badge bg-finance rounded-pill ms-auto">
                            25
                          </span>
                        </div>

                        <div className="social-share d-flex">
                          <p className="text-white me-4">Share:</p>

                          <ul className="social-icon">
                            <li className="social-icon-item">
                              <Link
                                href="#"
                                className="social-icon-link bi-twitter"
                              ></Link>
                            </li>

                            <li className="social-icon-item">
                              <Link
                                href="#"
                                className="social-icon-link bi-facebook"
                              ></Link>
                            </li>

                            <li className="social-icon-item">
                              <Link
                                href="#"
                                className="social-icon-link bi-pinterest"
                              ></Link>
                            </li>
                          </ul>

                          <Link
                            href="#"
                            className="custom-icon bi-bookmark ms-auto"
                          ></Link>
                        </div>

                        <div className="section-overlay"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
               ref={p4}
               style={{display:'none',}}
                className="tab-pane fade show"
                id="music-tab-pane"
                role="tabpanel"
                aria-labelledby="music-tab"
                tabindex="0"
              >
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                      <Link href="/page2">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Composing Song</h5>

                            <p className="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span className="badge bg-music rounded-pill ms-auto">
                            45
                          </span>
                        </div>
                        <Image
                          src="/images/topics/undraw_Compose_music_re_wpiw.png"
                          alt="Picture of the author"
                          className="custom-block-image img-fluid"
                          width="4000000000"
                          height="4000000000"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                      <Link href="/page2">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Online Music</h5>

                            <p className="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span className="badge bg-music rounded-pill ms-auto">
                            45
                          </span>
                        </div>
                        <Image
                          src="/images/topics/undraw_happy_music_g6wc.png"
                          alt="Picture of the author"
                          className="custom-block-image img-fluid"
                          width="4000000000"
                          height="4000000000"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="custom-block bg-white shadow-lg">
                      <Link href="/page2">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Podcast</h5>

                            <p className="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span className="badge bg-music rounded-pill ms-auto">
                            20
                          </span>
                        </div>
                        <Image
                          src="/images/topics/undraw_Podcast_audience_re_4i5q.png"
                          alt="Picture of the author"
                          className="custom-block-image img-fluid"
                          width="4000000000"
                          height="4000000000"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
               ref={p5}
               style={{display:'none',}}
                className="tab-pane fade show"
                id="education-tab-pane"
                role="tabpanel"
                aria-labelledby="education-tab"
                tabindex="0"
              >
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12 mb-4 mb-lg-3">
                    <div className="custom-block bg-white shadow-lg">
                      <Link href="/page2">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Graduation</h5>

                            <p className="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span className="badge bg-education rounded-pill ms-auto">
                            80
                          </span>
                        </div>
                        <Image
                          src="/images/topics/undraw_Graduation_re_gthn.png"
                          alt="Picture of the author"
                          className="custom-block-image img-fluid"
                          width="4000000000"
                          height="4000000000"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="custom-block bg-white shadow-lg">
                      <Link href="/page2">
                        <div className="d-flex">
                          <div>
                            <h5 className="mb-2">Educator</h5>

                            <p className="mb-0">
                              Lorem Ipsum dolor sit amet consectetur
                            </p>
                          </div>

                          <span className="badge bg-education rounded-pill ms-auto">
                            75
                          </span>
                        </div>
                        <Image
                          src="/images/topics/undraw_Educator_re_ju47.png"
                          alt="Picture of the author"
                          className="custom-block-image img-fluid"
                          width="4000000000"
                          height="4000000000"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
