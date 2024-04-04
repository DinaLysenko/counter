import React, {ChangeEvent} from 'react';
import s from './InputValue.module.css'

type InputValueType = {
    value: string;
    onChange: (newValue: string) => void;
    setCountValue: (countValue: string) => void
    setDisabledSetButton: (disabledButton: boolean) => void
}
export const InputValue = ({value, onChange, setCountValue, setDisabledSetButton}: InputValueType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
        setCountValue('')
        setDisabledSetButton(true)
    }
    const inputStyle = `${s.input} ${Number(value) < 0 ? s.errorValue : ''}`
    return (
        <input className={inputStyle} type={'number'} onChange={onChangeHandler} value={value}/>
    );
};

