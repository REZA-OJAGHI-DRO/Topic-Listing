'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import './css/bootstrap-icons.css'
import './css/bootstrap.min.css'
import './css/templatemo-topic-listing.css'
import Link from "next/link";
import Image from "next/image";
import useStore from "./section/store";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const ss=useStore((state)=>state.ss)
  
  function scroll(e){
    const st=e.target.scrollTop
    ss(st)
  }
  return (
    <html lang="en">
      <head>
      <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <meta name="description" content=""/>
        <meta name="author" content=""/>

        <title>REZA OJAGHI</title>

     
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans&display=swap" rel="stylesheet"/>
                        
        <link href="/css/bootstrap.min.css" rel="stylesheet"/>

        <link href="/css/bootstrap-icons.css" rel="stylesheet"/>

        <link href="/css/templatemo-topic-listing.css" rel="stylesheet"/>   
      </head >
      <body  id="top" >
    <div className="ss">
      <div className="sss" onScroll={()=>scroll(event)}>
       
        <Nav/>

        {children}
      
        <Footer/>

       </div>
    </div>
      </body>
    </html>
  );
}


function Nav(){
  const sT=useStore((state)=>state.sT)
  const nav1=useRef()

useEffect(()=>{
  if(sT>80){
    nav1.current.style.backgroundColor='#80d0c7'
  }else if(sT<=80){
    nav1.current.style.backgroundColor='rgba(0,0,0,0)'
  }
},[sT])

const m=useRef()
const i=useRef()
const i1=useRef()
const i2=useRef()

function openMenu(e){
      
    if(i.current.getAttribute('data-status')=='off'){
        m.current.style.display='block'
        i1.current.style.display='none'
        i2.current.style.display='block'
        m.current.parentElement.parentElement.style.backgroundColor='#80d0c7'
        i.current.setAttribute('data-status','on')
    }else{
        m.current.style.display='none'
        i1.current.style.display='block'
        i2.current.style.display='none'
        i.current.setAttribute('data-status','off')
        m.current.parentElement.parentElement.style.backgroundColor='rgba(0,0,0,0)'
    }
}

  return(
          <nav ref={nav1}  className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" href="index.html">
                        <i className="bi-back"></i>
                        <span> W.D.R.O</span>
                    </Link>

                    <div className="d-lg-none ms-auto me-4">
                        <Link href="#top" className="navbar-icon bi-person smoothscroll"></Link>
                    </div>
    
                    <button ref={i} onClick={()=>openMenu(event)} data-status='off' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span ref={i1} className="navbar-toggler-icon"></span>
                        <i style={{display:'none',color:'white',fontSize:'2rem'}} ref={i2} className="bi bi-x-lg "></i>
                    </button>
    
                    <div ref={m} style={{display:'none'}} className=" navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-lg-5 me-lg-auto">
                            <li className="nav-item">
                                <Link className="nav-link click-scroll" href="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link click-scroll" href="#section_2">Browse Topics</Link>
                            </li>
    
                            <li className="nav-item">
                                <Link className="nav-link click-scroll" href="#section_3">How it works</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link click-scroll" href="#section_4">FAQs</Link>
                            </li>
    
                            <li className="nav-item">
                                <Link className="nav-link click-scroll" href="#section_5">Contact</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>

                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li><Link className="dropdown-item" href="/page3">Topics Listing</Link></li>

                                    <li><Link className="dropdown-item" href="contact.html">Contact Form</Link></li>
                                </ul>
                            </li>
                        </ul>

                        <div className="d-none d-lg-block">
                            <Link href="#top" className="navbar-icon bi-person smoothscroll"></Link>
                        </div>
                    </div>
                </div>
            </nav>

  )
}

function Footer(){
    const ul=useRef()
    function openF(){
        if(ul.current.getAttribute('data-test')=='on'){
            ul.current.style.display='block'
            ul.current.setAttribute('data-test','off')
        }else{
            ul.current.style.display='none'
            ul.current.setAttribute('data-test','on')
        }
    }
    return(
        <footer className="site-footer section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 col-12 mb-4 pb-2 d-flex flex-wrap reza1">
                        <Link className="navbar-brand mb-2" href="index.html">
                            <i className="bi-back"></i>
                            <span>REZA OJAGHI</span>
                        </Link>
                        <Image
                          src="/images/1.webp"
                          alt="Picture of the author"
                          width="4000000000"
                          height="4000000000"
                        className='reza'
                        />
                        <div>
                            <Link href='https://github.com/REZA-OJAGHI-DRO'><i class="bi bi-github"></i></Link>
                            <Link href='https://instagram.com/@reza-ojaghi-dro'><i class="bi bi-instagram"></i></Link>
                            <Link href='https://linkedin.com/in/reza-ojaghi-428748280/'><i class="bi bi-linkedin"></i></Link>
                        </div>
                        
                    </div>

                    <div className="col-lg-3 col-md-4 col-6">
                        <h6 className="site-footer-title mb-3">Resources</h6>

                        <ul className="site-footer-links">
                            <li className="site-footer-link-item">
                                <Link href="#" className="site-footer-link">Home</Link>
                            </li>

                            <li className="site-footer-link-item">
                                <Link href="#" className="site-footer-link">How it works</Link>
                            </li>

                            <li className="site-footer-link-item">
                                <Link href="#" className="site-footer-link">FAQs</Link>
                            </li>

                            <li className="site-footer-link-item">
                                <Link href="#" className="site-footer-link">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                        <h6 className="site-footer-title mb-3">Information</h6>

                        <p className="text-white d-flex mb-1">
                            <Link href="tel: 305-240-9671" className="site-footer-link">
                                09121594246
                            </Link>
                        </p>

                        <p className="text-white d-flex">
                            <Link href="mailto:info@company.com" className="site-footer-link">
                                rezadro021@gmail.com
                            </Link>
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
                        <div className="dropdown">
                            <button onClick={openF} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            English</button>

                            <ul ref={ul} style={{display:'none'}} data-test='on' className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Thai</button></li>

                                <li><button className="dropdown-item" type="button">Myanmar</button></li>

                                <li><button className="dropdown-item" type="button">Arabic</button></li>
                            </ul>
                        </div>

                        <p className="copyright-text mt-lg-5 mt-4">Copyright © 2048 Topic Listing Center. All rights reserved.
                        {/* <br/><br/>Design: 
                        <Link rel="nofollow" href="https://templatemo.com" target="_blank">TemplateMo</Link> */}
                        </p>
                        
                        </div>
                    

                </div>
            </div>
        </footer>
    )
}