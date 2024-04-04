import React from 'react';
import s from './Counter.module.css'
import {Button} from '../button/Button';
import '../../App.css';

type CounterType = {
    startValue: string
    maxValue: string
    countValue: string
    setCountValue: (countValue: string) => void
}
export const Counter = ({
                            startValue,
                            maxValue,
                            countValue,
                            setCountValue,
                        }: CounterType) => {

    const countStyle = `${s.counter} ${countValue === maxValue ? s.red : s.default}`

    const textMessageStyle = `${s.textMessage} ${s.counter} `

    const textErrorStyle = `${s.textMessage} ${s.counter} ${s.errorText} `

    const errorValue = (maxValue === startValue) || (Number(maxValue) < 0 || Number(startValue) < 0)
    const incrementButtonHandler = () => {
        debugger
        if (Number(countValue) < Number(maxValue)) {
            setCountValue((Number(countValue) + 1).toString())
        }
    }
    const onClickResetButton = () => {
        setCountValue(startValue)
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
                        disabled={!countValue || countValue === maxValue}/>
                <Button name={'Reset'}
                        onClick={onClickResetButton}
                        disabled={!countValue}/>
            </div>
        </div>
    )
        ;
};


