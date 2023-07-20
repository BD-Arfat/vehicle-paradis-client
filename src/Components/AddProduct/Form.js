import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddProductMutation } from '../../features/Api/ApiSlice';

const Form = () => {

    const [addProduct, {isError, isSuccess, isLoading}] = useAddProductMutation();
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [model, setModel] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [Description, setDescription] = useState('');
    const [tags, setTag] = useState('');

    const resetForm = () =>{
        setDescription('');
        setImage('');
        setModel('');
        setName('');
        setPrice('');
        setTag('');
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addProduct({
            name,
            model,
            image,
            price,
            Description,
            tags
        });
        console.log(addProduct)
        resetForm();
    }

    useEffect( ()=>{
        if(isSuccess) navigate('/products')
    } ,[isSuccess, navigate])

    return (
        <form method='POST' onSubmit={handleSubmit} className="card mx-auto mb-10 mt-10 flex-shrink-0 md:w-9/12 shadow-2xl bg-base-100">
            <div className="card-body">
                {/* 1 */}
                <div className='md:flex md:justify-between md:items-center'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required placeholder="name" className="input input-bordered input-primary md:w-96" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Model</span>
                        </label>
                        <input type="number" value={model} onChange={(e)=>setModel(e.target.value)} required placeholder="model" className="input input-bordered input-primary md:w-96" />
                    </div>
                </div>
                 {/* 2 */}
                 <div className='md:flex md:justify-between md:items-center'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} required placeholder="image" className="input input-bordered input-primary md:w-96" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} required placeholder="price" className="input input-bordered input-primary md:w-96" />
                    </div>
                </div>
                {/* 3 */}
                <div className='md:flex md:justify-between md:items-center'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <input type="text" value={Description} onChange={(e)=>setDescription(e.target.value)} required placeholder="description" className="input input-bordered input-primary md:w-96" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tag</span>
                        </label>
                        <input type="text" value={tags} onChange={(e)=>setTag(e.target.value)} required placeholder="tag" className="input input-bordered input-primary md:w-96" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button disabled={isLoading} className="btn btn-neutral font-bold text-white">Save</button>
                </div>
            </div>
            {
                isSuccess && <p className='bg-green-700 w-full fon-bold text-white p-4 text-xl'>Your product has been successfully added</p>
            }
            {
                isError && <p className='bg-red-700 w-full fon-bold text-white p-4 text-xl'>For some reason your product is not being added</p>
            }
        </form>
    );
};

export default Form;