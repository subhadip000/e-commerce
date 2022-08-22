import React from 'react'
import fb from '../images/fb.png'
import ig from '../images/ig.png'
import tw from '../images/tw.png'

function Footer() {
  return (
    <>
    <div className="social-links">
        <img src={fb} alt=""/>
        <img src={ig} alt=""/>
        <img src={tw} alt=""/>
    </div>
    </>
  )
}

export default Footer