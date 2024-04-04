import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import {CounterSettings} from './components/counterSettings/CounterSettings';


function App() {
    function getInitialValueStoredState(key:string) {
        let initialStartValue = localStorage.getItem(key);
        if (initialStartValue) {
            return JSON.parse(initialStartValue)
        }
    }
    let [startValue, setStartValue] = useState<string>(getInitialValueStoredState('initialStartValue'))
    let [maxValue, setMaxValue] = useState<string>(getInitialValueStoredState('initialMaxValue'))
    const [disabledSetButton, setDisabledSetButton] = useState(true)
    let [countValue, setCountValue] = useState<string>(getInitialValueStoredState('initialStartValue'))

    const onClickSetButton = () => {
        setDisabledSetButton(!disabledSetButton)
        setCountValue(startValue)
        localStorage.setItem('initialStartValue', JSON.stringify(startValue))
        localStorage.setItem('initialMaxValue', JSON.stringify(maxValue))
    }

    return (
        <div className={'app'}>
            <CounterSettings startValue={startValue}
                             maxValue={maxValue}
                             setMaxValue={setMaxValue}
                             setStartValue={setStartValue}
                             disabledButton={disabledSetButton}
                             onClickSetButton={onClickSetButton}
                             setCountValue={setCountValue}
                             setDisabledSetButton={setDisabledSetButton}
            />
            <Counter startValue={startValue}
                     maxValue={maxValue}
                     countValue={countValue}
                     setCountValue={setCountValue}
            />
        </div>
    );
}

export default App;


