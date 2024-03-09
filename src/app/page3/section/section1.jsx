"use client";

import Image from "next/image";
import Link from "next/link";
import "./../../css/bootstrap-icons.css";
import "./../../css/bootstrap.min.css";
import "./../../css/templatemo-topic-listing.css";

export default function S1() {
  return (
    
    <header className="site-header d-flex flex-column justify-content-center align-items-center">
    <div className="container">
        <div className="row align-items-center">

            <div className="col-lg-5 col-12">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/">Homepage</Link></li>

                        <li className="breadcrumb-item active" aria-current="page">Topics Listing</li>
                    </ol>
                </nav>

                <h2 className="text-white">Topics Listing</h2>
            </div>

        </div>
    </div>
</header>
  )};