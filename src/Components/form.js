import React from 'react';
// import ReactDOM from 'react-dom';

const form1=(props)=>{
    return (

        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="City"/>
            <input type="text" name="country" placeholder="Country"/>
            <button>Get Weather</button>
        </form>    
    );
}
export default form1;