import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <>
      <h1>OOPS, you are in the wrong place.</h1>
      Please go to <Link to="/">LOGIN</Link>.
    </>
    
    
  )
}
