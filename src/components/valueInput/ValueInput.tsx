import React from 'react';
import s from './ValueInput.module.css'
type ValueInputType={
    labelTitle: string
}
export const ValueInput = ({labelTitle}:ValueInputType) => {
    return (
        <label className={s.label}>{labelTitle}
            <input className={s.input} type={'number'}/>
        </label>
    );
};

