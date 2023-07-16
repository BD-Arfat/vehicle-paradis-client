import React from 'react';
import image1 from '../../../image/car-1.webp'
import image2 from '../../../image/car-2.webp'
import image3 from '../../../image/car-3.jpg'
import image4 from '../../../image/car-4.jpg'
import image5 from '../../../image/car-5.jpg'
import image6 from '../../../image/car-6.jpg'
import '../../../../src/App.css'


const items = [
    {
        "name": 'Toyota',
        "image":  image1,
        "price": 9550000
    },
    {
        "name": 'Hyundai',
        "image":  image2 ,
        "price": 9520000
    },
    {
        "name": 'Volkswagen',
        "image":  image3 ,
        "price": 9570000
    },
    {
        "name": 'Cadillac',
        "image":  image4 ,
        "price": 9540000
    },
    {
        "name": 'Honda',
        "image":  image5 ,
        "price": 9500000
    },
    {
        "name": 'Land Rover',
        "image":  image6 ,
        "price": 9510000
    },
]


const SellProduct = () => {
    return (
        <div>
            <h1 className='md:mt-24 text-center font-bold md:text-5xl'>The products we sell</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-20 mt-20 md:w-11/12 md:mx-auto'>
                {
                    items.map(item => <>
                        <div  className="card w-full  md:w-96 md:h-[270px]  bg-base-100 s border-2 item-card ">
                            <figure className="px-10 pt-10">
                                <img src={item.image} alt="Shoes" className="rounded-3xl mt-5 md:h-[100px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.name}</h2>
                                <p>{item.price}$</p>
                            </div>
                        </div>
                    </>)
                }
            </div>

        </div>
    );
};

export default SellProduct;