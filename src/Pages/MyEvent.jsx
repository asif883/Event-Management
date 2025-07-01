import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../Components/Shared/Loading';

const MyEvent = () => {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);
  const [loading , setLoading] = useState(true)

  const fetchData = async () => {
    const token = localStorage.getItem('access-token');
    try {
      const res = await axios.get(`https://event-management-server-blond.vercel.app/event/${user?.email}` , 
        {
          headers: {Authorization: `Bearer ${token}`}
        }
      );
      setEvents(res.data);
      setLoading(false)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchData();
    }
  }, [user?.email]);

  const handleDelete = async (id) => {
     Swal.fire({
      title: "Are you sure?",
      text: "Remove this event? You won't able to revert this!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#009689",
      confirmButtonText: "Yes, remove it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://event-management-server-blond.vercel.app/delete/${id}`)
          .then(() => {
           setEvents(events.filter(item => item._id !== id));
            Swal.fire({
                title: 'Removed!',
                text: "Event has been removed.",
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#009689'
            })
        })
        }
    })

  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">My Events</h1>

      {
         loading ? <Loading/> :
         <>
        {events.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          You haven’t added any events yet. <br />
          <a href="/add-event" className="text-teal-600 underline">Click here to add event</a>.
        </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div key={event._id} className="border border-teal-100 rounded p-5 shadow bg-white">
                <h2 className="text-xl font-semibold text-teal-700">{event.title}</h2>
                <p className="text-sm text-gray-600 mb-1">
                  Posted by: <span className="font-medium">{event.name}</span>
                </p>
                <p className="text-sm">
                  <strong>Date & Time:</strong>{' '}
                  {dayjs(event.datetime).format('DD MMM YYYY, h:mm A')}
                </p>
                <p className="text-sm"><strong>Location:</strong> {event.location}</p>
                <p className="text-sm mt-2">{event.description}</p>
                <p className="text-sm mt-2 text-gray-600 font-medium">
                  Attendees: {event.attendeeCount}
                </p>

                <div className="flex gap-3 mt-4">
                  <Link to={`/update/${event?._id}`} className='px-4 py-1 bg-teal-600 text-white rounded hover:bg-teal-700 cursor-pointer'>
                      Update
                  </Link>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
         </>
      }
    </div>
  );
};

export default MyEvent;
