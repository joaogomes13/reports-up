import { useState } from 'react';
import InputField from '../../components/InputField';
import style from './Form.module.scss';

export default function Form() {
    const [stand, setStand] = useState(''); 
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [monitor, setMonitor] = useState('');
    const [agent, setAgent] = useState('');

    return(
        <div className={style.container}>
            <div className={style.header}>
                <h1>Formulário de acompanhamento</h1>
                <input type='datetime-local' />
            </div>
            <form className={style.info}>
                <div className={style.info__start}>
                    <InputField data={stand} setData={setStand} label='Nome do Stand' name='stand' />
                    <InputField data={number} setData={setNumber} label='Número' name='number' />
                </div>
                <div>
                    <InputField data={name} setData={setName} label='Nome do proprietário' name='name' />
                </div>
                <div className={style.info__end}>
                    <InputField data={monitor} setData={setMonitor} label='Monitor UP' name='monitor' />
                    <InputField data={agent} setData={setAgent} label='Representante stand' name='agent' />
                </div>
            </form>
        </div>
    );
}