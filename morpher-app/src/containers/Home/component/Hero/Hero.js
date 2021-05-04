import React, { Component } from 'react';
import './Hero.css';


class Hero extends Component {
    render() {
        const rImages = [require('./image/demo1.gif'), require('./image/demo2.gif')];
        const randomInt = Math.floor(Math.random() * rImages.length);
        const rImage = rImages[randomInt].default;
        return (
            <div>
                {/* {Visible only on xl 、 lg and md} */}
                <section className="d-none d-xl-block d-lg-block d-md-block">
                    <div className="hero-intro p-5">
                        <div className="hero-intro__right">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-sm-8 col-md-8">
                                    <blockquote>
                                        <q>The face morphing algorithm morphs between faces using a common set of feature points, placed by hand on
                                        each face. To morph between two faces, you need to warp both faces to a common shape so they can be
                blended together.</q>
                                    </blockquote>
                                    <div className="open-dates animate__animated animate__fadeIn animate__delay-1s">
                                        <p>Morphing your face!</p><br />
                                    </div>
                                    <div className="animate__animated animate__fadeInUp animate__delay-1s">
                                        <a className="museum-shop-link" href="#">Get started
                                {'\u00A0\u00A0'} <i className="fas fa-angle-right fa-lg"></i>
                                        </a>
                                    </div>

                                </div>
                                <div className="col-8 col-sm-4 col-md-4 col-lg-3  col-xl-2 my-3">
                                    <div className="hero-intro__left animate__animated animate__fadeIn animate__slower">
                                        <img id="heroImg" src={rImage} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* {Visible only on sm} */}
                <section className="d-md-none">
                    <div className="hero-intro py-5 px-3 px-sm-5">
                        <div className="hero-intro__right">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-sm-12">
                                    <blockquote>
                                        <q>The face morphing algorithm morphs between faces using a common set of feature points, placed by hand on
                                        each face. To morph between two faces, you need to warp both faces to a common shape so they can be
                blended together.</q>
                                    </blockquote>
                                </div>
                                <div className="col-12 mt-2">
                                    <div className="row justify-content-center align-items-center">
                                        <div className="col-7 col-sm-6 text-center">
                                            <div className="open-dates animate__animated animate__fadeIn animate__delay-1s">
                                                <p>Morphing your face!</p><br />
                                            </div>
                                            <div className="animate__animated animate__fadeInUp animate__delay-1s">
                                                <a className="museum-shop-link" href="#">Get started
                                            {'\u00A0\u00A0'}<i className="fas fa-angle-right fa-lg"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-5 col-sm-4  text-center">
                                            <div className="hero-intro__left animate__animated animate__fadeIn animate__slower">
                                                <img id="heroImg" src={rImage} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}


export default Hero;
