import React from 'react'
import { useContext } from 'react'
import WeatherAppContext from '../context/weatherAppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const WeatherDetails = () => {

    const {currentCity} = useContext(WeatherAppContext)

    return (
        currentCity &&
            <section className='container weather-details'>
                <div className='card'>
                    <div className='temp-and-city card-details'>
                        <h1>{(currentCity.main.temp).toFixed()}°</h1>
                        <p>{currentCity.name}</p>
                    </div>
                    <div className='temp-max-and-min card-details'>
                        <div className='row'>
                            <p className='bold'>{(currentCity.main.temp_max).toFixed()}°</p>
                            <p> Max Temperature </p>
                        </div>
                        <div className='row'>
                            <p className='bold'>{(currentCity.main.temp_min).toFixed()}°</p>
                            <p>Min Temperature </p>
                        </div>
                    </div>
                    <div className='feels_like-and-humidity card-details'>
                        <div className='row'>
                            <p className='bold'>{(currentCity.main.feels_like).toFixed()}°</p>
                            <p>Feels Like</p>
                        </div>
                        <div className='row'>
                            <p className='bold'>{(currentCity.main.humidity).toFixed()}</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className='weather-and-wind card-details'>
                        <div className='row'>
                            <p className='bold'>Weather Condition:</p>
                            <p className='weather-condition'>{currentCity.weather[0].description}</p>
                        </div>
                        <div className='row'>
                            <p className='bold'>Wind:</p>
                            <div className='wind-speed-and-deg'>
                                <div>
                                    <FontAwesomeIcon icon={faWind} className="wind-icons"/>
                                    <p>{currentCity.wind.speed}</p>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faLocationArrow} className="wind-icons"/>
                                    <p>{currentCity.wind.deg}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default WeatherDetails