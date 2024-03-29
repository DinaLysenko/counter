import React, {ChangeEvent} from 'react';
import s from './InputValue.module.css'

type InputValueType = {
    value: number;
    onChange: (newValue: number) => void;
}
export const InputValue = ({value, onChange}: InputValueType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.currentTarget.value))
    }
const inputStyle=`${s.input} ${value<0 ? s.errorValue: ''}`
    console.log(value)
    return (
        <input className={inputStyle} type={'number'} onChange={onChangeHandler} value={value}/>
    );
};

