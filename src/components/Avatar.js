import React from 'react'
import Logo22 from '../assests/images/Logo 22.jpg'

const Avatar = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '200px',
        justifyContent: 'space-evenly',
        alignItems: "center"
      }}>
      <img src={Logo22} alt='logo' className='logo-img' />
      <h2 className='header'>ZUMA TECH</h2>
    </div>
  )
}

export default Avatar
