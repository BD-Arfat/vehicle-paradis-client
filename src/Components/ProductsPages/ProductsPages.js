import React from 'react';
import Inputs from '../Input/Inputs';
import Products from '../Products/Products';

const ProductsPages = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-4xl mt-7'>Below are all our products</h1>
            <div className=''>
                
                <div className='mt-4'>
                    <Inputs/>
                </div>
            </div>
            <div className='mt-20'>
                <Products/>
            </div>
        </div>
    );
};

export default ProductsPages;