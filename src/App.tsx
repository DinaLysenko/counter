import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import {CounterSettings} from './components/counterSettings/CounterSettings';


function App() {
    let [startValue, setStartValue] = useState<string>(getInitialStartValueStoredState())
    let [maxValue, setMaxValue] = useState<string>(getInitialMaxValueStoredState())
    const [disabledSetButton, setDisabledSetButton] = useState(true)
    let [countValue, setCountValue] = useState<string>(getInitialStartValueStoredState())

    function getInitialStartValueStoredState() {
        let initialStartValue = localStorage.getItem('initialStartValue');
        if (initialStartValue) {
            return JSON.parse(initialStartValue)
        }
    }

    function getInitialMaxValueStoredState() {
        let initialMaxValue = localStorage.getItem('initialMaxValue');
        if (initialMaxValue) {
            return JSON.parse(initialMaxValue)
        }
    }

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


