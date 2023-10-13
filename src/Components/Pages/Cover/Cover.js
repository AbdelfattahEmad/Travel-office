import React from 'react'
import classes from "./Cover.module.css"
import phone from  "../../images/phone.jpg"
import amp2 from  "../../images/amp2.jpg"
import googel2 from  "../../images/googel2.jpg"
import app2 from  "../../images/app2.jpg"


const Cover = () => {
  return (
    <div className={classes.Cover_Container}>

      <div className={classes.words}>

        <div className={classes.p_one}>
          <img src={amp2} alt='amp' />
          <p>
          Travel Booking App</p>


        </div>

        <div className={classes.p_two}>
          <h3>Discover The <span>Best <br/> Lovely</span> Places</h3>
        </div>

        <div className={classes.app}>

          <p>Note that the development build is not optimized.
            To create a production build, use npm run build<br /> Note that the development build is not optimized.
            that the development build is not optimized.
            </p>


          <div className={classes.image}>

            <img src={googel2} alt='googel' />
            <img src={app2} alt='app 2' />



          </div>

          
        </div>


      </div>

      <div className={classes.Image}>
        <img src={phone} alt='phone' />
      </div>

    </div>
  )
}

export default Cover