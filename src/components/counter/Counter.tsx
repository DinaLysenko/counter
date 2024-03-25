import React, {useState} from 'react';
import s from './Counter.module.css'
import {Button} from '../button/Button';
import '../../App.css';

type CounterType = {
    startValue: number
    maxCount: number
    countStartValue: number
    countEndValue: number
}

export const Counter: React.FC<CounterType> = (props) => {
    const {startValue, maxCount, countStartValue, countEndValue} = props

    const countStyle = `${s.counter} ${startValue === maxCount ? s.red : s.default}`
    const textMesageStyle = `${s.textMessage} ${s.counter}`
    return (
        <div className={'wrapper'}>
            {startValue != countStartValue || maxCount != countEndValue ?
                <div className={textMesageStyle}>{'enter values and press "set"'}</div> :
                startValue === countStartValue ? <div className={countStyle}>{startValue}</div> :
                    <div className={countStyle}>{countStartValue}</div>}
            <div className={'buttonWrapper'}>
                <Button name={'Inc'} onClick={() => {
                }} disabled={startValue === maxCount}/>
                <Button name={'Reset'} onClick={() => {
                }}/>
            </div>
        </div>
    );
};


// import React, {useState} from 'react';
// import './App.css';
// import {Counter} from "./Counter";
//
//
// const minInc = 0
// const maxInc = 5
//
// function App() {
//     let [count, setCount] = useState(0)
//     const incrementHandler = () => {
//         if (count <= 5) {
//             setCount(count += 1)
//         }
//         const resetHandler = () => {
//             setCount(count)
//         }
//
//         return (
//             <div className="app">
//                 <Counter count={count}/>
//                 <button onClick={incrementHandler}>Inc</button>
//                 <button onClick={resetHandler}>Reset</button>
//             </div>
//         );
//     }
// }
// export default App;
//
//
//
//
//
//
//
//
//
//
//
//
// //__________________________________________________________________________
// // import React, {useState} from 'react';
// // import './App.css';
// // import {Counter} from "./Counter";
// //
// //
// // function App() {
// //     const maxCount = 5;
// //     const minCount = 0;
// //     let[count, setCount] = useState<number>(minCount)
// //     const addCounter = () => {
// //         if (count < maxCount)
// //             count += 1
// //         setCount(count)
// //     }
// //     const resCount = () => {
// //         if(count === maxCount)
// //             setCount(minCount)
// //     }
// //     return (
// //         <div className="app">
// //             <Counter count={count}
// //                      setCount={setCount}
// //                      addCounter={addCounter}
// //                      disabled={count === maxCount}
// //                      resCount={resCount}/>
// //         </div>
// //     );
// // }
// //
// // export default App;


//____________________________________________________________


// type CounterPropsType = {
//     count: number
//     setCount: (count: number) => void
//     addCounter: () => void
//     resCount: () => void
//     disabled: boolean
// }
// export const Counter = (props: CounterPropsType) => {
//     return (
//         <div>
//             <div>
//                 {props.count}
//             </div>
//             <div>
//                 <button className={"button"} onClick={props.addCounter} disabled={props.disabled}>inc</button>
//                 <button className={"button"} onClick={props.resCount} disabled={!props.disabled}>res</button>
//             </div>
//         </div>
//     );
// };
