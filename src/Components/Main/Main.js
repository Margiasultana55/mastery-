import React, { useState, useEffect } from 'react';

import { Image } from 'react-bootstrap';
import cover from '../../image/cover.jpg'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Main = () => {
    const [courses, setcourses] = useState([]);
    useEffect(() => {
        fetch('./fake.JSON')
            .then(res => res.json())
            .then(data => setcourses(data.slice(0, 4)));
    }, [])

    return (
        <div>
            <Header />
            <Image className='w-100' src={cover} fluid />
            <h1 className='mt-5'>FEATURED COURSES</h1>
            <hr className='mx-auto hr mb-4 ' />

            <div className='course-container'>


                {
                    courses.map(course => <div className='course mt-5 m-4 p-4'>
                        <img className='con-img' src={course.picture} alt="" srcset="" />
                        <h4 className='mt-4'> {course.name}</h4>

                        <p><small>{course.description}</small></p>
                        <h5><small>{course.time}</small></h5>
                        <h4 className='cost'>Cost: ${course.cost}</h4>



                    </div>)

                }

            </div>
            <hr />
            <Footer></Footer>
        </div>

    );
};

export default Main;