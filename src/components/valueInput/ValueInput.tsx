import React from 'react';
type ValueInputType={
    labelTitle: string
}
export const ValueInput = ({labelTitle}:ValueInputType) => {
    return (
        <label>{labelTitle}
            <input type={'number'}/>
        </label>
    );
};

