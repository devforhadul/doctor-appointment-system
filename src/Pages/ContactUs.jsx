import { ref, set } from 'firebase/database';
import React, { useState } from 'react';
import { database } from '../Auth/firebase.init';

const ContactUs = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });



  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation (simple)
    if (!formData.fullName || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }

    // Normally, API call here (axios/fetch)
    console.log('Form submitted:', formData);
    setSuccess('Thank you! We will contact you soon.');
    setFormData({ fullName: '', email: '', phone: '', message: '' });

    set(ref(database, 'contactus_data/' + formData.fullName), {
      fullName: formData.fullName,
      email: formData.email,
      message: formData.message,
      phone: formData.phone,
    })
    .then(() => {
      // ✅ Data saved successfully
      console.log("Data inserted successfully!");
      setSuccess("Your message has been sent!");
    })
    .catch((error) => {
      // ❌ The write failed
      console.error("Error inserting data:", error);
      setError("Failed to send message. Please try again.");
    });


  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
      <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Contact Us</h2>

        <p className="text-center text-gray-500 mb-6">
          Need help or have questions? Feel free to contact us.
        </p>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {success && <div className="text-green-500 text-center mb-4">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={(e)=>{
                handleChange(e)
                setSuccess('')
                setError('')
              }}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-300 cursor-pointer "
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
