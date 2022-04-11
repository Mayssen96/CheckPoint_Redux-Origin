import React from 'react'
import {Button} from 'react-bootstrap'
function CustomButton({el}) {
  return (
      <Button   variant="secondary">{el.rating}</Button> 
  )
}

export default CustomButton