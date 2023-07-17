import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const naveigate = useNavigate();

    const handelSubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(res =>{
            const user = res.user;
            console.log(user)
            toast.success('successfull you Register !!!!!!!!')
            form.reset();
            naveigate('/')
        })
        .catch(error => {
            toast.error(error.massage)
        })
        
    }


    return (
        <div className='md:my-20'>
            <h1 className='text-center font-bold text-2xl'>Register</h1>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                    </div>
                    <form onSubmit={handelSubmit} className="card flex-shrink-0 w-full md:w-96 items-cards bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input required type="text" name='name' placeholder="name" className="input required border-gray-900" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Url</span>
                                </label>
                                <input required type="url" name='image' placeholder="url" className="input required border-gray-900" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="email" name='email' placeholder="email" className="input required border-gray-900" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" name='password' placeholder="password" className="input required  border-gray-900" />
                            </div>
                            <p>Have you registered once? : <Link to={'/login'} className='font-bold'>Longi</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn items-cards">Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;