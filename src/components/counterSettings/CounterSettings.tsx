import React from 'react';
import s from './CounterSettings.module.css'
import {InputValue} from '../inputValue/InputValue';
import {Button} from '../button/Button';


type CounterSettingsType = {
    startValue: number
    maxValue: number
    setMaxValue: (maxValue: number) => void
    setStartValue: (startValue: number) => void
    disabledButton: boolean
    setDisabledButton: (disabledButton:boolean)=>void
    onClickSetButton: ()=>void
}
export const CounterSettings = ({
                                    startValue,
                                    maxValue,
                                    setStartValue,
                                    setMaxValue,
                                    disabledButton, setDisabledButton, onClickSetButton
                                }: CounterSettingsType) => {



    return (
        <div className={'wrapper'}>
            <div className={s.settings}>
                <span className={s.spanTitle}>max value</span>
                <InputValue value={maxValue} onChange={setMaxValue}/>
                <span className={s.spanTitle}>start value</span>
                <InputValue value={startValue} onChange={setStartValue}/>
            </div>
            <div className={'buttonWrapper'}>
                <Button name={'Set'} onClick={onClickSetButton} disabled={maxValue === 5 && startValue === 0? disabledButton: !disabledButton}/>
            </div>
        </div>
    )
        ;
};

