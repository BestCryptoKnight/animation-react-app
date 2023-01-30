import React, { useContext, useState, useEffect } from "react";
import { NavigationContext } from "../HomePage";
import { PAGES } from "../models/EnumModel";

export const DotElements = ({ animated, setAnimated }) => {
    const { currentPage, setCurrentPage } = useContext(NavigationContext)
    const navigationHandler = (page) => {
        setCurrentPage(page)
        setAnimated(1)
    }

    const [h12Style, setH12Style] = useState()
    const [h13Style, setH13Style] = useState()
    const [h14Style, setH14Style] = useState()
    const [h15Style, setH15Style] = useState()
    const [h16Style, setH16Style] = useState()
    const [h17Style, setH17Style] = useState()
    const [h18Style, setH18Style] = useState()
    const [h19Style, setH19Style] = useState()
    const [h20Style, setH20Style] = useState()

    useEffect(() => {
        switch (currentPage) {
            case PAGES.SOLUTIONS:
                setH12Style('h12')
                setH13Style('h13')
                setH14Style('h14')
                setH15Style('h15')
                setH16Style('h16')
                setH17Style('h17')
                setH18Style('h18')
                setH19Style('h19')
                setH20Style('h20')
                break;
            case PAGES.STRATEGY:
                setH12Style('h12_animated h12_strategy')
                setH13Style('h13_animated h13_strategy')
                setH14Style('h14_animated h14_strategy')
                setH15Style('h15_animated h15_strategy')
                setH16Style('h16_animated h16_strategy')
                setH17Style('h17_animated h17_strategy')
                setH18Style('h18_animated h18_strategy')
                setH19Style('h19_animated h19_strategy')
                setH20Style('h20_animated h20_strategy')

                break;
            case PAGES.SOCIAL:
                setH12Style('h12_animated h12_social')
                setH13Style('h13_animated h13_social')
                setH14Style('h14_animated h14_social')
                setH15Style('h15_animated h15_social')
                setH16Style('h16_animated h16_social')
                setH17Style('h17_animated h17_social')
                setH18Style('h18_animated h18_social')
                setH19Style('h19_animated h19_social')
                setH20Style('h20_animated h20_social')

                break;
            case PAGES.ADS_MANAGEMENT:
                setH12Style('h12_animated h12_ad')
                setH13Style('h13_animated h13_ad')
                setH14Style('h14_animated h14_ad')
                setH15Style('h15_animated h15_ad')
                setH16Style('h16_animated h16_ad')
                setH17Style('h17_animated h17_ad')
                setH18Style('h18_animated h18_ad')
                setH19Style('h19_animated h19_ad')
                setH20Style('h20_animated h20_ad')

                break;
            case PAGES.TECH:
                setH13Style('h13_animated h13_tech')
                setH12Style('h12_animated h12_tech')
                setH14Style('h14_animated h14_tech')
                setH15Style('h15_animated h15_tech')
                setH16Style('h16_animated h16_tech')
                setH17Style('h17_animated h17_tech')
                setH18Style('h18_animated h18_tech')
                setH19Style('h19_animated h19_tech')
                setH20Style('h20_animated h20_tech')
            default:
                break;
        }
    }, [currentPage])

    return (
        <>
            <div
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center "
                style={animated !== 1 ? { zIndex: "99" } : { zIndex: "0" }}
            >
                <div className="iconDark relative">
                    <div className="frame">
                        <div className={animated === 1 ? "s2_animated" : "solution2"}>
                            <h1 onClick={() => navigationHandler(PAGES.ADS_MANAGEMENT)} className="text_s"> ADS MANAGEMENT</h1>
                        </div>
                        <div className={animated === 1 ? "s" : "solution"}>
                            <h1 onClick={() => navigationHandler(PAGES.TECH)} className="text_s">TECH</h1>
                        </div>
                        <div className={animated === 1 ? "s1_animated" : "solution1"}>
                            <h1 onClick={() => navigationHandler(PAGES.SOCIAL)} className="text_s">SOCIAL</h1>
                        </div>

                        <div className={animated === 1 ? "s3_animated" : "solution3"}>
                            <h1 onClick={() => navigationHandler(PAGES.STRATEGY)} className="text_s">
                                {" "}
                                STRATEGY
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full flex relative items-center justify-center -mt-48 h-full">
                <div className="iconDark relative">
                    <div className=" relative top-72 z-30">
                        <div
                            className={h12Style}
                            alt=""
                        ></div>
                        <div
                            className={h13Style}
                            alt=""
                        ></div>
                        <div
                            className={h14Style}
                            alt=""
                        ></div>
                        <div
                            className={h15Style}
                            alt=""
                        ></div>
                        <div
                            className={h16Style}
                            alt=""
                        ></div>
                        <div
                            className={h17Style}
                            alt=""
                        ></div>
                        <div
                            className={h18Style}
                            alt=""
                        ></div>
                        <div
                            className={h19Style}
                            alt=""
                        ></div>
                        <div
                            className={h20Style}
                            alt=""
                        ></div>
                    </div>

                    <div className="frame">
                        <img
                            src="/green/Vector.svg"
                            className={animated === 1 ? "v_animated" : "v"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-1.svg"
                            className={animated === 1 ? "v1_animated" : "v1"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-2.svg"
                            className={animated === 1 ? "v2_animated" : "v2"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-3.svg"
                            className={animated === 1 ? "v3_animated" : "v3"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-4.svg"
                            className={animated === 1 ? "v4_animated" : "v4"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-5.svg"
                            className={animated === 1 ? "v5_animated" : "v5"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-6.svg"
                            className={animated === 1 ? "animated_v6" : "v6"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-7.svg"
                            className={animated === 1 ? "v7_animated" : "v7"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-8.svg"
                            className={animated === 1 ? "v8_animated" : "v8"}
                            alt=""
                        />
                        <img
                            src="/green/Vector-9.svg"
                            className={animated === 1 ? "v9_animated" : "v9"}
                            alt=""
                        />
                    </div>
                    <div className="group3">
                        <img
                            src="/white/Vector.svg"
                            className={`${animated === 1 && "h_animated"} ${animated === 0 && "h"
                                } ${animated !== 1 && animated !== 0 && "hidden"}`}
                            alt=""
                        />
                        <img
                            src="/white/Vector-1.svg"
                            className={`${animated === 1 && "h1_animated"} ${animated === 0 && "h1"
                                } ${animated !== 1 && animated !== 0 && "hidden"}`}
                            alt=""
                        />
                        <img
                            src="/white/Vector-2.svg"
                            className={`${animated === 1 && "h2_animated"} ${animated === 0 && "h2"
                                } ${animated !== 1 && animated !== 0 && "hidden"}`}
                            alt=""
                        />
                        <img
                            src="/white/Vector-3.svg"
                            className={`${animated === 1 && "h3_animated"} ${animated === 0 && "h3"
                                } ${animated !== 1 && animated !== 0 && "hidden"}`}
                            alt=""
                        />
                        <img
                            src="/white/Vector-4.svg"
                            className={`${animated === 1 && "h4_animated"} ${animated === 0 && "h4"
                                } ${animated !== 1 && animated !== 0 && "hidden"}`}
                            alt=""
                        />
                        <img
                            src="/white/Vector-5.svg"
                            className={`${animated === 1 && "h5_animated"} ${animated === 0 && "h5"
                                } ${animated !== 1 && animated !== 0 && "hidden"}`}
                            alt=""
                        />
                        {/* <img src="/white/Vector-6.svg" className={animated === 1? "h6_animated": "h6"} alt="" /> */}

                        <img
                            src="/white/Vector-8.svg"
                            className={`${animated === 1 && "h8_animated"} ${animated === 0 && "h8"
                                } ${animated !== 1 && animated !== 0 && "hidden"}`}
                            alt=""
                        />
                        <img
                            src="/white/Vector-9.svg"
                            className={`${animated === 1 && "h9_animated"} ${animated === 0 && "h9"
                                } ${animated !== 1 && animated !== 0 && "hidden"}`}
                            alt=""
                        />
                        <img
                            src="/white/Vector-10.svg"
                            className={`${animated === 1 && "h10_animated"} ${animated === 0 && "h10"
                                } ${animated !== 1 && animated !== 0 && "hidden"}`}
                            alt=""
                        />
                        <img
                            src="/white/Vector-11.svg"
                            className={`${animated === 1 && "h11_animated"} ${animated === 0 && "h11"
                                } ${animated !== 1 && animated !== 0 && "hidden"}`}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default DotElements;
