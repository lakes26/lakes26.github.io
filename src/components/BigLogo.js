import React, { Component } from 'react'
import logo from '../resources/logo.png'

export class BigLogo extends Component {

    state = {
        hover: false,
        loaded: false,
        loading: false,
    }

    getLogoStyle = () => {
        if(this.state.loaded === false) {
            return logoStartStyle
        }
        if(this.state.hover) {
            return logoStyleHover
        } else {
            return logoStyle
        }
    }


    render() {
        if(this.state.loading === false) {
            this.setState({loading: true})
            setTimeout(this.setState({loaded: true}), 10000) 
        }
        
        return (
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
        )
    }
}

const logoStartStyle = {
    width: '0%',
    height: 'auto',
}

const logoStyle = {
    width: 'auto', 
    height: '50%',
    transform:'rotate(0deg)',
    transition: 'all 0s',
}

const logoStyleHover = {
    width: 'auto', 
    height: '50%',
    transform: 'rotate(360deg)',
    transition: 'all 1s',
}

export default BigLogo
