import React from 'react';
import Product from './Product';
import { useGetProductsQuery } from '../../features/Api/ApiSlice';
import Inputs from '../Input/Inputs';

const Products = (props) => {


    const { data: products, isLoading, isError } = useGetProductsQuery();

    const filteredData = products?.filter((el) => {
        //if no input the return the original
        if (props?.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(props?.input)
        }
    })

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
        content = filteredData.map(items => <Product key={
            items.id
        } items={items} item={items.name}/>)
    }

    return (
        <div>
            {/* <div className='mt-10'>
                <Inputs/>
            </div> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:my-20 md:w-11/12 md:mx-auto'>
                {content}
            </div>
        </div>
    );
};

export default Products;