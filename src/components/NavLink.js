import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

export class NavLink extends Component {


    render() {
        return (
            <Link 
                to={this.props.href}
                className={this.props.className}
            >   
                {this.props.text}               
            </Link>
        )
    }
}

export default NavLink
