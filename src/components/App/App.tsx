import {Page, Home, Cart, History, pages} from '../index'
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProductPage from './RouterPages.tsx';
import store from '../Redux/store.ts';
import styles from './App.module.css'

function App() {
    return (
        <Provider store={store}>
            <div className={styles.app}>
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/osu-store/cart' element={ <Cart /> } />
                    <Route path='/osu-store/history' element={ <History /> } />
                    <Route path='/osu-store/products/:id' element={<ProductPage />} />
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
