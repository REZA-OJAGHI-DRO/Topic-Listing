"use client";

import Image from "next/image";
import Link from "next/link";
import "./../../css/bootstrap-icons.css";
import "./../../css/bootstrap.min.css";
import "./../../css/templatemo-topic-listing.css";

export default function S2() {
  return (
    <section className="topics-detail-section section-padding" id="topics-detail">
    <div className="container">
        <div className="row">

            <div className="col-lg-8 col-12 m-auto">
                <h3 className="mb-4">Introduction to Web Design</h3>

                <p>So how can you stand out, do something unique and interesting, build an online business, and get paid enough to change life. Please visit TemplateMo website to download free website templates.</p>

                <p><strong>There are so many ways to make money online</strong>. Below are several platforms you can use to find success. Keep in mind that there is no one path everyone can take. If that were the case, everyone would have a million dollars.</p>

                <blockquote>
                    Freelancing your skills isn’t going to make you a millionaire overnight.
                </blockquote>

                <div className="row my-4">
                    <div className="col-lg-6 col-md-6 col-12">
                    <Image
                  src="/images/businesswoman-using-tablet-analysis.jpg"
                  alt="Picture of the author"
                  className="topics-detail-block-image img-fluid"
                  width='4000000000'
                  height='4000000000'
                />
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 mt-4 mt-lg-0 mt-md-0">
                    <Image
                  src="/images/colleagues-working-cozy-office-medium-shot.jpg"
                  alt="Picture of the author"
                  className="topics-detail-block-image img-fluid"
                  width='4000000000'
                  height='4000000000'
                />
                    </div>
                </div>

                <p>Most people start with freelancing skills they already have as a side hustle to build up income. This extra cash can be used for a vacation, to boost up savings, investing, build business.</p>
            </div>

        </div>
    </div>
</section>
  )};