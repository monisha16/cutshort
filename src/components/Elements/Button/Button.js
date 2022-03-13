import React from 'react';
import styles from './button.module.scss';

function Button({ style, text, handleClick, tabNumber }) {

    function handleClick(){
        return tabNumber+1;
    }
  return (
    <button type="submit" className={styles.FormButton} style={style}
    onClick={()=>handleClick}
    >
        {text}
    </button>
  )
}

export default Button