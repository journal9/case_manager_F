import React from 'react'
import Board from '../components/Board'
import classes from '../css-modules/Pageback.module.css'
import { MdLocalPolice } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

function Pageback() {
  return (
    <div className={classes.boardback}>
      <div className={classes.intro}>
        <MdLocalPolice className={classes.badge}/>
        <div className={classes.user}>
          <div className={classes.name}>User's Portal</div>
          <div className={classes.username}>Akash Khajuria</div>
          </div>
        <div className={classes.status}>
          <div>Authorised</div>
        </div>
      </div>
      <div className={classes.addcase}>
          <div className={classes.say}>Add</div>
          <IoIosAddCircleOutline className={classes.add}/>
      </div>
      <div className={classes.workingboard}>
        Working Board
      </div>
      <Board/>
      
      </div>
  )
}

export default Pageback