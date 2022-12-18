import { useNavigate } from 'react-router-dom';
import style from './StandItem.module.scss';

interface Props {
    id: number | undefined,
    idForm: string | undefined,
    date: string,
    monitorUP: string,
}

export default function FormItem({id, idForm, date, monitorUP}: Props){

    const navigate = useNavigate();

    const dateUTC = new Date(date).toLocaleDateString('pt-br');
    
    return(
        <tr className={style.itemContainer} id={idForm} onClick={() => navigate(`/form/${id}`)}>
            <td>{id}</td>
            <td>{date}</td>
            <td>{monitorUP}</td>
        </tr>
    )
}