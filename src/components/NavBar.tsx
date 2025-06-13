import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../Styles/Home.css'

function NavBar() {
    return (
        <nav className='store-nav'>

            <ul>
                <li className='store-nav__item'>
                    <a className='store-nav__link' href='#'>products</a>
                </li>

                <li className='store-nav__item'>
                    <a className='store-nav__link' href='#'>cart</a>
                </li>

                <li className='store-nav__item'>
                    <a className='store-nav__link' href='#'>order history</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar