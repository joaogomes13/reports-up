import { useState } from 'react';
import SearchField from '../SearchField';
import style from './ListField.module.scss';
import { BiTrash, BiAddToQueue } from 'react-icons/bi';


interface Props {
  name: string,
}

export default function ListField({ name }: Props) {
  const [teste, setTeste] = useState(false);
  const [formTest, setFormTest] = useState([{ equipament: '', qtd: 0 }])

  return (
    <fieldset>
      <SearchField name='teste' title='Algum outro equipamento?' data={teste} setData={setTeste} />
      {
        teste === true &&
        <div>
          {
            formTest.map((element, index) => (
              <div className={style.list__input} key={index}>
                <input id={name + 'No'} type="text" name={name} value={element.equipament || ''} required placeholder='Equipamento' />
                <input id={name + 'No'} type="number" name={name} value={element.equipament || 0} required placeholder='Quantidade' />
                <div>
                  <button type='button' className={style.list__input_add}><BiAddToQueue size={24} /></button>
                  <button type='button' className={style.list__input_remove}><BiTrash size={24} /></button>
                </div>
              </div>
            ))
          }
        </div>
      }
    </fieldset>
  )
}