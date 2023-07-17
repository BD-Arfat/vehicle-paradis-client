import React, { useEffect, useState } from 'react';
import { useEditProductMutation } from '../../features/Api/ApiSlice';
import EditsProducts from './EditsProducts';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Form = ({product} ) => {

    const { id, name: initialName,
        model: initialModel,
        image: initialImage,
        price: initialPrice,
        Description: initialDescription,
        tag: initialTag, } = product;

        const navigate = useNavigate()

    const [editProduct, { data: editedProduct, isLoading, isError, isSuccess }] = useEditProductMutation()

    const [name, setName] = useState(initialName);
    const [model, setModel] = useState(initialModel);
    const [image, setImage] = useState(initialImage);
    const [price, setPrice] = useState(initialPrice);
    const [Description, setDescription] = useState(initialDescription);
    const [tag, setTag] = useState(initialTag);

    

    const handleSubmit = (e) => {
        e.preventDefault();
        editProduct({
            id: id,
            data: {
                name,
                model,
                image,
                price,
                Description,
                tag
            },
    
        });
    }

    useEffect(() => {
        if (isSuccess) navigate('/products');
    }, [isSuccess, navigate])


    return (
        <form method='POST' onSubmit={handleSubmit} className="card mx-auto mb-10 mt-10 flex-shrink-0 md:w-9/12 shadow-2xl bg-base-100">
            <div className="card-body">
                {/* 1 */}
                <div className='md:flex md:justify-between md:items-center'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="name" className="input input-bordered input-primary md:w-96" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Model</span>
                        </label>
                        <input type="number" value={model} onChange={(e) => setModel(e.target.value)} required placeholder="model" className="input input-bordered input-primary md:w-96" />
                    </div>
                </div>
                {/* 2 */}
                <div className='md:flex md:justify-between md:items-center'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required placeholder="image" className="input input-bordered input-primary md:w-96" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required placeholder="price" className="input input-bordered input-primary md:w-96" />
                    </div>
                </div>
                {/* 3 */}
                <div className='md:flex md:justify-between md:items-center'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)} required placeholder="description" className="input input-bordered input-primary md:w-96" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tag</span>
                        </label>
                        <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} required placeholder="tag" className="input input-bordered input-primary md:w-96" />
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