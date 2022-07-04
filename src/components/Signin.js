import { Link, useNavigate } from 'react-router-dom';
import { signIn, UserAuth } from '../context/Authcontext'
import { useState } from 'react';
import { Toast } from './Toast';






// ============================================================================





export const Signin = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { signIn } = UserAuth()

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
      await signIn(email, password)
      navigate('/accountpage')
    } catch (e) {
      setError(e.message);
    }
  }








// ==================================================================================================



  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">

      <div>
        <h1 className="text-3xl py-2">Sign in to your account</h1>
        {error ? <Toast e={error}/> : null}
        
      </div>


      <form>

        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email</label>
          <input className='border p-3 rounded' type="email" onChange={onChangeEmail} />
        </div>

        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input className='border p-3 rounded' type="password" onChange={onChangePassword} />
        </div>

        <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 my-4 rounded-full'
          onClick={handleSubmit}>Sign in</button>

      </form>

      <div className="py-2">
        Don't have an account ? <Link to='/signup'><p className='text-indigo-600'>Sign up</p></Link>
      </div>


    </div>
  )
}
