import { useState } from 'react';
import style from './Stands.module.scss';


export default function Stands() {
    const [standNome, setStandNome] = useState('');
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('');
    const [monitor, setMonitor] = useState('');
    const [agent, setAgent] = useState('');

    return (
        <div className={style.container}>
            
            <div className={style.header}>
                <h1>Stands</h1>
            </div>
        </div>
    );
}