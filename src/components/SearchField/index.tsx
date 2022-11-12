import { Infra } from '../../types';
import style from './SearchField.module.scss';

interface Props {
    title: string;
    name: string;
    data?: boolean;
    setData?: React.Dispatch<React.SetStateAction<Infra>>;
    object?: Infra
    atributo?: any
}

export default function SearchField({ title, name, data, setData, object, atributo }: Props) {

    return (
        <fieldset className={style.radio}>
            <legend className={style.radio__title}>{title}</legend>
            <div className={style.radio__input}>
                <input id={name + 'Yes'} type="radio" name={name} value='true' onChange={e => atributo(e.target.value === 'true')} required />
                <label htmlFor={name + 'Yes'}>Sim</label>
                <input id={name + 'No'} type="radio" name={name} value='false' onChange={e => atributo(e.target.value === 'true')} required />
                <label htmlFor={name + 'No'}>Não</label>
            </div>
        </fieldset>
    );
}