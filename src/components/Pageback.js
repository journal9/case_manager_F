import React from 'react'
import Board from '../components/Board'
import classes from '../css-modules/Pageback.module.css'

function Pageback() {
  return (
    <div className={classes.boardback}>
      Pageback
      <Board/>
      </div>
  )
}

export default Pageback