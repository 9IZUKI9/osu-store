import {Page, Home, Cart, History} from '../index'
import { Routes, Route } from 'react-router-dom';
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.app}>
            <Routes>
                <Route exact path='/' element={ <Home /> } />
                <Route exact path='/osu-store/cart' element={ <Cart /> } />
                <Route exact path='/osu-store/history' element={ <History /> } />
            </Routes>
        </div>
    );
}

export default App;
