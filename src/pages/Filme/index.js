/* eslint-disable jsx-a11y/alt-text */
import "./filme.css";
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

export default function Filme() {
  const { id } = useParams();
  const history = useHistory();

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      if (response.data.length === 0) {
        history.replace("/");
        return;
      }

      setFilmes(response.data);
      setLoading(false);
    }
    loadFilmes();

    return () => {
      console.log("desmontando componente");
    };
  }, [history, id]);

  function salvaFilme() {
    const minhalista = localStorage.getItem("filmes");

    let filmesSalvos = JSON.parse(minhalista) || [];

    //se tiver salvo ignora

    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filmes.id
    );

    if (hasFilme) {
      alert("voce ja possui esse filme");
      return;
    }
    filmesSalvos.push(filmes);

    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
    alert("filme salvo com sucesso");
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando seu filme</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filmes.nome}</h1>
      <img src={filmes.foto}></img>
      <h3>Sinopse</h3>
      {filmes.sinopse}

      <div className="botoes">
        <button onClick={salvaFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            href={`https://youtube.com/results?search_query=${filmes.nome}`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
