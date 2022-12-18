import StandItem from './StandItem';
import style from './StandList.module.scss';
import api from '../../../services/api';
import { useEffect, useState } from 'react';
import { StandInfo } from '../../../types';

export default function StandList() {

    const [stands, setStands] = useState([{}] as StandInfo[]);

    const getStands = async () => {
        await api.get('/stand')
        .then(response => {
            setStands(response.data);
        })
    }

    useEffect(() => {
        getStands();
    }, [])

    
    return (
        <ul className={style.list}>
            {
                stands.map( stand => (
                    <StandItem id={stand.id} name={stand.name} standOwner={stand.ownerName} />
                ))
            }
        </ul>
    )
}