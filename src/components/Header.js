import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header () {
    return(
        <div>
            <h1 className="header-text">ReactJS Basic</h1>
            <nav className='header'>
                <NavLink to='/counter-class'>Counter Class</NavLink>
                <NavLink to='/counter-function'>Counter Function</NavLink>
                <NavLink to='/counter-redux'>Counter Function with Redux</NavLink>
                <NavLink to='/counter-immer'>Counter Function with Redux and Immerjs</NavLink>
            </nav>
        </div>
    )
}