import { useEffect, useState } from 'react';
import InputField from '../../components/InputField';
import SearchField from '../../components/SearchField';
import style from './Form.module.scss';
import { Formulario } from '../../types';
import FormGroup from '../../components/FormGroup';
import CommentField from '../../components/CommentField';
import ListField from '../../components/ListField';
import  api  from '../../services/api';
import { v4 as uuidv4 } from 'uuid';

export default function Form() {
    const [standNome, setStandNome] = useState('');
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('');
    const [monitor, setMonitor] = useState('');
    const [agent, setAgent] = useState('');

    const [form, setForm] = useState([{}] as Formulario[]);

    const date = new Date().toISOString().slice(0, 16);

    useEffect(() => {
        console.log(form[0].justificativaAlimento);
    }, [form])

    const sendPesquisa = async () => {
        console.log(
            {
                

                nomeStand: standNome,
                number: number,
                ownerName: name,
                monitorUp: monitor,
                representative: agent,

                mesasCadeirasInternas: form[0].mesasCadeirasInternas,
                areaPreparoIsolado: form[0].mesasCadeirasInternas,
                balcaoLimpo: form[0].balcaoLimpo,
                mesaCadeirasLimpas: form[0].mesaCadeirasLimpas,
                balcaoForrado: form[0].balcaoForrado,
                justificativaInfraestrutura: form[0].justificativaInfraestrutura,

                armazenamentoAdequado: form[0].armazenamentoAdequado,
                validade: form[0].validade,
                condicaoPreparo: form[0].condicaoPreparo,
                balcaoAdequado: form[0].balcaoAdequado,
                justificativaAlimento: form[0].justificativaAlimento,

                toucas: form[0].toucas,
                alcoolGel: form[0].alcoolGel,
                mascaras: form[0].mascaras,
                justificativaPreparo: form[0].justificativaPreparo,

                trajeAdequado: form[0].trajeAdequado,
                duraveis: form[0].duraveis,
                descartaveis: form[0].descartaveis,
                justificativaAtendimento: form[0].justificativaAtendimento,

                organicoSecoSeparado: form[0].organicoSecoSeparado,
                oleoSeparado: form[0].oleoSeparado,
                lixeirasTampadas: form[0].lixeirasTampadas,
                justificativaResiduo: form[0].justificativaResiduo,

                ambienteInternoLimpo: form[0].ambienteInternoLimpo,
                ambienteExternoLimpo: form[0].ambienteExternoLimpo,
                cozinhaLimpa: form[0].cozinhaLimpa,
                justificativaAmbiente: form[0].justificativaAmbiente,

                faltouEnergia: form[0].faltouEnergia,
                faltouRecolhimentoLixo: form[0].faltouRecolhimentoLixo,
                faltouAgua: form[0].faltouAgua,
                justificativaStand: form[0].justificativaStand,
            }
        )

        await api.post('/form', {
            id: uuidv4(),
            nomeStand: standNome,
            number: number,
            ownerName: name,
            monitorUp: monitor,
            representative: agent,

            mesasCadeirasInternas: form[0].mesasCadeirasInternas,
            areaPreparoIsolado: form[0].mesasCadeirasInternas,
            balcaoLimpo: form[0].balcaoLimpo,
            mesaCadeirasLimpas: form[0].mesaCadeirasLimpas,
            balcaoForrado: form[0].balcaoForrado,
            justificativaInfraestrutura: form[0].justificativaInfraestrutura,

            armazenamentoAdequado: form[0].armazenamentoAdequado,
            validade: form[0].validade,
            condicaoPreparo: form[0].condicaoPreparo,
            balcaoAdequado: form[0].balcaoAdequado,
            justificativaAlimento: form[0].justificativaAlimento,

            toucas: form[0].toucas,
            alcoolGel: form[0].alcoolGel,
            mascaras: form[0].mascaras,
            justificativaPreparo: form[0].justificativaPreparo,

            trajeAdequado: form[0].trajeAdequado,
            duraveis: form[0].duraveis,
            descartaveis: form[0].descartaveis,
            justificativaAtendimento: form[0].justificativaAtendimento,

            organicoSecoSeparado: form[0].organicoSecoSeparado,
            oleoSeparado: form[0].oleoSeparado,
            lixeirasTampadas: form[0].lixeirasTampadas,
            justificativaResiduo: form[0].justificativaResiduo,

            ambienteInternoLimpo: form[0].ambienteInternoLimpo,
            ambienteExternoLimpo: form[0].ambienteExternoLimpo,
            cozinhaLimpa: form[0].cozinhaLimpa,
            justificativaAmbiente: form[0].justificativaAmbiente,

            faltouEnergia: form[0].faltouEnergia,
            faltouRecolhimentoLixo: form[0].faltouRecolhimentoLixo,
            faltouAgua: form[0].faltouAgua,
            justificativaStand: form[0].justificativaStand,

            recomendacoesEOuReclamacoes: form[0].recomendacoesEOuReclamacoes
        })
            .then(response => {
                alert('Enviado!' + response)
            })
            .catch((error) => {
                console.log('Erro ao enviar' + error)
            })

    }

    return (
        <div className={style.container}>
            <button type='button' onClick={sendPesquisa}>Enviar pesquisa</button>
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
                            <SearchField title='Mesas e cadeiras internas?' name="mesasCadeirasInternas" data={form[0].mesasCadeirasInternas} object={form} setData={setForm} />
                            <SearchField title='Área de preparo isolada?' name="areaPreparoIsolado" data={form[0].areaPreparoIsolado} object={form} setData={setForm} />
                            <SearchField title='Balcão limpo?' name="balcaoLimpo" data={form[0].balcaoLimpo} object={form} setData={setForm} />
                            <SearchField title='Mesas e cadeiras limpas?' name="mesaCadeirasLimpas" data={form[0].mesaCadeirasLimpas} object={form} setData={setForm} />
                            <SearchField title='Balcão forrado?' name="balcaoForrado" data={form[0].balcaoForrado} object={form} setData={setForm} />
                        </div>
                        <CommentField title='Se negativo, explique' name="justificativaInfraestrutura" data={form[0].justificativaInfraestrutura} object={form} setData={setForm} />
                    </FormGroup>
                    <FormGroup title='2. Dos alimentos' name='Alimentos'>
                        <div className={style.form__search}>
                            <SearchField title='Armazenamento adequado?' name="armazenamentoAdequado" data={form[0].armazenamentoAdequado} object={form} setData={setForm} />
                            <SearchField title='Prazos de validade, ok?' name="validade" data={form[0].validade} object={form} setData={setForm} />
                            <SearchField title='Condições de preparo?' name="condicaoPreparo" data={form[0].condicaoPreparo} object={form} setData={setForm} />
                            <SearchField title='Balcão de preparo adequado?' name="balcaoAdequado" data={form[0].balcaoAdequado} object={form} setData={setForm} />
                        </div>
                        <CommentField title='Se negativo, explique' name="justificativaAlimento" data={form[0].justificativaAlimento} object={form} setData={setForm} />
                    </FormGroup>
                    <FormGroup title='3. Do preparo' name='Preparo'>
                        <div className={style.form__search}>
                            <SearchField title='Utilização de toucas?' name="toucas" data={form[0].toucas} setData={setForm} object={form} />
                            <SearchField title='Álcool em gel para as mãos?' name="alcoolGel" data={form[0].alcoolGel} setData={setForm} object={form} />
                            <SearchField title='Utilização de máscaras?' name="mascaras" data={form[0].mascaras} setData={setForm} object={form} />
                        </div>
                        <CommentField title='Se negativo, explique' name="justificativaPreparo" data={form[0].justificativaPreparo} object={form} setData={setForm} />
                    </FormGroup>
                    <FormGroup title='4. Do atendimento ao público' name='Atendimento'>
                        <div className={style.form__search}>
                            <SearchField title='Traje adequado' name="trajeAdequado" data={form[0].trajeAdequado} setData={setForm} object={form} />
                            <SearchField title='Duráveis?' name="duraveis" data={form[0].duraveis} setData={setForm} object={form} />
                            <SearchField title='Descartáveis?' name="descartaveis" data={form[0].descartaveis} setData={setForm} object={form} />
                        </div>
                        <CommentField title='Se negativo, explique' name="justificativaAtendimento" data={form[0].justificativaAtendimento} object={form} setData={setForm} />
                    </FormGroup>
                    <FormGroup title='5. Dos resíduos sólidos' name='Resíduos'>
                        <div className={style.form__search}>
                            <SearchField title='Orgânico e seco separados?' name="organicoSecoSeparado" data={form[0].organicoSecoSeparado} setData={setForm} object={form} />
                            <SearchField title='Óleo separado em vasilhame?' name="oleoSeparado" data={form[0].oleoSeparado} setData={setForm} object={form} />
                            <SearchField title='Lixeiras tampadas?' name="lixeirasTampadas" data={form[0].lixeirasTampadas} setData={setForm} object={form} />
                        </div>
                        <CommentField title='Se negativo, explique' name="justificativaResiduo" data={form[0].justificativaResiduo} object={form} setData={setForm} />
                    </FormGroup>
                    <FormGroup title='6. Do ambiente' name='Ambiente'>
                        <div className={style.form__search}>
                            <SearchField title='Ambiente interno limpo?' name="ambienteInternoLimpo" data={form[0].ambienteInternoLimpo} setData={setForm} object={form} />
                            <SearchField title='Ambiente externo limpo?' name="ambienteExternoLimpo" data={form[0].ambienteExternoLimpo} setData={setForm} object={form} />
                            <SearchField title='Cozinha limpa?' name="cozinhaLimpa" data={form[0].cozinhaLimpa} setData={setForm} object={form} />
                        </div>
                        <CommentField title='Se negativo, explique' name="justificativaAmbiente" data={form[0].justificativaAmbiente} object={form} setData={setForm} />
                    </FormGroup>
                    <FormGroup title='7. Dos equipamentos' name='Equipamentos'>
                        <ListField name='teste' />
                    </FormGroup>
                    <FormGroup title='8. Do stand' name='Stand'>
                        <div className={style.form__search}>
                            <SearchField title='Faltou energia?' name="faltouEnergia" data={form[0].faltouEnergia} setData={setForm} object={form} />
                            <SearchField title='Falta de recolhimento de lixo?' name="faltouRecolhimentoLixo" data={form[0].faltouRecolhimentoLixo} setData={setForm} object={form} />
                            <SearchField title='Falta de água?' name="faltouAgua" data={form[0].faltouAgua} setData={setForm} object={form} />
                        </div>
                        <CommentField title='Se negativo, explique' name="justificativaStand" data={form[0].justificativaStand} object={form} setData={setForm} />
                    </FormGroup>
                    <FormGroup title='9. Recomendações ou reclamações' name='Recomendacoes'>
                        <CommentField name="recomendacoesEOuReclamacoes" data={form[0].recomendacoesEOuReclamacoes} object={form} setData={setForm} />
                    </FormGroup>
                </form>
            </section>
        </div>
    );
}