import React, {useState} from 'react';
import axios from 'axios'

import { ContainerInput, Input, Button, DivFilme, DivInfo, SpanInfo } from './styles';

const Home: React.FC = () => {
  const [nameFilme, setNameFilme] = useState('')
  const [filme, setFilme] = useState<any>({})
  const [loading, setLoading] = useState(false)
  
   const handleSearch = async () => {
    console.log(nameFilme)

    await axios.get(`https://www.omdbapi.com/?t=${nameFilme}&apikey=13d916aa`).then((e => {setFilme(e.data); setLoading(true)}))
  }

  return (
    <div>
      <ContainerInput>
        <span>Digite o nome do seu filme:</span>
        <Input onChange={(e) => setNameFilme(e.target.value)} name="Search Filme"/>
        <Button type='button' onClick={() => handleSearch()}>Buscar</Button>
      </ContainerInput>
      <span>{`Buscado por: ${nameFilme}`}</span>
      {loading === true && (
        <DivFilme>
          <img src={filme.Poster}/>
          <DivInfo>
            <SpanInfo>{filme.Title}</SpanInfo>
            <SpanInfo>{filme.Actors}</SpanInfo>
            <SpanInfo>{filme.Genre}</SpanInfo>
            <SpanInfo>{`De ${filme.Year}`}</SpanInfo>
            <SpanInfo>{`Prêmios ganhos: ${filme.Awards}`}</SpanInfo>
          </DivInfo>
        </DivFilme>
      )}
    </div>
  )
}

export default Home;