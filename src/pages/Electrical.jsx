import React from 'react';
import Image from '../images/electricalteam.jpg'

const Electrical = () => {
  return (
    
    <div className="container ">

    <div className="relative w-full">
        <img
          src={Image}
          alt="Descriptive Alt Text"
          className="w-full h-auto object-cover"
        />
      </div>

      <h1 className="text-6xl font-bold text-center pt-16">PROFESSIONAL SKILLS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
        <div className="border p-6">
          <h2 className="text-xl font-semibold">Motor Design</h2>
          <p className="mt-4">Experience in design from Spec to Production Motor. Understanding and experience in Electro Magnetics design, Magnetic circuits. Design and Working knowledge of PM and AC Induction Motors.</p>
        </div>
        <div className="border p-6">
          <h2 className="text-xl font-semibold">Improving NVH</h2>
          <p className="mt-4">Experience with Multiphase motor designs, through exposure to Ripple, Cooling, Efficiency, Acoustic Noise Management in Motor Design.</p>
        </div>
        <div className="border p-6">
          <h2 className="text-xl font-semibold">FEA</h2>
          <p className="mt-4">Experience and familiarity with Finite Element Analysis- Motor simulation and modeling experience using Speed, Altair, Motorcad, Maxwell, or equivalents.</p>
        </div>
        <div className="border p-6 md:col-span-3">
          <h2 className="text-xl font-semibold">CAD/ CAE</h2>
          <p className="mt-4">Experience with CAD/CAE tools for Motor Design SOFTWARES: Solid Works CATIA.</p>
        </div>
      </div>

      <h1 className="text-6xl font-bold text-center mt-16">INTERPERSONAL SKILLS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8  text-center">
        <div className="border p-6">Empathy</div>
        <div className="border p-6">Cooperation</div>
        <div className="border p-6">Listening</div>
        <div className="border p-6 md:col-span-3">Verbal and Written Communication</div>
      </div>


      <h1 className="text-4xl font-bold text-center mt-12">• SUBMIT YOUR CV •</h1>
      <form className="mt-8 max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position">
            Position
          </label>
          <input
            type="text"
            id="position"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cv">
            Attach CV
          </label>
          <input
            type="file"
            id="cv"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-sm text-gray-500 mt-1">Only pdf, doc, and docx files are allowed</p>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="about">
            About Yourself
          </label>
          <textarea
            id="about"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>

    </div>
  );
};

export default Electrical;
