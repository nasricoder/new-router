import CardMovies from "./CardMovies";

const ListMovie=({movies,setMovies,searchM,rateM})=>{
    const x =  movies.filter(el => el.title.toLowerCase().includes(searchM.toLowerCase())  && el.rating >= rateM).map(movie=> <CardMovies movie={movie} movies={movies} setMovies={setMovies}/>)
    return(
        <div className="movieContainer">
            {
               x.length ? x : "Mouch Mawjoud"
            }
        </div>
    )
}
 export default ListMovie