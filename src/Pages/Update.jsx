import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const params = useParams()
      console.log(params?.id);
      const onSubmit = async(data) => {
         const updateData = {
            ...data
         }
         try {
            const res = await axios.patch(`http://localhost:5000/update/${params?.id}`, updateData);
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Event updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#009689'
                })
                reset();
            }
            } catch (error) {
            console.error(error);
            }
         
      }

    return (
    <div className="max-w-4xl mx-auto my-10 px-8 py-12 shadow-md bg-teal-50">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Update Your Event</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Event Title */}
         <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
            <div>
            <label className="font-medium mb-1">Event Title</label>
            <input
                type="text"
                {...register('title', { required: true })}
                className="w-full border border-teal-500 focus:outline-1 focus:outline-teal-700 rounded px-3 py-2"
            />
            {errors.title && <span className="text-red-500">Event Title is required</span>}
            </div>

            {/* Name */}
            <div>
            <label className="font-medium mb-1">Your Name</label>
            <input
                type="text"
                {...register('name', { required: true })}
                className="w-full border border-teal-500 focus:outline-1 focus:outline-teal-700 rounded px-3 py-2"
            />
            {errors.name && <span className="text-red-500">Name is required</span>}
            </div>

            {/* Date and Time */}
            <div>
            <label className="font-medium mb-1">Date and Time</label>
            <input
                type="datetime-local"
                {...register('datetime', { required: true })}
                className="w-full border border-teal-500 focus:outline-1 focus:outline-teal-700 rounded px-3 py-2"
            />
            {errors.datetime && <span className="text-red-500">Date & Time is required</span>}
            </div>

            {/* Location */}
            <div>
            <label className="font-medium mb-1">Location</label>
            <input
                type="text"
                {...register('location', { required: true })}
                className="w-full border border-teal-500 focus:outline-1 focus:outline-teal-700 rounded px-3 py-2"
            />
            {errors.location && <span className="text-red-500">Location is required</span>}
            </div>
         </div>

        {/* Description */}
        <div>
          <label className="font-medium mb-1">Description</label>
          <textarea
            {...register('description', { required: true })}
            className="w-full border border-teal-500 focus:outline-1 focus:outline-teal-700 rounded px-3 py-2"
            rows={4}
          />
          {errors.description && <span className="text-red-500">Description is required</span>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white font-semibold py-2 rounded hover:bg-teal-700 transition cursor-pointer"
        >
          Update Event
        </button>
      </form>
    </div>
    );
};

export default Update;