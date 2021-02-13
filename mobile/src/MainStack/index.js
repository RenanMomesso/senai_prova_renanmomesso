import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Register from '../screens/Register';
import DashBoard from '../screens/Dashboard';
import MyGoalWeights from '../screens/GoalWeights';
import CalcImc from '../screens/CalcIMC';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#26C2E4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center',
        },
      }}>
      <Stack.Screen name={'MEU IMC'} component={DashBoard} />
      <Stack.Screen name={'PESO-ALVO'} component={Register} />
      <Stack.Screen name={'MEU lMC'} component={MyGoalWeights} />
      <Stack.Screen name={'IMC'} component={CalcImc} />
    </Stack.Navigator>
  );
};

export default MainStack;
