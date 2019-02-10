import React from 'react';
import './Card.css'

class Card extends React.Component{
    
    state = {
        sallScreen: false
    }

    hadleMedia = (media)=>{
        if(media.matches){
            this.setState({
                smallScreen: true
            })
        } else{
            this.setState({
                smallScreen: false
            })
        }
    }

    componentDidMount(){
        const media = window.matchMedia('(max-width: 645px)');
        this.hadleMedia(media);
        media.addListener(this.hadleMedia);
    }
    
    render(){
        const styles = {};
        let colums = ''
        if(this.props.mode === 'grid'){
            colums = Array(this.props.colums).fill('1fr ').reduce((texto, curent)=>{
                return texto + curent;
            });
            if(this.state.smallScreen){
                colums = '1fr 1fr';
            }
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