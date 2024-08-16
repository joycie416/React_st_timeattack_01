import React from 'react'

const Input = ({input:{text, id, type, setState, min}}) => {
  return (
    <div>
      <p>{text}</p>
      <input id={id} type={type} min={min} defaultValue={min}
      onChange={(e) => {

        if (id !== 'name') {
          setState(+e.target.value)
        } else {
          setState(e.target.value)
        }
        
      }}>
      </input>
    </div>
  )
}

export default Input