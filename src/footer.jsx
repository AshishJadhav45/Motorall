import React from 'react';
import bgImage from './images/world.jpg';
import Image from './images/logo.png';

const Footer = () => {
  console.log('Background Image Path:', bgImage);

  return (
    <div className="  bg-cover  py-8"
      style={{ backgroundImage: `url(${bgImage})` }}>

      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/3 text-left text-white">
          <h1 className="text-4xl font-bold">MOTORALL</h1>
          <p className="mt-4">
            Motorall has experience in bringing new technologies into the manufacturing of traction motors. Our focused Research and Development produce exclusive products with the highest efficiency and durability in EV powertrain equipment. Aspiring Market Leaders in its space, established in India since the last 2019, is cemented by its very strong R&D center delivering customized motors in axial flux and radial flux platforms.
          </p>
        </div>
        <div className="md:w-1/3 text-center mt-8 md:mt-0 text-white">
          <h2 className="text-2xl font-semibold">Follow Us</h2>
          <a href="https://www.linkedin.com" className="block mt-2">
            <img src={Image} alt="Motorall" className="inline-block w-9 h-9" />
          </a>
        </div>
        <div className="md:w-1/3 text-left pb-16 md:mt-0 text-white">
          <h2 className="text-2xl text-left font-semibold">Contact Us</h2>
          <p className="mt-2">101, Plot No. 20/6, D I Block, Chinchwad, Road, MIDC Chinchwad, Pimpri Chinchwad, Pune, Maharashtra, 411019 India.</p>
          <p className="mt-2">+91-9834830928</p>
          <p className="mt-2">contact@motorall.in</p>
        </div>
      </div>
      <footer className="mt-8 text-center text-white">
        <p>&copy; 2024. Motorall</p>
      </footer>
    </div>
  );
};

export default Footer;
