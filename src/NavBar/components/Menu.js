import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom'

class Menu extends React.Component {

    render() {
        const menuClass = `Menu ${this.props.showMenu? "Show" : ""}`;
        return (
            <ul className={menuClass}>
                {
                    this.props.routes.map((item, index) => {
                        return (
                            <li key={index} className="Menu-link">
                                <NavLink
                                    onClick={this.props.handleClose}
                                    exact
                                    activeClassName="isActive"
                                    className="link"
                                    to={{
                                        pathname: item.route,
                                        state: {
                                            title: item.title
                                        }
                                    }}
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default Menu;