import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Home = () => {
    const [products, setProducts] = useState([])
    
    useEffect( () => {
        fetch('./education.json')
            .then(res => res.json())
            .then(data => setProducts(data.slice(5,8)))
    },[])
    return (
        <div>
            <h1>This is home</h1>
            <div className='courses-container'>
                {
                    products.map(product => <Course
                    key={product._id}
                    product={product}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Home;