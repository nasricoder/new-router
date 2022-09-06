import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';



const CardMovies=({movie,movies,setMovies}) => {

    return (
      <Card style={{ width: '18rem' }}>
        <Link to={`/Description/${movie.id}`}><Card.Img variant="top" src={movie.posterURL} /></Link>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text >
          {movie.description}
          </Card.Text>
          <Rating name="read-only" value={movie.rating} readOnly />
         
        </Card.Body>
      </Card>
    );
  }
  
  export default CardMovies;