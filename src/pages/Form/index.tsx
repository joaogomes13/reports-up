import { useEffect, useState } from 'react';
import CommentField from '../../components/CommentField';
import InputField from '../../components/InputField';
import SearchField from '../../components/SearchField';
import style from './Form.module.scss';
import { Infra } from '../../types';
import FormGroup from '../../components/FormGroup';

export default function Form() {
    const [stand, setStand] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [monitor, setMonitor] = useState('');
    const [agent, setAgent] = useState('');

    const [infra, setInfra] = useState({} as Infra);
    const [cadeiras, setCadeiras] = useState(false);

    const handleInfraChange = (e: boolean) => {
        setInfra({
            ...infra,
            mesas: e
        })
    }

    const handleInfraChange1 = (e: boolean) => {
        setInfra({
            ...infra,
            preparo: e
        })
    }

    const handleInfraChange2 = (e: boolean) => {
        setInfra({
            ...infra,
            balcaoLimpo: e
        })
    }

    const handleInfraChange3 = (e: boolean) => {
        setInfra({
            ...infra,
            mesasLimpas: e
        })
    }

    const handleInfraChange4 = (e: boolean) => {
        setInfra({
            ...infra,
            balcaoForrado: e
        })
    }

    useEffect(() => {
        console.log('objeto:', infra);

    }, [infra]);

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
            <section>
                <form>
                    <FormGroup title='1. Da infraestrutura física' name='Infraestrutura'>
                        <SearchField title='Mesas e cadeiras internas?' name="cadeiras" data={infra.mesas} setData={setInfra} object={infra} atributo={handleInfraChange} />
                        <SearchField title='Área de preparo isolada?' name="preparo" data={infra.preparo} setData={setInfra} object={infra} atributo={handleInfraChange1} />
                        <SearchField title='Balcão limpo?' name="balcaoLimpo" data={infra.balcaoLimpo} setData={setInfra} object={infra} atributo={handleInfraChange2} />
                        <SearchField title='Mesas e cadeirasm limpas?' name="cadeiraLimpa" data={infra.mesasLimpas} setData={setInfra} object={infra} atributo={handleInfraChange3} />
                        <SearchField title='Balcão forrado?' name="balcaoForrado" data={infra.balcaoForrado} setData={setInfra} object={infra} atributo={handleInfraChange4} />
                    </FormGroup>
                    <FormGroup title='2. Dos alimentos' name='Alimentos'>
                        <SearchField title='Armazenamento adequado?' name="cadeiras" data={cadeiras} setData={setInfra} />
                        <SearchField title='Prazos de validade, ok?' name="preparo" data={cadeiras} setData={setInfra} />
                        <SearchField title='Condições de preparo?' name="preparo" data={cadeiras} setData={setInfra} />
                        <SearchField title='Balcão de preparo adequado?' name="preparo" data={cadeiras} setData={setInfra} />
                        <SearchField title='Balcão forrado?' name="preparo" data={cadeiras} setData={setInfra} />
                    </FormGroup>
                    <FormGroup title='3. Do preparo' name='Preparo'>
                        <SearchField title='Utilização de toucas?' name="cadeiras" data={cadeiras} setData={setInfra} />
                        <SearchField title='Álcool em gel para as mãos?' name="preparo" data={cadeiras} setData={setInfra}/>
                        <SearchField title='Utilização de máscaras?' name="preparo" data={cadeiras} setData={setInfra} />         
                    </FormGroup>
                    <FormGroup title='4. Do atendimento ao público' name='Atendimento'>
                        <SearchField title='Traje adequado' name="cadeiras" data={cadeiras} setData={setInfra} />
                        <SearchField title='Duráveis?' name="preparo" data={cadeiras} setData={setInfra} />
                        <SearchField title='Descartáveis?' name="preparo" data={cadeiras} setData={setInfra} />
                    </FormGroup>
                    <FormGroup title='5. Dos resíduos sólidos' name='Resíduos'>
                        <SearchField title='Orgânico e seco separados?' name="cadeiras" data={cadeiras} setData={setInfra}  />
                        <SearchField title='Óleo separado em vasilhame?' name="preparo" data={cadeiras} setData={setInfra} />
                        <SearchField title='Lixeiras tampadas?' name="preparo" data={cadeiras} setData={setInfra}  />
                    </FormGroup>
                    <FormGroup title='6. Do ambiente' name='Ambiente'>
                        <SearchField title='Ambiente interno limpo?' name="cadeiras" data={cadeiras} setData={setInfra} />
                        <SearchField title='Ambiente externo limpo?' name="preparo" data={cadeiras} setData={setInfra}/>
                        <SearchField title='Cozinha limpa?' name="preparo" data={cadeiras} setData={setInfra} />
                    </FormGroup>
                    <FormGroup title='7. Dos equipamentos' name='Equipamentos'>
                        <SearchField title='Mesas e cadeiras internas?' name="cadeiras" data={cadeiras} setData={setInfra} />
                        <SearchField title='Área de preparo isolada?' name="preparo" data={cadeiras} setData={setInfra} />
                        <SearchField title='Balcão limpo?' name="preparo" data={cadeiras} setData={setInfra} />
                        <SearchField title='Mesas e cadeirasm limpas?' name="preparo" data={cadeiras} setData={setInfra} />
                        <SearchField title='Balcão forrado?' name="preparo" data={cadeiras} setData={setInfra} />
                    </FormGroup>
                    <FormGroup title='8. Do stand' name='Stand'>
                        <SearchField title='Faltou energia?' name="cadeiras" data={cadeiras} setData={setInfra} />
                        <SearchField title='Falta de recolhimento de lixo?' name="preparo" data={cadeiras} setData={setInfra} />
                        <SearchField title='Falta de água?' name="preparo" data={cadeiras} setData={setInfra} />
                    </FormGroup>
                    <FormGroup title='9. Recomendações ou reclamações' name='Recomendacoes'>
                    </FormGroup>
                </form>
            </section> 

        </div>
    );
}