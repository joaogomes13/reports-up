import style from './FormList.module.scss';
import api from '../../../services/api';
import { useEffect, useState } from 'react';
import { Formulario } from '../../../types';
import InputField from '../../../components/InputField';
import FormItem from './FormItem';
import { useParams } from 'react-router-dom';

export default function FormList() {

    const {id} = useParams();

    const [pesquisa, setPesquisa] = useState('');
    const [forms, setForms] = useState([{}] as Formulario[]);

    const getForms = async () => {
        await api.get(`/listform?stand_id=${id}`, {
        })
            .then(response => {
                console.log(response);
                setForms(response.data);
            })
    }

    useEffect(() => {
        getForms();
    }, [])


    return (
        <>
            <InputField data={pesquisa} label={'Pequisar'} name={'pesquisa'} setData={setPesquisa} key={1} />
            <table className={style.list}>
                <thead className={style.list__header}>
                    <th>Id</th>
                    <th>Data</th>
                    <th>Ações</th>
                </thead>
                <tbody>
                    {
                        forms.map((forms, index) => (
                            <FormItem id={index} idForm={forms.id} date={forms.created_at} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}