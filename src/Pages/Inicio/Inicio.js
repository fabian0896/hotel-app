import React, { Component, Fragment } from 'react';
import Card from '../../PageContainers/Card';
import Estadistica from './estadistica';

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
               
            </Fragment>
        )
    }
}


export default Inicio;