import { useState } from 'react';
import style from './Stands.module.scss';
import StandList from './StandList';
import InputField from '../../components/InputField';


export default function Stands() {
    const [standNome, setStandNome] = useState('');
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('');
    const [monitor, setMonitor] = useState('');
    const [agent, setAgent] = useState('');

    const [pesquisa, setPesquisa] = useState('');

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Lista de Stands</h1>
            </div>
            <section className={style.container__list}>
                <InputField data={pesquisa} label={'Pequisar'} name={'pesquisa'} setData={setPesquisa} key={1}/>
                <StandList />
            </section>
        </div>
    );
}