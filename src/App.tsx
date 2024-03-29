import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';


import {CounterSettings} from './components/counterSettings/CounterSettings';


function App() {
    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(0)
    const [disabledSetButton, setDisabledSetButton] = useState(true)
    let [countValue, setCountValue] = useState('')


    const onClickSetButton = () => {
        setDisabledSetButton(!disabledSetButton)
        setCountValue(startValue.toString())
    }

    return (
        <div className={'app'}>
            <CounterSettings startValue={startValue}
                             maxValue={maxValue}
                             setMaxValue={setMaxValue}
                             setStartValue={setStartValue}
                             disabledButton={disabledSetButton}
                             onClickSetButton={onClickSetButton}/>
            <Counter startValue={startValue}
                     maxValue={maxValue}
                     countValue={countValue}
                     setCountValue={setCountValue}
                     />
        </div>
    );
}

export default App;


