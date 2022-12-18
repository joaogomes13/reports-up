import { useNavigate } from 'react-router-dom';
import style from './StandItem.module.scss';

interface Props {
    id: string | undefined,
    name: string,
    standOwner: string
}

export default function StandItem({id, name, standOwner}: Props){

    const navigate = useNavigate();
    
    return(
        <li className={style.itemContainer} id={id} onClick={() => navigate(`/stand/${id}`)}>
            <p>{id} - {name}</p>
            <p>Proprietário: {standOwner}</p>
        </li>
    )
}