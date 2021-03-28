import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import React, { Component, useState } from 'react'
import './Tabs.css'
import { ItemsList } from './ItemsList'
import { Button } from '../Button'

function Tabs(props) {
    /* TODO:
        1. bootstrap styling is at a default. need to fix later on in development
        2. insert logo within Navbar.Brand component
    */

    const [clicked, setClicked] = useState(false);
    return (
        <nav className="items">
            <h1 className="navbar-logo">Chi Theta Psi</h1> {/* need to insert logo here at some point */}
            <div className="menu-icon" onClick={() => setClicked(!clicked)}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {ItemsList.map((item, index) => {
                    return <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                })}
            </ul>
            <Button>Contact Us</Button>
        </nav>
    )
}

export default Tabs;