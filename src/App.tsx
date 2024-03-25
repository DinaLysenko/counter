import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';


import {CounterSettings} from './components/counterSettings/CounterSettings';


function App() {
    let [startValue, setStartValue] = useState(0)
    let [maxValue, setMaxValue] = useState(5)
    const[disabledButton, setDisabledButton]=useState(true)
    let [countStartValue, setCountStartValue]=useState(0)
    let [countEndValue, setCountEndValue]=useState(0)
    // const onIncHandler = () => {
    //
    //         setMaxValue(startValue += 1)
    //
    //
    // }
    // const onResHandler = () => {
    //     setMaxValue(startValue)
    //
    // }
    const onClickSetButton = () => {
        setDisabledButton(!disabledButton)
        setCountStartValue(startValue)
        setCountEndValue(maxValue)
    }

    return (
        <div className={'app'}>
            <CounterSettings startValue={startValue} maxValue={maxValue} setMaxValue={setMaxValue}
                             setStartValue={setStartValue} disabledButton={disabledButton} setDisabledButton={setDisabledButton} onClickSetButton={onClickSetButton}/>
            <Counter startValue={startValue} maxCount={maxValue} countStartValue={countStartValue} countEndValue={countEndValue}/>
        </div>
    );
}

export default App;


