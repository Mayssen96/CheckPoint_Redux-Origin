import React from 'react'
import { useState } from 'react'
import CustomCard from './UI/CustomCard'
import CustomNavbar from './UI/CustomNavbar'

import {Row} from 'react-bootstrap'
import CustomSelect from './UI/CustomSelect'
import { useSelector } from 'react-redux'

function Main() {
  const Data = useSelector(state => state.Dataa)
  const [rate,setRate]=useState(0)
  const [title,setTitle] = useState('')
  return (
    <div>
       
        <CustomSelect setRate={setRate}/>
        <Row xs={1} md={3} className="g-4">
        {Data?.map((el,key)=>
            el.title.toLowerCase().includes(title.toLocaleLowerCase()) && el.rating > rate ? <CustomCard setRate={setRate} el ={el}/>

            :''
        )}

       </Row>
    </div>
  )
}

export default Main