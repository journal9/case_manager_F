import React from 'react'
import classes from '../css-modules/LoginBack.module.css'

function LoginBack() {
  return (
    <div className={classes.col}>
        <div>
            CASE REGISTRAR
        </div>
        <p>
        Open book to record the cases progress and share updates 
        </p>
        <button>
            LOGIN
        </button>
    </div>
  )
}

export default LoginBack