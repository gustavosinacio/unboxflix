import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native-paper';

import api from '../../services/api';
import {handleClickFilmeCard, getMovies} from '../../utils/functions';
import MovieList from '../../components/MovieList';
import {Container, Poster, Text, Tag, Tagline} from './styles';

function Filme({route, navigation}) {
  const {filmeId} = route.params;
  const [filme, setFilme] = useState({});

  const [loading, setLoading] = useState(false);
  const [loadingSemelhantes, setLoadingSemelhantes] = useState(false);

  const [semelhantes, setSemelhantes] = useState([]);

  async function getFilmeInfo() {
    setLoading(true);
    try {
      const response = await api.get(`movie/${filmeId}`, {
        params: {
          language: 'pt',
        },
      });

      setFilme(response.data);
    } catch (err) {}

    setLoading(false);
  }

  async function getSemelhantes() {
    setLoadingSemelhantes(true);

    try {
      const data = await getMovies('movie/upcoming');
      setSemelhantes(data);
    } catch (err) {}

    setLoadingSemelhantes(false);
  }

  useEffect(() => {
    navigation.setOptions({title: filme.title});
    getSemelhantes();
  }, [filme]);

  useEffect(() => {
    getFilmeInfo();
  }, []);

  function handleClickSemelhante(currentNavigation, filmeSemelhanteId) {
    currentNavigation.goBack();
    handleClickFilmeCard(currentNavigation, filmeSemelhanteId);
  }

  return (
    <Container>
      {loading ? <ActivityIndicator size={30} /> : null}
      <Poster
        source={{
          uri: `http://image.tmdb.org/t/p/w400/${filme.poster_path}`,
        }}
      />
      <Tagline>{filme.tagline}</Tagline>
      <Text>
        <Tag>Descrição: </Tag>
        {filme.overview}
      </Text>
      <Text>
        <Tag>Titulo original: </Tag>
        {filme.original_title}
      </Text>
      <Text>
        <Tag>Data de lançamento: </Tag>
        {filme.release_date}
      </Text>
      <Text>
        <Tag>Popularidade: </Tag>
        {filme.popularity}
      </Text>
      <Text>
        <Tag>Duração: </Tag>
        {filme.runtime} minutos
      </Text>
      <Text>
        <Tag>Homepage: </Tag>
        {filme.homepage}
      </Text>
      {loadingSemelhantes ? (
        <ActivityIndicator size={30} />
      ) : (
        <MovieList
          navigation={navigation}
          title="Filmes semelhantes"
          data={semelhantes}
          handleClickFilmeCard={handleClickSemelhante}
        />
      )}
    </Container>
  );
}

export default Filme;
