import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/Octicons';
import {mainColor, accentColor} from '../../assets/colors';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const FormView = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: ${accentColor};
  background-color: #6661;
`;

export const SearchInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: '#999',
}))`
  flex: 1;
  height: 40px;
  border-radius: 4px;
  padding: 0 15px 0 0;
  font-size: 14px;
`;

export const SearchIcon = styled(MaterialCommunityIcons)`
  padding: 8px;
`;

export const ResultsList = styled.FlatList.attrs(() => ({
  showsVerticalScrollIndicator: false,
}))`
  margin-top: 20px;
`;

export const FilmeTitle = styled.Text`
  font-size: 14px;
  color: #333;
  text-align: center;
`;

export const AreaTitle = styled.Text`
  padding: 10px 0 0 20px;
  font-size: 16px;
  color: #333;
  margin-top: 4px;
  font-weight: bold;
`;

export const CategoriaView = styled.View`
  height: 250px;
`;

export const LancamentosList = styled.FlatList`
  margin-top: 20px;
`;

export const Filme = styled.TouchableOpacity`
  align-items: center;
  margin: 0 10px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #ccc;
  width: 100px;
  overflow: hidden;
`;

export const Poster = styled.Image`
  width: 100px;
  height: 170px;
  background-color: #eee;
`;

export const BuscaList = styled.FlatList`
  padding: 30px 0;
`;
