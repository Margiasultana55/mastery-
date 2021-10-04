import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import learning from '../../image/learning.svg'
import certificate from '../../image/certificate.svg'
import track from '../../image/track.svg'
import ask from '../../image/question.svg'
import info from '../../image/info.svg'
import aid from '../../image/aid.svg'
import policy from '../../image/policy.svg'
import student from '../../image/student.svg'
import com from '../../image/community.svg'
import './Info.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Info = () => {
    return (
        <div>
            <Header />
            <div className='mb-5'>
                <h4 className='info mb-2'>HOW IT WORKS</h4>
                <hr className='mx-auto hr mb-4 ' />
                <Row className='m-2 mt-5'>
                    <Col xs={6} md={4}>
                        <Image className='logo' src={learning}></Image>
                        <h5 className='info-text  mt-3 mb-4'>Learning Experience</h5>

                        <p> Our programs are designed to bring the Harvard Business School classroom to you. Find out how.</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className='logo' src={certificate}></Image>
                        <h5 className='info-text mb-4 mt-3'>Certificates, Credentials and Credits</h5>

                        <p> We offer multiple ways to learn vital business concepts. Discover which option is best for you.</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image className='logo' src={track}></Image>
                        <h5 className='info-text mb-4 mt-3'>Learning Tracks</h5>

                        <p> Gain deeper insights and expertise with this advanced certificate.</p>
                    </Col>
                </Row>
            </div>
            <div>
                <h4 className='info mb-2'>NEED HELP?</h4>
                <hr className='mx-auto hr mb-3' />
                <Row className='m-2 mt-5 '>

                    <Col xs={6}><Image className='logo' src={ask}></Image>
                        <h5 className='info-text mb-4 mt-3'>Frequently Asked Questions</h5>

                        <p> Get answers to your questions about admissions, grading, and more.</p></Col>
                    <Col xs={6}><Image className='logo' src={info}></Image>
                        <h5 className='info-text mb-4 mt-3'>Request More Information</h5>

                        <p> Learn more about specific programs, or sign up for news and updates from MS Online.</p></Col>
                </Row>
                <Row className='m-2 mt-5'>

                    <Col xs={6}><Image className='logo' src={aid}></Image>
                        <h5 className='info-text mb-4 mt-3'>Payments and Financial Aid</h5>

                        <p> Explore payment methods, scholarships, financial aid, and more.</p></Col>
                    <Col xs={6}><Image className='logo' src={policy}></Image>
                        <h5 className='info-text mb-4 mt-3'>Policies</h5>

                        <p>Get details on academics, accommodations, changing your program status, and more.</p></Col>
                </Row>
            </div>
            <div>
                <h4 className='info mb-2'>CONNECT</h4>
                <hr className='mx-auto hr mb-3' />
                <Row className='m-2 mt-5 '>

                    <Col xs={6}><Image className='logo' src={student}></Image>
                        <h5 className='info-text mb-4 mt-3 '>Student Stories</h5>

                        <p>Participants share their firsthand experiences with MS Online.</p></Col>
                    <Col xs={6}><Image className='logo' src={com}></Image>
                        <h5 className='info-text mb-4 mt-3'>Community</h5>

                        <p className='mb-5'> Network with HBS Online learners and other business-minded professionals in cities worldwide.</p></Col>
                </Row>
            </div>
            <hr />
            <Footer></Footer>
        </div>
    );
};

export default Info;