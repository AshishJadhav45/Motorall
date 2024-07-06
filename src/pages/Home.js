import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../images/intro-image.png'; 
import VisionImage from '../images/mid.png';
import FeaturesImage from '../images/mid motor.png'; 
import VideoSrc from '../images/videoplayback index.mp4'; 
import Client1 from '../images/Slider/pcsic.png'; 
import Client2 from '../images/Slider/aic-removebg-preview.png';
import Client3 from '../images/Slider/alstom.png';
import Client4 from '../images/Slider/ciif-logo.png';
import Client5 from '../images/Slider/epam.png'; 
import Client6 from '../images/Slider/IIITH_25th-year-celebration.png';
import Client7 from '../images/Slider/Kerala_StartUp_Mission_Logo.svg.png';
import Client8 from '../images/Slider/nsrcel.png';

import coolingImg from '../images/cooling_system.png';
import densityImg from '../images/power.png';
import efficiencyImg from '../images/torque.png';
import scalableImg from '../images/scalable.jpg';

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
  };

  const features = [
    {
      imgSrc: coolingImg,
      title: "Innovative Cooling System",
      description: "Our groundbreaking cooling system ensures peak performance and reliability."
    },
    {
      imgSrc: densityImg,
      title: "High Density",
      description: "Achieve exceptional efficiency with our motors' impressive active power density."
    },
    {
      imgSrc: efficiencyImg,
      title: "High Efficiency",
      description: "Experience unparalleled strength and efficiency through an optimized magnet ratio."
    },
    {
      imgSrc: scalableImg,
      title: "Scalable Platforms",
      description: "Our motors boast a scalable architecture, adapting seamlessly to diverse applications."
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center justify-between w-full mb-8">
        <div className="text-center pl-16">
          <h1 className="text-5xl font-bold ">Welcome to</h1>
          <h2 className="text-9xl font-extrabold">Motorall</h2>
        </div>
        <img src={Image} alt="Motorall" className="w-full md:w-1/3 h-30 mr-8" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full mb-8">
        <div className="text-center ml-10">
          <h1 className="text-center text-9xl font-bold text-orange-500">Vision</h1>
          <p className="text-xl text-center mt-2">Revolutionizing Movements in Machines.</p>
          <h1 className="text-9xl font-bold text-orange-500">Mission</h1>
          <p className="text-xl mt-2 max-w-4xl">
            Our mission is to transform the landscape of mobility and manufacturing by pioneering high-efficiency solutions for powertrain systems. 
            We envision a future where our relentless innovative technologies optimize energy usage, enhance performance, and minimize environmental impact across sectors.
          </p>
        </div>
        <img src={VisionImage} alt="Vision and Mission" className="w-full md:w-1/2 h-auto mt-8 md:mt-0 md:mr-8" />
      </div>

      <h1 className=" text-center text-9xl font-bold text-orange-500">Our Features</h1>
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <img src={FeaturesImage} alt="Features" className="w-full md:w-1/2 h-auto ml-8 mt-10 md:mt-0" />
        <div className="text-left md:mr-8 mt-4 md:mt-0">
          <p className="text-xl  max-w-2xl">
            Power-packed and energy-efficient, our motors boast an exceptional power-to-size ratio. This means you can achieve higher levels of performance without compromising on space or energy consumption.
          </p>
          <p className="text-xl mt-2 max-w-2xl">
            We offer the flexibility of custom shapes and designs in both Out Runner and In Runner platforms. Whether it is adapting to unique spatial constraints or aligning with specific performance requirements.
          </p>
        </div>
      </div>
      <div className="bg-white mb-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={feature.imgSrc} alt={feature.title} className="h-16 w-16 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative w-full h-screen overflow-hidden mt-16">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={VideoSrc}
          autoPlay
          muted
          loop
        ></video>
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {/* Overlay content can go here if needed */}
        </div>
      </div>
      
      <div className="w-full py-8 bg-white-100">
        <h1 className="text-5xl font-bold text-center text-black-500 mb-8">CSR PARTNER</h1>
        <Slider {...settings}>
          <div className="p-4">
            <img src={Client1} alt="Client 1" className="mx-auto"/>
          </div>
          <div className="p-4">
            <img src={Client2} alt="Client 2" className="mx-auto" />
          </div>
          <div className="p-4">
            <img src={Client3} alt="Client 3" className="mx-auto" />
          </div>
          <div className="p-4">
            <img src={Client4} alt="Client 4" className="mx-auto" />
          </div>
          <div className="p-4">
            <img src={Client5} alt="Client 5" className="mx-auto"/>
          </div>
          
          <div className="p-4">
            <img src={Client6} alt="Client 6" className="mx-auto" />
          </div>
          <div className="p-4">
            <img src={Client7} alt="Client 7" className="mx-auto" />
          </div>
          <div className="p-4">
            <img src={Client8} alt="Client 8" className="mx-auto" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;