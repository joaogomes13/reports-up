import { Infra } from '../../types';
import style from './SearchField.module.scss';

interface Props {
    title: string;
    name: string;
    data?: boolean;
    setData: React.Dispatch<React.SetStateAction<boolean>>;
    object?: Infra
    atributo?: any
    qtd?: boolean
    ptc?: boolean
}

export default function SearchField({ title, name, data, setData, qtd, ptc }: Props) {
    return (
        <fieldset className={style.radio}>
            <legend className={style.radio__title}>{title}</legend>
            <div className={style.radio__input}>
                <label htmlFor={name + 'Yes'}>
                    <input id={name + 'Yes'} type="radio" name={name} value='true' onChange={e => setData(e.target.value === 'true')} required />
                    Sim
                </label>
                <label htmlFor={name + 'No'}>
                    <input id={name + 'No'} type="radio" name={name} value='false' onChange={e => setData(e.target.value === 'true')} required />
                    Não
                </label>
            </div>
            <div className={style.radio__qtd}>
                {
                    qtd === true &&
                    <label htmlFor={name + 'Qtd'}>
                        Quantidade:
                        <input type='number' />
                    </label>
                }
            </div>
            <div className={style.radio__ptc}>
                {
                    ptc === true &&
                    <label htmlFor={name + 'Ptc'}>
                        Potencia:
                        <input type='number' />
                    </label>
                }
            </div>
        </fieldset>
    );
}