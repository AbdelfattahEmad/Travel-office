import React from 'react'
import classes from "./Layout.module.css"
import  Navbar  from '../Pages/Navbar/Navbar'
import Cover from '../Pages/Cover/Cover'
import Community from '../Pages/Community/Community'
import Memories from '../Pages/Memories/Memories'
import Discover from '../Pages/Discover/Discover'
import Plan from '../Pages/Paln/Plan'
import Footer from '../Pages/Footer/Footer'


const Layouts = () => {
  return (
    <div className={classes.Layout_Container}>

    <div className={classes.Navbar}>
        <Navbar />

    </div>

    <div className='Cover'>
        <Cover/>
    </div>

    <div className='Community'>
        <Community />
    </div>

    <div className='Memories'>
      <Memories />

    </div>

    <div className='Discover'>
      <Discover />
          </div>

      <div className='Plan'>
        <Plan />
      </div>

      <div className='Footer'>

        <Footer />
      </div>






        
        
    </div>
  )
}

export default Layouts