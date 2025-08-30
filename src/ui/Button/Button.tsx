import type { ReactNode } from 'react';
import styles from './style.module.css';


type ButtonProps = {
  onClick: () => void; 
  children?: ReactNode;
  type?: string;
  className?: string;
};

export const Button = ({children, onClick, className}: ButtonProps) => {
  return (
    <button type='button' onClick={onClick}  className={`${styles.button}  ${className}`.trim()}>{children}</button>
  );
};