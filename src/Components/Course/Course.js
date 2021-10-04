import React from 'react';

import './Course.css'


const Course = (props) => {
    const { name, description, time, cost, picture } = props.course;
    return (
        <>

            <div className='course mt-5 m-4 p-4'>
                <img className='con-img' src={picture} alt="" srcset="" />
                <h4 className='mt-4'> {name}</h4>

                <p><small>{description}</small></p>
                <h5><small>{time}</small></h5>
                <h4 className='cost'>Cost: ${cost}</h4>



            </div>

        </>
    );
};

export default Course;