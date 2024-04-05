import  {useState} from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import {CounterSettings} from './components/counterSettings/CounterSettings';


function App() {
    function getInitialValueStoredState(key:string) {
        let initialValue = localStorage.getItem(key);
        if (initialValue) {
            return JSON.parse(initialValue)
        }
    }

    let [startValue, setStartValue] = useState<number>(Number(getInitialValueStoredState('initialStartValue')))
    let [maxValue, setMaxValue] = useState<number>(Number(getInitialValueStoredState('initialMaxValue')))
    const [disabled, setDisabled] = useState(true)
    let [countValue, setCountValue] = useState<string>(getInitialValueStoredState('initialStartValue'))

    const onClickSetButton = () => {
        setDisabled(true)
        setCountValue(startValue.toString())
        localStorage.setItem('initialStartValue', JSON.stringify(startValue))
        localStorage.setItem('initialMaxValue', JSON.stringify(maxValue))
    }


    const onHandlerChangeInputValue = () => {
        setDisabled(false)
        setCountValue('')
    }

    return (
        <div className='app'>
            <CounterSettings startValue={startValue}
                             maxValue={maxValue}
                             setMaxValue={setMaxValue}
                             setStartValue={setStartValue}
                             disabled={disabled}
                             onClickSetButton={onClickSetButton}
                             setCountValue={setCountValue}
                             onHandlerChangeInputValue={onHandlerChangeInputValue}
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









//--------------------------------------------------------------------------------------
// import React, {useState} from 'react';
// import './App.css';
// import {Counter} from './components/counter/Counter';
// import {CounterSettings} from './components/counterSettings/CounterSettings';
//
//
// function App() {
//     function getInitialValueStoredState(key: string) {
//         let initialValue = localStorage.getItem(key);
//         if (initialValue) {
//             return JSON.parse(initialValue)
//         }
//     }
//
//     const [startValue, setStartValue] = useState<string>(getInitialValueStoredState('initialStartValue'))
//     const [maxValue, setMaxValue] = useState<string>(getInitialValueStoredState('initialMaxValue'))
//     const [disabledSetButton, setDisabledSetButton] = useState(true)
//     const [countValue, setCountValue] = useState<string>(getInitialValueStoredState('initialStartValue'))
//     const [switchMode, setSwitchMode] = useState(true)
//
//     const onClickSetButton = () => {
//         setDisabledSetButton(!disabledSetButton)
//         setCountValue(startValue)
//         setSwitchMode(!switchMode)
//         localStorage.setItem('initialStartValue', JSON.stringify(startValue))
//         localStorage.setItem('initialMaxValue', JSON.stringify(maxValue))
//     }
//
//     return (
//         <div className={'app'}>
//             {switchMode
//             ?   <Counter startValue={startValue}
//                          maxValue={maxValue}
//                          countValue={countValue}
//                          setCountValue={setCountValue}
//                          switchMode={switchMode}
//                          setSwitchMode={setSwitchMode}
//
//                 />
//             : <CounterSettings startValue={startValue}
//                                maxValue={maxValue}
//                                setMaxValue={setMaxValue}
//                                setStartValue={setStartValue}
//                                disabledButton={disabledSetButton}
//                                onClickSetButton={onClickSetButton}
//                                setCountValue={setCountValue}
//                                setDisabledSetButton={setDisabledSetButton}
//                 />}
//         </div>
//     );
// }
//
// export default App;


