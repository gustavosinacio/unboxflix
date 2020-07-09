import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Filmes from './pages/Filmes';
import DetalhesFilme from './pages/DetalhesFilme';
import Series from './pages/Series';
import Configuracoes from './pages/Configuracoes';
import {
  activeTabForeground,
  inactiveTabForeground,
  mainColor,
  accentColor,
} from './assets/colors';
import {activeTabBarIconSize} from './assets/sizes';

const Tab = createMaterialBottomTabNavigator();

const FilmesStackNavigator = createStackNavigator();

const FilmesStack = () => (
  <FilmesStackNavigator.Navigator>
    <FilmesStackNavigator.Screen
      name="Filmes"
      component={Filmes}
      options={{
        headerShown: false,
      }}
    />
    <FilmesStackNavigator.Screen name="Detalhes" component={DetalhesFilme} />
  </FilmesStackNavigator.Navigator>
);

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Filmes"
      activeColor={activeTabForeground}
      inactiveColor={inactiveTabForeground}
      barStyle={{backgroundColor: mainColor}}>
      <Tab.Screen
        name="Filmes"
        component={FilmesStack}
        options={{
          tabBarLabel: 'Filmes',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'alpha-f-circle' : 'alpha-f'}
              color={color}
              size={activeTabBarIconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={Series}
        options={{
          tabBarLabel: 'Series',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'alpha-s-circle' : 'alpha-s'}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Configuracoes"
        component={Configuracoes}
        options={{
          tabBarLabel: 'Configuracoes',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator> */}
      <Tabs />
    </NavigationContainer>
  );
}

export default Routes;
