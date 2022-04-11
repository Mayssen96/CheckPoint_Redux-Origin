import React from 'react'
import {Button,Modal} from 'react-bootstrap'
import {useState} from 'react'
import Input from './Input';
import {addMovie} from '../Redux/action'
import {useDispatch,useSelector} from 'react-redux';


function Modals() {
 
  const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [rating,setRating] = useState(0)
    console.log(title)
  
    const Data=useSelector(state=>state.Dataa)
    const AddTheMovie =()=>{
      dispatch(addMovie({id:Data.length+1,title,description,rating}))
      handleClose()

    }
  return (
    <>
      <Button className="mb-3" variant="primary" onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Input  onChange={(e) => setTitle(e.target.value)} placeholder={'Search'} />
            <Input onChange={(e) => setDescription(e.target.value)} placeholder={'Search'}/>
            <Input onChange={(e) => setDescription(e.target.value)} placeholder={'Search'}/>
            <Input onChange={(e) => setRating(e.target.value)} type='number' placeholder={'Search'}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>AddTheMovie ()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default Modals