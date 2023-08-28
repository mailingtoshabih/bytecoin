import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { UserAuth } from '../context/Authcontext';
import { Toast } from './Toast';





export const Signup = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {signUp} = UserAuth();

    


    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await signUp(email, password)
            navigate('/accountpage')
            navigate('/accountpage')
        } catch (e) {
            setError(e.message);
        }
    }





    return (
        <div className="max-w-[700px] mx-auto my-16 p-4">

            <div>
                <h1 className="text-3xl py-2">Sign up with Email</h1>
                {error ? <Toast e={error}/> : null}
            </div>


            <form>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Email</label>
                    <input className='border p-3 rounded' type="email" onChange={onChangeEmail} />
                </div>

                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Set Password</label>
                    <input className='border p-3 rounded' type="password" onChange={onChangePassword} />
                </div>


                <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 my-4 rounded-full'
                onClick={handleSubmit}>Sign up</button>

            </form>



            <div className="py-2">Already have an account ?
                <Link to='/signin'>
                    <p className='text-indigo-600'>Sign in</p>
                </Link>
            </div>

        </div>
    )
}
