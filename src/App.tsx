import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import {Button} from './components/button/Button';
import s from './components/button/Button.module.css'
import {CounterSettings} from './components/counterSettings/CounterSettings';


function App() {
    const minCount = 0
    const maxCount = 5
    let [count, setCount] = useState(minCount)
    const onIncHandler = () => {
        if (count < maxCount) {
            setCount(count += 1)

        }
    }
    const onResHandler = () => {
        setCount(minCount)

    }

    return (
        <div className={'app'}>
            <div className={'wrapper'}>
                <CounterSettings/>
                <div className={s.button}>
                    <Button name={'Set'} onClick={onIncHandler} disabled={count === maxCount}/>
                </div>
            </div>
            <div className={'wrapper'}>
                <Counter count={count} maxCount={maxCount}/>
                <div className={s.button}>
                    <Button name={'Inc'} onClick={onIncHandler} disabled={count === maxCount}/>
                    <Button name={'Reset'} onClick={onResHandler}/>
                </div>
            </div>
        </div>
    )
        ;
}

export default App;


