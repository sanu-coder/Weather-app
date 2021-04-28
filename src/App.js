import React from 'react';
import ReactDOM from 'react-dom';
import Heading from "./Components/Heading";
import Form1 from "./Components/form";
import Forecast from "./Components/forecast";

const api_key  = "9ec0a6d67c1f3f725daeef252e6f726f";
class App extends React.Component {
    state = {
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        pressure: "",
        icon: "",
        description: "",
        error: ""
    }
    render() {
        return ( 
        <div className = "container" >
            <Heading/>
            <div className="form">
                <Form1 loadWeather = { this.getWeather }/>
            </div>
            <div className="weather">
                <Forecast temperature = { this.state.temperature }
                city = { this.state.city }
                country = { this.state.country }
                humidity = { this.state.humidity }
                pressure = { this.state.pressure }
                icon = { this.state.icon }
                description = { this.state.description }
                error = { this.state.error }
                />
            </div>    
        </div>
        );
    }
    getWeather = async(e) => {
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        e.preventDefault();
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${api_key}`);
        const response = await api_call.json();
        if (city && country) {
            this.setState({
                temperature: response.main.temp,
                city: response.name,
                country: response.sys.country,
                humidity: response.main.humidity,
                pressure: response.main.pressure,
                icon: response.weather[0].icon,
                description: response.weather[0].description,
                error: ""
            })
        } else {
            this.setState({
                error: "Please fill out i/p feilds"
            })
        }

    }
}
export default App;