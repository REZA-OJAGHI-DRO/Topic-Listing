"use client";

import Image from "next/image";
import Link from "next/link";
import "./../../css/bootstrap-icons.css";
import "./../../css/bootstrap.min.css";
import "./../../css/templatemo-topic-listing.css";
import { useRef, useState } from "react";
import useStore from "@/app/section/store";

export default function S2() {
    const p1=useRef()
    const p2=useRef()
  
    // const[y,setY]=useState(1)

    function page(e,x){
    e.target.setAttribute('data-status','off')
    // e.target.style.backgroundColor='rgb(255,255,255)'
    // setY(x)
    p1.current.children[1].style.display='none'
    p1.current.children[2].style.display='none'
    p1.current.children[3].style.display='none'
    p1.current.children[4].style.display='none'
    p1.current.children[5].style.display='none'
    p2.current.children[1].children[0].style.backgroundColor='rgb(255,255,255)'
    p2.current.children[2].children[0].style.backgroundColor='rgb(255,255,255)'
    p2.current.children[3].children[0].style.backgroundColor='rgb(255,255,255)'
    p2.current.children[4].children[0].style.backgroundColor='rgb(255,255,255)'
    p2.current.children[5].children[0].style.backgroundColor='rgb(255,255,255)'

        if(e.target.getAttribute('data-status')=='off'){
            p1.current.children[x].style.display='block'
            e.target.setAttribute('data-status','on')
            p2.current.children[x].children[0].style.backgroundColor='#80d0c7'
        }else {
            p1.current.children[x].style.display='none'
            e.target.setAttribute('data-status','off')
            p2.current.children[x].children[0].style.backgroundColor='rgb(255,255,255)'
        }
    }

    // function next(){
    //     if(y<6){   
    //         setY(y+1)
    //         page(event,y)         
    //     }
    // }
    // function prev(e){

    //     if(y>0){    
    //             setY(y-1)  
    //             page(event,y)
    //     }
    // }
    // console.log(y);
  return (
    <section className="section-padding">
    <div className="container">
        <div ref={p1} className="row">

            <div className="col-lg-12 col-12 text-center">
                <h3 className="mb-4">Popular Topics</h3>
            </div>

            <div style={{display:'block'}} className="col-lg-8 col-12 mt-3 mx-auto">
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

            <div style={{display:'none'}} className="col-lg-8 col-12 mt-3 mx-auto">
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
            </div>

            <div style={{display:'none'}} className="col-lg-8 col-12 mt-3 mx-auto">
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
            </div>

            <div style={{display:'none'}} className="col-lg-8 col-12 mt-3 mx-auto">
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
            </div>

            <div style={{display:'none'}} className="col-lg-8 col-12 mt-3 mx-auto">
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
                    <ul ref={p2} className="pagination justify-content-center mb-0">
                        {/* <li className="page-item">
                            <button onClick={()=>prev(event)} className="page-link"  aria-label="Previous">
                                <span aria-hidden="true">Prev</span>
                            </button>
                        </li> */}
                        <li></li>
                        <li className="page-item"  aria-current="page">
                            <button className="page-link" data-status='off' style={{backgroundColor:'#80d0c7'}} onClick={()=>page(event,1)}>1</button>
                        </li>
                        
                        <li className="page-item">
                            <button className="page-link" data-status='off' onClick={()=>page(event,2)}>2</button>
                        </li>
                        
                        <li className="page-item">
                            <button className="page-link" data-status='off' onClick={()=>page(event,3)}>3</button>
                        </li>

                        <li className="page-item">
                            <button className="page-link" data-status='off' onClick={()=>page(event,4)}>4</button>
                        </li>

                        <li className="page-item">
                            <button className="page-link" data-status='off' onClick={()=>page(event,5)}>5</button>
                        </li>
                        
                        {/* <li className="page-item">
                            <button onClick={()=>next(event)} className="page-link" aria-label="Next">
                                <span aria-hidden="true">Next</span>
                            </button>
                        </li> */}
                    </ul>
                </nav>
            </div>

        </div>
    </div>
</section>
  )};

