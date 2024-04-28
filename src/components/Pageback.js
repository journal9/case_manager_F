import React from 'react'
import Board from '../components/Board'
import classes from '../css-modules/Pageback.module.css'

function Pageback() {
  return (
    <div className={classes.boardback}>
      <div className={classes.intro}>
        <div className={classes.badge}>bad</div>
        <div className={classes.user}>
          <div className={classes.name}>User's Portal</div>
          <div className={classes.username}>Akash</div>
          </div>
        <div className={classes.status}>
          <div>Authorised</div>
        </div>
      </div>
      <Board/>
      </div>
  )
}

export default Pageback