import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../features/Api/ApiSlice';
import Form from './Form';

const EditsProducts = () => {

    const { productId } = useParams();
    const { data: product, isLoading, isError } = useGetProductQuery(productId);

    let content = null;

    if (isLoading) {
        content = <div>Loading...</div>;
    }
    if (!isLoading && isError) {
        content = <p message="There was an error!" />;
    }
    if (!isLoading && !isError && product?.id) {
        content = <Form product={product} />;
    }


    return (
        <div>
            {content}
        </div>
    );
};

export default EditsProducts;