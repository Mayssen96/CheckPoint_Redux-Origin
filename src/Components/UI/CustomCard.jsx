import React from 'react'
import {Row,Card,Col,Badge} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomButton from './CustomButton'
import {deletMovie} from '../../Components/Redux/action'
import {useDispatch} from 'react-redux'
function CustomCard({el}) {
  const dispatch =useDispatch()

  const deletTheMovie  =(id)=>{
    dispatch(deletMovie(id))

  }
  return (
   
    <div>
    <Row xs={1} md={3} className="g-4">
    
      <Col>
        <Card style={{ width: '18rem' }}>
        <Link to = {`/Card/${el.id}`}>
          <Card.Img variant="top" src=  {el.posterURL}/>
          
  </Link>
          <Card.Body>
            <Card.Title>{el.title}</Card.Title>
            <Card.Text>
            {el.description}

            </Card.Text>
          </Card.Body>
          <Card.Footer>
          <CustomButton el={el} /> 
          <Badge  onClick={()=>deletTheMovie (el.id)} bg="secondary">Delet</Badge>
          
          </Card.Footer >
        </Card>
      </Col>
  
  </Row>
  
  </div>
 
  )
}

export default CustomCard