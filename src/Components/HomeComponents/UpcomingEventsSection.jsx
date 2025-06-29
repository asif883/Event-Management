import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const events = [
  {
    title: 'Startup Founders Meetup 2025',
    date: 'July 18, 2025',
    location: 'Banani, Dhaka',
  },
  {
    title: 'Creative Marketing Summit',
    date: 'August 3, 2025',
    location: 'Online Event',
  },
  {
    title: 'Wedding Planner Workshop',
    date: 'August 10, 2025',
    location: 'Bashundhara, Dhaka',
  },
];

const UpcomingEventsSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Events</h2>
        <p className="text-gray-600 mb-12">Here are a few sample events happening soon!</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border border-gray-100"
            >
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                <FaCalendarAlt className="text-teal-500" /> {event.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <FaMapMarkerAlt className="text-teal-500" /> {event.location}
              </div>
              <button className="mt-auto bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm cursor-pointer">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
