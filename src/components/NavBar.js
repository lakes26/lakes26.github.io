import React, { Component } from 'react'
import NavLink from './NavLink'
import SmallLogo from './SmallLogo'

export class NavBar extends Component {



    render() {
        return (
            <nav style={navStyle}>
                <SmallLogo path='/'/>
                <ul style={listStyle}>
                    <li style={liStyle}>
                        <NavLink className='navlink' href='/about' text='About' />
                    </li>
                    <li style={liStyle}>
                        <NavLink className='navlink' href='/projects' text='Projects' />
                    </li>
                    <li style={liStyle}>
                        <NavLink className='navlink' href='/contact' text='Contact' />
                    </li>
                </ul>
                <SmallLogo hide={true}/>
            </nav>
        )
    }
}

const liStyle = {
    marginLeft: '2%',
    marginRight: '2%',
}

const navStyle = {
    backgroundColor: 'rgb(0, 0, 20)',

    width: '100%',
    height: '80px',
    position: 'fixed',
    top: '0',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}

const listStyle = {
    listStyleType: 'none',
    marker: 'none',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    fontSize: '20px',
    color: 'white',
}

export default NavBar
