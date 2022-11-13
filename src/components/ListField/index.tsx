import React, { useEffect, useState } from 'react';
import SearchField from '../SearchField';
import style from './ListField.module.scss';
import { BiTrash, BiAddToQueue } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';


interface Props {
  name: string,
}

export default function ListField({ name }: Props) {
  const [teste, setTeste] = useState(false);
  const [formTest, setFormTest] = useState([{ id: '',equipament: '', qtd: 0 }])

  const removeEquipament = (id: string) => {
    let _formTest = [...formTest];
    _formTest = _formTest.filter(formTest => formTest.id !== id)
    if(_formTest.length >= 1) {
      setFormTest(_formTest);
    } 
  }

  const addEquipament = () => {
    let _formTest = [...formTest];
    _formTest.push({
      equipament: '',
      qtd: 0,
      id: uuidv4()
    })
    setFormTest(_formTest);
  }

  const handleEquipamentChange = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const index = formTest.findIndex(e => e.id === id);

    let _formTest = [...formTest] as any;
    _formTest[index][event.target.name] = event.target.value

    setFormTest(_formTest);
  }

  return (
    <fieldset>
      <SearchField name='teste' title='Algum outro equipamento?' data={teste} setData={setTeste} />
      {
        teste === true &&
        <div>
          {
            formTest.map((element, index) => (
              <div className={style.list__input} key={index}>
                <input id={name + 'No'} type="text" name={name} required placeholder='Equipamento' onChange={(e) => handleEquipamentChange(element.id, e)} />
                <input id={name + 'No'} type="number" name={name}  required placeholder='Quantidade' onChange={(e) => handleEquipamentChange(element.id, e)} />
                <div>
                  <button type='button' className={style.list__input_add} onClick={addEquipament}><BiAddToQueue size={24} /></button>
                  <button type='button' className={style.list__input_remove} onClick={() => removeEquipament(element.id)}><BiTrash size={24} /></button>
                </div>
              </div>
            ))
          }
        </div>
      }
    </fieldset>
  )
}