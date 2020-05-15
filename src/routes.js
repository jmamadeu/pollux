import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const screens = [
  { title: 'Usuários', name: 'Main', component: Main, key: 1 },
  { title: 'Usuário', name: 'User', component: User, key: 2 },
];

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {screens.map((screen) => (
            <Stack.Screen
              key={screen.key}
              component={screen.component}
              name={screen.name}
              options={{
                title: screen.title,
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#7159c1',
                },
                headerTintColor: '#fff',
              }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
