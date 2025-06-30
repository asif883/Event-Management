import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { RxCross2 } from "react-icons/rx";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    axios.get('http://localhost:5000/events')
    .then((res) => {
      setEvents(res.data);
    });
  }, []);

  const handleJoin = async (id) => {
    console.log(id);
  };


  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-10 text-center">All Events</h1>

      {/* search by title */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        <input
          type="text"
          placeholder="Search by title"
          className="border rounded px-3 py-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* search by date */}
        <input
         type="date"
         className="border rounded px-3 py-2"
        />

        {/* select filer */}
        <select
          className="border rounded px-3 py-2"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="" selected disabled>Select a Date Range</option>
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="thisWeek">This Week</option>
          <option value="lastWeek">Last Week</option>
          <option value="thisMonth">This Month</option>
          <option value="lastMonth">Last Month</option>
        </select>

        {/* clear all */}
        <button className='flex items-center justify-center gap-1 border py-2 cursor-pointer rounded'>Clear Filters <RxCross2 size={18}/></button>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event._id} className="border border-gray-200 p-5 rounded shadow bg-teal-50">
            <h2 className="text-xl font-semibold">{event.title}</h2>
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
            <button
              onClick={() => handleJoin(event._id)}
              className={`mt-3 px-4 py-2 rounded bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-50 cursor-pointer`}
            >
                Join Event
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
