import React,{useEffect,useState,useContext} from "react";
import "./press.css";
import { useElementOnScreen } from "../../utils/useElementOnScreenHook";
import { NavigationContext } from "../../HomePage";
import { PAGES } from "../../models/EnumModel";

function Press() {
  const { currentPage, setCurrentPage } = useContext(NavigationContext)
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  }
  const [containerRef, isVisible] = useElementOnScreen(options)

  const [p1Style, setP1Style] = useState()
  const [p2Style, setP2Style] = useState()
  const [p3Style, setP3Style] = useState()

  useEffect(() => {
    console.log('page-status', isVisible)
    if (isVisible) {
      setCurrentPage(PAGES.PRESS)

      setP1Style('p1 p1_active')
      setP2Style('p1 p2_active')
      setP3Style('p1 p3_active')
    } else {
      setP1Style('p1 p1_initiate')
      setP2Style('p1 p2_initiate')
      setP3Style('p1 p3_initiate')
    }

  }, [isVisible])
  return (
    <div ref={containerRef} className="press-section snap-start ">
      <div className="pressOverlay"></div>
      <div className="absolute top-0 left-0 w-full h-full z-20 ">
        <div className=" relative top-0 left-0 w-full h-full z-30 dotContainer">
          <div
            className={p1Style}
            alt=""
          ></div>
          <div
            className={p2Style}
            alt=""
          ></div>
          <div
            className={p3Style}
            alt=""
          ></div>
        </div>
      </div>
      <div className="press-content">
        <div className="press-title-container">
          <h2>Press</h2>
        </div>

        <div className="main-graphics-container" style={{zIndex:3}}>
             
                <div className="i-am-button-box">
                    <div className="groot"></div>
                    <span>I am a button</span>
                </div>

                <div className="tiktok-box">
                    <div className="tiktok-logo"></div>
                    <h1 className="tiktok-box-title">Tiktok ADS</h1>
                    <span className="tiktok-box-text">
                    Unlocking revenue with  creative for publishers
                    </span>

                    <div className="case-study-title-sideways">
                    <h1>
                        Selected <br/>
                        Case-Study</h1>
                </div>

                <div className="case-study-title-animated">
                  <img src="/gifs/big-circle.gif" alt="green-circuluar" className="case-study-title-animated-img"/>
                    Case Study</div>
                </div>
        </div>

    
      </div>
    </div>
  );
}

export default Press;
