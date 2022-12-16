import React, { useState } from 'react';
import style from './ListField.module.scss';
import { BiTrash, BiAddToQueue } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';
import { Equipamentos } from '../../types';

interface Props {
  name: string,
  data: Equipamentos[],
  setData: React.Dispatch<React.SetStateAction<Equipamentos[]>>
}

export default function ListField({ name, data, setData }: Props) {

  const removeEquipament = (id: string) => {
    let _formTest = [...data];
    _formTest = _formTest.filter(formTest => formTest.id !== id)
    if (_formTest.length >= 1) {
      setData(_formTest);
    }
  }

  const addEquipament = () => {
    let _formTest = [...data];
    _formTest.push({
      equipament: '',
      qtd: 0,
      ptc: 0,
      id: uuidv4()
    })
    setData(_formTest);
  }

  const handleEquipamentChange = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const index = data.findIndex(e => e.id === id);

    let _formTest = [...data] as any;
    
    _formTest[index][event.target.name] = event.target.value
    setData(_formTest);
  }

  return (
    <fieldset>
      {
        <div>
          {
            data.map((element, index) => (
              <div className={style.list} key={index}>
                <div className={style.list__inputs}>
                  <label>
                    Nome do equipamento
                    <input className={style.list__inputs_larger} id={name + 'Nome'} type="text" name='equipament' required onChange={(e) => handleEquipamentChange(element.id, e)} />
                  </label>
                  <label>
                    Quatidade
                    <input className={style.list__inputs_smaller} id={name + 'Qtd'} type="number" name='qtd' required onChange={(e) => handleEquipamentChange(element.id, e)} />
                  </label>
                  <label>Potência
                    <input className={style.list__inputs_smaller} id={name + 'Ptc'} type="number" name='ptc' onChange={(e) => handleEquipamentChange(element.id, e)} />
                  </label>
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