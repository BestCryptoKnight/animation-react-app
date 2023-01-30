import React, { useContext, useState, useEffect } from 'react'
import { PAGES } from '../../models/EnumModel'
import { NavigationContext } from '../../HomePage'
import './solutionsPrism.css'

const SolutionsPrism = ({ animated, setAnimated }) => {
    const { currentPage, setCurrentPage } = useContext(NavigationContext)
    const navigationHandler = (page) => {
        setCurrentPage(page)
        window.location.href = "#" + page

        setAnimated(true)
    }


    return (
        <div className="prism-container-flex relative top-0 left-0 w-full h-full flex items-center justify-center z-13 overflow-hidden " >
            <div className="prismTextContainer">
                <div className={`${animated ? 'prismTextAnimated adPrismTextAnimated' : 'adPrismText'}  prismText`}>
                    <h1 onClick={() => navigationHandler(PAGES.ADS_MANAGEMENT)} className="text_s"> ADS MANAGEMENT</h1>
                </div>
                <div className={`${animated ? 'prismTextAnimated techPrismTextAnimated' : 'techPrismText '}  prismText`}>
                    <h1 onClick={() => navigationHandler(PAGES.TECH)} className="text_s">TECH</h1>
                </div>
                <div className={`${animated ? 'prismTextAnimated socialPrismTextAnimated' : 'socialPrismText'}  prismText`}>
                    <h1 onClick={() => navigationHandler(PAGES.SOCIAL)} className="text_s">SOCIAL</h1>
                </div>

                <div className={`${animated ? 'prismTextAnimated strategyPrismTextAnimated' : 'strategyPrismText'}  prismText`}>
                    <h1 onClick={() => navigationHandler(PAGES.STRATEGY)} className="text_s">
                        STRATEGY
                    </h1>
                </div>
            </div>
            <div className=" w-full flex relative items-center justify-center h-full ">
                <div className='prismOverlay'></div>
                <div className={animated ? "iconDarkAnimated relative " : "iconDark relative"}>
                    <div className={animated ? "frameAnimated" : "frame"}>
                        <img
                            src="/green/Vector.svg"
                            className={animated ? "v_animated" : "v"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-1.svg"
                            className={animated ? "v1_animated" : "v1"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-2.svg"
                            className={animated ? "v2_animated" : "v2"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-3.svg"
                            className={animated ? "v3_animated" : "v3"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-4.svg"
                            className={animated ? "v4_animated" : "v4"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-5.svg"
                            className={animated ? "v5_animated" : "v5"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-6.svg"
                            className={animated ? "animated_v6" : "v6"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-7.svg"
                            className={animated ? "v7_animated" : "v7"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-8.svg"
                            className={animated ? "v8_animated" : "v8"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-9.svg"
                            className={animated ? "v9_animated" : "v9"}
                            alt=""
                        />
                    </div>
                    <div className="group3">
                        <img
                            src="/white/Vector.svg"
                            className={animated ? "h_animated" : "h"}
                            alt=""
                        />
                        <img
                            src="/white/Vector-1.svg"
                            className={animated ? "h1_animated" : "h1"}
                            alt=""
                        />
                        <img
                            src="/white/Vector-2.svg"
                            className={animated ? "h2_animated" : "h2"}
                            alt=""
                        />
                        <img
                            src="/white/Vector-3.svg"
                            className={animated ? "h3_animated" : "h3"}
                            alt=""
                        />
                        <img
                            src="/white/Vector-4.svg"
                            className={animated ? "h4_animated" : "h4"}
                            alt=""
                        />
                        <img
                            src="/white/Vector-5.svg"
                            className={animated ? "h5_animated" : "h5"}
                            alt=""
                        />
                        {/* <img src="/white/Vector-6.svg" className={animated? "h6_animated": "h6"} alt="" /> */}

                        <img
                            src="/white/Vector-8.svg"
                            className={animated ? "h8_animated" : "h8"}
                            alt=""
                        />
                        <img
                            src="/white/Vector-9.svg"
                            className={animated ? "h9_animated" : "h9"}
                            alt=""
                        />
                        <img
                            src="/white/Vector-10.svg"
                            className={animated ? "h10_animated" : "h10"}
                            alt=""
                        />
                        <img
                            src="/white/Vector-11.svg"
                            className={animated ? "h11_animated" : "h11"}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionsPrism