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
                    <CommentField title='Se negativo, explique'/>
                </form>
            </section>
            <section className={style.infra__container}>
                <h3>2. Dos alimentos</h3>
                <form>
                    <div className={style.infra}>
                        <SearchField title='Armazenamento adequado?' name="cadeiras" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Prazos de validade, ok?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Condições de preparo?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Balcão de preparo adequado?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        {/* <SearchField title='Balcão forrado?' name="preparo" data={cadeiras} setData={setCadeiras} /> */}
                    </div>
                    <CommentField title='Se negativo, explique'/>
                </form>
            </section>

            <section className={style.infra__container}>
                <h3>3. Do preparo</h3>
                <form>
                    <div className={style.infra}>
                        <SearchField title='Utilização de toucas?' name="cadeiras" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Álcool em gel para as mãos?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Utilização de máscaras?' name="preparo" data={cadeiras} setData={setCadeiras} />         
                    </div>
                    <CommentField title='Se negativo, explique'/>
                </form>
            </section>

            <section className={style.infra__container}>
                <h3>4. Do atendimento ao público</h3>
                <form>
                    <div className={style.infra}>
                        <SearchField title='Traje adequado' name="cadeiras" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Duráveis?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Descartáveis?' name="preparo" data={cadeiras} setData={setCadeiras} />
                    </div>
                    <CommentField title='Se negativo, explique'/>
                </form>
            </section>

            <section className={style.infra__container}>
                <h3>5. Dos resíduos sólidos</h3>
                <form>
                    <div className={style.infra}>
                        <SearchField title='Orgânico e seco separados?' name="cadeiras" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Óleo separado em vasilhame?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Lixeiras tampadas?' name="preparo" data={cadeiras} setData={setCadeiras} />
                    </div>
                    <CommentField title='Se negativo, explique'/>
                </form>
            </section>
            
            <section className={style.infra__container}>
                <h3>6. Do ambiente</h3>
                <form>
                    <div className={style.infra}>
                        <SearchField title='Ambiente interno limpo?' name="cadeiras" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Ambiente externo limpo?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Cozinha limpa?' name="preparo" data={cadeiras} setData={setCadeiras} />
                    </div>
                    <CommentField title='Se negativo, explique'/>
                </form>
            </section>

            <section className={style.infra__container}>
                <h3>7. Da Infraestrutura Física</h3>
                <form>
                    <div className={style.infra}>
                        <SearchField title='Mesas e cadeiras internas?' name="cadeiras" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Área de preparo isolada?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Balcão limpo?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Mesas e cadeirasm limpas?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Balcão forrado?' name="preparo" data={cadeiras} setData={setCadeiras} />
                    </div>
                    <CommentField title='Outras especifícações'/>
                </form>
            </section>

            <section className={style.infra__container}>
                <h3>7. Da Infraestrutura Física</h3>
                <form>
                    <div className={style.infra}>
                        <SearchField title='Faltou energia?' name="cadeiras" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Falta de recolhimento de lixo?' name="preparo" data={cadeiras} setData={setCadeiras} />
                        <SearchField title='Falta de água?' name="preparo" data={cadeiras} setData={setCadeiras} />
                    </div>
                    <CommentField title='Se positivo, explique'/>             
                </form>
            </section>
            <section className={style.infra__container}>
                <h3>9. Recomendações gerais e/ou reclamações</h3>
                <form>
                    <CommentField />
                </form>
            </section>

        </div>
    );
}