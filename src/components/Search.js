import { useContext } from 'react'
import { useState } from 'react'
import WeatherAppContext from '../context/weatherAppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    const [search, searchCity] = useState("")

    const {cities, setAndGetCity} = useContext(WeatherAppContext)

    const getCity = (city) => {
        const edited = city.replace(/İ/g,"i").toLowerCase()
        setAndGetCity(edited)
        searchCity("")
    }

    return (
        <section className='container search-section'>
            <div className='input-group'>
                <input type="text" placeholder='Search city...' maxLength={25} value={search} onChange={(e) => searchCity(e.target.value)} className={search.length >= 1 ? "border-radius-adjust" : ""}/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-logo"/>
            </div>
            <ul className={search.length >= 1 ? "" : "none"}>
                {
                    cities.filter((city) => city.replace(/İ/g,"i").toLowerCase().includes(search.replace(/İ/g,"i").toLowerCase()))
                    .map((city, index) => {
                        return <li key={index} onClick={() => getCity(city)}>{city}</li>
                    })
                }
            </ul>
        </section>
    )
}

export default Search