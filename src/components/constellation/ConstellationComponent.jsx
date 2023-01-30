import React, { useState, useEffect, useContext, } from 'react'
import { NavigationContext } from '../../HomePage'
import { PAGES } from '../../models/EnumModel'
import { Link } from 'react-router-dom'
import { useElementOnScreen } from '../../utils/useElementOnScreenHook'
import './constellation.css'
import Press from '../press/Press'
export const ConstellationComponent = () => {
    const { currentPage, setCurrentPage } = useContext(NavigationContext)
    const navigationHandler = (page) => {
        setCurrentPage(page)
        window.location.href = "#" + page
    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    }
    const [containerRef, isVisible] = useElementOnScreen(options)

    const [c1Style, setC1Style] = useState()
    const [c2Style, setC2Style] = useState()
    const [c3Style, setC3Style] = useState()
    const [c4Style, setC4Style] = useState()
    const [c5Style, setC5Style] = useState()
    const [c6Style, setC6Style] = useState()
    const [c7Style, setC7Style] = useState()
    const [c8Style, setC8Style] = useState()

    useEffect(() => {
        console.log('pagestatus', isVisible)
        if (isVisible) {
            setCurrentPage(PAGES.CONSTELLATION)

            setC1Style('c1 c1_active')
            setC2Style('c1 c2_active')
            setC3Style('c1 c3_active')
            setC4Style('c1 c4_active')
            setC5Style('c1 c5_active')
            setC6Style('c1 c6_active')
            setC7Style('c1 c7_active')
            setC8Style('c1 c8_active')
        } else {
            setC1Style('c1 c1_initiate')
            setC2Style('c1 c2_initiate')
            setC3Style('c1 c3_initiate')
            setC4Style('c1 c4_initiate')
            setC5Style('c1 c5_initiate')
            setC6Style('c1 c6_initiate')
            setC7Style('c1 c7_initiate')
            setC8Style('c1 c8_initiate')
        }

    }, [isVisible])
    return (
        <>
        <div ref={containerRef} className="flex items-center relative justify-center bg-white constellationContainer snap-start">
            <div className="absolute top-0 left-0 w-full h-full z-20 ">
                <div className=" relative top-0 left-0 w-full h-full z-30 dotContainer">
                    <div
                        className={c1Style}
                        alt=""
                    ></div>
                    <div
                        className={c2Style}
                        alt=""
                    ></div>
                    <div
                        className={c3Style}
                        alt=""
                    ></div>
                    <div
                        className={c4Style}
                        alt=""
                    ></div>
                    <div
                        className={c5Style}
                        alt=""
                    ></div>
                    <div
                        className={c6Style}
                        alt=""
                    ></div>
                    <div
                        className={c7Style}
                        alt=""
                    ></div>
                    <div
                        className={c8Style}
                        alt=""
                    ></div>
                    <div className={"constellationPoint"}>
                        <h1 onClick={() => navigationHandler(PAGES.STRATEGY)} className="text_s"> STRATEGY</h1>
                    </div>
                    <div className={"constellationPoint1"}>
                        <h1 onClick={() => navigationHandler(PAGES.ADS_MANAGEMENT)} className="text_s">ADS MANAGEMENT</h1>
                    </div>
                    <div className={"constellationPoint2"}>
                        <h1 onClick={() => navigationHandler(PAGES.SOCIAL)} className="text_s">SOCIAL</h1>
                    </div>

                    <div className={"constellationPoint3"}>
                        <h1 onClick={() => navigationHandler(PAGES.TECH)} className="text_s">
                            TECH
                        </h1>
                    </div>
                </div>
            </div>
            <div className="constellation z-10">
                <div className="constellation-overlay absolute top-0 left-0 w-full h-full z-10"></div>
                <div className="constellation-image">
                    <img
                        src="/white/Vector-84.svg"
                        className=" w-full h-full object-cover "
                        alt=""
                    />
                </div>

            </div>
        </div>
        </>
    )
}

export default ConstellationComponent