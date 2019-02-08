import React from 'react';
import './PageContainer.css';
import { withRouter } from 'react-router-dom';


class PageContainer extends React.Component{
    render(){
        return(
            <div className="Page-container">
              <header className="Header">
              </header>
              <div className="Content">
                <h1 className="Header-title">{this.props.location.state.title}</h1>
                <div>
                    {this.props.children}
                </div>
              </div>  
                
            </div>
        )
    }
}

export default withRouter(PageContainer);