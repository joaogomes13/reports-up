import StandItem from './StandItem';
import style from './StandList.module.scss';
import api from '../../../services/api';
import { useEffect, useState } from 'react';
import { StandInfo } from '../../../types';
import InputField from '../../../components/InputField';

export default function StandList() {

    const [pesquisa, setPesquisa] = useState('');
    const [stands, setStands] = useState([{}] as StandInfo[]);

    const getStands = async () => {
    await api.get(`/stand`)
            .then(response => {
                setStands(response.data);
            })
    }

    useEffect(() => {
        getStands();
    }, [])


    return (
        <>
            <InputField data={pesquisa} label={'Pequisar'} name={'pesquisa'} setData={setPesquisa} key={1} />
            <table className={style.list}>
                <thead className={style.list__header}>
                    <th>Id</th>
                    <th>Nome do Stand</th>
                    <th>Proprietário</th>
                </thead>
                <tbody>
                    {
                        stands.map((stand, index) => (
                            <StandItem id={index} idStand={stand.id} name={stand.name} standOwner={stand.ownerName} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}