import React, { useState } from 'react';
import Products from '../Products/Products';
import { useDispatch, useSelector } from 'react-redux';
import {searched} from '../../features/Filters/FilterSlices'

const Inputs = () => {
    const dispatch = useDispatch()
    const {search} = useSelector(state => state.filter)
    const [input, setInput] = useState(search);

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(searched(input))
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit} className='ms-3'>
                    <input onChange={(e)=> setInput(e.target.value)}  type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:w-96 " />
                </form>
        </div>
    );
};

export default Inputs;