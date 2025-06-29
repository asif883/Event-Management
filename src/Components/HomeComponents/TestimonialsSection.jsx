import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Afsana Rahman',
    role: 'Event Organizer',
    quote: 'Planzone made planning my conference so smooth! The RSVP tracking is a life-saver.',
  },
  {
    name: 'Tanvir Alam',
    role: 'Corporate Planner',
    quote: 'Beautiful UI and flawless functionality. We managed over 500 attendees with ease.',
  },
  {
    name: 'Jannat Jahan',
    role: 'Wedding Planner',
    quote: 'The automation tools saved me hours. My clients love how organized things are!',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-white py-20 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Are Saying</h2>
        <p className="text-gray-600 mb-12">Trusted by event planners across industries.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-teal-50 p-6 rounded-xl shadow hover:shadow-md transition text-left">
              <div className="flex items-center gap-2 text-teal-500 mb-3">
                <FaStar size={16} />
                <FaStar size={16} />
                <FaStar size={16} />
                <FaStar size={16} />
                <FaStar size={16} />
              </div>
              <p className="text-sm text-gray-700 italic mb-4">“{testimonial.quote}”</p>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
