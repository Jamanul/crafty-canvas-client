import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../FirebaseAuth/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const {createUser,user,setUser,updateUser,loading}=useContext(AuthContext)
    console.log(createUser)
    const handleRegister=(e)=>{
        e.preventDefault()
        const form = e.target;
        const name =form.name.value
        const photoUrl =form.photoUrl.value
        const email =form.email.value
        const password =form.password.value;
        if(password.length<6){
            toast.error('password must be 6 characters long')
            return 
        }
        if(!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)){
            toast.error('password must have an uppercase character and a lowercase character')
        }
        createUser(email,password,name,photoUrl)
        .then(result=>{console.log(result.user)
            updateUser(name,photoUrl)
            if (loading) {
                return (
                  <div className="min-h-screen flex items-center justify-center">
                    <span className="loading loading-spinner loading-lg"></span>
                  </div>
                );
              }
              setUser({...user,displayName:name,photoURL:photoUrl})
        
        toast.success("Account created successfully.")
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className='rounded-3xl' src="https://i.ibb.co/r4Kpgnb/4-HFr9r-TGZ.jpg" alt="4-HFr9r-TGZ" border="0"/>
          </div>
          <div className="card rounded-3xl shrink-0 w-full py-[58px] max-w-lg bg-base-200">
            <h1 className="text-5xl text-center text-[#A55E3F] font-bold">Register your account!</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-[#A55E3F] label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input text-[#A55E3F] bg-[#A55E3F1A] input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-[#A55E3F] label-text">Photo Url</span>
                </label>
                <input type="text" name='photoUrl' placeholder="Photo Url" className="input text-[#A55E3F] bg-[#A55E3F1A] input-bordered" required />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#A55E3F]">Register</button>
              </div>
            </form>
            <div>
                  <p className='text-[#A55E3F] ml-8'>Already have an account? <Link className='font-bold' to='/login'>Click here to log in.</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;