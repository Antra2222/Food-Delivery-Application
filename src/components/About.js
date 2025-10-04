import React, { useContext } from 'react'
import userContext from '../utils/userContext'

const About = () => {

  const {loggedInUser}  = useContext(userContext)

  return (
    <div>
      About Us...............
      <div>{loggedInUser}</div>
    </div>
  )
}

export default About
