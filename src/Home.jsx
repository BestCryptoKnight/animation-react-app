import React, { useState,useEffect } from "react";
import   StrategyContent  from "./components/strategyContent/StrategyContent";
import DotElements from "./components/DotElements";
import Tabs from "./components/Tabs";
import { PAGES } from "./models/EnumModel";
import SocialContent from "./components/socialContent/SocialContent";
import AdsManagementContent from "./components/adManagementContent/AdsManagementContent";
import TechContent from "./components/techContent/TechContent";
import ConstellationComponent from "./components/constellation/ConstellationComponent";

// export const NavigationContext = React.createContext(null)

const Home = () => {
  const [animated, setAnimated] = useState(0);
  const [page,setPage] = useState(PAGES.SOLUTIONS)
  const navigationState = {
    currentPage: page,
    setCurrentPage:(value)=>{setPage(value)}
  }


  return (
    // <NavigationContext.Provider value={navigationState}>
    //   <div className={`h-screen bg-black background_img overflow-hidden ${animated ? 'overflow-y-scroll snap-y snap-mandatory scroll-smooth' : null} no-scrollbar  w-full  `} id="pageContainer" >
    //     <div className="w-full relative h-full snap-start" id="categories">
    //         <div className=" absolute top-0 left-0 w-full h-full z-10">
    //           <img
    //             src="/white/Stars.svg"
    //             className=" w-full h-full object-cover "
    //             alt=""
    //           />
    //         </div>
    //         <div className="content h-full w-full  z-30  relative">
    //         <div className=" overlay"></div>
    //         <div className="header relative  ">
    //           <h2
    //             className={`ml-10 text-3xl relative top-5 font-extrabold text-white ${animated === 1 ? "hideLogo hidden" : "relative top-5"
    //               }`}
    //             onClick={() => {setAnimated(0); setPage(PAGES.SOLUTIONS)}}
    //           >
    //             SOLUTIONS
    //           </h2>
    //           <h3
    //             className={`ml-10 text-2xl uppercase  font-thin text-white ${animated === 1
    //                 ? " relative top-0 left-0 transition-all duration-1000 opacity-100"
    //                 : "relative top-10 opacity-0"
    //               }`}
    //               style={{position:animated?"static":"absolute"}}
    //           >
    //             Solutions
    //           </h3>
    //           <Tabs animated={animated} setAnimated={setAnimated} />
    //           {/* //subtitle animation */}
    //           <h2
    //             className={`ml-10 text-3xl mt-4 font-extrabold text-white uppercase ${animated === 1
    //               && " relative top-0 left-0 transition-all duration-1000 opacity-100 text"

    //               } ${animated === 0 && "relative -top-20 left-10 opacity-0"}`}
    //             onClick={() => { setAnimated(0); setPage(PAGES.SOLUTIONS)}}
    //           >
    //             {page}
    //           </h2>

    //         </div>

    //         <DotElements animated={animated} setAnimated={setAnimated} />
    //         {page == PAGES.STRATEGY ?
    //          <StrategyContent animated={animated} /> :
    //           page == PAGES.ADS_MANAGEMENT ?
    //           <AdsManagementContent animated={animated} />:
    //           page == PAGES.SOCIAL ?
    //           <SocialContent animated={animated}  />:
    //           page == PAGES.TECH ?
    //           <TechContent animated={animated}  />:null}
    //         </div>
    //     </div>
    //     {animated ? (<><ConstellationComponent /></>) : null}
    //   </div>
    // </NavigationContext.Provider>
    <div>end</div>
  );
};

export default Home;
