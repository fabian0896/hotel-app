import React from 'react';
import './PageContainer.css';
import { withRouter } from 'react-router-dom';


class PageContainer extends React.Component{
    render(){
        const title = this.props.location.pathname.replace("/","");
        return(
            <div className="Page-container">
              <header className="Header">
              </header>
              <div className="Content">
                <h1 className="Header-title">{ title.charAt(0).toUpperCase() + title.slice(1) }</h1>
                <div>
                    {this.props.children}
                </div>
              </div>  
                
            </div>
        )
    }
}

export default withRouter(PageContainer);