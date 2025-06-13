import React from "react"
import ReactDOM from 'react-dom/client'
import NavBar from "../components/NavBar"


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

            <NavBar />

            <div className="history">
                Хуй
            </div>
        </div>
    )
}

export default History