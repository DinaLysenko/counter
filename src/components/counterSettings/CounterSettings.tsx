import s from './CounterSettings.module.css'
import {Input} from '../inputValue/Input';
import {Button} from '../button/Button';


type CounterSettingsType = {
    startValue: number
    maxValue: number
    setMaxValue: (maxValue: number) => void
    setStartValue: (startValue: number) => void
    disabled: boolean
    onClickSetButton: () => void
    setCountValue: (countValue: string) => void
    onHandlerChangeInputValue: () => void
}
export const CounterSettings = ({
                                    startValue,
                                    maxValue,
                                    setStartValue,
                                    setMaxValue,
                                    disabled,
                                    onClickSetButton,
                                    onHandlerChangeInputValue,
                                }: CounterSettingsType) => {

    const settingsStyle = `${s.settings} ${startValue === maxValue ? s.errorValue : ''}`

    const errorValueSetButton = (startValue < 0 || maxValue < 0)
        || (startValue > maxValue)
        || (startValue === maxValue)

    return (
        <div className="wrapper">
            <div className={settingsStyle}>
                <span className={s.spanTitle}>max value</span>
                <Input value={maxValue}
                       onChange={setMaxValue}
                       onHandlerChangeInputValue={onHandlerChangeInputValue}
                />
                <span className={s.spanTitle}>start value</span>
                <Input value={startValue}
                       onChange={setStartValue}
                       onHandlerChangeInputValue={onHandlerChangeInputValue}
                />
            </div>
            <div className={'buttonWrapper'}>
                <Button name={'Set'}
                        onClick={onClickSetButton}
                        disabled={errorValueSetButton ||disabled}
                />
            </div>
        </div>
    )
        ;
};

//-----------------------------------------------------------------------
// import React from 'react';
// import s from './CounterSettings.module.css'
// import {InputValue} from '../inputValue/InputValue';
// import {Button} from '../button/Button';
//
//
// type CounterSettingsType = {
//     startValue: string
//     maxValue: string
//     setMaxValue: (maxValue: string) => void
//     setStartValue: (startValue: string) => void
//     disabledButton: boolean
//     onClickSetButton: () => void
//     setCountValue: (countValue: string) => void
//     setDisabledSetButton: (disabledButton: boolean) => void
// }
// export const CounterSettings = ({
//                                     startValue,
//                                     maxValue,
//                                     setStartValue,
//                                     setMaxValue,
//                                     disabledButton,
//                                     onClickSetButton,
//                                     setCountValue,
//                                     setDisabledSetButton
//                                 }: CounterSettingsType) => {
//
//     const settingsStyle = `${s.settings} ${startValue === maxValue ? s.errorValue : ''}`
//     const errorValueSetButton = (Number(startValue) < 0 || Number(maxValue) < 0)
//         || (Number(startValue) > Number(maxValue))
//         || (startValue === maxValue)
//     return (
//         <div className={'wrapper'}>
//             <div className={settingsStyle}>
//                 <span className={s.spanTitle}>max value</span>
//                 <InputValue value={maxValue}
//                             onChange={setMaxValue}
//                             setCountValue={setCountValue}
//                             setDisabledSetButton={setDisabledSetButton}/>
//                 <span className={s.spanTitle}>start value</span>
//                 <InputValue value={startValue}
//                             onChange={setStartValue}
//                             setCountValue={setCountValue}
//                             setDisabledSetButton={setDisabledSetButton}/>
//             </div>
//             <div className={'buttonWrapper'}>
//                 <Button name={'Set'}
//                         onClick={onClickSetButton}
//                         disabled={errorValueSetButton
//                             ? disabledButton
//                             : !disabledButton}/>
//             </div>
//         </div>
//     )
//         ;
// };





