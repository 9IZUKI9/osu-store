import React from 'react';
import './Store.css'

function Store() {
    return (
        <div className='Store'>
            <header>
                <div className='header-content'>
                    <div className='header-content__title'>
                        <h2>store</h2>
                    </div>
            
                    <div className='header-content__distributor'>
                        <div className='header-content__text'>
                            Xsolla is an authorised global distributor of osu!
                        </div>
                    </div>
                </div>
            </header>

            <nav className='navigation'>
                <ul>
                    <li className='navigation__item'>
                        <a className='navigation__link' href='#'>products</a>
                    </li>

                    <li className='navigation__item'>
                        <a className='navigation__link' href='#'>cart</a>
                    </li>

                    <li className='navigation__item'>
                        <a className='navigation__link' href='#'>order history</a>
                    </li>
                </ul>
            </nav>


        </div>
    )
}

export default Store