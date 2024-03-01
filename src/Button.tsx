import React from 'react';
import s from './Button.module.css'
 type ButtonType={
     name: string
     onClick: ()=>void
     disabled?: boolean

 }
export const Button:React.FC<ButtonType> = (props) => {
     const{name, onClick, disabled}=props
const onClickHandler=()=>{
         onClick()
}
const buttonClassName=s.btn + ' ' + (disabled ? ' ' + s.disabled : '')
    return (
        <div >
          <button className={buttonClassName} onClick={onClickHandler} disabled={disabled}>{name}</button>


        </div>
    );
};

