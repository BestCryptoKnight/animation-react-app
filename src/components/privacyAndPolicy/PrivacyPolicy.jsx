import React from 'react'
import HeaderComponent from '../header/HeaderComponent'
import '../termsAndConditions/termsAndPrivacy.css'
const PrivacyPolicy = () => {
  return (
    <>
    <HeaderComponent/>
    <div className='snap-start container_terms_and_conditions'>
        <div className="terms__privacy_overlay">
        </div>
        <div className='terms_and_cond_heading'>
            <img src="./white/PrivacyPolicy.svg" alt="" />
        </div>
        <div className="terms_and_condition_description">
        <div className='span-a'>
            <span className='a'>Last Amended</span><span className='a'>Effective Date</span>
        </div>
        <div className='span-b'>
            <span className='b'>Sep 26, 2021</span><span className='b'>Oct 15, 2021</span>
        </div>
            <div className="paragraphOne">
                <header>1. Overview</header>
                <hr />
                <p>Pharetra magna pellentesque pharetra tortor ac est gravida dolor tortor. Volutpat egestas quisque ac id. Maecenas id et aenean ornare sit. Fringilla dui nulla nunc facilisis pretium. In sed tristique ut mus. A pretium velit convallis.</p>
            </div>
            <div className="paragraphTwo">
                <header>1.1 Sub Heading Title</header>
                <hr />
                <p style={{width: "50%"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum semper tellus aenean interdum suspendisse quisque sociis sollicitudin sed. A, gravida rhoncus praesent mauris tortor cras. Non iaculis senectus sed justo, non. Purus urna amet sit amet hendrerit.
                </p>
                <p style={{width: "50%"}}>
                Faucibus porttitor pellentesque urna diam tellus. Tempus phasellus ut pellentesque sollicitudin dictum placerat. Elit, molestie auctor enim consectetur nibh turpis. Id amet nisi commodo tincidunt blandit id. Lacus est purus nisl mi id lectus donec elit at quis et aliquam.
                </p>
                <li>Pharetra magna pellentesque pharetra tortor ac est </li>
                <li>Gravida dolor tortor. Volutpat egestas</li>
                <li>Maecenas id et aenean ornare sit. Fringilla dui nulla</li>
                <li>Nunc facilisis pretium. In sed tristique ut mus. A pretium velit convallis.
                </li>
            </div>
            <div className="paragraphThree">
                <header>1.2 Lorem Ipsum</header>
                <hr />
            </div>
        </div>
    </div>
    </>
    
    
  )
}

export default PrivacyPolicy;