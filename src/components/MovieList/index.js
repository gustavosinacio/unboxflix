import React from 'react';
import {View} from 'react-native';

import {
  Container,
  AreaTitle,
  Filme,
  FilmeTitle,
  LancamentosList,
  Poster,
} from './styles';
function MovieList({navigation, data, title, handleClickFilmeCard}) {
  return (
    <Container>
      <AreaTitle>{title}</AreaTitle>

      <LancamentosList
        data={data}
        keyExtractor={(item) => `${item.id}`}
        horizontal
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
    </Container>
  );
}

export default MovieList;
