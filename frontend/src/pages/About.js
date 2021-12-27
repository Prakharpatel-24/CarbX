import React from 'react'
import './About.css'
function About() {
    return (
        <div>
            <section className='main_heading my-5 '>
                <div className='text-center'>
                    <h2 className='display'>About Us</h2>
                    <hr className='w-25 mx-auto' />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-12 col-xxl-6'>
                            <figure>
                                <img src="../../images/pasta.jpg" alt='about food' className='img-fluid about_img' style={{ height: '48vh', width: "100%" }} />
                            </figure>
                        </div>
                        <div className='col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-start flex-column'>
                            <h1>My Journey</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <button type="button" className='btn btn-outline-info'>Explore More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
