import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
  return (
    <div className='container logo-header'>
        <FontAwesomeIcon icon={faCloud} className="cloud"/>
        <h1>Weather App</h1>
    </div>
  )
}

export default Logo