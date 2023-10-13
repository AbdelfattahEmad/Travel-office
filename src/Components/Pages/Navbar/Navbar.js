import React from 'react'
import classes from './Navbar.module.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTeamspeak } from '@fortawesome/free-brands-svg-icons';






const Navbar = () => {
  return (
    <div className={classes.Nav_Container}>

      <div className={classes.Logo}>

      <FontAwesomeIcon icon={faTeamspeak} size="2xl" style={{color: "#447f75",}} />
        <h4>TravelApp</h4>  

        </div>

      <div className={classes.nav_items}>
        <ul>

          <li>Review</li>

          <li>People</li>
          <li>Partners</li>
          <li>FeedBack</li>
          <li>Pricing</li>
        </ul>
        <Button variant="success">Get The App</Button>{' '}



      </div>
      


    </div>
  )
}

export default Navbar