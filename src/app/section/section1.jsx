"use client"
import './../css/bootstrap-icons.css'
import './../css/bootstrap.min.css'
import './../css/templatemo-topic-listing.css'

export default function S1(){
    return(
        <section className="hero-section d-flex justify-content-center align-items-center" id="section_1">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-12 mx-auto">
                            <h1 className="text-white text-center">Discover. Learn. Enjoy</h1>

                            <h6 className="text-center">platform for creatives around the world</h6>

                            <form method="get" className="custom-form mt-4 pt-2 mb-lg-0 mb-5" role="search">
                                <div className="input-group input-group-lg">
                                    <span className="input-group-text bi-search" id="basic-addon1">
                                        
                                    </span>

                                    <input name="keyword" type="search" className="form-control" id="keyword" placeholder="Design, Code, Marketing, Finance ..." aria-label="Search"/>

                                    <button type="submit" className="form-control">Search</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
    )
}