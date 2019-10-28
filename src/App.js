import React, { useState } from 'react'

export const App = () => {
  const [text, setText] = useState('')
  const [inputValue, setInputValue] = useState('')

  const handleChange = value => {
    setInputValue(value)
  }

  const handleClick = () => {
    setText(inputValue)
    setInputValue('')
  }

  return (
    <div className={text}>
      <Title text={text} />
      <Input handleChange={handleChange} value={inputValue} />
      <Button handleClick={handleClick} />
    </div>
  )
}

export const Title = props => {
  return <h1>Hello {props.text}</h1>
}

export const Input = props => {
  function handleChange(event) {
    props.handleChange(event.target.value)
  }

  return <input onChange={handleChange} value={props.value} />
}

export const Button = props => {
  const handleClick = () => {
    props.handleClick()
  }
  return <button onClick={handleClick}>送信</button>
}
