import React, { useEffect, useState } from 'react';
import SearchField from '../SearchField';
import style from './ListField.module.scss';
import { BiTrash, BiAddToQueue } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';
import { Infraestrutura, Alimentos, Preparo, Atendimento, Residuos, Ambiente, Stand } from '../../types';


interface Props {
  name: string,
}
interface IPesquisa {
  infraestrutura: Infraestrutura,
  alimentos: Alimentos,
  preparo: Preparo,
  atendimento: Atendimento,
  residuos: Residuos,
  ambiente: Ambiente,
  stand: Stand
}

export default function ListField({ name }: Props) {
  const [ambiente, setAmbiente] = useState([{}] as Ambiente[]);
  const [teste, setTeste] = useState(false);
  const [formTest, setFormTest] = useState([{ id: '', equipament: '', qtd: 0 }])

  const removeEquipament = (id: string) => {
    let _formTest = [...formTest];
    _formTest = _formTest.filter(formTest => formTest.id !== id)
    if (_formTest.length >= 1) {
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
      {
        <div>
          {
            formTest.map((element, index) => (
              <div className={style.list} key={index}>
                <div className={style.list__inputs}>
                  <input className={style.list__inputs_larger} id={name + 'No'} type="text" name={name} required placeholder='Equipamento' onChange={(e) => handleEquipamentChange(element.id, e)} />
                  <input className={style.list__inputs_smaller} id={name + 'No'} type="number" name={name} required placeholder='Quantidade' onChange={(e) => handleEquipamentChange(element.id, e)} />
                  <input className={style.list__inputs_smaller} id={name + 'No'} type="number" name={name} required placeholder='Potência' onChange={(e) => handleEquipamentChange(element.id, e)} />
                </div>
                <div className={style.list__btns}>
                  <button type='button' className={style.list__btns_remove} onClick={() => removeEquipament(element.id)}>
                    <BiTrash size={24} />
                    <p>Deletar</p>
                  </button>
                  <button type='button' className={style.list__btns_add} onClick={addEquipament}>
                    <BiAddToQueue size={24} />
                    <p>Adicionar equipamento</p>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      }
    </fieldset>
  )
}