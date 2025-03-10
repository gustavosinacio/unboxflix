import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './routes';
import {mainColor} from './assets/colors';

function App() {
  return (
    <>
      <StatusBar backgroundColor={mainColor} barStyle="dark-content" />
      <Routes />
    </>
  );
}

export default App;
