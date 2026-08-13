"use client";
import {React , useState, useEffect} from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const useMobileScreen = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's mobile breakpoint (640px)
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const Tech = () => {
  const isMobile = useMobileScreen();
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => { 
        return (<>
        {!isMobile ? (
            <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
          ) : (
            <div key={technology.name} className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200">
              <img src={technology.icon.src} alt={technology.name} className="w-10 h-10" />
            </div>
          )}
        
      </>)
      })
      }
    </div>
  );
};

export default SectionWrapper(Tech, "");