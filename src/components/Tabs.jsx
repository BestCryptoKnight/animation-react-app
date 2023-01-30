import React, { useContext, useState, useEffect } from "react";
import { NavigationContext } from "../HomePage";
import { PAGES } from "../models/EnumModel";

const Tabs = ({animated, setAnimated}) => {
  const { currentPage, setCurrentPage } = useContext(NavigationContext)
  const [navClass, setNavClass] = useState("")
  const tabClassAnimated = "tab1 cursor-pointer w-60"
  const tabClass = "tab relative left-20 top-20"

  useEffect(() => {
    if(animated){
      setNavClass("tab1 cursor-pointer")
    }else{
      setNavClass("tab relative left-20 top-20")
    }
  }, [animated])
  
  return (
   
    <div className=" flex items-center mt-4 ml-10 gap-10 ">
    <div
      className={currentPage == PAGES.STRATEGY?navClass+" tab_active":navClass}
      onClick={() => setCurrentPage(PAGES.STRATEGY)}
    >
      <div className="line"></div>
        <h3 className="tab_text text-sm mt-2" >STRATEGY</h3>
    </div>
    <div
        className={currentPage == PAGES.SOCIAL ? navClass + " tab_active" : navClass}
        onClick={() => setCurrentPage(PAGES.SOCIAL)}
    >
      <div className="line"></div>
      <h3 className="tab_text text-sm mt-2" >SOCIAL</h3>
    </div>
    <div
      // onClick={()=>setAnimated(2)}
      className={currentPage == PAGES.ADS_MANAGEMENT ? navClass + " tab_active" : navClass}
      onClick={() => setCurrentPage(PAGES.ADS_MANAGEMENT)}
    >
      <div className="line"></div>
      <h3 className="tab_text text-sm mt-2" >ADS MANAGEMENT</h3>
    </div>
    <div
        className={currentPage == PAGES.TECH ? navClass + " tab_active" : navClass}
        onClick={() => setCurrentPage(PAGES.TECH)}
    >
      <div className="line"></div>
        <h3 className="tab_text text-sm mt-2" >TECH</h3>
    </div>
  </div>
  )
}

export default Tabs