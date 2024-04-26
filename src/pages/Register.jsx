import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className='rounded-3xl' src="https://i.ibb.co/r4Kpgnb/4-HFr9r-TGZ.jpg" alt="4-HFr9r-TGZ" border="0"/>
          </div>
          <div className="card rounded-3xl shrink-0 w-full py-[58px] max-w-lg bg-base-200">
            <h1 className="text-5xl text-center text-[#A55E3F] font-bold">Register your account!</h1>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-[#A55E3F] label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" className="input text-[#A55E3F] bg-[#A55E3F1A] input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-[#A55E3F] label-text">Photo Url</span>
                </label>
                <input type="text" placeholder="Photo Url" className="input text-[#A55E3F] bg-[#A55E3F1A] input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-[#A55E3F] label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" className="input text-[#A55E3F] bg-[#A55E3F1A] input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-[#A55E3F] label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input  text-[#A55E3F] bg-[#A55E3F1A] input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white bg-[#A55E3F]">Login</button>
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