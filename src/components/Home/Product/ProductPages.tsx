import React from "react";
import Page from "../../Page/Page";
import styles from '../Product/Product.module.css';


export const pages = {
    Supporter: () => {
        return (
            <Page>
                <img className={styles.product__image} src="/assets/products/supporter.jpg" alt="supporter"></img>
                <div className={styles.product__description}>
                    <h1>osu!supporter tag</h1>
                    <div>
                        osu! runs thanks to players who contribute a small amount of money in exchange for some in-game perks, like extra profile customisation, improved web/game integration, more filter options in leaderboards and larger beatmap upload limits.
                    </div>
                    <div>
                        You can see a full list of benefits here!
                    </div>
                    <ul>
                        <li>osu!supporter tags are non-recurring payments.</li>
                        <li>If you buy one while you still have an active tag, it will extend the duration in addition to any remaining time.</li>
                    </ul>
                    <div>
                        The osu! team thanks you from the bottom of our hearts for keeping this game and community alive! ❤️
                    </div>
                </div>
            </Page>
        )
    },
    Deskmats: () => {
        return (
            <Page>
                <img className={styles.product__image} src="/assets/products/deskmats.jpg" alt="deskmats"></img>
                <div className={styles.product__preview}>
                    <h1>osu! deskmat (circle clicker)</h1>
                    <img src="/assets/products/circle-clicker.jpg" alt="circle-clicker"></img>
                    <div>
                        <p>
                            This cursor dance through the fool moon night sky is a simple homage to the average circle clicker's experience: striking hitobjects at incredibly high speeds atop a 100% dimmed background.
                        </p>
                        <p>
                            The osu! aesthetic is a hard thing to nail down, so we went straight to the source: Sing, a long-time mapper and osu! player, created this desk mat's design.
                        </p>
                        <p>
                            (With a mouse pad as crisp as this, you might finally choose to keep your mess of a desk clean!)
                        </p>
                        <p>
                            Dimensions: 39.5 cm (15.55 inches) x 92 cm (36.22 inches) x 4 mm
                            Material: antimicrobial fabric
                        </p>
                    </div>

                </div>
            </Page>
        )
    },
        NotFound: () => {
        return (
            <Page>
                <div style={{fontSize: 24, fontWeight: 600, alignItems: 'center', width: 'auto', marginTop: 50}}>
                    Hey, it seems like there is nothing!
                </div>
            </Page>
        )
    }
}





export default pages