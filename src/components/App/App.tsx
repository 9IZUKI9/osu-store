import Home from '../Home/Home'
import Store from '../Store/Store.tsx';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Store />
    </div>
  );
}

export default App;