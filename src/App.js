import React from 'react'
import Header from './components/Header'
import WeatherDetails from './components/WeatherDetails'
import WeatherAppState from './context/weatherAppState'

const App = () => {
  return (
    <WeatherAppState>
      <Header />
      <WeatherDetails />
    </WeatherAppState>
  )
}

export default App
