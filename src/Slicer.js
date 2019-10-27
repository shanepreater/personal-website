import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const Thingy = props => {
    return (<section className="section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2>Be More, Not Less.</h2>
                    </div>
                </div>
                <div className="row align-items-stretch">
                    <div className="col-lg-4 order-lg-1">
                        <div className="h-100">
                            <div className="frame h-100">
                                <div className="feature-img-bg h-100"
                                     style={createBackgroundImage(aboutImage)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1">

                    <div className="feature-1 d-md-flex">
                        <div className="align-self-center">
                            <span className="fab fa-css3-alt display-4 text-primary"></span>
                            <h3>Easy & Fast</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod.</p>
                        </div>
                    </div>

                    <div className="feature-1 d-md-flex">
                        <div className="align-self-center">
                            <span className="fab fa-php display-4 text-primary"></span>
                            <h3>Perfect Mechanics</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod.</p>
                        </div>
                    </div>

                </div>

                <div className="col-md-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3">

                    <div className="feature-1 d-md-flex">
                        <div className="align-self-center">
                            <span className="fab fa-codepen display-4 text-primary"></span>
                            <h3>Ulta HD</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod.</p>
                        </div>
                    </div>

                    <div className="feature-1 d-md-flex">
                        <div className="align-self-center">
                            <span className="fab fa-free-code-camp display-4 text-primary"></span>
                            <h3>Reliable and Stable</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </section>


    <section className="section element-animate">
        <div className="container">
            <div className="row align-items-center mb-5">
                <div className="col-lg-7 order-md-2">
                    <div className="">
                        <div className="frame"><img src="images/about_2.jpg" alt="Image"
                                                    className="img-fluid"/></div>
                    </div>
                </div>
                <div className="col-md-5 pr-md-5 mb-5">
                    <div className="block-41">
                        <h2 className="block-41-heading mb-5">Revolution</h2>
                        <div className="block-41-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row align-items-center mb-5">
                <div className="col-lg-7">
                    <div className="">
                        <div className="frame"><img src="images/img_1.jpg" alt="Image"
                                                    className="img-fluid"/></div>
                    </div>
                </div>
                <div className="col-md-5 pr-md-5 mb-5">
                    <div className="block-41">
                        <h2 className="block-41-heading mb-5">Sustainable</h2>
                        <div className="block-41-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam,
                                quis nostrud exercitation ullamco laboris nisi.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section className="section border-t pb-0">
        <div className="container">
        <div className="row justify-content-center mb-5 element-animate">
        <div className="col-md-8 text-center">
        <h2 className=" heading mb-4">Example Article available</h2>
    <p className="mb-5 lead">Check all the avaiable Articles.</p>
    </div>
</div>
</div>
<div className="container-fluid no_padding">
<div className="row no-gutters">
<div className="col-md-4 element-animate">
<a href="#" className="link-thumbnail">
<h3>Empowerment</h3>
<span className="ion-plus icon"></span>
<img src="images/img_1.jpg" alt="Image" className="img-fluid"/>
</a>
</div>
<div className="col-md-4 element-animate">
<a href="#" className="link-thumbnail">
<h3>Sustainable</h3>
<span className="ion-plus icon"></span>
<img src="images/img_2.jpg" alt="Image" className="img-fluid"/>
</a>
</div>
<div className="col-md-4 element-animate">
<a href="#" className="link-thumbnail">
<h3>Unleash your Awesome</h3>
<span className="ion-plus icon"></span>
<img src="images/img_3.jpg" alt="Image" className="img-fluid"/>
</a>
</div>
<div className="col-md-4 element-animate">
<a href="#" className="link-thumbnail">
<h3>Sustainable</h3>
<span className="ion-plus icon"></span>
<img src="images/img_4.jpg" alt="Image" className="img-fluid"/>
</a>
</div>
<div className="col-md-4 element-animate">
<a href="#" className="link-thumbnail">
<h3>Unleash your Awesome</h3>
<span className="ion-plus icon"></span>
<img src="images/img_5.jpg" alt="Image" className="img-fluid"/>
</a>
</div>
<div className="col-md-4 element-animate">
<a href="#" className="link-thumbnail">
<h3>Sustainable</h3>
<span className="ion-plus icon"></span>
<img src="images/img_6.jpg" alt="Image" className="img-fluid"/>
</a>
</div>
</div>

</div>
</section>

<section className="section bg-primary">
<div className="container">
<div className="row align-items-center">
<div className="col-lg-8">
<h2 className="text-white mb-0">Use Shane preater</h2>
<p className="text-white lead">Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
</div>
<div className="col-lg-4 text-lg-right">
<a href="#" className="btn btn-outline-white px-4 py-3">Contact Us</a>
</div>
</div>
</div>
</section>)
}