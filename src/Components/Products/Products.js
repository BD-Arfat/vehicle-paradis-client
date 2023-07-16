import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:my-20'>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
};

export default Products;