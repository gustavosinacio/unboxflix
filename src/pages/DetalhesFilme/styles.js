import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px 30px;
`;

export const Poster = styled.Image`
  width: 200px;
  height: 320px;
  background-color: #eee;
  align-self: center;
  margin-bottom: 10px;
`;

export const Tagline = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #666;
  text-align: center;
  margin-bottom: 15px;
`;

export const Tag = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #444;
`;

export const Text = styled.Text`
  margin: 3px 0;
  color: #555;
`;
