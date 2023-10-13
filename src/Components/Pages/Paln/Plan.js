import React from 'react'
import classes from "./Plan.module.css"
import googel2 from "../../images/googel2.jpg"
import ch from "../../images/ch.png"

import app2 from "../../images/app2.jpg"



const Plan = () => {
  return (

    <div className={classes.Plan_Container}>
      <div className={classes.Title}>
        <h5>Pricing Table</h5>
        <h2>Choose The Plan That,s right For You</h2>

      </div>

      <div className={classes.Plan_items}>


        <div className={classes.Plan}>

          <h2>$ 29 / <span>month</span></h2>

          <h3>Basic</h3>

          <p>Note that the development  build is not optimized.
            <br />development  build

          </p>

          <hr />

          <div className={classes.rate}>

            <span className={classes.Cheack}>
             <img src={ch} alt='cheak'  /> 
              <p>You can now view travel in the browser.</p>
            </span>

            <span className={classes.Cheack}>
             <img src={ch} alt='cheak'  /> 
              <p>You can now view travel in the browser.</p>
            </span>

            <span className={classes.Cheack}>
             <img src={ch} alt='cheak'  /> 
              <p>You can now view travel in the browser.</p>
            </span>

            <div className={classes.Choose}>
              Choose Plan
            </div>


          </div>


        </div>


        <div className={classes.Plan}>

          <h2>$ 94 / <span>month</span></h2>

          <h3>Standerd</h3>

          <p>Note that the development  build is not optimized.
            <br />development  build

          </p>

<hr />

<div className={classes.rate}>

  <span className={classes.Cheack}>
   <img src={ch} alt='cheak'  /> 
    <p>You can now view travel in the browser.</p>
  </span>

  <span className={classes.Cheack}>
   <img src={ch} alt='cheak'  /> 
    <p>You can now view travel in the browser.</p>
  </span>

  <span className={classes.Cheack}>
   <img src={ch} alt='cheak'  /> 
    <p>You can now view travel in the browser.</p>
  </span>

  <div className={classes.Choose}>
    Choose Plan
  </div>


</div>


        </div>


        <div className={classes.Plan}>

        <h2>$ 99 / <span>month</span></h2>

        <h3>permium</h3>

        <p>Note that the development  build is not optimized.
          <br />development  build

        </p>

        <hr />

          <div className={classes.rate}>

            <span className={classes.Cheack}>
            <img src={ch} alt='cheak'  /> 
              <p>You can now view travel in the browser.</p>
            </span>

            <span className={classes.Cheack}>
            <img src={ch} alt='cheak'  /> 
              <p>You can now view travel in the browser.</p>
            </span>

            <span className={classes.Cheack}>
            <img src={ch} alt='cheak'  /> 
              <p>You can now view travel in the browser.</p>
            </span>

            <div className={classes.Choose}>
              Choose Plan
            </div>


          </div>


        </div>


      </div>
      <div className={classes.Dowenload_app}>
        <h3>Dowenload The Travel App Now !</h3>
        <p>Note that the development build is not optimized.Note that the development build is <br /> not optimized 
        optimized.Note that the developmentn</p>
        <div className={classes.Image}>
          <img src={googel2} alt='googel' />
          <img src={app2} alt='googel' />

        </div>


      </div>



      
      </div>
      
  )
}

export default Plan