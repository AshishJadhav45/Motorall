import React, { useState } from 'react';
import Image from '../images/contact.jpg';
import emailjs from 'emailjs-com';

function Contact() {
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
      }, (error) => {
        console.error('Email sending failed:', error.text);
        setError('Failed to send email. Please try again later.');
      });
  };

  const AddressCard = ({ title, lines }) => (
    <div className="border p-8 rounded shadow-lg max-w-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      {lines.map((line, index) => (
        <p key={index} className="text-lg">{line}</p>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-9">
      <div className="flex items-center justify-between w-full mb-16 mt-10">
        <div className="text-center ml-16">
          <h1 className="text-center text-4xl font-bold ml-16 pl-16">Contact Us</h1>
        </div>
        <img src={Image} alt="Vision and Mission" className="w-1/1 h-auto mr-16" />
      </div>

      <div className="container mx-auto p-4">
        <div className="flex justify-around flex-wrap w-full mb-16 mt-16">
          <AddressCard title="Registered Address" lines={["S No-133/1, Flat-20, Saptshrungi Soc,", "Chinchwad, Pune, Maharashtra, India"]} />
          <AddressCard title="Pune Office" lines={["101, Plot No. 20/6, D I Block, Chinchwad,", "Road, MIDC Chinchwad, Pimpri Chinchwad,", "Pune, Maharashtra, 411019"]} />
          <AddressCard title="Kerala Office" lines={["39/2475-B1, LR Towers, SJRRA 104, SJ", "anatha Rd, Palarivattom, Kochi,", "Ernakulam, Kerala 682025"]} />
        </div>

        <div className="border p-8 rounded shadow-lg max-w-md mx-auto bg-white text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">Phone: +91-9834830928</p>
          <p className="text-lg">Email: contact@motorall.in</p>
          <p className="text-lg">GST: 32AAGCN6473M1Z2</p>
          <p className="text-lg">CIN: U34300PN2019PTC186036</p>
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
              className="bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="w-full h-64 mt-16">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7560.47546590827!2d73.796667!3d18.653325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91a602e9309%3A0x5357db8d6da65761!2sMotorall!5e0!3m2!1sen!2sin!4v1720266757474!5m2!1sen!2sin"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
