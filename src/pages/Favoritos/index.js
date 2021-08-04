import './favoritos.css'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

export default function Favoritos(){

  const [ filmes,setFilmes ] = useState([])

  useEffect(() =>{
    const minhalista = localStorage.getItem("filmes")
    setFilmes(JSON.parse(minhalista) || [])
  },[])

  function handledelete(id){

    let filtroFilmes =  filmes.filter((filme) => {
      return (filme.id != id)
    })

    setFilmes(filtroFilmes)
    localStorage.setItem('filmes',JSON.stringify(filtroFilmes))
  }

  return(
    <div id="meus-filmes">
      <ul>
        <h1>Meus filmes</h1>
        {filmes.map((filme)=>{
          return(

            <li key={filme.id}>
              <span>{filme.nome}</span>
              <div>
                <Link to = {`/filme/${filme.id}`}>Ver detalhes</Link>
                <button onClick ={() => handledelete(filme.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}