import React from 'react'
import { useReducer } from 'react'
import weatherAppReducer from "./weatherAppReducer"
import WeatherAppContext from './weatherAppContext'
import axios from 'axios'

const WeatherAppState = (props) => {
    const initialState = { 
        cities: ["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"],
        currentCity: ""
    }

    const [state, dispatch] = useReducer(weatherAppReducer, initialState)

    const setAndGetCity = (city) => {
        axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(res => {
            dispatch({
                type: "GET_CITY",
                payload: res.data
            })
        })
    }

    return (
        <WeatherAppContext.Provider
        value={{
            cities: state.cities,
            currentCity: state.currentCity,
            setAndGetCity
        }}>
            {props.children}
        </WeatherAppContext.Provider>
    )
}

export default WeatherAppState

