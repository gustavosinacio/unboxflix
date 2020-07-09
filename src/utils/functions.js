import api from '../services/api';

export async function getMovies(url, params = null) {
  try {
    const response = await api.get(url, {params: {...params, language: 'pt'}});
    const {results} = response.data;

    return results;
  } catch (err) {}
}

export function handleClickFilmeCard(navigation, filmeId) {
  console.tron.log(filmeId);
  navigation.navigate('Detalhes', {filmeId});
}
