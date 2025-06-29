import React from 'react';
import { FaRegCalendarCheck, FaEnvelopeOpenText, FaTachometerAlt, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: <FaRegCalendarCheck size={28} className="text-teal-600" />,
    title: 'Easy Event Creation',
    description: 'Create events in minutes with a simple and intuitive interface.',
  },
  {
    icon: <FaEnvelopeOpenText size={28} className="text-teal-600" />,
    title: 'Automated Invitations',
    description: 'Send smart invites and track RSVPs in real-time.',
  },
  {
    icon: <FaTachometerAlt size={28} className="text-teal-600" />,
    title: 'Dashboard Overview',
    description: 'Manage all your events in one powerful dashboard.',
  },
  {
    icon: <FaUsers size={28} className="text-teal-600" />,
    title: 'Team Collaboration',
    description: 'Collaborate with team members and assign tasks easily.',
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-white py-20 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Features for Effortless Planning</h2>
        <p className="text-gray-600 mb-12">Everything you need to organize, invite, and manage events - without the hassle.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-teal-50 p-6 rounded-xl shadow hover:shadow-md transition flex flex-col items-center justify-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
