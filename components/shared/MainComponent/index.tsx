import React from 'react'
import {StoreFrontHeader as Header} from '../Header/StoreFrontHeader';
import {StoreFrontFooter as Footer} from '../Footer/StoreFrontFooter';
export const MainComponent: React.FC = ({children}) => {
  return (
    <div className='d-flex flex-column sticky-footer-wrapper'>
      <Header/>
      <div className='container flex-fill'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
