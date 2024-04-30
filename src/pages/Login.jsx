import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../FirebaseAuth/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const {signInUser,loginGoogle,loginGithub}=useContext(AuthContext)
    const navigate =useNavigate()
    const location =useLocation()
    const handleSignIn =(e)=>{
        e.preventDefault()
        const form = e.target;
        const email =form.email.value;
        const password =form.password.value;
        console.log(email,password)
        signInUser(email,password)
        .then(result=>{console.log(result.user)
        toast.success('Logged in successfully')
        navigate(location.state || '/')
        })
        .catch(error=>{console.log(error)
        toast.error('Use right credential')
        })
    }
  const handleGoogleSignIn=()=>{
    loginGoogle()
    .then(result=>{console.log(result.user)
      toast.success('Logged in successfully')
      navigate(location.state || '/')
      })
      .catch(error=>{console.log(error)
      toast.error('Use right credential')
      })
  }
  const handleGithubSignIn=()=>{
    loginGithub()
    .then(result=>{console.log(result.user)
      toast.success('Logged in successfully')
      navigate(location.state || '/')
      })
      .catch(error=>{console.log(error)
      toast.error('Use right credential')
      })
  }
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content  flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img className='rounded-3xl' src="https://i.ibb.co/r4Kpgnb/4-HFr9r-TGZ.jpg" alt="4-HFr9r-TGZ" border="0"/>
    </div>
    <div className="card rounded-3xl shrink-0 w-full py-[40px] max-w-sm bg-base-200">
      <h1 className="text-5xl text-center text-[#A55E3F] font-bold">Login now!</h1>
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="text-[#A55E3F] label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="Email" className="input text-[#A55E3F] bg-[#A55E3F1A] input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="text-[#A55E3F] label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input  text-[#A55E3F] bg-[#A55E3F1A] input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt text-[#A55E3F] link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-[#A55E3F]">Login</button>
        </div>
      </form>
      <div className='flex px-8 justify-between mb-4'>
      <button onClick={handleGoogleSignIn} className="btn text-white bg-[#A55E3F]">Google</button>
      <button onClick={handleGithubSignIn} className="btn text-white bg-[#A55E3F]">Github</button>
      </div>
      <div>
            <p className='text-[#A55E3F] ml-8'>New here? <Link className='font-bold' to='/register'>Click here to Register</Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;