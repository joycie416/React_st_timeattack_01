import React from 'react'

const Table = ({total, setTotal}) => {

  const deleteData = (name) => {
    return (e) => {
      e.preventDefault();
  
      const idx = total.findIndex(data => data.name === name)
      total.splice(idx,1);
  
      setTotal([...total])
    }
  } 



  return (
    <table>
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>
        {total.map(({name, gold, silver, bronze}) => (
          <tr>
            <td>{name}</td>
            <td>{gold}</td>
            <td>{silver}</td>
            <td>{bronze}</td>
            <td>
              <button onClick={deleteData(name)}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table