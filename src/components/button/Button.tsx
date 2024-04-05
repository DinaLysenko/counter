import s from './Button.module.css'

type ButtonType = {
    name: string
    onClick: () => void
    disabled?: boolean

}
export const Button = ({
                           name,
                           onClick,
                           disabled
                       }: ButtonType) => {
    const buttonClassName = `${s.btn} ${disabled ? s.disabled : ''}`

    return (
        <button
            className={buttonClassName}
            onClick={onClick}
            disabled={disabled}
        >
            {name}
        </button>
    );
};

