"use client";


import Link from "next/link";
import "./../css/bootstrap-icons.css";
import "./../css/bootstrap.min.css";
import "./../css/templatemo-topic-listing.css";
import useStore from "./store";
import { useEffect, useRef } from "react";

export default function S4() {
    const sT=useStore((state)=>state.sT)
    console.log(sT);
    const s=useRef()
    const s1=useRef()
    const s2=useRef()
    const s3=useRef()
    const s4=useRef()
    useEffect(()=>{
        const st=(s.current.offsetTop)
        console.log(st);

        if(sT>st){
            s1.current.style.backgroundColor='rgb(19,84,122)'
        }else if(0<sT<st){
            s1.current.style.backgroundColor='#80d0c7'
        }
        if(sT>st+101){
            s2.current.style.backgroundColor='rgb(19,84,122)'
        }else if(0<sT<st+100){
            s2.current.style.backgroundColor='#80d0c7'
        }
        if(sT>st+201){
            s3.current.style.backgroundColor='rgb(19,84,122)'
        }else if(0<sT<st+200){
            s3.current.style.backgroundColor='#80d0c7'
        }
        if(sT>st){
            s4.current.style.top=(sT-st)/4+"%"
        }else if(0<sT<st){
            s4.current.style.top="0"
        }
    },[sT])
        return (
    <section ref={s} className="timeline-section section-padding" id="section_3">
    <div className="section-overlay"></div>

    <div className="container">
        <div className="row">

            <div className="col-12 text-center">
                <h2 className="text-white mb-4">How does it work?</h2>
            </div>

            <div className="col-lg-10 col-12 mx-auto">
                <div className="timeline-container">
                    <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
                        <div className="list-progress">
                            <div ref={s4} style={{height:'100%'}} className="inner"></div>
                        </div>

                        <li>
                            <h4 className="text-white mb-3">Search your favourite topic</h4>

                            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias illum sed esse ad dignissimos libero sunt, quisquam numquam aliquam? Voluptas, accusamus omnis?</p>

                            <div ref={s1} className="icon-holder">
                              <i className="bi-search"></i>
                            </div>
                        </li>
                        
                        <li>
                            <h4 className="text-white mb-3">Bookmark &amp; Keep it for yourself</h4>

                            <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint animi necessitatibus aperiam repudiandae nam omnis est vel quo, nihil repellat quia velit error modi earum similique odit labore. Doloremque, repudiandae?</p>

                            <div ref={s2} className="icon-holder">
                              <i className="bi-bookmark"></i>
                            </div>
                        </li>

                        <li>
                            <h4 className="text-white mb-3">Read &amp; Enjoy</h4>

                            <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi vero quisquam, rem assumenda similique voluptas distinctio, iste est hic eveniet debitis ut ducimus beatae id? Quam culpa deleniti officiis autem?</p>

                            <div ref={s3} className="icon-holder">
                              <i className="bi-book"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-12 text-center mt-5">
                <p className="text-white">
                    Want to learn more?
                    <Link href="https://github.com/REZA-OJAGHI-DRO" className="btn custom-btn custom-border-btn ms-3">Check out GitHub</Link>
                </p>
            </div>
        </div>
    </div>
</section>
  )};