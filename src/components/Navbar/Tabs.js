import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import React, { Component } from 'react'
import './Tabs.css'
import ItemsList from './ItemsList'

function Tabs(props) {
    /* TODO:
        1. bootstrap styling is at a default. need to fix later on in development
        2. insert logo within Navbar.Brand component
    */
    return (
        <nav className="items">
            <h1 className="navbar-logo">React</h1>
            <div className="menu-icon">

            </div>
            <ul>
                {ItemsList.map((item, index) => {
                    <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                    </li>
                })}
            </ul>

        </nav>
    );
}

export default Tabs;