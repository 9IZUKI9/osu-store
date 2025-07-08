import React from 'react'
import ReactDOM from 'react-dom/client'
import styles from './History.module.css'
import Page from '../Page/Page'

function History() {
    return (
        <Page>
            <div className={styles.history}>
                <h1>Order History</h1>
                <p>Your history is empty.</p>
            </div>
        </Page>
    )
}

export default History
