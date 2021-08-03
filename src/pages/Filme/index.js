import './filme.css'
import api from '../../services/api'
import{ useEffect,useState } from 'react';
import {useParams} from 'react-router-dom'

export default function Filme(){
  const {id} = useParams()

  const [filmes,setFilmes] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    async function loadFilmes(){
      const response = await api.get(`r-api/?api=filmes/${id}`)

      setFilmes(response.data)
      setLoading(false)
    }
    loadFilmes()
  },[id])

  if(loading){
    return(
      <div className="filme-info">
      <h1>Carregando seu filme</h1>
      </div>

    )
  }

  return(
    <div className="filme-info">
      <h1>{filmes.nome}</h1>
      </div>
  )
}