import { useState } from "react";
import {Modal,Button,Form} from 'react-bootstrap'
import Rating from '@mui/material/Rating';

const EditMovie=({movie,movies,setMovies})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title,setTitle] = useState(movie.title)
    const [description,setDescription] = useState(movie.description)
    const [posterURL,setPosterURL] = useState(movie.posterURL)
    const [rating,setRating] = useState(movie.rating)

    const handleEdit=()=>{
        setMovies(movies.map(el => el.id == movie.id ? {...el,title,description,posterURL,rating}:el))
        handleClose()
    }
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Edit Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Enter title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Enter description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control value={posterURL} onChange={(e)=> setPosterURL(e.target.value) } type="text" placeholder="Enter image" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <br/>
        <Rating value={rating} name="simple-controlled" onChange={(e)=> setRating(e.target.value)} />
      </Form.Group>

      
    </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default EditMovie
