import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDeleteProductMutation } from '../../features/Api/ApiSlice';

const Product = ({ items }) => {

    const { image, name, price, id, model } = items;
    const navigate = useNavigate()

    const [deleteProduct, { isSuccess, isLoading, isError }] = useDeleteProductMutation();

    const handleDelete = () => {
        if (id) deleteProduct(id)
    };

    useEffect(() => {
        if (isSuccess) navigate('/products')
    }, [isSuccess, navigate])

    return (
        <div>
            <div className="card md:w-full w-96 h-full bg-base-100 items-cards">
                <figure><img src={image} className=' h-48 w-60' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Name : {name}</h2>
                    <div className='flex justify-between mt-3'>
                        <p><span className='font-bold'>Model</span> : {model}</p>
                        <p><span className='font-bold'>Price</span> : {price}</p>
                    </div>
                    {/* <p className='mt-4'> <span className='font-bold'>Description</span> : {Description}</p> */}
                    <div className="card-actions justify-end mt-3">
                        <Link to={`/products/edit/${id}`} className="btn edit-items mr-1 text-black font-bold">Edit</Link>
                        <button onClick={handleDelete} className=" delete-items btn  mr-12 text-black font-bold"> Delete</button>
                        <button className="btn items-cards  text-black font-bold">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;