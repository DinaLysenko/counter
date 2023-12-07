import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {Button} from "./Button";


function App() {
    const minCount = 0
    const maxCount = 5
    let [count, setCount] = useState(minCount)
    const onIncHandler=()=>{
        if(count<maxCount){
            setCount(count+=1)

        }
    }
    const onResHandler=()=>{
        setCount(minCount)

    }

    return (
        <div className={'app'}>
            <Counter count={count} maxCount={maxCount}/>
            <div className={'button'}>
                <Button name={'Inc'} onClick={onIncHandler} disabled={count===maxCount}/>
                <Button name={'Reset'} onClick={onResHandler} disabled={count===minCount}/>
            </div>
        </div>
    );
}

export default App;


