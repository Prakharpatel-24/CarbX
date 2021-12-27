import React from 'react'
import aos from 'aos'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, CarouselItem, button } from 'react-bootstrap'
import './Homescreen.css'
const Homescreen = () => {
    AOS.init();
    return (
        <>

            {/* carousel start */}

            <Row>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner " >
                        <div class="carousel-item active">
                            <img src="../../images/c1.jpg" class="d-block w-100" alt="..." style={{ height: "50rem" }} />
                        </div>
                        <div class="carousel-item">
                            <img src="../../images/c2.jpg" class="d-block w-100" alt="..." style={{ height: "50rem" }} />
                        </div>
                        <div class="carousel-item">
                            <img src="../../images/c3.jpg" class="d-block w-100" alt="..." style={{ height: "50rem" }} />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </Row>

            {/* // carousel end */}


            <Container>

                <section className='main_heading my-5 '>
                    <div className='text-center'>
                        <h2 className='display' data-aos="fade-up" data-aos-offset="200">About Us</h2>
                        <hr className='w-25 mx-auto' />
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-12 col-xxl-6'>
                                <figure>
                                    <img src="../../images/pasta.jpg" alt='about food' className='img-fluid about_img' />
                                </figure>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-start flex-column'>
                                <h1>Our Journey</h1>
                                <p>Launched in 2021, CarbX is an online calorie and exercise tracker with over 1000 members worldwide. The average active member loses 1.4 pounds a week, and about 27 pounds total.

                                    MyNetDiary guides your weight loss journey with accurate calorie counting, weight loss forecasting and personalized daily insights.</p>
                                <button type="button" className='btn btn-outline-info'>Explore More</button>
                            </div>
                        </div>
                    </div>
                </section>





                <section className='main_heading my-5 '>
                    <div className='text-center'>
                        <h2 className='display'>Benefits</h2>
                        <hr className='w-25 mx-auto' />
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-3 col-sm-12 col-xxl-3'>
                                <div class="card">
                                    <img src="../../images/7.png" alt='about food' className='img-fluid about_img img-responsive' />                                    <div class="card-body">
                                        <h5 class="card-title">Food & Water</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-12 col-xxl-3'>
                                <div class="card">
                                    <img src="../../images/8.png" alt='about food' className='img-fluid about_img img-responsive' />                                    <div class="card-body">
                                        <h5 class="card-title">Track Nutrients</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-12 col-xxl-3 mx-auto'>
                                <div class="card">
                                    <img src="../../images/9.png" alt='about food' className='img-fluid about_img img-responsive' />                                    <div class="card-body">
                                        <h5 class="card-title">Notifications</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-12 col-xxl-3'>
                                <div class="card">
                                    <img src="../../images/10.png" alt='about food' className='img-fluid about_img img-responsive' />                                    <div class="card-body">
                                        <h5 class="card-title">Reminder</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>





                <section className='main_heading my-5 '>
                    <div className='text-center' data-aos="fade-up" data-aos-offset="200">
                        <h2 className='display'>Premium Recipes</h2>
                        <hr className='w-25 mx-auto' />
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-3 col-sm-12 col-xxl-3'>
                                <div class="card">
                                    <img src="../../images/pasta.jpg" alt='about food' className='img-fluid about_img ' />                                    <div class="card-body">
                                        <h5 class="card-title">Pasta</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-12 col-xxl-3'>
                                <div class="card">
                                    <img src="../../images/salad.jpg" alt='about food' className='img-fluid about_img' />                                    <div class="card-body">
                                        <h5 class="card-title">Salad</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-12 col-xxl-3 mx-auto'>
                                <div class="card">
                                    <img src="../../images/tomato.jpg" alt='about food' className='img-fluid about_img ' />                                    <div class="card-body">
                                        <h5 class="card-title">Tomato Special</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-12 col-xxl-3'>
                                <div class="card">
                                    <img src="../../images/tasty.jpg" alt='about food' className='img-fluid about_img ' />                                    <div class="card-body">
                                        <h5 class="card-title">Tasty Tikka</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>




                <section className='main_heading my-5 '>
                    <div className='text-center'>
                        <h2 className='display'>Key Features</h2>
                        <hr className='w-25 mx-auto' />
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3 col-md-3 col-sm-12 col-xxl-3'>
                                <div class="card" data-aos="zoom-in-up" data-aos-offset="200">
                                    <img src="../../images/f7.png" alt='about food' className='img-fluid about_img img-responsive' />                                    <div class="card-body">
                                        <h5 class="card-title">Healthy Diet Planning</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-12 col-xxl-3'>
                                <div class="card" data-aos="zoom-in-down" data-aos-offset="200">
                                    <img src="../../images/f2.png" alt='about food' className='img-fluid about_img img-responsive' />                                    <div class="card-body">
                                        <h5 class="card-title">Diets and Nutrients</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-12 col-xxl-3 mx-auto'>
                                <div class="card" data-aos="zoom-in-left" data-aos-offset="200">
                                    <img src="../../images/f3.png" alt='about food' className='img-fluid about_img img-responsive' />                                    <div class="card-body">
                                        <h5 class="card-title">Beautiful Design</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-12 col-xxl-3'>
                                <div class="card" data-aos="zoom-in-right" data-aos-offset="200">
                                    <img src="../../images/f4.png" alt='about food' className='img-fluid about_img img-responsive' />                                    <div class="card-body">
                                        <h5 class="card-title">Digital Tracker</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                {/* --------------------------------------------------------------------- */}

                {/* ----------------------------------------------------------------------- */}


                <section class="home-testimonial">
                    <div class="row d-flex justify-content-center ">
                        <div class="col-md-12 d-flex justify-content-center">
                            <h3 >Testimonials</h3>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center">
                            <h2>Explore the users experience</h2>
                        </div>
                    </div>
                    <div class="container-fluid">

                        <section class="home-testimonial-bottom">
                            <div class="container testimonial-inner">
                                <div class="row d-flex justify-content-center">
                                    <div class="col-md-4 style-3">
                                        <div class="tour-item ">
                                            <div class="tour-desc bg-white">
                                                <div class="tour-text color-grey-3 text-center">“LOST 71 LB (35%) AND MAINTAINED
                                                    AFTER 492 DAYS.”</div>
                                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg" alt="" /></div>
                                                <div class="link-name d-flex justify-content-center">Balbir Kaur</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 style-3">
                                        <div class="tour-item ">
                                            <div class="tour-desc bg-white">
                                                <div class="tour-text color-grey-3 text-center">“LOST 71 LB (35%) AND MAINTAINED
                                                    AFTER 492 DAYS.”</div>
                                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                                                <div class="link-name d-flex justify-content-center">Maria</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 style-3">
                                        <div class="tour-item ">
                                            <div class="tour-desc bg-white">
                                                <div class="tour-text color-grey-3 text-center">“LOST 71 LB (35%) AND MAINTAINED
                                                    AFTER 492 DAYS.”</div>
                                                <div class="d-flex justify-content-center pt-2 pb-2"><img class="tm-people" src="https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                                                <div class="link-name d-flex justify-content-center">Julie</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>



















            </Container>

        </>
    )
}

export default Homescreen
