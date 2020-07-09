import styled from 'styled-components/native';

export const Container = styled.View`
  height: 250px;
`;
export const LancamentosList = styled.FlatList`
  height: 220px;
`;

export const AreaTitle = styled.Text`
  padding: 10px 0 0 20px;
  font-size: 16px;
  color: #333;
  margin: 4px 0;
  font-weight: bold;
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

export const FilmeTitle = styled.Text`
  font-size: 14px;
  color: #333;
  text-align: center;
`;

export const Poster = styled.Image`
  width: 100px;
  height: 170px;
  background-color: #eee;
`;
