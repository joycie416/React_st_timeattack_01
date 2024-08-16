import React from 'react'
import { useState } from 'react'
import Input from './Input'
import Table from './Table';

const OlympicTable = () => {


  const [name, setName] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [total, setTotal] = useState([]);

  const inputTags = [{ text: '국가명', id: 'name', type: 'text', setState: setName },
  { text: '금메달', id: 'gold', type: 'number', setState: setGold, min: 0 },
  { text: '은메달', id: 'silver', type: 'number', setState: setSilver, min: 0 },
  { text: '동메달', id: 'bronze', type: 'number', setState: setBronze, min: 0 }]


  const addData = (e) => {
    e.preventDefault();

    const newData = { name: name, gold: gold, silver: silver, bronze: bronze };

    console.log('new data :', newData)
    if (isIncluded(total, newData)) {
      alert('이미 추가된 국가입니다.');
      return;
    } else {
      setTotal(sortTotal([...total, newData]))

      initialize();
      return;
    }


  }

  const updateDate = (e) => {
    e.preventDefault();

    const newData = { name: name, gold: gold, silver: silver, bronze: bronze };


    if (!isIncluded(total, newData)) {
      alert('등록되지 않은 국가입니다. 국가를 먼저 추가해주세요.')
      return;
    } else {
      const idx = total.findIndex(data => data.name === newData.name);
      const newTotal = [...total];
      newTotal[idx] = newData;

      setTotal(sortTotal(newTotal));

      initialize();
    }


  }

  const initialize = () => {
    document.getElementById('name').value = ''
    document.getElementById('gold').value = 0
    document.getElementById('silver').value = 0
    document.getElementById('bronze').value = 0

    setName('');
    setGold(0);
    setSilver(0);
    setBronze(0);
  }

  console.log('total :', total);

  return (
    <>
      <form>
        {inputTags.map(input => (
          <Input input={input} key={input.name}></Input>
        ))}
        <button onClick={addData}>국가추가</button>
        <button onClick={updateDate}>업데이트</button>
      </form>

      <Table total={total} setTotal={setTotal}></Table>


    </>
  )
}

export default OlympicTable





const sortTotal = (total) => {
  const totalCopy = [...total];

  totalCopy.sort((data1, data2) => {
    if (data1.gold !== data2.gold) {
      return data2.gold - data1.gold
    } else {
      if (data1.silver !== data2.silver) {
        return data2.silver - data1.silver
      } else {
        return data2.bronze - data1.bronze
      }
    }
  })

  return totalCopy
}


const isIncluded = (total, data) => {
  if (total.filter(el => el.name === data.name).length > 0) {
    return true
  } else {
    return false
  }
}