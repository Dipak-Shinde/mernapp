import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import Card from '../componants/Card'
import Crousal from '../componants/Crousal'

export default function Home() {
  return (
    <div>
      <div> <Navbar /> </div>
      <div> <Crousal /></div>
      <div className='m-3'> <Card /> </div>
      <div> <Footer /> </div>
    </div>
  )
}
