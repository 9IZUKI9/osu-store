import React from 'react'
import styles from './Page.module.css'

type Props = {
    children: React.ReactNode,
}
function Page({ children }: Props) {
    return (
        <div className={styles.Page}>
            <header>
                <div className={styles.header__content}>
                    <div className={styles.header__title}>
                        <h2>store</h2>
                    </div>
            
                    <div className={styles.header__distributor}>
                        <div className={styles.header__text}>
                            Xsolla is an authorised global distributor of osu!
                        </div>
                    </div>
                </div>
            </header>

            <nav className={styles.navigation}>
                <ul>
                    <li className={styles.navigation__item}>
                        <a className={styles.navigation__link} href='#'>products</a>
                    </li>

                    <li className={styles.navigation__item}>
                        <a className={styles.navigation__link} href='#'>cart</a>
                    </li>

                    <li className={styles.navigation__item}>
                        <a className={styles.navigation__link} href='#'>order history</a>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
    )
}

export default Page
