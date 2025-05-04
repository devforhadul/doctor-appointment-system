import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';

const Emergency = () => {
    const emergencies = [
        {
            title: "Health Call Centre",
            info: "City Hospital – 24/7 Service",
            contact: "16263"
        },
        {
            title: "Nearest Hospital",
            info: "City Hospital – 24/7 Service",
            contact: "01812345678"
        },
        {
            title: "Ambulance Service",
            info: "LifeLine Ambulance – Fast Response",
            contact: "01798765432"
        },
        {
            title: "Blood Bank",
            info: "BRCS – 24/7 Service",
            contact: "16226"
        },
        {
            title: "On-call Doctor",
            info: "Dr. Kamal (Cardiology)",
            contact: "01933445566"
        },
        {
            title: "Emergency Hotline",
            info: "DGHS – 16263 | Police – 999",
            contact: "" // No single dial number
        }
    ];

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg max-w-4xl mx-auto my-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-red-700">🚨 Emergency Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {emergencies.map((item, index) => (
                    <div key={index} className="p-5 border border-[#eee] rounded-xl hover:shadow-md transition ">
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-700 mt-1">{item.info}</p>
                        <div className='flex justify-between items-center mt-4'>
                            <div>
                                {item.contact ? (
                                    <p className="text-blue-700 font-medium text-sm">📞 {item.contact}</p>
                                ) : (
                                    <p className="text-gray-500 italic text-sm">Multiple numbers listed</p>
                                )}
                            </div>
                            <div>
                                {item.contact && (
                                    <a href={`tel:${item.contact}`}>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded flex items-center gap-1 cursor-pointer">
                                            <BiSolidPhoneCall size={18} />
                                            Call Now
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Emergency;
