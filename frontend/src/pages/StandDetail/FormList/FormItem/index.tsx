import { useNavigate } from 'react-router-dom';
import style from './StandItem.module.scss';
import { MdDelete, MdEdit } from 'react-icons/md'
import { IoMdEye } from 'react-icons/io'

interface Props {
    id: number | undefined,
    idForm: string | undefined,
    date: string,
}

export default function FormItem({id, idForm, date}: Props){

    const navigate = useNavigate();

    const dateUTC = new Date(date).toLocaleDateString('pt-br');
    
    return(
        <tr className={style.itemContainer} id={idForm} >
            <td>{id}</td>
            <td>{dateUTC}</td>
            <td className={style.itemContainer__actions}>
                <div className={style.itemContainer__icons} onClick={() => navigate(`/form/${idForm}`)}>
                    <IoMdEye size={24} />
                </div>
                <div className={style.itemContainer__icons} onClick={() => navigate(`/form/${idForm}`)}>
                    <MdEdit  size={24} />
                </div>
                <div className={style.itemContainer__icons} onClick={() => navigate(`/form/${idForm}`)}>
                    <MdDelete size={24} />
                </div>
            </td>
        </tr>
    )
}