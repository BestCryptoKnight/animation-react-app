import React from "react";
import "../content.css";

function ContactUs({modal,setModal}){
    return (
        <div className="content-section-contact-us">
        <div className="content-row1">
          <div className="content-icon">
            <a href="mailto:team@mine-marketing.com" target='_blank'>
              <img
                src="/footer/assets/playground_assets/ellipse202360-1xa6-200h.png"
                alt="Ellipse202360"
                className="content-ellipse20"
              />
              <img
                src="/footer/assets/playground_assets/vector2360-agld.svg"
                alt="Vector2360"
                className="content-vector33"
              />
            </a>

          </div>
          <div className="content-icon1">
            <a href="https://www.linkedin.com/company/mine-marketing" target='_blank'>
              <img
                src="/footer/assets/playground_assets/ellipse202360-lgn9-200h.png"
                alt="Ellipse202360"
                className="content-ellipse201"
              />
              <img
                src="/footer/assets/playground_assets/vector2360-ay4o.svg"
                alt="Vector2360"
                className="content-vector34"
              />
            </a>
          </div>
          <button className="content-button" onClick={()=>setModal(!modal)}>
            <div className="content-container2">
              {/* <img
                src="/footer/assets/playground_assets/ellipse19i236-hb4h-300h.png"
                alt="Ellipse19I236"
                
              /> */}
              <div className="content-ellipse19"></div>
              <div className="content-ellipse19-overlay"></div>
              <span className="content-text19">
                <span style={{color:'white'}} className='call-to-contact'>
                  <span>Work</span>
                  <br />
                  <span>with us</span>
                </span>
              </span>
            </div>
          </button>
          <div className="content-icon2">
            <a href="https://www.facebook.com/minemarketing/" target='_blank' >
              <img
                src="/footer/assets/playground_assets/ellipse202360-9j15-200h.png"
                alt="Ellipse202360"
                className="content-ellipse202"
              />
              <img
                src="/footer/assets/playground_assets/vector2360-lglj.svg"
                alt="Vector2360"
                className="content-vector35"
              />
            </a>

          </div>
          <div className="content-icon3">
            <a href="https://www.instagram.com/mine___marketing/" target='_blank'>
              <img
                src="/footer/assets/playground_assets/ellipse202361-6eam-200h.png"
                alt="Ellipse202361"
                className="content-ellipse203"
              />
              <img
                src="/footer/assets/playground_assets/vector2361-tzq.svg"
                alt="Vector2361"
                className="content-vector36"
              />
            </a>

          </div>
        </div>
      </div>
    )
}

export  default ContactUs;