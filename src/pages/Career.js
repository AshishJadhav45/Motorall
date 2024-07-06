// src/components/WorkWithUs.js
import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../images/wheel.png'
import mech from '../images/mechfina.png'
import sales from '../images/seller.png'
import elec from '../images/electrical engineer.png'

function Contact() {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen p-9">
    
    
      <div className="flex items-center justify-between w-full mb-16 mt-16">
        <div className="text-center ml-16">
          <h1 className="text-center text-4xl font-bold ml-16" >Work with Us</h1>
          
        </div>
        <img src={Image} alt="Vision and Mission" className="w-1/1 h-auto mr-8 " />
      </div>

    


    
      
     
      <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-16 mt-16 text-center">Open positions</h2>
      <div className="flex flex-col md:flex-row justify-around space-y-10 md:space-y-0 md:space-x-10 mb-16">
        <div className="card flex-1 max-w-sm mx-auto md:max-w-none">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <img src={mech} alt="Mechanical Engineer" className="w-32 h-32 mx-auto" />
            <h3 className="text-2xl font-bold text-center mt-6">Mechanical Engineer</h3>
            <button className="bg-black text-white py-3 px-6 mt-6 w-full rounded"
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
            <button className="bg-black text-white py-3 px-6 mt-6 w-full rounded"
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
            <button className="bg-black text-white py-3 px-6 mt-6 w-full rounded"
              onClick={() => window.location.href = '/Electrical'}
            >
              Apply Job
            </button>
          </div>
        </div>
      </div>
    </div>


    <div>
      <br>
      </br>
    </div>


  


      <h2 className="text-2xl font-bold mb-4 mt-16">Submit Your CV</h2>
      <form className="w-full max-w-lg ">
        <div className="mb-4 ">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline" id="firstName" type="text" placeholder="First Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Phone" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position">
            Position
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="position" type="text" placeholder="Position" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cv">
            Attach CV
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cv" type="file" accept=".pdf,.doc,.docx" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="about">
            About Yourself
          </label>
          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="about" placeholder="Tell us about yourself"></textarea>
        </div>
        <div className=" items-center text-center">
          <button className="bg-black  text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
