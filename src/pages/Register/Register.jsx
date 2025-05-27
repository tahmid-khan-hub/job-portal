import Lottie from "lottie-react";
import React, { use } from "react";
import registerLottie from '../../assets/lotties/register.json'
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {

    const {createuser} = use(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        createuser(email, password)
            .then(res =>{
                console.log(res.user);
            })
            .catch(err =>{
                console.log(err);
            })

    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          
          <Lottie style={{width: '200px'}} animationData={registerLottie} loop={true}></Lottie>
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
