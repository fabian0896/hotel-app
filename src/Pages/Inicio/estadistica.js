import React from 'react';
import './estadistica.css';

function Estadistica(props){
    return(
        <div className="Estadisticas">
            <i className="Estadistica-icon fas fa-users"></i>
            <div className="Estadistica-info">
                <p className="Estadistica-Title">Total Pasajeros</p>
                <p className="Estadistica-value">2490</p>
            </div>
        </div>
    )
}


export default Estadistica;
