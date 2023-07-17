import React from 'react';
import image from '../../../image/car-banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero md:my-24 mt-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={image} alt='' className="w-full h-[300px] md:h-[380px] md:w-1/2 rounded-lg shadow-2xl" />
                <div className='md:w-1/2 w-full text-justify pr-10'>
                    <h1 className=" text-xl md:text-5xl font-bold">Welcome to our market</h1>
                    <p className="py-6 text-justify">We think, since you have entered our website. That means you will buy some kind of car. Don't stress yourself out. Because we are with you. You can take whatever you need.</p>
                    <Link to={'/products'} className="btn btn-active items-cards text-black font-bold w-full md:w-52">Get your product</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;