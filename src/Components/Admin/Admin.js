import React, { useState } from 'react'
import './Admin.css'
import { Button, TextField } from '@material-ui/core'
import Order from '../OrderDetails/Order'

const Admin = () => { 
 
  
  return (
    <div className='Admin'>
       <Order/>
    </div>
  )
}

export default Admin