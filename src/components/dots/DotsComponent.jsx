import React,{useState,useEffect,useContext} from 'react'
import { NavigationContext } from '../../HomePage'
import { PAGES } from '../../models/EnumModel'
import './dots.css'
const DotsComponent = () => {
    const { currentPage, setCurrentPage } = useContext(NavigationContext)

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
                setH12Style('sDot12')
                setH13Style('sDot13')
                setH14Style('sDot14')
                setH15Style('sDot15')
                setH16Style('sDot16')
                setH17Style('sDot17')
                setH18Style('sDot18')
                setH19Style('sDot19')
                setH20Style('sDot20')
                break;
            case PAGES.STRATEGY:
                setH12Style('sDot12_animated sDot12_strategy')
                setH13Style('sDot13_animated sDot13_strategy')
                setH14Style('sDot14_animated sDot14_strategy')
                setH15Style('sDot15_animated sDot15_strategy')
                setH16Style('sDot16_animated sDot16_strategy')
                setH17Style('sDot17_animated sDot17_strategy')
                setH18Style('sDot18_animated sDot18_strategy')
                setH19Style('sDot19_animated sDot19_strategy')
                setH20Style('sDot20_animated sDot20_strategy')

                break;
            case PAGES.SOCIAL:
                setH12Style('sDot12_animated sDot12_social')
                setH13Style('sDot13_animated sDot13_social')
                setH14Style('sDot14_animated sDot14_social')
                setH15Style('sDot15_animated sDot15_social')
                setH16Style('sDot16_animated sDot16_social')
                setH17Style('sDot17_animated sDot17_social')
                setH18Style('sDot18_animated sDot18_social')
                setH19Style('sDot19_animated sDot19_social')
                setH20Style('sDot20_animated sDot20_social')

                break;
            case PAGES.ADS_MANAGEMENT:
                setH12Style('sDot12_animated sDot12_ad')
                setH13Style('sDot13_animated sDot13_ad')
                setH14Style('sDot14_animated sDot14_ad')
                setH15Style('sDot15_animated sDot15_ad')
                setH16Style('sDot16_animated sDot16_ad')
                setH17Style('sDot17_animated sDot17_ad')
                setH18Style('sDot18_animated sDot18_ad')
                setH19Style('sDot19_animated sDot19_ad')
                setH20Style('sDot20_animated sDot20_ad')

                break;
            case PAGES.TECH:
                setH13Style('sDot13_animated sDot13_tech')
                setH12Style('sDot12_animated sDot12_tech')
                setH14Style('sDot14_animated sDot14_tech')
                setH15Style('sDot15_animated sDot15_tech')
                setH16Style('sDot16_animated sDot16_tech')
                setH17Style('sDot17_animated sDot17_tech')
                setH18Style('sDot18_animated sDot18_tech')
                setH19Style('sDot19_animated sDot19_tech')
                setH20Style('sDot20_animated sDot20_tech')
            default:
                break;
        }
    }, [currentPage])
  return (
      <div className="dot-container-flex absolute top-0 left-0 w-full ">
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
  )
}

export default DotsComponent