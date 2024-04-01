import React, {ChangeEvent} from 'react';
import s from './InputValue.module.css'

type InputValueType = {
    value: number;
    onChange: (newValue: number) => void;
    setCountValue: (countValue: string) => void
    disabledButton: boolean
    setDisabledSetButton: (disabledButton: boolean) => void

}
export const InputValue = ({value, onChange, setCountValue, disabledButton, setDisabledSetButton}: InputValueType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.currentTarget.value))
        setCountValue('')

            setDisabledSetButton(true)

    }
    const inputStyle = `${s.input} ${value < 0 ? s.errorValue : ''}`
    return (
        <input className={inputStyle} type={'number'} onChange={onChangeHandler} value={value}/>
    );
};

