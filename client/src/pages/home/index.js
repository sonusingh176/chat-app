import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar'

const Home = () => {
  return (
    <div className='home-page'>
      <Header/>
      <div className='main-content'>

        {/* SIDEBAR LAYOUT */}
        <Sidebar></Sidebar>
        {/* CHAT AREA LAYOUT */}

      </div>
    </div>
  )
}

export default Home