import React from 'react';
import Card from './Card';
import './CardContainer.css';


function CardContainer(props){
    const colums = Array(props.children.length).fill('1fr ').reduce((sumatoria, actual)=>{
        return sumatoria + actual;
    })

    const styles ={
        gridTemplateColumns: colums
    }
    return(
        <div style={styles} className="CardContainer" >
        {
            props.children.map((content, index)=>{
                return (
                        <div className="CardContainer-item">
                            <Card key={index} >{content}</Card>
                        </div>
                )
            })
        }   
        </div>
    )
}

export default CardContainer;