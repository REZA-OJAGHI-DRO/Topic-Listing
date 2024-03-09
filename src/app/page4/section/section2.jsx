"use client";

import Image from "next/image";
import Link from "next/link";
import "./../../css/bootstrap-icons.css";
import "./../../css/bootstrap.min.css";
import "./../../css/templatemo-topic-listing.css";

export default function S2() {
  return (
    <section className="section-padding section-bg">
    <div className="container">
        <div className="row">

            <div className="col-lg-12 col-12">
                <h3 className="mb-4 pb-2">We'd love to hear from you</h3>
            </div>

            <div className="col-lg-6 col-12">
                <form action="#" method="post" className="custom-form contact-form" role="form">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="form-floating">
                                <input type="text" name="name" id="name" className="form-control" placeholder="Name" required=""/>
                                
                                <label for="floatingInput">Name</label>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12"> 
                            <div className="form-floating">
                                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required=""/>
                                
                                <label for="floatingInput">Email address</label>
                            </div>
                        </div>

                        <div className="col-lg-12 col-12">
                            <div className="form-floating">
                                <input type="text" name="subject" id="name" className="form-control" placeholder="Name" required=""/>
                                
                                <label for="floatingInput">Subject</label>
                            </div>

                            <div className="form-floating">
                                <textarea className="form-control" id="message" name="message" placeholder="Tell me about the project"></textarea>
                                
                                <label for="floatingTextarea">Tell me about the project</label>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 ms-auto">
                            <button type="submit" className="form-control">Submit</button>
                        </div>

                    </div>
                </form>
            </div>

            <div className="col-lg-5 col-12 mx-auto mt-5 mt-lg-0">
                <iframe className="google-map" src="https://www.google.com/maps/@35.7001511,51.2563756,17.75z?entry=ttu" width="100%" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <h5 className="mt-4 mb-2">Topic Listing Center</h5>

                <p>Bay St &amp;, Larkin St, San Francisco, CA 94109, United States</p>
            </div>

        </div>
    </div>
</section>
  )};