import React, { Component } from 'react'
import logo from '../resources/logo.png'

export class SmallLogo extends Component {

    state = {
        hover: false
    }

    getLogoStyle = () => {
        if(this.state.hover) {
            return logoStyleHover
        } else {
            return logoStyle
        }
    }

    render() {

        if(this.props.hide) {
            return (
                <div style={logoStyle}></div>
            )
        } 
        return (
            <a href={this.props.path}>
                <img
                    onMouseEnter={(e) => {
                        console.log(this.setState({hover: true}));
                    }}
                    onMouseLeave={(e) => {
                        console.log(this.setState({hover: false}));
                    }}
                    src={logo}
                    alt='logo'
                    style={this.getLogoStyle()}
                />
            </a> 
        )
    }
}

const logoStyle = {
    width: '40px', 
    height: '40px',
    margin: '3px 13px',
    transition: 'all 0.25s',
}

const logoStyleHover = {
    width: '46px', 
    height: '46px',
    margin: '0px 10px',
    transition: 'all 0.25s',
    cursor: 'pointer',
}

export default SmallLogo
