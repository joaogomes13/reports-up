import { useEffect, useState } from 'react';
import InputField from '../../components/InputField';
import SearchField from '../../components/SearchField';
import style from './Form.module.scss';
import { Infraestrutura, Alimentos, Preparo, Atendimento, Residuos, Ambiente, Stand } from '../../types';
import FormGroup from '../../components/FormGroup';
import CommentField from '../../components/CommentField';
import ListField from '../../components/ListField';

interface IPesquisa {
    infraestrutura: Infraestrutura,
    alimentos: Alimentos,
    preparo: Preparo,
    atendimento: Atendimento,
    residuos: Residuos,
    ambiente: Ambiente,
    stand: Stand
}

export default function Form() {
    const [standNome, setStandNome] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [monitor, setMonitor] = useState('');
    const [agent, setAgent] = useState('');

    const [infraestrutura, setInfraestrutura] = useState([{}] as Infraestrutura[]);
    const [alimentos, setAlimentos] = useState([{}] as Alimentos[]);
    const [preparo, setPreparo] = useState([{}] as Preparo[]);
    const [atendimento, setAtendimento] = useState([{}] as Atendimento[]);
    const [residuos, setResiduos] = useState([{}] as Residuos[]);
    const [ambiente, setAmbiente] = useState([{}] as Ambiente[]);
    const [stand, setStand] = useState([{}] as Stand[]);

    const date = new Date().toISOString().slice(0, 16);

    const [pesquisa, setPesquisa] = useState({} as IPesquisa);

    const handlePesquisa = () => {

        setPesquisa({
            infraestrutura: infraestrutura[0],
            alimentos: alimentos[0],
            preparo: preparo[0],
            atendimento: atendimento[0],
            residuos: residuos[0],
            ambiente: ambiente[0],
            stand: stand[0]
        })

        console.log('Pesquisa: ', pesquisa);
    }

    return (
        <div className={style.container}>
            <button type='button' onClick={handlePesquisa}>Enviar pesquisa</button>
            <div className={style.header}>
                <h1>Formulário de acompanhamento</h1>
                <input type='datetime-local' value={date} />
            </div>
            <section>
                <form className={style.info}>
                    <FormGroup title='Informações do Stand' name='Informacoes do Stand'>
                        <div className={style.form__info}>
                            <div className={style.form__info_first}>
                                <InputField data={standNome} setData={setStandNome} label='Nome do Stand' name='stand' />
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
                            <SearchField title='Mesas e cadeiras internas?' name="mesasCadeirasInternas" data={infraestrutura[0].mesasCadeirasInternas} object={infraestrutura} setData={setInfraestrutura} />
                            <SearchField title='Área de preparo isolada?' name="areaPreparoIsolada" data={infraestrutura[0].areaPreparoIsolada} object={infraestrutura} setData={setInfraestrutura} />
                            <SearchField title='Balcão limpo?' name="balcaoLimpo" data={infraestrutura[0].balcaoLimpo} object={infraestrutura} setData={setInfraestrutura} />
                            <SearchField title='Mesas e cadeiras limpas?' name="mesasCadeirasLimpas" data={infraestrutura[0].mesasCadeirasLimpas} object={infraestrutura} setData={setInfraestrutura} />
                            <SearchField title='Balcão forrado?' name="balcaoForrado" data={infraestrutura[0].balcaoForrado} object={infraestrutura} setData={setInfraestrutura} />
                        </div>
                        <CommentField title='Se negativo, explique' />
                    </FormGroup>
                    <FormGroup title='2. Dos alimentos' name='Alimentos'>
                        <div className={style.form__search}>
                            <SearchField title='Armazenamento adequado?' name="armazenamentoAdequado" data={alimentos[0].armazenamentoAdequado} object={alimentos} setData={setAlimentos} />
                            <SearchField title='Prazos de validade, ok?' name="validade" data={alimentos[0].validade} object={alimentos} setData={setAlimentos}/>
                            <SearchField title='Condições de preparo?' name="condicaoPreparo" data={alimentos[0].condicaoPreparo} object={alimentos} setData={setAlimentos} />
                            <SearchField title='Balcão de preparo adequado?' name="balcaoAdequado" data={alimentos[0].balcaoAdequado} object={alimentos} setData={setAlimentos} />
                        </div>
                        <CommentField title='Se negativo, explique' />
                    </FormGroup>
                    <FormGroup title='3. Do preparo' name='Preparo'>
                        <div className={style.form__search}>
                            <SearchField title='Utilização de toucas?' name="toucas" data={preparo[0].toucas} setData={setPreparo} object={preparo}/>
                            <SearchField title='Álcool em gel para as mãos?' name="alcoolGel" data={preparo[0].alcoolGel}  setData={setPreparo} object={preparo}/>
                            <SearchField title='Utilização de máscaras?' name="mascaras" data={preparo[0].mascaras}  setData={setPreparo} object={preparo}/>
                        </div>
                        <CommentField title='Se negativo, explique' />
                    </FormGroup>
                    <FormGroup title='4. Do atendimento ao público' name='Atendimento'>
                        <div className={style.form__search}>
                            <SearchField title='Traje adequado' name="trajeAdequado" data={atendimento[0].trajeAdequado} setData={setAtendimento}  object={atendimento}/>
                            <SearchField title='Duráveis?' name="duraveis" data={atendimento[0].duraveis} setData={setAtendimento} object={atendimento} />
                            <SearchField title='Descartáveis?' name="descartaveis" data={atendimento[0].descartaveis}  setData={setAtendimento} object={atendimento}/>
                        </div>
                        <CommentField title='Se negativo, explique' />
                    </FormGroup>
                    <FormGroup title='5. Dos resíduos sólidos' name='Resíduos'>
                        <div className={style.form__search}>
                            <SearchField title='Orgânico e seco separados?' name="organicoSecoSeparado" data={residuos[0].organicoSecoSeparado} setData={setResiduos} object={residuos} />
                            <SearchField title='Óleo separado em vasilhame?' name="oleoSeparado" data={residuos[0].oleoSeparado} setData={setResiduos} object={residuos} />
                            <SearchField title='Lixeiras tampadas?' name="lixeirasTampadas" data={residuos[0].lixeirasTampadas}  setData={setResiduos} object={residuos} />
                        </div>
                        <CommentField title='Se negativo, explique' />
                    </FormGroup>
                    <FormGroup title='6. Do ambiente' name='Ambiente'>
                        <div className={style.form__search}>
                            <SearchField title='Ambiente interno limpo?' name="ambienteInternoLimpo" data={ambiente[0].ambienteInternoLimpo}  setData={setAmbiente} object={ambiente}/>
                            <SearchField title='Ambiente externo limpo?' name="ambienteExternoLimpo" data={ambiente[0].ambienteExternoLimpo} setData={setAmbiente} object={ambiente}  />
                            <SearchField title='Cozinha limpa?' name="cozinhaLimpa" data={ambiente[0].cozinhaLimpa} setData={setAmbiente} object={ambiente} />
                        </div>
                        <CommentField title='Se negativo, explique' />
                    </FormGroup>
                    <FormGroup title='7. Dos equipamentos' name='Equipamentos'>
                        <ListField name='teste' />
                    </FormGroup>
                    <FormGroup title='8. Do stand' name='Stand'>
                        <div className={style.form__search}>
                            <SearchField title='Faltou energia?' name="faltouEnergia" data={stand[0].faltouEnergia}  setData={setStand} object={stand} />
                            <SearchField title='Falta de recolhimento de lixo?' name="faltaRecolhimentoLixo" data={stand[0].faltaRecolhimentoLixo}  setData={setStand} object={stand} />
                            <SearchField title='Falta de água?' name="faltaAgua" data={stand[0].faltaAgua}  setData={setStand} object={stand}  />
                        </div>
                        <CommentField title='Se negativo, explique' />
                    </FormGroup>
                    <FormGroup title='9. Recomendações ou reclamações' name='Recomendacoes'>
                        <CommentField />
                    </FormGroup>
                </form>
            </section>

        </div>
    );
}