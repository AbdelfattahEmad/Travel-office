import React from 'react'
import classes from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTeamspeak } from '@fortawesome/free-brands-svg-icons';
import fb from "../../images/fb.png"
import ins from "../../images/ins.png"
import tw from "../../images/tw.png"
import snp from "../../images/snp.png"
import yo from "../../images/yo.png"







const Footer = () => {
  return (

    <div className={classes.Head_Footer}>

  <footer className={classes.Footer_Container}>
    
    


    <div className={classes.Footer_items}>
      <h2>Company</h2>
      <ul>
        <li>career</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Press Info</li>
        <li>Feature Succses</li>
      </ul>


    </div>
    



    <div className={classes.Footer_items}>
      <h2>wht Travelapp</h2>
      <ul>
        <li>Enter prise</li>
        <li>Customer stories</li>
        <li>Pricing</li>
        <li>Sucurity</li>
      </ul>


    </div>


    <div className={classes.Footer_items}>
      <h2>Extras</h2>
      <ul>
        <li>Podcasts</li>
        <li>Travelleapp Shop</li>
        <li>TravelApp at work</li>
        <li>Traveller found</li>
        <li>Feature Succses</li>
      </ul>


    </div>


    <div className={classes.Footer_items}>
      <h2>Company</h2>
      <ul>
        <li>career</li>
        <li>About Us</li>
        <li>Blog</li>
        <li>Press Info</li>
        <li>Feature Succses</li>
      </ul>


    </div>

  </footer>

  <hr />

  <div className={classes.Contact_us}>

      <div className={classes.Logo}>


    <FontAwesomeIcon icon={faTeamspeak} size="2xl" style={{color: "#80ad5c",}} />
      <h4>TravelApp</h4>  

      </div>

    <div className={classes.Choises}>
      <p>Review</p>
      <p>People</p>
      <p>Partners</p>
        <p>Feedback</p>
        <p>Pricing</p>

    </div>

    <div className={classes.Icons}>

      <img src={fb} alt='social' />
      <img src={ins} alt='social' />
      <img src={tw} alt='social' />
      <img src={snp} alt='social' />
      <img src={yo} alt='social' />





    </div>

  </div>


  </div>
  
  )
}

export default Footer