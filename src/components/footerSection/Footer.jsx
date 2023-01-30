import React,{ useState,useContext,useEffect,createContext} from "react";
import ContactUs from "./components/ContactUs";
import Gutter from "./components/Gutter";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Partners from "./components/Partners";
import ContactUsModal from "./components/ContactUsModal";
import { PAGES } from "../../models/EnumModel";
import { NavigationContext } from "../../HomePage";
import { useElementOnScreen } from "../../utils/useElementOnScreenHook";

const footerContext = createContext();

function Footer() {
  const { currentPage, setCurrentPage } = useContext(NavigationContext)
  const [modal, setModal] = useState(false);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  }
  const [containerRef, isVisible] = useElementOnScreen(options)
  useEffect(() => {
    if (isVisible) {
      setCurrentPage(PAGES.FOOTER)
    }

  }, [isVisible])

  // useEffect(() => {
  //   if(!modal){
  //     setOpenModal(false)
  //   }
  // }, [modal])
  


  return (
    <>
      <div ref={containerRef} className="wrapper snap-start z-12 relative" id="contact-us">
        <div className="content-wrapper">
          {/* <Header /> */}
          <div className="content-container">
            {modal && <ContactUsModal modal={modal} setModal={setModal} />}

            <div className="content-content">
              <Partners />
              <Overview />
              <ContactUs modal={modal} setModal={setModal} />
              <hr
                style={{
                  backgroundColor: 'black',
                  height: '2px',
                  position:"relative",
                  zIndex:"9999"
                }}
              />
              <Gutter />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
