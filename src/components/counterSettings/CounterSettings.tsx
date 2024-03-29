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
    onClickSetButton: () => void
}
export const CounterSettings = ({
                                    startValue,
                                    maxValue,
                                    setStartValue,
                                    setMaxValue,
                                    disabledButton, onClickSetButton
                                }: CounterSettingsType) => {

    const settingsStyle = `${s.settings} ${startValue===maxValue ?s.errorValue : ''}`

    return (
        <div className={'wrapper'}>
            <div className={settingsStyle}>
                <span className={s.spanTitle}>max value</span>
                <InputValue value={maxValue} onChange={setMaxValue}/>
                <span className={s.spanTitle}>start value</span>
                <InputValue value={startValue} onChange={setStartValue}/>
            </div>
            <div className={'buttonWrapper'}>
                <Button name={'Set'} onClick={onClickSetButton} disabled={(startValue<=0 && maxValue<=0) || startValue===maxValue?disabledButton:!disabledButton}/>
            </div>
        </div>
    )
        ;
};

