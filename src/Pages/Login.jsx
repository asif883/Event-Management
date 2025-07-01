import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {
  const { login , googleLogin } = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email 
    const password = data.password 
    login(email, password)
    .then(() => {
      Swal.fire({
          title: 'Success!',
          text: 'Login Successful',
          icon: 'success',
          confirmButtonText: 'Ok',
          confirmButtonColor: '#009689'
        }).then(()=> {
          navigate(location?.state ? location?.state : '/');
        })
        
             
    })
    .catch (error =>{
    console.error( error)
    Swal.fire({
        title: 'Error!',
        text: `${error.message}`,
        icon: 'error',
        confirmButtonText: 'Try again',
        confirmButtonColor: '#009689'
        })
    })
  };

  const handleGoogleLogin =  () => {
      googleLogin()
      .then( res => {
            const name = res?.user?.displayName
            const email = res?.user?.email
            const photoURL = res?.user?.photoURL
            const userInfo= {
                name,
                email,
                photoURL
              }
              axios.post('https://event-management-server-blond.vercel.app/add-user', userInfo)
              .then(() => {
                Swal.fire({
                  title: 'Success!',
                  text: 'Login Successful',
                  icon: 'success',
                  confirmButtonText: 'Ok',
                  confirmButtonColor: '#009689'
                  }).then(()=> {
                    navigate(location?.state ? location?.state : '/');
                  })
              })
      })
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-teal-600 mb-6">Login to Planzone</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
              })}
              placeholder="you@example.com"
              className={`w-full px-4 py-2 border rounded-md focus:outline-1 focus:outline-teal-700 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
              })}
              placeholder="Enter your password"
              className={`w-full px-4 py-2 border rounded-md focus:outline-1 focus:outline-teal-700 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md font-medium transition cursor-pointer"
          >
            Login
          </button>
        </form>

        
        <div className="my-4 text-center text-sm text-gray-400">or</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-2 rounded-md hover:shadow-md transition cursor-pointer"
        >
          <FcGoogle size={20} /> Continue with Google
        </button>

        <p className="text-sm text-center mt-4 text-gray-500">
          Don’t have an account? <Link to={'/sign-up'} className="text-teal-600 hover:underline cursor-pointer">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
