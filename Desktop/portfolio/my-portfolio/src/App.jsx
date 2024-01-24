import React, { useState, useEffect } from 'react';
import './App.css';
import b2 from './assets/b2.gif';
import Symbol from './assets/Symbol.png';
import { FaBars, FaHandMiddleFinger } from 'react-icons/fa';
import hero from './assets/hero.png'
import hero4 from './assets/hero3.png'
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';
const activities = [' Web Development',' Competitive Coding'];
const initialDelay = 2000;
const letterDelay = 150;

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [activityIndex, setActivityIndex] = useState(0);

  const [isHero2, setIsHero2] = useState(false);
  const handleImageClick = () => {
    setIsHero2((prev) => !prev);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        setDisplayText((prevText) => prevText + activities[activityIndex][currentIndex]);
        currentIndex += 1;
  
        if (currentIndex === activities[activityIndex].trim().length) {
          clearInterval(interval);
          setTimeout(() => {
            setDisplayText('');
            setActivityIndex((prevIndex) => (prevIndex + 1) % activities.length);
          }, initialDelay);
        } else if (currentIndex === activities[activityIndex].length) {
          currentIndex = 0;
        }
      }, letterDelay);
    }, initialDelay);
  
    return () => {
      clearTimeout(timeout);
    };
  }, [activityIndex]);
  
  return (
    <div>
      {/* Navbar Starts Here */}
      <div className='flex justify-between md:p-5 md:pb-2 p-3 pb-1 bg-[#f7f7f7] md:border-b-4 border-b-2'>
        <div className='flex md:ml-20 justify-center'>
          <img src={Symbol} alt='Logo' />
        </div>
        <ul className='md:flex hidden gap-6 mr-20 text-[1.5rem] font-semibold justify-center items-center'>
          <li className='hover:underline hover:text-sky-600 cursor-pointer hover:underline-offset-8'>Home</li>
          <li className='hover:underline hover:text-sky-600 cursor-pointer hover:underline-offset-8'>About</li>
          <li className='hover:underline hover:text-sky-600 cursor-pointer hover:underline-offset-8'>Skills</li>
          <li className='hover:underline hover:text-sky-600 cursor-pointer hover:underline-offset-8'>Projects</li>
          <li className='hover:underline hover:text-sky-600 cursor-pointer hover:underline-offset-8'>Contact</li>
        </ul>
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <FaBars size="1.5em" />
        </div>
        <ul className={`lg:hidden ${showMenu ? "flex-col" : "hidden"} flex-col justify-center items-center absolute w-full top-20 right-0 bg-white border-2 border-sky-600`}>
          <li className='flex justify-center text-[1.5rem] hover:text-sky-600'>Home</li>
          <li className='flex justify-center text-[1.5rem] hover:text-sky-600'>About</li>
          <li className='flex justify-center text-[1.5rem] hover:text-sky-600'>Skills</li>
          <li className='flex justify-center text-[1.5rem] hover:text-sky-600'>Projects</li>
          <li className='flex justify-center text-[1.5rem] hover:text-sky-600'>Contact</li>
        </ul>
      </div>
      {/* Navbar Ends Here */}
      {/* Home Section */}
      <div className='bg-cover h-screen' style={{ backgroundImage: `url(${b2})` }}>
        <div className='flex'>
        <div className='md:pl-20 md:pt-40 pt-5 pl-5 flex-col w-[65%]'>
          <div className='md:text-[3rem] text-[2rem] text-[#000066] font-semibold'>Hi There,</div>
          <div className='flex gap-2 flex-wrap'>
            <div className='text-[2rem] md:text-[3rem] text-[#000066] font-semibold'>
              I'm Abhinav
            </div>
            <div className='md:text-[3rem] text-[2rem] text-[#ff9900] font-semibold'>
              Mishra
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className='text-[2rem] md:text-[3rem] text-[#000066] font-semibold'>
              I Am Into
            </div>
            <div className='md:pl-4 text-[#ff9900] md:text-[3rem] text-[2rem] font-semibold'>{displayText}</div>

          </div>
          <div className='mt-3'><button className='border-2 bg-[#000066] text-white px-5 py-3 text-[1.5rem] font-medium rounded-3xl'> About Me</button></div>
          <div className='gap-4 mt-4 flex'>
            <div>  <a href="https://www.linkedin.com/in/abhinav-mishra-b95301258/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={42} /> {/* Adjust the size as needed */}
                    </a>
            </div>
            <div>  <a href=" https://www.instagram.com/abhinav_mishra29" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={42} /> {/* Adjust the size as needed */}
                    </a>
            </div>
            <div>  <a href="https://github.com/abhinav2210103" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={42} /> {/* Adjust the size as needed */}
                    </a>
            </div>
            <div>  <a href="https://twitter.com/abhinavetw" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={42} /> {/* Adjust the size as needed */}
                    </a>
            </div>
          </div>
        </div>
         <div> 
         <div className='flex-col pt-10 md:flex hidden' onClick={handleImageClick}>
        <img
          src={isHero2 ? hero4 : hero}
          className='rounded-full'
          style={{height:500}}
        />
        {/* <div className=' flex justify-center text-[2rem]' onClick={handleImageClick}>Click</div> */}
      </div>
         </div>
         </div>
      </div>
     {/* Home Section Ends */}
    </div>
  );
}

export default App;

