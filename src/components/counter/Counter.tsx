import React from 'react';
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

    const countStyle = `${s.counter} ${+countValue === maxValue ? s.red : s.default}`
    const textMessageStyle = `${s.textMessage} ${s.counter}`
    const incrementButtonHandler = () => {
        if (+countValue < maxValue) {
            setCountValue((+countValue + 1).toString())
        }
    }
    const onClickResetButton = () => {
        setCountValue(startValue.toString())
    }
    return (
        <div className={'wrapper'}>
            {countValue
                ?  <div className={countStyle}>{countValue}</div>:
                <div className={textMessageStyle}>{'enter values and press "set"'}</div>

            }
            <div className={'buttonWrapper'}>
                <Button name={'Inc'} onClick={incrementButtonHandler} disabled={!countValue || +countValue === maxValue }/>
                <Button name={'Reset'} onClick={onClickResetButton} disabled={!countValue }/>
            </div>
        </div>
    )
        ;
};


