import React, { useEffect, useState } from 'react';
import useProduct from '../../useProduct/useProduct';
import Course from '../Course/Course';
import './Courses.css'

const Courses = (props) => {
    const [products] = useProduct([]);
   
    return (
        <div className=''>
            <h1>Thi is courses {products.length}</h1>
            <div className='courses-container'>
            {
                products.map(product => <Course
                product={product}
                ></Course>)
            }
            </div>
        </div>
    );
};

export default Courses;