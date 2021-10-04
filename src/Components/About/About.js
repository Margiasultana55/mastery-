import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import img from '../../image/about.jpg'
import teacher from '../../image/about1.svg'
import member from '../../image/about2.svg'
import employe from '../../image/about3.svg'
import student from '../../image/student.jpg'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css'

const About = () => {
    return (


        <div className='my'>
            <Header />
            <div>
                <Image className='img-fluid' src={img}>

                </Image>

            </div>
            <div className='container mt-3 mb-5 about-text p-5 '>
                <h3 className='mt-5 text-center mb-2  '>OUR VISION</h3>
                <hr className='mx-auto vision mb-4' />
                <p>
                    Mastery Online launched as MS in 2014 to deepen the School’s impact and broaden its reach, all while staying true to the MS mission: to educate leaders who make a difference in the world. The nuance? Now we could reach those leaders wherever they are—in the world, in their careers, and in their lives.Since, MS Online has educated 100,000-plus learners from more than 175 countries via our innovative online platform.We achieve this through a learning model that is active, social, and case-based. Meaning, you immerse yourself in real-world challenges facing seasoned business leaders and discuss and debate solutions with peers from around the world—all while learning from mastery. It’s an online  education like no other.
                </p>

            </div>
            <div className='container mb-5 about-text p-5 '>
                <h3 className=' text-center mb-2'>Inspiring discovery through creativity.</h3>
                <hr className='mx-auto discover mb-5' />
                <p> At Mastery, we’ve seen again and again how the seemingly simple act of creating can be a force for growth, change, and discovery in people’s lives. We want to inspire and multiply the kind of creative exploration that furthers expression, learning and application.
                    Skillshare is an online learning community with thousands of classes for creative and curious people, on topics including illustration, design, photography, video, freelancing, and more. On Skillshare, millions of members come together to find inspiration and take the next step in their creative journey.</p>
            </div>
            <div>
                <h2 className='mt-5 mb-2'>At Skillshare, We Empower:</h2>
                <hr className='mx-auto vision mb-5' />
                <Container>
                    <Row>
                        <Col xs={{ order: 'last' }}>
                            <div className='mt-4'>
                                <img className='about-icon' src={member} alt="" />

                            </div>
                            <h5 className='mt-3'>Members to</h5>
                            <p className=''>Get inspired.
                                Learn new skills.
                                Make discoveries.</p>
                        </Col>
                        <Col xs>
                            <div className='mt-4'>
                                <img className='about-icon' src={teacher} alt="" />
                            </div>
                            <h5 className='mt-3'>Teachers to</h5>
                            <p className=''>Share expertise.
                                Earn money.
                                Give back.</p>

                        </Col>
                        <Col xs={{ order: 'first' }}>
                            <div className='mt-4'>
                                <img className='about-icon' src={employe} alt="" />
                            </div>
                            <h5 className='mt-3'>Employees to</h5>
                            <p className=''>Be curious.
                                Make an impact.
                                Live a full life.</p>
                        </Col>
                    </Row>
                </Container>

            </div>
            <div className='mt-5'>
                <Image src={student}>

                </Image>
            </div>

            <Footer></Footer>


        </div>



    );
};

export default About;