import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../../features/Products/ProductSlice';

const Products = () => {


    const dispatech = useDispatch();
    const { products, isError, isLoading } = useSelector((state) => state.products);
    const {tags, search} = useSelector(state=> state.filter)

    useEffect(() => {
        dispatech(fetchproducts({tags, search}))
    }, [dispatech, tags, search])



    let content = null;
    if (isLoading) {
        content = <div>Loding....</div>
    };
    if (!isLoading && isError) {
        content = <p error='There was an error' />
    };
    if (!isLoading && !isError && products?.length === 0) {
        content = <p error='There was not found' />
    }
    if (!isLoading && !isError && products?.length > 0) {
        content = products.map(items => <Product key={
            items.id
        } items={items} item={items.name} />)
    }

    return (
        <div>
            {/* <div className='mt-10'>
                <Inputs/>
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 md:my-20 md:w-11/12 md:mx-auto'>
                {content}
            </div>
        </div>
    );
};

export default Products;