import React, { useState } from 'react';
import Products from '../Products/Products';

const Inputs = () => {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div>
            <div className='mt-10'>
                <input onChange={inputHandler} type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:w-96 " />
            </div>
            <div>
                <Products input={inputText}/>
            </div>
        </div>
    );
};

export default Inputs;