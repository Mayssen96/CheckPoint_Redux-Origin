import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'
function Input({placeholder,label,type,onChange}) {
  return (
    <div> <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">{label} </InputGroup.Text>
    <FormControl
      placeholder={placeholder}
      type={type}
      aria-describedby="basic-addon1"
      onChange={onChange}
    />
  </InputGroup></div>
  )
}

export default Input