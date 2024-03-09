"use client";

import Image from "next/image";
import Link from "next/link";
import "./../../css/bootstrap-icons.css";
import "./../../css/bootstrap.min.css";
import "./../../css/templatemo-topic-listing.css";
import { useRef } from "react";

export default function S3() {
    const inp=useRef()
    function sub(){
        inp.current.focus()
    }
  return (
    <section className="section-padding section-bg">
    <div className="container">
        <div className="row justify-content-center">

            <div className="col-lg-5 col-12">
            <Image
                  src="/images/rear-view-young-college-student.jpg"
                  alt="Picture of the author"
                  className="newsletter-image img-fluid"
                  width='4000000000'
                  height='4000000000'
                />
            </div>

            <div className="col-lg-5 col-12 subscribe-form-wrap d-flex justify-content-center align-items-center">
                <form className="custom-form subscribe-form" action="#" method="post" role="form">
                    <h4 className="mb-4 pb-2">Get Newsletter</h4>

                    <input type="email" ref={inp} name="subscribe-email" id="subscribe-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email Address" required=""/>

                    <div className="col-lg-12 col-12">
                        <button type="submit" onClick={sub} className="form-control">Subscribe</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</section>
  )};