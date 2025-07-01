import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { RxCross2 } from "react-icons/rx";
import useAuth from '../Hooks/useAuth';

const Events = () => {
  const {user} = useAuth()

  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedDate, setSelectedDate] = useState('');

  const fetchEvents = async () => {
    try {
      let url = 'http://localhost:5000/events';
      const queryParams = [];

      if (searchTerm) {
        queryParams.push(`title=${encodeURIComponent(searchTerm)}`);
      }

      if (filter && filter !== 'all') {
        queryParams.push(`filterType=${filter}`);
      }

      if (selectedDate) {
        const start = dayjs(selectedDate).startOf('day').toISOString();
        const end = dayjs(selectedDate).endOf('day').toISOString();
        queryParams.push(`startDate=${start}`);
        queryParams.push(`endDate=${end}`);
      }

      if (queryParams.length > 0) {
        url += `?${queryParams.join('&')}`;
      }

      const res = await axios.get(url);
      setEvents(res.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [searchTerm, filter, selectedDate]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setFilter('all');
    setSelectedDate('');
  };

  const handleJoin = async (id) => {
  
     try {
       const res = await axios.patch(`http://localhost:5000/events/join/${id}`, {email: user?.email})
       console.log(res.data);
       fetchEvents()

     } catch (error) {
       console.log(error);
     }
    
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 mb-16">
      <h1 className="text-3xl font-bold mb-10 text-center">All Events</h1>

      {/* filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search by title"
          className="border border-gray-400 font-semibold focus:outline-1 focus:outline-teal-100 rounded px-3 py-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <input
          type="date"
          value={selectedDate}
          className="border border-gray-400 font-semibold focus:outline-1 focus:outline-teal-100 rounded px-3 py-2"
          onChange={(e) => setSelectedDate(e.target.value)}
        />

        <select
          value={filter}
          className="border border-gray-400 font-semibold focus:outline-1 focus:outline-teal-100 rounded px-3 py-2"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="current_week">Current Week</option>
          <option value="last_week">Last Week</option>
          <option value="current_month">Current Month</option>
          <option value="last_month">Last Month</option>
        </select>

        <button
          onClick={handleClearFilters}
          className="flex items-center justify-center gap-1 border border-gray-400 font-semibold focus:outline-1 focus:outline-teal-100 py-2 cursor-pointer rounded hover:bg-gray-100"
        >
          Clear Filters <RxCross2 size={18} />
        </button>
      </div>

      {/* event card */}
      {events.length === 0 ? (
        <p className=" flex items-center justify-center min-h-screen text-red-600 text-lg font-semibold">No events found that matching your criteria.</p>
      ) : (
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
                disabled={event.joinedUsers?.includes(user?.email)}
                onClick={() => handleJoin(event._id)}
                className={`mt-3 px-4 py-2 rounded  ${
                  event.joinedUsers?.includes(user?.email)
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-teal-600 hover:bg-teal-700 cursor-pointer'
                } text-white`}
                >
                {event.joinedUsers?.includes(user?.email) ? 'Joined' : 'Join Event'}
            </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
