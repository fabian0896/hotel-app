import React from 'react';
import './Card.css'

class Card extends React.Component{
    render(){

        const styles = {};
        if(this.props.mode === 'grid'){
            const colums = Array(this.props.colums).fill('1fr ').reduce((texto, curent)=>{
                return texto + curent;
            });
            styles['display'] = 'grid';
            styles['gridTemplateColumns'] = colums;
            styles['gridGap'] = '15px'
        }

        return(
            <div style={styles} className="Card">
                {this.props.children}
            </div>
        )
    }
}


export default Card;