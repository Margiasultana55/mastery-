import React from 'react';
import { Button, Col, FormControl, Image, InputGroup, Row } from 'react-bootstrap';
import logo from '../../image/logo.svg';
import { FaFacebookMessenger, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa';



import './Footer.css'

const Footer = () => {
    return (
        <div>

            <Row>
                <Col xs={6} md={4} className='footer-logo  '>
                    <Image src={logo} className='logo'></Image>
                    <h4 className=' '> mastery</h4>

                </Col>
                <Col xs={6} md={4}>
                    <>
                        <h5 className='mt-5'>Sign up for new Announcements</h5>
                        <InputGroup size="sm" className="mb-3 mt-3">

                            <InputGroup.Text id="inputGroup-sizing-sm" className='email-btn'>email</InputGroup.Text>
                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />

                        </InputGroup>
                        <Button className='my-btn'>submit</Button>


                    </>
                </Col>
                <Col xs={6} md={4} className='mt-5 '>
                    <div className=' social-div'>
                        <div className='pe-3 social-icon'>
                            <FaFacebookMessenger size="2em" />
                        </div>
                        <div className='pe-3 social-icon'>
                            <FaInstagramSquare size="2em" />
                        </div>
                        <div className='pe-3 social-icon'>
                            <FaTwitter size="2em" />
                        </div>
                        <div className='pe-3 social-icon'>

                            <FaYoutube size="2em" />
                        </div>
                    </div>




                </Col>
            </Row>

            <div className='footer mt-5'>
                <p className='mt-2'>Copyright mastery Ltd 2021. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;