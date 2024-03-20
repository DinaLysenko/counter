import React from 'react';
import s from './CounterSettings.module.css'
import {ValueInput} from '../valueInput/ValueInput';


export const CounterSettings = () => {
    return (
        <div className={s.settings}>
            <ValueInput labelTitle={'max value:'}/>
            <ValueInput labelTitle={'min value:'}/>
        </div>
    );
};

