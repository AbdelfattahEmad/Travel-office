import React from 'react'
import classes from "./Discover.module.css"
import p1 from "../../images/p1.png"
import per1 from "../../images/per1.jpg"
import per2 from "../../images/per2.webp"
import per3 from "../../images/per3.jpg"
import per4 from "../../images/per4.jpg"




const Discover = () => {
  return (
    <div className={classes.Discover_Container}>
        <div className={classes.Discover_items}>

            <h5>Popular Destenation</h5>

            <h3>Discovering the ideal <br/> Destenation</h3>

            <p>
                Note that the development build is not optimized.
                To create a production build, use npm run build <br/>
                Note that the development build is not optimized.
                To create a production build, use npm run build

                .</p>
                <p>
                Note that the development build is not optimized.
                To create a production build, use npm run build <br/>
                Note that the development build is not optimized.
                To create a production build, use npm run build
                </p>

                <div className={classes.members_images}>
                    <img src={per1} alt='person' />
                    <img src={per2} alt='person' />
                    <img src={per3} alt='person' />
                    <img src={per4} alt='person' />



                </div>

        </div>
        <div className={classes.Discover_images}>
            <img src={p1}  alt='phone' />

        </div>

     
        </div>
  )
}

export default Discover