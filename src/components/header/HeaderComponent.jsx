import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './header.css'
import { useLocation } from 'react-router-dom';
import { NavigationContext } from "../../HomePage";

const HeaderComponent = ({lightTheme}) => {
  let location = useLocation()
  let navigate = useNavigate()
  const { currentPage, setCurrentPage } = useContext(NavigationContext)


  const modalHandler = ()=>{
    console.log(location.pathname)
    if(location.pathname !== '/'){
      navigate('/')
    }else{
      window.location.href = '#contact-us'
    }
  }
  return (
    <div className='header-container-flex'>
      <div className={lightTheme ? " header-overlay-light header-overlay " : "header-overlay-dark header-overlay "}></div>
      <div className="container_header">
        <div className='header_left'>
         
        <div className='logo'>
         
           <img src='./icons/s1.gif' alt="" />
         
        </div>
        
        <div className="logo_name">
          <div className='brand_name'>
            <Link to={'/'}> 
              <img src='/images/Logo.svg' alt="" srcSet="" />
            </Link>
          </div>
        </div>
      </div>
      <div className='header_right'>
        <button onClick={modalHandler} className='btn_primary'>work with us</button>
      </div>
    </div><hr className='line' />
    </div>
  )
}

export default HeaderComponent