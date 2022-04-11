import React from 'react'
import {useParams} from 'react-router-dom'
import Data from '../../Data'
function Card() {
    const {id}= useParams()
    const found = Data.filter (el=>el.id==id)
   console.log(found)
  return (
      <>
      
    {found[0].title}
    {found[0].trailer}
    </>
  )
}

export default Card