import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../Styles/StoreProduct.css'

function NavBar() {
    return (
        <nav className='store-nav'>

            {/* <Link to='/osu-store/'>
                <div className='store-nav__item'>
                    <div className='store-nav__link'>products</div>
                </div>
            </Link>

            <Routes>
                <Route exact path='/osu-store/' element={
                    <Link to='src/pages/history.tsx'>
                        <div className='store-nav__item'>
                            <div className='store-nav__link'>history</div>
                        </div>
                    </Link>
                } />
            </Routes> */}

            <ul>
                <li className='store-nav__item'>
                    <a className='store-nav__link' href='#'>products</a>
                </li>

                <li className='store-nav__item'>
                    <a className='store-nav__link' href='#'>card</a>
                </li>

                <li className='store-nav__item'>
                    <a className='store-nav__link' href='#'>order history</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar