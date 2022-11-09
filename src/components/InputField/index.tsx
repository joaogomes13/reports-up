import React, { useEffect, useState } from 'react';
import style from './InputField.module.scss';

interface Props {
    name: string;
    label: string;
    data: string;
    setData: React.Dispatch<React.SetStateAction<string>>
}

export default function InputField({name, label, data, setData}: Props) {
    
    const [isActive, setIsActive] = useState(false);

    function handleTextChange(text: string){
        setData(text);
        handleLabel(text);
    }

    function handleLabel(text: string) {
        if(text !== undefined) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }

    // useEffect(() => {
    //     handleLabel(data);
    // }, [data]);
    
    return(
        <div className={style.container}>
            <input type='text' name={name} value={data} onChange={e => handleTextChange(e.target.value)}/>
            <label className={isActive ? style.Active : ''}>{label}</label>
        </div>
    );
}