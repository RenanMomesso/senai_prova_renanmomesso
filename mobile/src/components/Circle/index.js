import React from 'react';
import { Text } from 'react-native';
import { CircleComponent } from './styles';

const Circle = ({ small, color, IMC, kgs = 0 }) => {
  return (
    <CircleComponent small={small} color={color}>
      <Text>{IMC ? IMC : kgs}</Text>
      <Text>{IMC ? 'imc' : 'peso(kg)'}</Text>
    </CircleComponent>
  );
};

export default Circle;
