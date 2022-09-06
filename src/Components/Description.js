import { useParams } from "react-router-dom"

const Description=({movies})=>{

    const {id} = useParams()
    const found = movies.find(el=> el.id == id)
    return(
        <div>
                <h1>{found.title}</h1>
                <img src={found.posterURL} alt='Not found'/>
        </div>
    )
}

export default Description