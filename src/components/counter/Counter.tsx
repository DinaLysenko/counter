import s from './Counter.module.css'
import {Button} from '../button/Button';
import '../../App.css';

type CounterType = {
    startValue: number
    maxValue: number
    countValue: string
    setCountValue: (countValue: string) => void
}
export const Counter = ({
                            startValue,
                            maxValue,
                            countValue,
                            setCountValue,
                        }: CounterType) => {
    const errorValue = (maxValue === startValue) || (Number(maxValue) < 0 || Number(startValue) < 0)

    const countStyle = `${s.counter} ${Number(countValue) === maxValue ? s.red : s.default}`

    const textMessageStyle = `${s.textMessage} ${s.counter} `

    const textErrorStyle = `${s.textMessage} ${s.counter} ${s.errorText} `


    const incrementButtonHandler = () => {
        if (Number(countValue) < maxValue) {
            setCountValue((Number(countValue) + 1).toString())
        }
    }
    const onClickResetButton = () => {
        setCountValue(startValue.toString())
    }

    return (
        <div className={'wrapper'}>
            {countValue
                ? <div className={countStyle}>{countValue}</div> :
                errorValue
                    ? <div className={textErrorStyle}>{'Incorrect value!'}</div> :
                    <div className={textMessageStyle}>{'enter values and press "set"'}</div>

            }
            <div className={'buttonWrapper'}>
                <Button name={'Inc'}
                        onClick={incrementButtonHandler}
                        disabled={!countValue || Number(countValue) === maxValue}/>
                <Button name={'Reset'}
                        onClick={onClickResetButton}
                        disabled={!countValue}/>
            </div>
        </div>
    );
};


//--------------------------------------------------------------------
// import React from 'react';
// import s from './Counter.module.css'
// import {Button} from '../button/Button';
// import '../../App.css';
//
// type CounterType = {
//     startValue: string
//     maxValue: string
//     countValue: string
//     setCountValue: (countValue: string) => void
//     setSwitchMode: (switchMode: boolean) => void
//     switchMode: boolean
// }
// export const Counter = ({
//                             startValue,
//                             maxValue,
//                             countValue,
//                             setCountValue,
//                             switchMode,
//                             setSwitchMode
//                         }: CounterType) => {
//
//     const countStyle = `${s.counter} ${countValue === maxValue ? s.red : s.default}`
//
//     const textMessageStyle = `${s.textMessage} ${s.counter} `
//
//     const textErrorStyle = `${s.textMessage} ${s.counter} ${s.errorText} `
//
//     const errorValue = (maxValue === startValue) || (Number(maxValue) < 0 || Number(startValue) < 0)
//     const incrementButtonHandler = () => {
//         if (Number(countValue) < Number(maxValue)) {
//             setCountValue((Number(countValue) + 1).toString())
//         }
//     }
//     const onClickResetButton = () => {
//         setCountValue(startValue)
//     }
//     const onClickSettButton = () => {
//         setSwitchMode(!switchMode)
//     }
//     return (
//         <div className={'wrapper'}>
//             {countValue
//                 ? <div className={countStyle}>{countValue}</div> :
//                 errorValue
//                     ? <div className={textErrorStyle}>{'Incorrect value!'}</div> :
//                     <div className={textMessageStyle}>{'enter values and press "set"'}</div>
//
//             }
//             <div className={'buttonWrapper'}>
//                 <Button name={'Inc'}
//                         onClick={incrementButtonHandler}
//                         disabled={!countValue || countValue === maxValue}/>
//                 <Button name={'Reset'}
//                         onClick={onClickResetButton}
//                         disabled={!countValue}/>
//                 <Button name={'set'}
//                         onClick={onClickSettButton}
//                         />
//             </div>
//         </div>
//     )
//         ;
// };






