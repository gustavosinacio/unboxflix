import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';

import {
  Container,
  FormView,
  SearchInput,
  SearchIcon,
  CategoriaView,
  Filme,
  FilmeTitle,
  Poster,
  BuscaList,
} from './styles';
import MovieList from '../../components/MovieList';
import {getMovies, handleClickFilmeCard} from '../../utils/functions';

function Filmes({navigation}) {
  const [busca, setBusca] = useState('');

  const [page, setPage] = useState(2);

  const [searched, setSearched] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [trendind, setTrendind] = useState([]);

  const [loadingSearch, setLoadingSearch] = useState(false);
  const [loadingTrending, setLoadingTrending] = useState(false);
  const [loadingUpcoming, setLoadingUpcoming] = useState(false);

  // Buscar filmes com por nome
  async function getMoviesByName() {
    setLoadingSearch(true);

    try {
      const data = await getMovies('search/movie', {
        query: busca,
      });

      setSearched(data);
    } catch (err) {}

    setLoadingSearch(false);
  }

  // Buscar pagina seguinte quando há uma busca
  async function getNextPage() {
    const data = await getMovies('search/movie', {
      params: {
        query: busca,
        page,
      },
    });

    setSearched(searched.concat(data));
    setPage(page + 1);
  }

  // Buscar lancamentos
  async function getUpcomingMovies() {
    setLoadingUpcoming(true);

    try {
      const data = await getMovies('movie/upcoming');
      setUpcoming(data);
    } catch (err) {}

    setLoadingUpcoming(false);
  }

  // Buscar filmes populares da semana
  async function getWeekTrendingMovies() {
    setLoadingTrending(true);

    try {
      const data = await getMovies('trending/movie/week');
      setTrendind(data);
    } catch (err) {}

    setLoadingTrending(false);
  }

  useEffect(() => {
    if (busca) {
      getMoviesByName(busca);
    }
  }, [busca]);

  useEffect(() => {
    getUpcomingMovies();
    getWeekTrendingMovies();
  }, []);

  return (
    <Container>
      <FormView>
        <SearchIcon
          name="search"
          size={26}
          color="#999"
          onPress={() => console.tron.log(searched)}
        />
        <SearchInput
          value={busca}
          placeholder="Buscar filmes"
          onChangeText={setBusca}
        />
      </FormView>
      {busca === '' ? (
        <>
          <CategoriaView>
            {loadingTrending ? (
              <ActivityIndicator size={30} />
            ) : (
              <MovieList
                navigation={navigation}
                title="Melhores da semana"
                data={trendind}
                handleClickFilmeCard={handleClickFilmeCard}
              />
            )}
          </CategoriaView>
          <CategoriaView>
            {loadingUpcoming ? (
              <ActivityIndicator size={30} />
            ) : (
              <MovieList
                navigation={navigation}
                title="Próximos lançamentos"
                data={upcoming}
                handleClickFilmeCard={handleClickFilmeCard}
              />
            )}
          </CategoriaView>
        </>
      ) : (
        <>
          {loadingSearch ? (
            <ActivityIndicator size={30} />
          ) : (
            <BuscaList
              data={searched}
              keyExtractor={(item) => `${item.id}`}
              horizontal
              onEndReached={getNextPage}
              renderItem={({item}) => (
                <Filme
                  key={`${item.id}`}
                  onPress={() => handleClickFilmeCard(navigation, item.id)}>
                  <Poster
                    source={{
                      uri: `http://image.tmdb.org/t/p/w400/${item.poster_path}`,
                    }}
                  />
                  <FilmeTitle>{item.title}</FilmeTitle>
                </Filme>
              )}
            />
          )}
        </>
      )}
    </Container>
  );
}

export default Filmes;
