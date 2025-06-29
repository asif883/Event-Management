import React from 'react';
import { FaUserPlus, FaCalendarAlt, FaPaperPlane, FaChartLine } from 'react-icons/fa';

const steps = [
  {
    icon: <FaUserPlus size={28} className="text-teal-600" />,
    title: 'Sign Up',
    description: 'Create your Planzone account in seconds.',
  },
  {
    icon: <FaCalendarAlt size={28} className="text-teal-600" />,
    title: 'Create Event',
    description: 'Add event details, date, and invitees effortlessly.',
  },
  {
    icon: <FaPaperPlane size={28} className="text-teal-600" />,
    title: 'Send Invites',
    description: 'Share invites via email or link instantly.',
  },
  {
    icon: <FaChartLine size={28} className="text-teal-600" />,
    title: 'Track & Manage',
    description: 'Get real-time RSVP updates and manage attendees.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How Planzone Works</h2>
        <p className="text-gray-600 mb-12">From signup to celebration, your events are in good hands.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition flex flex-col items-center justify-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
