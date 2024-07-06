import React from 'react';
import Image from '../images/salesteam.jpg'

const Sales = () => {
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
          <h2 className="text-xl font-semibold">Data Collection</h2>
          <p className="mt-4">Collecting Data of customers, there requirements & queries. Organizing the data for future reference.</p>
        </div>
        <div className="border p-6">
          <h2 className="text-xl font-semibold">Lead Generation</h2>
          <p className="mt-4">Approaching different customers in B2C & B2B Segments.</p>
        </div>
        <div className="border p-6">
          <h2 className="text-xl font-semibold">Microsoft skills</h2>
          <p className="mt-4">Should have an experience in using Excel, Microsoft Word & Microsoft Presentation Should be able to create reports & presentation.</p>
        </div>
        <div className="border p-6 md:col-span-3">
          <h2 className="text-xl font-semibold">Technical Reports</h2>
          <p className="mt-4">Preparation of technical documentation and presentation.</p>
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

export default Sales;
