import { useState } from 'react';
import CommentField from '../../components/CommentField';
import InputField from '../../components/InputField';
import SearchField from '../../components/SearchField';
import style from './Form.module.scss';

export default function Form() {
    const [stand, setStand] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [monitor, setMonitor] = useState('');
    const [agent, setAgent] = useState('');

    const [cadeiras, setCadeiras] = useState(false);

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Formulário de acompanhamento</h1>
                <input type='datetime-local' />
            </div>
            <section>
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
            </section>
            <section className={style.infra__container}>
                <h3>1. Da Infraestrutura Física</h3>
                <form>
                    <div className={style.infra}>
                        <SearchField title='Mesas e cadeiras internas?' name="cadeiras" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Área de preparo isolada?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Balcão limpo?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Mesas e cadeirasm limpas?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Balcão forrado?' name="preparo" data={cadeiras} setData={setCadeiras} />
                    </div>
                    <CommentField />
                </form>
            </section>
            <section className={style.infra__container}>
                <h3>1. Da Infraestrutura Física</h3>
                <form>
                    <div className={style.infra}>
                        <SearchField title='Mesas e cadeiras internas?' name="cadeiras" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Área de preparo isolada?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Balcão limpo?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Mesas e cadeirasm limpas?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Balcão forrado?' name="preparo" data={cadeiras} setData={setCadeiras} />
                    </div>
                    <CommentField />
                </form>
            </section>
        </div>
    );
}