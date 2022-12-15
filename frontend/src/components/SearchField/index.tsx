import React from 'react';
import style from './SearchField.module.scss';

interface Props {
    title: string;
    name: string;
    data: boolean;
    setData: React.Dispatch<React.SetStateAction<any[]>>;
    object: any[]
}

export default function SearchField({ title, name, data, setData, object }: Props) {
    const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let _object = [...object] as any;
        _object[0][event.target.name] = event.target.value === 'true'
        setData(_object);
    }
    
    return (
        <fieldset className={style.radio}>
            <legend className={style.radio__title}>{title}</legend>
            <div className={style.radio__input}>

                <label htmlFor={name + 'Yes'}>
                    <input id={name + 'Yes'} type="radio" name={name} value='true' onChange={e => handleDataChange(e)} required checked={data === true} />
                    Sim
                </label>
                <label htmlFor={name + 'No'}>
                    <input id={name + 'No'} type="radio" name={name} value='false' onChange={e => handleDataChange(e)} required  checked={data === false} />
                    Não
                </label>
            </div>
        </fieldset>
    );
}