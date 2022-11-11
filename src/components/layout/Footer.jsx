import React from 'react'
import { useLocation } from 'react-router-dom'
const Footer = () => {
  const {pathname}=useLocation()
  return (
    <footer className={`footer ${pathname==='/' ? 'fixed' : 'relative'}`}>
      <h4 className='footer-cont'>
      created by Rohandeep - devChallenges.io</h4>
    </footer>
  )
}

export default Footer