import React, { Fragment } from 'react';
import { Bar } from 'react-chartjs-2';



class BarChart extends React.Component{
    render(){
        const data = {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
            datasets:[
                {
                    label: 'Pasajeros',
                    backgroundColor: '#fbc531',
                    data: [300, 200, 450, 346]
                }
            ]
        }
        return(
            <Fragment>
                <h2>Pasajeros Por Mes</h2>
                <Bar
                    height={170}
                    data={data}
                    options={{
                        maintainAspectRatio: true,
                        scales:{
                            yAxes:[
                                {
                                    ticks:{
                                        beginAtZero: true
                                    }
                                }
                            ]
                        }
                    }}
                />
            </Fragment>
        )
    }
}


export default BarChart;