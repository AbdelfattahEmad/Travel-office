import React from 'react'
import classes from "./Memories.module.css"
import world from "../../images/world.png"
import tq from "../../images/tq.png"
import ac from "../../images/ac.png"



import tou1 from "../../images/tou1.jpg"
const Memories = () => {
  return (
    <div className={classes.Memories_Container}>

      <div className={classes.Image}>

        <img src={tou1} alt='tourist' />

        <p>
        Do you know what it’s like to communicate <br />
        with  salty your familya salty ocean’s divide?<br />
        Do you want the sun and moon to enter<br /> 
         - Annita
        </p>

      </div>

      <div className={classes.Get_Conected}>

        <p>Get Conected</p>
        <h2>Share Your Memmories <br /> with Your Travel buddys</h2>

        <div className={classes.Conected_items}>
            <div className={classes.image}>
            <img src={world}  alt='world'/>
            </div>

          <div className={classes.item}>

            <h3>Search Travel Location</h3>

              <p> Do you know what it’s like to communicate
                with salty your <br /> salty ocean’s divide?
                Do you want the sun and moon to enter
              </p>
            
          </div>

          

        </div>

        <div className={classes.Conected_items}>
            <div className={classes.image}>
            <img src={tq}  alt='world'/>
            </div>

          <div className={classes.item}>

            <h3>Create Team Event</h3>

              <p> Do you know what it’s like to communicate
                with salty your <br /> salty ocean’s divide?
                Do you want the sun and moon to enter
              </p>
            
          </div>

          

        </div>


        <div className={classes.Conected_items}>
            <div className={classes.image}>
            <img src={ac}  alt='world'/>
            </div>

          <div className={classes.item}>

            <h3>Track members</h3>

              <p> Do you know what it’s like to communicate
                with salty your <br /> salty ocean’s divide?
                Do you want the sun and moon to enter
              </p>
            
          </div>

          

        </div>




        </div>



      </div>
  )
}

export default Memories