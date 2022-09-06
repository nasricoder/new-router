import './App.css';
import ListMovie from './Components/ListMovie';
import { useState } from 'react'
import NavMovie from './Components/NavMovie';
import AddMovie from './Components/AddMovies';
import {Routes,Route} from 'react-router-dom';
import Home from './router/Home';
import CardMovies from './Components/CardMovies';
import Description from './Components/Description';




  function App() {
   const [movies,setMovies] = useState([
     {title : "Peaky Blinders" , description : "Peaky Blinders est une série télévisée britannique en 36 épisodes d'environ 55 minutes créée par Steven Knight et diffusée entre le 12 septembre 2013" , posterURL : "/img1.jpg" , rating : 5,id : Math.random() },
      {title : "Avengers" , description : "Written and directed by Joss Whedon, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth" , posterURL : "/img2.jpg" , rating : 3,id : Math.random() },
      {title : "Breaking Bad" , description : "Breaking Bad, ou Breaking Bad : Le Chimiste au Québec, est une série télévisée américaine en 62 épisodes de 47 minutes, créée par Vince Gilligan" , posterURL : "/img3.jpg" , rating : 2,id : Math.random() },
      
    ])
    const [searchM,setSearchM] = useState('')
    const [rateM,setRateM] = useState(0)
    return (
      <div >
        <NavMovie/>   
        <br/>
        <AddMovie setMovies={setMovies} movies={movies}/>
        <br/>
        <br/>
      

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ListMovies' element={  <ListMovie movies={movies} setMovies={setMovies} searchM={searchM} rateM={rateM}/>}/>
        <Route path='/Description/:id' element={<Description movies={movies}/>}/>
        </Routes>
    </div>
    
    );
  }

export default App
