import React from 'react';
import Inputs from '../Input/Inputs';
import Products from '../Products/Products';
import Tags from '../Tags/Tags';

const ProductsPages = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-4xl mt-7'>Below are all our products</h1>
            <div className='flex justify-between mx-20 mt-11'>
                <div className="">
                <Tags />
                </div>
                <div className='mt-4'>
                    <Inputs />
                </div>
            </div>
            <div className='mt-20'>
                <Products />
            </div>
        </div>
    );
};

export default ProductsPages;