import React, { useContext, useState, useEffect } from 'react'
import './solutions.css'
import { NavigationContext } from '../../HomePage'
import StrategyContent from "../strategyContent/StrategyContent";
import DotElements from "../../components/DotElements";
import Tabs from "../../components/Tabs";
import { PAGES } from "../../models/EnumModel";
import SocialContent from "../socialContent/SocialContent";
import AdsManagementContent from "../adManagementContent/AdsManagementContent";
import TechContent from "../techContent/TechContent";
import SolutionsPrism from '../solutionsPrism/SolutionsPrism';
import DotsComponent from '../dots/DotsComponent';
import { useElementOnScreen } from '../../utils/useElementOnScreenHook';
import GreenLinesComponent from '../greenLines/GreenLinesComponent';

const SolutionsPage = () => {
    const { currentPage, setCurrentPage } = useContext(NavigationContext)
    const [animated, setAnimated] = useState(false)
    const [navStatus, setNavStatus] = useState(false)
    const [pageStatus, setPageStatus] = useState(false)
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    }

    const [solutionsPrismOptions, setSolutionsPrismOptions] = useState(options)


    const [containerRef, isVisible] = useElementOnScreen(options)
    const [strategyRef, isStrategyVisible] = useElementOnScreen(options)
    const [socialRef, isSocialVisible] = useElementOnScreen(options)
    const [adRef, isAdVisible] = useElementOnScreen(options)
    const [techRef, isTechVisible] = useElementOnScreen(options)

    useEffect(() => {
        if (isVisible) {
            setAnimated(false)
            setCurrentPage(PAGES.SOLUTIONS)
        } else {
            setAnimated(true)
        }

    }, [isVisible])

    useEffect(() => {
        if (isStrategyVisible) {
            setCurrentPage(PAGES.STRATEGY)
        } else if (isSocialVisible) {
            setCurrentPage(PAGES.SOCIAL)
        } else if (isAdVisible) {
            setCurrentPage(PAGES.ADS_MANAGEMENT);
        } else if (isTechVisible) {
            setCurrentPage(PAGES.TECH)
        }
    }, [isStrategyVisible, isSocialVisible, isAdVisible, isTechVisible])

    useEffect(() => {
        if ([PAGES.ADS_MANAGEMENT, PAGES.SOCIAL, PAGES.SOLUTIONS, PAGES.LANDING, PAGES.TECH, PAGES.STRATEGY].includes(currentPage)) {
            setPageStatus(true)
        } else {
            setPageStatus(false)
        }
    }, [currentPage])


    return (
        <div className='solutions-page-overlay'>
            <div className={(pageStatus ? "sticky" : 'relative') + " solutionsPageContainer top-0 l-0  w-full h-full  z-11 "}>
                <div className='solutions-overlay'></div>
                <DotsComponent />
                {/* {<GreenLinesComponent animated={true}/>} */}
                {/* <DotElements /> */}
                <div className={" solutions-content  top-0 left-0  "}>
                    <div className="solutions-header ">
                        <h2 className={`ml-10 text-3xl relative uppercase text-white  ` + (animated ? ' header-animated' : ' header-normal')}>
                            SOLUTIONS
                        </h2>
                    </div>
                    <Tabs animated={animated} setAnimated={setAnimated} />
                    <h2
                        className={`ml-10 mt-4  text-white uppercase relative header-normal ` + (animated ? " top-0 left-0 transition-all duration-1000 opacity-100 text " : " -top-20 left-10 opacity-0")}
                    // onClick={() => { setAnimated(0); setCurrentPage(PAGES.SOLUTIONS)}}
                    >
                        {currentPage}
                    </h2>
                </div>
            </div>
            <div ref={containerRef} className="scrollableContainer container1 snap-start">
                {/* <div ref={containerRef}  className='solutions-overlay'></div> */}
                <SolutionsPrism animated={animated} setAnimated={setAnimated} />
            </div>
            <div ref={strategyRef} id={PAGES.STRATEGY} className="scrollableContainer container1 snap-start z-3">
                <StrategyContent animated={animated} />
            </div>
            <div ref={socialRef} id={PAGES.SOCIAL} className="scrollableContainer container3 snap-start z-3">
                <SocialContent animated={animated} />
            </div>
            <div ref={adRef} id={PAGES.ADS_MANAGEMENT} className="scrollableContainer container2 snap-start z-3">
                <AdsManagementContent animated={animated} />
            </div>
            <div ref={techRef} id={PAGES.TECH} className="scrollableContainer container4 snap-start z-3">
                <TechContent animated={animated} />
            </div>
        </div>

    )
}

export default SolutionsPage
