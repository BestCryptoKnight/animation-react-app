import React from 'react'
import Marquee from "react-fast-marquee";
import './style.css'
import { useState, useEffect } from 'react'
const LandingPage = () => {

    const [isShown, setIsShown] = useState(false)
    let [currSubTextIndex, setCurrSubTextIndex] = useState(0)
    const subTextArr = ['Uncovering', 'Exploring','Maximizing', 'Identifying' ]
    
    useEffect(() => {
        const interval = setInterval(() => {
           if(currSubTextIndex + 1 >= subTextArr.length){
            setCurrSubTextIndex(0)
           }else{
            setCurrSubTextIndex(currSubTextIndex => currSubTextIndex + 1)
           }
          }, 2000);
          return () => clearInterval(interval);
        }, [currSubTextIndex]);
   
    useEffect(() => {
        console.log(isShown)
    }, [isShown])
    
    return (
        <div className='snap-start container-flex'>
            <div className="landing-overlay"></div>
           <div className="container_hero">
                <div className="hero_left">
                    <div className='banner'>
                        <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                            {isShown ? <img className='banner_info' src='./icons/Group40.svg' alt="" /> : <div className='banner_info_blur'>
                                <img src='./icons/Group40.svg' alt="" />
                            </div>}
                        </div>
                    </div>
                    <div className="description">
                        <div className='description_giphy'>
                            <img src='./white/giphy.gif' alt="" />
                        </div>
                        <div className='description_info'>
                            <div style={{float:"right", marginBottom:'10px'}}>
                                <img src='./white/Vector21.svg' alt="" />    
                            </div>
                            <div>
                                <p id='content1'><img src={`./white/${subTextArr[currSubTextIndex]}.svg`} alt="" style={{display:'inline-block'}} /> hidden opportunities and driving</p><p id='content2'>measurable results through advanced data</p><p id='content3'> analysis and innovative marketing strategies.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='vl'></div>
                <div className="hero_right">
                    <div className='circle'>
                        <div className="circle_logo">
                            <img src='./icons/Model1.gif' alt="" />              
                        </div>
                        <div className="circular_text">
                                <img src='./icons/Circulartext2.svg' alt="circular_text"  />
                        </div>
                        <div className='dot'>
                            <img src='./white/Group3.svg' alt="dat_image" />
                        </div>
                    </div>
                </div>
            </div>
            <hr className='line' />
            <div className="container_footer">
                <div className='marqueeOverlay'></div>
                <Marquee gradient={false} speed={100}>
                    <img style={{marginLeft:'50px'}} src='./white/caption2.svg' alt="" />
                </Marquee>
            </div>
        </div>
    )
}

export default LandingPage