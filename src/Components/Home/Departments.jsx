import React from 'react';
import neurology from '../../assets/DepartmentAsset/neurology.png'
import cardiology from '../../assets/DepartmentAsset/cardiology.png'

const departments = [
  {
    name: 'Neurology',
    image: neurology
  },
  {
    name: 'Cardiology',
    image: cardiology
  },
  {
    name: 'Ophthalmology',
    image: 'https://example.com/ophthalmology.jpg'
  },
  {
    name: 'Pediatric',
    image: 'https://example.com/pediatric.jpg'
  },
  {
    name: 'Radiology',
    image: 'https://example.com/radiology.jpg'
  },
  {
    name: 'Urology',
    image: 'https://example.com/urology.jpg'
  }
];

const Departments = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Our Departments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {departments.map((dept, idx) => (
          <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <img src={dept.image} alt={dept.name} className="w-full h-48 object-cover" />
            <div className="text-center py-4">
              <h3 className="text-xl font-semibold text-gray-800">{dept.name}</h3>
              <div className="w-10 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
