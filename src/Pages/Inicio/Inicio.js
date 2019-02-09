import React, { Component, Fragment } from 'react';
import Card from '../../PageContainers/Card';
import Estadistica from './estadistica';
import BarChart from '../../Graphics/BarChart';
import CardContainer from '../../PageContainers/CardContainer';

class Inicio extends Component{
    render(){
        return(
            <Fragment>
                <Card mode="grid" colums={4}>
                    <Estadistica/>
                    <Estadistica/>
                    <Estadistica/>
                    <Estadistica/>
                </Card>
                <CardContainer>
                    <BarChart />
                    <BarChart />
                </CardContainer>
            </Fragment>
        )
    }
}


export default Inicio;