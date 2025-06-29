import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Registration Data:', data);
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-teal-600 mb-6">
          Create Your Planzone Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              placeholder="Your full name"
              className={`w-full px-4 py-2 border rounded-md ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
              })}
              placeholder="you@example.com"
              className={`w-full px-4 py-2 border rounded-md ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                }
              })}
              placeholder="Create a password"
              className={`w-full px-4 py-2 border rounded-md ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium mb-1">Photo URL</label>
            <input
              type="url"
              {...register('photo', {
                required: 'Photo URL is required',
              })}
              placeholder="https://example.com/your-photo.jpg"
              className={`w-full px-4 py-2 border rounded-md ${
                errors.photo ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.photo && (
              <p className="text-red-500 text-xs mt-1">{errors.photo.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-md font-medium transition cursor-pointer"
          >
            Register
          </button>
        </form>

        <p className="text-md text-center mt-4 text-gray-500 font-semibold">
          Already have an account? <Link to={'/login'} className="text-teal-600 hover:underline cursor-pointer">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
