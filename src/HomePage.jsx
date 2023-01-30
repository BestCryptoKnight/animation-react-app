import React, { useState } from 'react'
import { PAGES } from './models/EnumModel'
import HeaderComponent from './components/header/HeaderComponent'
import LandingPage from './components/landingPage/LandingPage'
import SolutionsPage from './components/solutionsPage/SolutionsPage'
import ConstellationComponent from './components/constellation/ConstellationComponent'
import Footer from './components/footerSection/Footer';
import Press from './components/press/Press'
import TermsAndConditions from './components/termsAndConditions/TermsAndConditions'
import PrivacyPolicy from './components/privacyAndPolicy/PrivacyPolicy'
export const NavigationContext = React.createContext(null)

const HomePage = () => {
    const [page, setPage] = useState(PAGES.LANDING)
    const navigationState = {
        currentPage: page,
        setCurrentPage: (value) => { setPage(value) }
    }

    return (
        <NavigationContext.Provider value={navigationState}>
            <div className={`h-screen  background_img w-full`} id="pageContainer" >
                {/* <div className="overlay"></div> */}
                <HeaderComponent lightTheme={page == PAGES.FOOTER ? true : false} />
                <div className='page-container-flex relative overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-smooth no-scrollbar'>
                    <div className='homepageOverlay'></div>
                    <LandingPage />
                    <SolutionsPage />
                    <ConstellationComponent />
                    <Press />
                    <Footer />
                </div>

            </div>


        </NavigationContext.Provider>
    )
}

export default HomePage