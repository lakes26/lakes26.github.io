import React, { Component } from 'react'
import NavLink from './NavLink'
import SmallLogo from './SmallLogo'

export class NavBar extends Component {



    render() {
        return (
            <nav style={navStyle}>
                <SmallLogo />
                <ul style={listStyle}>
                    <li>
                        <NavLink className='navlink' href='/about' text='About Me' />
                    </li>
                    <li>
                        <NavLink className='navlink' href='/projects' text='Projects' />
                    </li>
                    <li>
                        <NavLink className='navlink' href='/resume' text='Resumé' />
                    </li>
                    <li>
                        <NavLink className='navlink' href='/contact' text='Contact Me' />
                    </li>
                </ul>
                <SmallLogo hide={true}/>
            </nav>
        )
    }
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

    fontSize: '20px',
    color: 'white',
}

export default NavBar
