import React, { useEffect, useState } from 'react';
import './Courses.css'
import Course from '../Course/Course'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


// const image = require('../../image/student.jpg');
const divStyle = {
    width: '100%',
    height: '500px',
    backgroundImage: `url(https://storage-prtl-co.imgix.net/endor/articles/2797/images/1590411501_shutterstock_1721913598_c.jpg?h=480&w=1920&fit=crop&auto=format,compress&q=40)`,
    backgroundSize: 'cover'
};

const Courses = () => {
    const [courses, setcourses] = useState([]);
    useEffect(() => {
        fetch('./fake.JSON')
            .then(res => res.json())
            .then(data => setcourses(data));
    }, [])
    return (
        <div>
            <Header />
            <div>
                <div className="d-flex justify-content-center align-items-center" style={divStyle} >
                    <h5 className='text-white text' >Gain applicable skills,<br /> build new business capabilities, <br /> and tap into the confidence you need to <br /> improve your  organization  and  advance your career.</h5>

                </div>


            </div>
            <h1 className='mt-5'>Online Courses</h1>
            <hr className='mx-auto course-hr mb-4 ' />

            <div className='course-container'>


                {
                    courses.map(course => <Course
                        key={course.key}
                        course={course}


                    ></Course>)

                }

            </div>
            <hr />
            <Footer></Footer>
        </div>
    );
};

export default Courses;