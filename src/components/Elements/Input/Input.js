import React from 'react';
import styles from './input.module.scss';

function Input({ value, onChange, type = 'text', placeholder, id,
    label, min, max, step, minLength, maxLength }) {

    return (
        <div className={styles.FormInput}>
             {label &&
                 (
                     <label className={styles.FormInput__label} htmlFor={id}>
                         {label}
                     </label>
                 )}
             <input
                 className={styles.FormInput__input}
                 value={value}
                //  onChange={(e) => onChange(e.target.value)}
                 placeholder={placeholder}
                 type={type}
                 id={id}
                 step={step}
                 minLength={minLength}
                 maxLength={maxLength}
                 min={min}
                 max={max}
                 required
             />
         </div>
    );
};


export default Input;