import React from 'react';

const Forecast=(props)=>{
    return (
        <div>
            {props.country&&props.city&&<p> <b>Location  : </b> {props.city},{props.country}</p>}
            {props.temperature&&<p> <b>Temperature :</b>   {props.temperature}</p>}
            {props.pressure&&<p><b>Pressure : </b>{props.pressure}</p>}
            {props.city&&<p><b>City : </b>{props.city}</p>}
            {props.humidity&& <p><b>Humidity : </b>{props.humidity}</p>}
            {props.icon&&<img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather-icon"/>}
            {props.description&&<p><b> DESCRIPTION : </b>{props.description}</p>}
            {props.error&&<p><b>Error : </b>{props.error}</p>}
        </div>
    );
}
export default Forecast;