import React, { useState } from "react";
import axios from "axios";
import "../modal.css";

function ContactUsModal({ modal, setModal }) {
  const [select, setSelect] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [ultimateSelect, setUltimateSelect] = React.useState("");

  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    request: "",
  });

  const sendMailMessage = () => {
    setSending(true)
    axios.post("https://minemarketing.herokuapp.com/sendMail", contactInfo)
      .then(res => {
        console.log(res)

        setSending(false)
      }
      )
      .catch(err => {
        setSending(false)
        console.log(err)
      })
  }

  return (
    <>
      <div
        className="mine-modal-overlay"
        onClick={() => {
          setModal(!modal);
        }}
      ></div>

      <div className="mine-modal">
        <div className="mine-modal-content">
          <div className="mine-modal-icon-holder">
            <img
              src="/footer/assets/mine-marketing.png"
              alt="illustration"
              className="mine-modal-icon"
            />
          </div>
          <div className="mine-row">
            <div style={{ width: "70%" }} className="mine-item">
              <h1 className="mine-modal-main-title">
                READY TO BREAK OUT OF THE ORDINARY <br /> AND DO SOMETHING
                INSANE TOGETHER?
                <br />
                LET'S GO WILD!
              </h1>
            </div>
            <div style={{ width: "30%" }} className="mine-item">
              <img
                src="/footer/assets/body-yoda.gif"
                alt="illustration"
                className="baby-yoda"
              />
            </div>
          </div>
          <div className="mine-row" style={{ marginTop: "7%" }}>
            <div style={{ width: "25%" }} className="mine-item">
              <div className="mine-subtitle">
                <h2 className="mine-modal-sub-title">
                  Its time to get personal
                </h2>
              </div>
              <div className="mine-modal-form">
                <form>
                  <div className="mine-form-group">

                    <input
                      type="text"
                      className="mine-input"
                      placeholder="Name"
                      onChange={e => {
                        setContactInfo({ ...contactInfo, name: e.target.value })
                      }}
                    />
                    <input
                      type="text"
                      className="mine-input"
                      placeholder="Company"
                      onChange={e => {
                        setContactInfo({ ...contactInfo, company: e.target.value })
                      }}
                    />
                    <input
                      type="text"
                      className="mine-input"
                      placeholder="Email"
                      onChange={e => {
                        setContactInfo({ ...contactInfo, email: e.target.value })
                      }}
                    />
                    <input
                      type="text"
                      className="mine-input"
                      placeholder="Phone"
                      onChange={e => {
                        setContactInfo({ ...contactInfo, phone: e.target.value })
                      }}
                    />
                    <textarea
                      className="mine-text-area"
                      placeholder=" Request Details"
                      onChange={e => {
                        setContactInfo({ ...contactInfo, request: e.target.value })
                      }}
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
            <div
              style={{ width: "45%", marginLeft: "3%" }}
              className="mine-item"
            >
              <div className="mine-subtitle" style={{ marginLeft: "7%" }}>
                <h2 className="mine-modal-sub-title">
                  What is your ultimate goal?
                </h2>
              </div>
              <div>
                <div
                  className="mine-select"
                  size={1}
                  style={{ whiteSpace: "pre-wrap", paddingBottom: '10%' }}
                  value={ultimateSelect}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelect(!select);
                  }}
                >
                  <div style={{ float: 'left', width: '88%', paddingTop: '-0.5%' }}>
                    {ultimateSelect.length > 0 ? ultimateSelect :
                      <span style={{ marginTop: '30%' }}> Ready to become business BFFs and conquer the <br /> world (or at least your industry)?
                        <br /> Let's partner up!<br /><br />
                      </span>
                    }
                  </div>
                  <div style={{ float: 'right', width: '10%' }}>
                    <img src="/icons/downArrowIcon.png" alt="arrow" className="mine-select-arrow" />
                  </div>
                </div>

                <div
                  className="mine-select-options"
                  style={{ display: select ? "block" : "none", backgroundColor:"black" }}
                >
                  <div className="mine-select-option" onClick={() => {
                    setUltimateSelect("Ready for more clients? Let's bring them in!")
                    setContactInfo({ ...contactInfo, request: "Ready for more clients? Let's bring them in!" })
                    setSelect(!select)
                  }}>
                    Ready for more clients?<br/> Let's bring them in!
                  </div>

                  <div className="mine-select-option" onClick={() => {
                    setUltimateSelect(" Ready to become business BFFs and conquer the world (or at least your industry)? Let's partner up!")
                    setContactInfo({ ...contactInfo, request: "Ready to become business BFFs and conquer the world (or at least your industry)? Let's partner up!" })
                    setSelect(!select)
                  }}>
                    Ready to become business BFFs and conquer the world (or at
                    least your industry)?<br/> Let's partner up!
                  </div>

                  <div className="mine-select-option" onClick={() => {
                    setUltimateSelect("Ready to create unique content and stand out from the competition? Let's do it!")
                    setContactInfo({ ...contactInfo, request: "Ready to create unique content and stand out from the competition? Let's do it!" })
                    setSelect(!select)
                  }}>
                    Ready to create unique content and stand out from the competition?<br/> Let's do it!
                  </div>

                  <div className="mine-select-option" onClick={() => {
                    setUltimateSelect("Ready for expert business advice? Let's schedule a consultation!")
                    setContactInfo({ ...contactInfo, request: "Ready for expert business advice? Let's schedule a consultation!" })
                    setSelect(!select)
                  }}>
                    Ready for expert business advice?<br/> Let's schedule a consultation!
                  </div>




                </div>
              </div>
            </div>
            <div
              style={{ width: "10%", marginLeft: "3%" }}
              className="mine-item"
            >
              {sending ? <p>Sending</p> : <button onClick={() => { sendMailMessage() }} className="circle-button">Send</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsModal;
