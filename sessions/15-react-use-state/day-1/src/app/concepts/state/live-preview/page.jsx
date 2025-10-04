'use client';
import { useState } from 'react';
import styles from './styles.module.css';

export default function Page() {
  const [name, setName] = useState('');

  function handleChange(e) { 
    // e.target refers to the element from which the particular "event"(e) got emitted from
    // we dont have to understand what is event n oll here - just remeber this 
    setName((prevName) => {return e.target.value}); 
  }
  function resetName(){
    setName((n)=>'');
  }

  return (
    <div className={styles.wrap}>
      <h2>Live Preview (controlled input)</h2>
      <input
        placeholder="Type your name"
        value={name} // 2 way binding
        onChange={handleChange} //onChange is New
        className={styles.input}
      />
      <p>Hello, <strong>{name || 'stranger'}</strong>!</p>
      <button onClick={resetName}> reset </button>
    </div>
  );
}












/* 
flow is 
HTML already updates the value correctly -> 
then we update state using onChange -> 
then that state gets re-rendered in the input field ->
visibly no change 

*/