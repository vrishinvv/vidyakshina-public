'use client';
import { useState } from 'react';
import styles from './styles.module.css';

export default function Page() {
    // [variable to hold state, function to change that state] = useState (starting value of the state variable)
    const [count, setCount] = useState(0);

    function handleInc() {
        // state chnage function always takes a call back, where first param is "current" value of state variable
        // in this case, it is "c"
        setCount((c) => {
            return c + 1
        });
    }
    function handleDec() { 
        setCount((c) => {
            return c - 1
        });
    }
    function handleReset() { 
        setCount((c) => {
            return 0;
        });
    }

    return (
        <div className={styles.wrap}>
            <h2>Counter (basic)</h2>
            <p>Value: {count}</p>
            <div className={styles.row}>
                <button 
                    onClick={handleInc} // onClick is New
                > 
                    +1
                </button> 
                <button onClick={handleDec}>-1</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}
