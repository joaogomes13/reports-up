import { useEffect, useState } from 'react';
import InputField from '../../components/InputField';
import SearchField from '../../components/SearchField';
import style from './Form.module.scss';
import { Infra } from '../../types';
import FormGroup from '../../components/FormGroup';
import CommentField from '../../components/CommentField';
import ListField from '../../components/ListField';

export default function Form() {
    const [stand, setStand] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [monitor, setMonitor] = useState('');
    const [agent, setAgent] = useState('');

    const [infra, setInfra] = useState([{}] as Infra[]);

    const date = new Date().toISOString().slice(0, 16);

    useEffect(() => {
        console.log('objeto:', infra[0]);

    }, [infra]);

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Formulário de acompanhamento</h1>
                <input type='datetime-local' value={date} />
            </div>
            <section>
                <form className={style.info}>
                    <FormGroup title='Informações do Stand' name='Informacoes do Stand'>
                        <div className={style.form__info}>
                            <div className={style.form__info_first}>
                                <InputField data={stand} setData={setStand} label='Nome do Stand' name='stand' />
                                <InputField data={number} setData={setNumber} label='Número' name='number' />
                            </div>
                            <InputField data={name} setData={setName} label='Nome do proprietário' name='name' />
                            <div className={style.form__info_last}>
                                <InputField data={monitor} setData={setMonitor} label='Monitor UP' name='monitor' />
                                <InputField data={agent} setData={setAgent} label='Representante stand' name='agent' />
                            </div>
                        </div>
                    </FormGroup>
                    <FormGroup title='1. Da infraestrutura física' name='Infraestrutura'>
                        <div className={style.form__search}>
                            <SearchField title='Mesas e cadeiras internas?' name="mesas" data={infra[0].mesas} object={infra} setData={setInfra} />
                            <SearchField title='Área de preparo isolada?' name="preparo" data={infra[0].preparo} object={infra} setData={setInfra} />
                            <SearchField title='Balcão limpo?' name="balcaoLimpo" data={infra[0].balcaoLimpo} object={infra} setData={setInfra} />
                            <SearchField title='Mesas e cadeirasm limpas?' name="mesasLimpas" data={infra[0].mesasLimpas} object={infra} setData={setInfra} />
                            <SearchField title='Balcão forrado?' name="balcaoForrado" data={infra[0].balcaoForrado} object={infra} setData={setInfra} />
                        </div>
                        <CommentField title='Se negativo, explique' />
                    </FormGroup>
                    <FormGroup title='2. Dos alimentos' name='Alimentos'>
                        <div className={style.form__search}>
                            <SearchField title='Armazenamento adequado?' name="armazenamento" data={infra[0].armazenamento} object={infra} setData={setInfra} />
                            <SearchField title='Prazos de validade, ok?' name="prazos" data={infra[0].prazos} object={infra} setData={setInfra} />
                            <SearchField title='Condições de preparo?' name="condicaoPreparo" data={infra[0].condicaoPreparo} object={infra} setData={setInfra} />
                            <SearchField title='Balcão de preparo adequado?' name="balcaoPreparo" data={infra[0].balcaoPreparo} object={infra} setData={setInfra} />
                        </div>
                        <CommentField title='Se negativo, explique' />
                    </FormGroup>
                    {/* <FormGroup title='3. Do preparo' name='Preparo'>
                        <div className={style.form__search}>
                            <SearchField title='Utilização de toucas?' name="cadeiras" data={cadeiras} setData={setCadeiras}/>
                            <SearchField title='Álcool em gel para as mãos?' name="preparo" data={cadeiras}  setData={setCadeiras}/>
                            <SearchField title='Utilização de máscaras?' name="preparo" data={cadeiras}  setData={setCadeiras} />
                        </div>
                        <CommentField title='Se negativo, explique' />
                    </FormGroup>
                    <FormGroup title='4. Do atendimento ao público' name='Atendimento'>
                        <div className={style.form__search}>
                            <SearchField title='Traje adequado' name="cadeiras" data={cadeiras} setData={setCadeiras}  />
                            <SearchField title='Duráveis?' name="preparo" data={cadeiras} setData={setCadeiras}  />
                            <SearchField title='Descartáveis?' name="preparo" data={cadeiras}  setData={setCadeiras} />
                        </div>
                        <CommentField title='Se negativo, explique' />
                    </FormGroup>
                    <FormGroup title='5. Dos resíduos sólidos' name='Resíduos'>
                        <div className={style.form__search}>
                            <SearchField title='Orgânico e seco separados?' name="cadeiras" data={cadeiras} setData={setCadeiras}  />
                            <SearchField title='Óleo separado em vasilhame?' name="preparo" data={cadeiras} setData={setCadeiras}  />
                            <SearchField title='Lixeiras tampadas?' name="preparo" data={cadeiras}  setData={setCadeiras} />
                        </div>
                        <CommentField title='Se negativo, explique' />
                    </FormGroup>
                    <FormGroup title='6. Do ambiente' name='Ambiente'>
                        <div className={style.form__search}>
                            <SearchField title='Ambiente interno limpo?' name="cadeiras" data={cadeiras}  setData={setCadeiras} />
                            <SearchField title='Ambiente externo limpo?' name="preparo" data={cadeiras} setData={setCadeiras}  />
                            <SearchField title='Cozinha limpa?' name="preparo" data={cadeiras} setData={setCadeiras}  />
                        </div>
                        <CommentField title='Se negativo, explique' />
                    </FormGroup>
                    <FormGroup title='7. Dos equipamentos' name='Equipamentos'>
                        <div className={style.form__search}>
                            <SearchField title='Fogão à gás?' name="cadeiras" data={cadeiras} qtd={true} setData={setCadeiras}/>
                            <SearchField title='Chapa à gás?' name="preparo" data={cadeiras} qtd={true} setData={setCadeiras}/>
                            <SearchField title='Forno à gás?' name="preparo" data={cadeiras} qtd={true} setData={setCadeiras} />
                            <SearchField title='Fritadeira à gás?' name="preparo" data={cadeiras}   qtd={true} setData={setCadeiras}/>
                            <SearchField title='Freezers?' name="preparo" data={cadeiras}   qtd={true} ptc={true} setData={setCadeiras}/>
                            <SearchField title='Geladeiras?' name="preparo" data={cadeiras}   qtd={true} ptc={true}setData={setCadeiras}/>
                        </div>
                            <ListField name='teste' />
                        <CommentField title='Se negativo, explique' />
                    </FormGroup>
                    <FormGroup title='8. Do stand' name='Stand'>
                        <div className={style.form__search}>
                            <SearchField title='Faltou energia?' name="cadeiras" data={cadeiras}  setData={setCadeiras} />
                            <SearchField title='Falta de recolhimento de lixo?' name="preparo" data={cadeiras}  setData={setCadeiras} />
                            <SearchField title='Falta de água?' name="preparo" data={cadeiras}  setData={setCadeiras} />
                        </div>
                        <CommentField title='Se negativo, explique' />
                    </FormGroup>
                    <FormGroup title='9. Recomendações ou reclamações' name='Recomendacoes'>
                        <CommentField />
                    </FormGroup> */}
                </form>
            </section>

        </div>
    );
}