// src/pages/Contact.js
import React from 'react';
import Image from '../images/contact.jpg'

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-9">
    <br>
    </br>
    
      <div className="flex items-center justify-between w-full mb-16">
        <div className="text-center ml-16">
          <h1 className="text-center text-4xl font-bold ml-16" >Contact Us</h1>
          
        </div>
        <img src={Image} alt="Vision and Mission" className="w-1/1 h-auto mr-8 " />
      </div>



  <div className="container mx-auto p-4">
  <div className="flex justify-around flex-wrap w-full mb-16 mt-16">
    <div className="border p-8 rounded shadow-lg max-w-md bg-white">
      <h2 className="text-2xl text-center font-bold mb-4">Registered Address</h2>
      <p className="text-lg">S No-133/1, Flat-20, Saptshrungi Soc,</p>
      <p className="text-lg">Chinchwad, Pune, Maharashtra, India</p>
    </div>
    <div className="border p-8 rounded shadow-lg max-w-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Pune Office</h2>
      <p className="text-lg">101, Plot No. 20/6, D I Block, Chinchwad,</p>
      <p className="text-lg">Road, MIDC Chinchwad, Pimpri Chinchwad,</p>
      <p className="text-lg">Pune, Maharashtra, 411019</p>
    </div>
    <div className="border p-8 rounded shadow-lg max-w-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Kerala Office</h2>
      <p className="text-lg">39/2475-B1, LR Towers, SJRRA 104, SJ</p>
      <p className="text-lg">anatha Rd, Palarivattom, Kochi,</p>
      <p className="text-lg">Ernakulam, Kerala 682025</p>
    </div>
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
      <h1 className="text-4xl font-bold text-center mt-12">• Keep in Touch •</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Number"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject Line
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="Subject Line"
            />
          </div>
          <div className=" items-center text-center">
          <button className="bg-black  text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>
          </div>
        </form>
      </div>

      <div className="w-full h-64 mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7560.47546590827!2d73.796667!3d18.653325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91a602e9309%3A0x5357db8d6da65761!2sMotorall!5e0!3m2!1sen!2sin!4v1720266757474!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      </div>
  );
}

export default Contact;
