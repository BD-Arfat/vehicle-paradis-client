import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div>
            <div className="card md:w-full w-96 h-full bg-base-100 items-cards">
                <figure><img src='' className=' h-48 w-60' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Name </h2>
                    <div className='flex justify-between mt-3'>
                        <p><span className='font-bold'>Model</span></p>
                        <p><span className='font-bold'>Price</span> </p>
                    </div>
                    {/* <p className='mt-4'> <span className='font-bold'>Description</span> : {Description}</p> */}
                    <div className="card-actions justify-end mt-3">
                        <Link className="btn edit-items mr-1 text-black font-bold">Edit</Link>
                        <button  className=" delete-items btn  mr-12 text-black font-bold"> Delete</button>
                        <button className="btn items-cards  text-black font-bold">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;