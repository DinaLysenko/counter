import React from 'react';
import s from './CounterSettings.module.css'
import {InputValue} from '../inputValue/InputValue';
import {Button} from '../button/Button';


type CounterSettingsType = {
    startValue: string
    maxValue: string
    setMaxValue: (maxValue: string) => void
    setStartValue: (startValue: string) => void
    disabledButton: boolean
    onClickSetButton: () => void
    setCountValue: (countValue: string) => void
    setDisabledSetButton: (disabledButton: boolean) => void
}
export const CounterSettings = ({
                                    startValue,
                                    maxValue,
                                    setStartValue,
                                    setMaxValue,
                                    disabledButton,
                                    onClickSetButton,
                                    setCountValue,
                                    setDisabledSetButton
                                }: CounterSettingsType) => {

    const settingsStyle = `${s.settings} ${startValue === maxValue ? s.errorValue : ''}`

    return (
        <div className={'wrapper'}>
            <div className={settingsStyle}>
                <span className={s.spanTitle}>max value</span>
                <InputValue value={maxValue}
                            onChange={setMaxValue}
                            setCountValue={setCountValue}
                            setDisabledSetButton={setDisabledSetButton}/>
                <span className={s.spanTitle}>start value</span>
                <InputValue value={startValue}
                            onChange={setStartValue}
                            setCountValue={setCountValue}
                            setDisabledSetButton={setDisabledSetButton}/>
            </div>
            <div className={'buttonWrapper'}>
                <Button name={'Set'}
                        onClick={onClickSetButton}
                        disabled={(+startValue < 0 || +maxValue < 0) || (startValue > maxValue) || (startValue === maxValue)
                            ? disabledButton
                            : !disabledButton}/>
            </div>
        </div>
    )
        ;
};

