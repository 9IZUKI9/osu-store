import '../Styles/Home.css'
import { useState } from 'react';

function StoreProduct({bg, column, row, width = '480px', height = '200px', name, fontSize = '30px'}) {

    const [count, setCount] = useState(0)
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <a
        className='product-box' 
        href='#' 
        style={{
            backgroundImage: `url(${bg})`,
            gridArea: `${row} / ${column}`,
            height,
            width,
        }}>
            <h1 className='product-name' style={{fontSize}}>
            {name}
            </h1>

            <div className='product-buy'>
                <button onClick={decrement}>-</button>
                <div>{count}</div>
                <button onClick={increment}>+</button>
            </div>
        </a>
    )
}

export default StoreProduct