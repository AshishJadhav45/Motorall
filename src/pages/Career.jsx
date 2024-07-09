import React, { useState } from 'react';
import Image from '../images/wheel.png';
import mech from '../images/mechfina.png';
import sales from '../images/seller.png';
import elec from '../images/electrical engineer.png';
import emailjs from 'emailjs-com';

function Career() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    contact_number: '',
    subject: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_owx5jcf', 'template_l3yyncg', e.target, 'Xw3dHmHPv2LSqRc3l')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitted(true);
        setError(null);
        setFormData({
          user_name: '',
          user_email: '',
          contact_number: '',
          subject: ''
        });
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setError('Failed to send email. Please try again later.');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-9">
      <div className="flex items-center justify-between w-full mb-16 mt-16">
        <div className="text-center ml-16">
          <h1 className="text-center text-4xl font-bold ml-16">Work with Us</h1>
        </div>
        <img src={Image} alt="Vision and Mission" className="w-1/1 h-auto mr-8" />
      </div>

      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-16 mt-16 text-center">Open positions</h2>
        <div className="flex flex-col md:flex-row justify-around space-y-10 md:space-y-0 md:space-x-10 mb-16">
          <div className="card flex-1 max-w-sm mx-auto md:max-w-none">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <img src={mech} alt="Mechanical Engineer" className="w-32 h-32 mx-auto" />
              <h3 className="text-2xl font-bold text-center mt-6">Mechanical Engineer</h3>
              <button
                className="bg-black text-white py-3 px-6 mt-6 w-full rounded"
                onClick={() => window.location.href = '/mech'}
              >
                Apply Job
              </button>
            </div>
          </div>

          <div className="card flex-1 max-w-sm mx-auto md:max-w-none">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <img src={sales} alt="Sales" className="w-32 h-32 mx-auto" />
              <h3 className="text-2xl font-bold text-center mt-6">Sales</h3>
              <button
                className="bg-black text-white py-3 px-6 mt-6 w-full rounded"
                onClick={() => window.location.href = '/sales'}
              >
                Apply Job
              </button>
            </div>
          </div>

          <div className="card flex-1 max-w-sm mx-auto md:max-w-none">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <img src={elec} alt="Electrical Engineer" className="w-32 h-32 mx-auto" />
              <h3 className="text-2xl font-bold text-center mt-6">Electrical Engineer</h3>
              <button
                className="bg-black text-white py-3 px-6 mt-6 w-full rounded"
                onClick={() => window.location.href = '/Electrical'}
              >
                Apply Job
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-lg mt-16">
        {isSubmitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Your message has been sent.</span>
          </div>
        )}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="user_name"
              type="text"
              placeholder="Name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="user_email"
              type="email"
              placeholder="Email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              name="contact_number"
              type="text"
              placeholder="Number"
              value={formData.contact_number}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject Line
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject Line"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="items-center text-center">
            <button
              type="submit"
              className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Career;
