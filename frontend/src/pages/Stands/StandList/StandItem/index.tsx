import { useNavigate } from 'react-router-dom';
import style from './StandItem.module.scss';

interface Props {
    id: number | undefined,
    idStand: string | undefined,
    name: string,
    standOwner: string
}

export default function StandItem({ id, idStand, name, standOwner }: Props) {

    const navigate = useNavigate();

    return (

        <tr className={style.itemContainer} id={idStand} onClick={() => navigate(`/stand/${idStand}`)}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{standOwner}</td>
        </tr>
    )
}