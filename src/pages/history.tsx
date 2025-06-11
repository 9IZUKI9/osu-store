import React from "react"
import ReactDOM from 'react-dom/client'
import NavBar from "../components/NavBar"


function History() {
    return (
        <div className='store'>
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

            <NavBar />

            <div className='osu-page'>
                <div className="history">
                    Shopping Cart
Your cart is empty.

Return to the store listing to find some goodies!
                </div>
            </div>
            
        </div>
    )
}

export default History