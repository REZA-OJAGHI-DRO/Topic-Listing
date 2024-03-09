"use client";

import Image from "next/image";
import Link from "next/link";
import "./../css/bootstrap-icons.css";
import "./../css/bootstrap.min.css";
import "./../css/templatemo-topic-listing.css";

export default function S2() {
  return (
    <section className="featured-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-12 mb-4 mb-lg-0">
            <div className="custom-block bg-white shadow-lg">
              <Link href="/page2">
                <div className="d-flex">
                  <div>
                    <h5 className="mb-2">Web Design</h5>

                    <p className="mb-0">
                      When you search for free CSS templates, you will notice
                      that TemplateMo is one of the best websites.
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
                  width='4000000000'
                  height='4000000000'
                />
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="custom-block custom-block-overlay">
              <div className="d-flex flex-column h-100">
                <Image
                  src="/images/businesswoman-using-tablet-analysis.jpg"
                  alt="Picture of the author"
                  className="custom-block-image img-fluid"
                  width='4000000000'
                  height='4000000000'
                />
                <div className="custom-block-overlay-text d-flex">
                  <div>
                    <h5 className="text-white mb-2">Finance</h5>

                    <p className="text-white">
                      Topic Listing Template includes homepage, listing page,
                      detail page, and contact page. You can feel free to edit
                      and adapt for your CMS requirements.
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
                        href="https://github.com/REZA-OJAGHI-DRO"
                        className="social-icon-link bi bi-github"
                      ></Link>
                    </li>

                    <li className="social-icon-item">
                      <Link
                        href="https://instagram.com/@reza-ojaghi-dro"
                        className="social-icon-link bi bi-instagram"
                      ></Link>
                    </li>

                    <li className="social-icon-item">
                      <Link
                        href="https://linkedin.com/in/reza-ojaghi-428748280/"
                        className="social-icon-link bi bi-linkedin"
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
    </section>
  );
}
