import Page from '../Page/Page.tsx'
import Home from '../Home/Home'
import Cart from '../Cart/cart.tsx';
import History from '../History/history.tsx';
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.app}>
            <Home />
        </div>
    );
}

export default App;
