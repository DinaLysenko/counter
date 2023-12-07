import React from 'react';
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

    return (
        <div >
          <button className={disabled?'disabled':'btn'} onClick={onClickHandler} disabled={disabled}>{name}</button>


        </div>
    );
};

