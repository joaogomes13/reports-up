import React from 'react';
import style from './SearchField.module.scss';

interface Props {
    title: string;
    name: string;
    data: boolean;
    setData: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchField({title, name, data, setData}: Props) {

    return (
        <div className={style.container}>
            <p className={style.container__title}>{title}</p>
            <div className={style.container__inputs}>
                <div className={style.container__input}>
                    <input id="yes" type="radio" name={name} value='true' onChange={e => setData(e.target.value === 'true')} required />
                    <label htmlFor="yes">Sim</label>
                </div>
                <div className={style.container__input}>
                    <input id="no" type="radio" name={name} value='false' onChange={e => setData(e.target.value === 'false')} required />
                    <label htmlFor="no">Não</label>
                </div>
            </div>
        </div>
    );
}