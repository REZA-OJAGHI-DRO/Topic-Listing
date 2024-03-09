"use client";

import Image from "next/image";
import "./../css/bootstrap-icons.css";
import "./../css/bootstrap.min.css";
import "./../css/templatemo-topic-listing.css";
import { useRef } from "react";

export default function S5() {
  const p1=useRef()
  const p2=useRef()
  const p3=useRef()
  const c1=useRef()
  const c2=useRef()
  const c3=useRef()
  function clickP(x,e){
    e.target.setAttribute('data-status','off')
    c1.current.children[0].children[1].style.display='none'
    c1.current.children[1].children[1].style.display='none'
    c1.current.children[2].children[1].style.display='none'
    c1.current.children[0].children[0].children[0].style.backgroundColor='rgb(255,255,255)'
    c1.current.children[1].children[0].children[0].style.backgroundColor='rgb(255,255,255)'
    c1.current.children[2].children[0].children[0].style.backgroundColor='rgb(255,255,255)'


    if(e.target.getAttribute('data-status')=='off'){
      c1.current.children[x-1].children[1].style.display='block'
      c1.current.children[x-1].children[0].children[0].style.backgroundColor='rgb(231,241,255)'
      c1.current.children[x-1].children[0].children[0].style.borderRadius='100px'
      e.target.setAttribute('data-status','on')

    }else{
      e.target.setAttribute('data-status','off')
    }
  }
  return (
    <section className="faq-section section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="clearfix"></div>

          <div className="col-lg-5 col-12">
            <Image
              src="/images/faq_graphic.jpg"
              alt="FAQs"
              className="img-fluid"
              width="4000000000"
              height="4000000000"
            />
          </div>

          <div className="col-lg-6 col-12 m-auto">
            <div ref={c1} className="accordion" id="accordionExample">

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                  style={{backgroundColor:'rgb(231,241,255)'}}
                  data-status='off'
                  onClick={()=>clickP(1,event)}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is Topic Listing?
                  </button>
                </h2>

                <div
                ref={p1}
                style={{display:'block'}}
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Topic Listing is free Bootstrap 5 CSS template.{" "}
                    <strong>
                      You are not allowed to redistribute this template
                    </strong>{" "}
                    on any other template collection website without our
                    permission. Please contact TemplateMo for more detail. Thank
                    you.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                  ref={c2}
                  data-status='off'
                  onClick={()=>clickP(2,event)}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How to find a topic?
                  </button>
                </h2>

                <div
                 ref={p2}
                 style={{display:'none'}}
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    You can search on Google with <strong>keywords</strong> such
                    as templatemo portfolio, templatemo one-page layouts,
                    photography, digital marketing, etc.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                  ref={c3}
                  data-status='off'
                  onClick={()=>clickP(3,event)}
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Does it need to paid?
                  </button>
                </h2>

                <div
                 ref={p3}
                 style={{display:'none'}}
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    You can modify any of this with custom CSS or overriding our
                    default variables. It's also worth noting that just about
                    any HTML can go within the <code>.accordion-body</code>,
                    though the transition does limit overflow.
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
