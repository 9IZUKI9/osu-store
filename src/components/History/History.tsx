import React from 'react'
import ReactDOM from 'react-dom/client'


function History() {
    return (
        <div className='osu-page'>
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

            <div className='history'>
                Хуй
            </div>
        </div>
    )
}

export default History