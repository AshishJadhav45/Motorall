import React from 'react';
import MidDriveImage from '../images/videoplayback.mp4' ;
import M1Image from '../images/product_1_image_2.png';
import M2Image from '../images/m2.png';
import HubDriveImage from'../images/0001-0180-1.mp4';
import H1Image from '../images/10_inch.png';
import H2Image from '../images/12 inch.jpeg';
import H3Image from '../images/17 inch.jpeg';
import ControllerImage1 from '../images/large__1 (1).png';
import ControllerImage2 from '../images/CONTROLLER.png';
import ControllerImage3 from '../images/controller3.png';



function Products() {
  return (
       
    <div className="px-5 py-16">

      <div className="px-8 py-8 mt-16 mb-16">
       
        
      <h1 className="text-9xl text-center mt-16 pt-4 pb-16 mb-16">Motorall Products</h1>
     </div>

    
    
    

      {/* MID DRIVE Section */}
      <section className="mb-16">
        <h2 className=" text-center text-9xl font-bold text-orange-500 pt-16 mt-10">MID DRIVE</h2>
        <div className="flex flex-col md:flex-row items-center pt-10">
          
          <video
          className="w-full md:w-1/2 h-auto mb-8 md:mb-0"
          src={MidDriveImage}
          autoPlay
          muted
          loop
        ></video>
          <div className="text-left md:ml-8 ">
          <div className="bg-white">
           <p className="mb-4 text-xl">
           Engineered for efficiency and performance. It maximizes power while minimizing energy consumption. Versatile and compact, its innovative design ensures seamless integration across diverse vehicle types. Beyond its technical prowess, the Motorall Mid-Drive platforms embodies a commitment to sustainability, reshaping the future of transportation.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Key Features:</h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xl">
        <div>More Reliable</div>
        <div>Heat Dissipation</div>
        <div>High Torque</div>
        <div>Water Proof</div>
        <div>High Energy Efficiency</div>
        <div>Durable and Sleek</div>
        <div>Density</div>
      </div>
    </div>
  </div>
  </div>
  



</section>

      {/* M1 Section */}
      <section className="mb-16">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white ">
      <div className="flex-1 text-center md:text-left ml-10">
        <h1 className="text-9xl font-bold  text-orange-500 mb-4 mt-16">M1</h1>
        <h2 className="text-4xl font-semibold mb-4">Motor Platform</h2>
        <h3 className="text-2xl font-semibold mb-2">Specifications:</h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xl text-gray-500">
        <div className='font-bold'>Rated Power:</div>
        <div className='font-bold'>Rated Voltage:</div>
        <div>1.2 kW, 1.5 kW, 2 kW</div>
        <div>48/60 V</div>
        <div className='font-bold '>Peak Speed:</div>
        <div className='font-bold'>Rated Torque:</div>
        <div>3000 - 3500 RPM</div>
        <div>4 - 7 Nm</div>
        <div className='font-bold '>Peak Torque:</div>
        <div className='font-bold'>Peak Efficiency:</div>
        <div>27 - 38 Nm</div>
        <div>92 %</div>
      </div>
        <h3 className="text-xl font-semibold mb-2 mt-2">Applications:</h3>
        <p className='text-xl text-gray-500'>L2 & L3 Category Vehicles</p>
      </div>
      <div className="flex-1 pt-16 ml-16 w-50 h-50 ">
      <img src={M1Image} alt="Motor" className="w-full max-w-xls" />
      </div>
    </div>
    
    </section>

     {/* M2 Section */}
     <section className="mb-16">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white ">
      <div className="flex-1 text-center md:text-left ml-10">
        <h1 className="text-9xl font-bold  text-orange-500 mb-4 mt-16">M2</h1>
        <h2 className="text-4xl font-semibold mb-4">Motor Platform</h2>
        <h3 className="text-2xl font-semibold mb-2">Specifications:</h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xl text-gray-500">
        <div className='font-bold'>Rated Power:</div>
        <div className='font-bold'>Rated Voltage:</div>
        <div>1.2 kW, 1.5 kW, 2 kW</div>
        <div>48/60 V</div>
        <div className='font-bold '>Peak Speed:</div>
        <div className='font-bold'>Rated Torque:</div>
        <div>3000 - 3500 RPM</div>
        <div>4 - 7 Nm</div>
        <div className='font-bold '>Peak Torque:</div>
        <div className='font-bold'>Peak Efficiency:</div>
        <div>27 - 38 Nm</div>
        <div>92 %</div>
      </div>
        <h3 className="text-xl font-semibold mb-2 mt-2">Applications:</h3>
        <p className='text-xl text-gray-500'>L2 & L3 Category Vehicles</p>
      </div>
      <div className="flex-1 pt-16 ml-16 w-50 h-50 ">
      <img src={M2Image} alt="Motor" className="w-full max-w-xls" />
      </div>
    </div>
    
</section>

      {/* HUB DRIVE Section */}
      <section className="mb-16">
        <h2 className=" text-center text-9xl font-bold text-orange-500 pt-16 mt-16 mb-16">HUB DRIVE</h2>
        <div className="flex flex-col md:flex-row items-center">
          
          <video
          className="w-full md:w-1/2 h-auto mb-8 md:mb-0"
          src={HubDriveImage}
          autoPlay
          muted
          loop
        ></video>
          <div className="text-left md:ml-8 ">
          <div className="bg-white">
           <p className=" text-xl">
           Our hub motors cater to diverse riding styles, offering power options from 1 kW to 3.5 kW. Tailored for urban commuting or thrilling adventures, each motor ensures optimal efficiency and performance. Compact and seamlessly integrated, they deliver a smooth ride while championing sustainability with emission-free transportation. Join the electric mobility revolution with Motorall Hub Motor, where power meets efficiency for an exhilarating ride.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Key Features:</h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xl">
        <div>Compact</div>
        <div>Quiet Operations</div>
        <div>High Efficiency</div>
        <div>Low maintenance</div>
        <div>High Energy Density</div>
        <div>Durable and Sleek</div>
        <div>Customizable Architecture</div>
      </div>
    </div>
  </div>
</div>
</section>

 {/* H1-10 Section */}
 <section className="mb-16">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white ">
      <div className="flex-1 text-center md:text-left ml-10">
        <h1 className="text-9xl font-bold  text-orange-500 mb-4 mt-16">H1-10</h1>
        <h2 className="text-4xl font-semibold mb-4">Motor Platform</h2>
        <h3 className="text-2xl font-semibold mb-2">Specifications:</h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xl text-gray-500">
        <div className='font-bold'>Rated Power:</div>
        <div className='font-bold'>Rated Voltage:</div>
        <div>1.2 kW, 1.5 kW, 2 kW</div>
        <div>48/60/72 V</div>
        <div className='font-bold '>Peak Speed:</div>
        <div className='font-bold'>Rated Torque:</div>
        <div>400 - 800 RPM</div>
        <div>16 - 32 Nm</div>
        <div className='font-bold '>Peak Torque:</div>
        <div className='font-bold'>Peak Efficiency:</div>
        <div>105 - 145 Nm</div>
        <div>91 %</div>
      </div>
        <h3 className="text-xl font-semibold mb-2 mt-2">Applications:</h3>
        <p className='text-xl text-gray-500'>L2Category Vehicles</p>
      </div>
      <div className="flex-1 pt-16 ml-16 w-50 h-50 ">
      <img src={H1Image} alt="Motor" className="w-full max-w-xls" />
      </div>
    </div>
    
</section>

      {/* H2-12 Section */}
 <section className="mb-16">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white ">
      <div className="flex-1 text-center md:text-left ml-10">
        <h1 className="text-9xl font-bold  text-orange-500 mb-4 mt-16">H2-12</h1>
        <h2 className="text-4xl font-semibold mb-4">Motor Platform</h2>
        <h3 className="text-2xl font-semibold mb-2">Specifications:</h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xl text-gray-500">
        <div className='font-bold'>Rated Power:</div>
        <div className='font-bold'>Rated Voltage:</div>
        <div>1.5 kw, 2 kw, 2.5 kw,3kw</div>
        <div>48/60/72 V</div>
        <div className='font-bold '>Peak Speed:</div>
        <div className='font-bold'>Rated Torque:</div>
        <div>600 - 1000 RPM</div>
        <div>20 - 41 Nm</div>
        <div className='font-bold '>Peak Torque:</div>
        <div className='font-bold'>Peak Efficiency:</div>
        <div>115 - 181 Nm</div>
        <div>92 %</div>
      </div>
        <h3 className="text-xl font-semibold mb-2 mt-2">Applications:</h3>
        <p className='text-xl text-gray-500'>L2 &L3 Category Vehicles</p>
      </div>
      <div className="flex-1 pt-16 ml-16 w-50 h-50 ">
      <img src={H2Image} alt="Motor" className="w-full max-w-xls" />
      </div>
    </div>
    
</section>

      {/* H3-17 Section */}
     
      <section className="mb-16">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white ">
      <div className="flex-1 text-center md:text-left ml-10">
        <h1 className="text-9xl font-bold  text-orange-500 mb-4 mt-16">H3-17</h1>
        <h2 className="text-4xl font-semibold mb-4">Motor Platform</h2>
        <h3 className="text-2xl font-semibold mb-2">Specifications:</h3>
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xl text-gray-500">
        <div className='font-bold'>Rated Power:</div>
        <div className='font-bold'>Rated Voltage:</div>
        <div>2 kw, 3 kw, 5kw</div>
        <div>60/72 V</div>
        <div className='font-bold '>Peak Speed:</div>
        <div className='font-bold'>Rated Torque:</div>
        <div>Upto 1200 RPM</div>
        <div>40 Nm</div>
        <div className='font-bold '>Peak Torque:</div>
        <div className='font-bold'>Peak Efficiency:</div>
        <div>Upto 250 Nm</div>
        <div>92 %</div>
      </div>
        <h3 className="text-xl font-semibold mb-2 mt-2">Applications:</h3>
        <p className='text-xl text-gray-500'>L2  Category Vehicles</p>
      </div>
      <div className="flex-1 pt-16 ml-16 w-50 h-50 ">
      <img src={H3Image} alt="Motor" className="w-full max-w-xls" />
      </div>
    </div>
    
</section>


     {/* Controller Section */}
      <section >
      <div className="container mx-auto p-8">
      <h1 className="text-9xl font-bold text-orange-500 text-center mb-8 mt-16">CYCLE MOTOR</h1>
      <div className="flex flex-col md:flex-row items-center">
      <div className="flex items-center justify-between w-full">
      <img src={ControllerImage1} alt="Features" className="w-full max-w-xls"/>  
      
        <div className=" md:pl-16 text-right md:mx-10 md:text-left">
          <p className="text-xl mb-8">
            Our cutting-edge electric bicycle motor offers high-efficiency power, smart energy optimization, and seamless bike integration. 
            Lightweight and silent, it ensures a longer range and smooth ride for urban commuting or adventurous trails, 
            transforming any bike into an eco-friendly powerhouse.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
          <ul className="list-disc list-inside text-left mx-auto  text-xl">
            <li>High-Efficiency Power Output</li>
            <li>Smart Energy Optimization</li>
            <li>Seamless Integration</li>
            <li>Lightweight Design</li>
            <li>Silent Operation</li>
            <li>Advanced Battery Management</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  </section>

    {/* Controller Section */}
    <section >
      <div className="container mx-auto p-8">
      <h1 className="text-9xl font-bold text-orange-500 text-center mb-8 mt-16">CONTROLLER</h1>
      <div className="flex flex-col md:flex-row items-center">
      <div className="flex items-center justify-between w-full">
      <img src={ControllerImage2} alt="Features" className="w-full max-w-xl"/>  
      
        <div className="text-right md:text-left">
          <p className="text-xl mb-8">
          Introducing our smart, programmable motor controller, designed for high thermal stability and excellent drive efficiency. Capable of handling high drive currents up to 250 Amps and high voltage systems up to 150V, it features less loss MOSFETs, making it perfect for 10 kW to 15 kW motors. Experience superior performance and reliability in demanding applications.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
          <ul className="list-disc list-inside text-left mx-auto  text-xl">
            <li>Smart Programmable Control</li>
            <li>High Thermal Stability</li>
            <li>Excellent Driver Efficiency</li>
            <li>High Drive Current (250 Amps)</li>
            <li>High Voltage System (150V)</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  </section>

  {/* Controller Section */}
  <section >
      <div className="container mx-auto p-8">
      <h1 className="text-9xl font-bold text-orange-500 text-center mb-8 mt-16">CONTROLLER</h1>
      <div className="flex flex-col md:flex-row items-center">
      <div className="flex items-center justify-between w-full">
      <img src={ControllerImage3} alt="Features" className="w-full max-w-xl"/>  
      
        <div className="text-right md:text-left">
          <p className="text-xl mb-8">
          Discover our versatile motor controllers designed for two-wheelers and light commercial vehicles. With a voltage range up to 100V and a current rating up to 150 amps, these controllers provide reliable and efficient performance. Compact yet powerful, they are perfect for smaller capacity applications, ensuring smooth and responsive control.</p>
          <h2 className="text-2xl font-semibold mb-4">Key Features:</h2>
          <ul className="list-disc list-inside text-left mx-auto  text-xl">
            <li>Versatile for Two-Wheelers & Light Commercial Vehicles</li>
            <li>Voltage Range Up to 100V</li>
            <li>Current Rating Up to 150 Amps</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  </section>
</div>
  );
}

export default Products;
