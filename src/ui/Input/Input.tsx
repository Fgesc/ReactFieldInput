
import styles from './style.module.css';

type InputProps = {
    id: string;
    value: string;
    onChange: (value: string) => void; 
    label?: string;
    className?: string;
};

export const Input = ({ id, value, onChange, label, className }: InputProps) => {
    return (
         <div>
            {label && <label htmlFor={id}>{label}</label>}
            <input
            id={id}
            value={value}
            onChange={(e) => onChange(e.target.value)} 
            type="text"
            className={`${styles.input}  ${className }`}
        />
        </div>
    );
};
