import { useState } from 'react';
import style from './Stands.module.scss';
import StandList from './StandList';


export default function Stands() {


    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Lista de Stands</h1>
            </div>
            <section className={style.container__list}>
                <StandList />
            </section>
        </div>
    );
}