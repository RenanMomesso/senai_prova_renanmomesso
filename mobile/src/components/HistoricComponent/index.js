import React, { useCallback, useEffect, useState } from 'react';
import { Text, Dimensions } from 'react-native';
import Circle from '../Circle';
import RegisterWeights from '../RegisterWeights';
import { ContainerHistoric, ViewButtons, ViewDataHistoric } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../api';

const HistoricComponent = ({ data, refreshComponent }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [colorImc, setColorImc] = useState('');
  const handleIMCPage = (id) => {
    navigation.navigate('MEU lMC', { id });
  };

  const excludeMetric = async (id) => {
    try {
      await api.delete('/registro/' + id);
      refreshComponent();
    } catch (error) {
      console.log(error);
    }
  };

  const colorSwitchIMC = useCallback(() => {
    if (data.imc < 16) {
      setColorImc('#e42626');
    } else if (data.imc > 16 && data.imc <= 18.3) {
      setColorImc('#ffff00');
    } else if (data.imc > 18.4 && data.imc <= 29.9) {
      setColorImc('#26e472');
    } else if (data.imc >= 30 && data.imc <= 39.9) {
      setColorImc('#ffff00');
    } else if (data.imc >= 40) {
      setColorImc('#e42626');
    }
  }, [data.imc]);

  useEffect(() => {
    const MyGoalId = async () => {
      const id = route?.params.id;
      await api.get(`/registro?id=${id}`);
    };
    colorSwitchIMC();
    MyGoalId();
  }, [route, colorSwitchIMC]);

  return (
    <ContainerHistoric key={data.id}>
      <Circle small IMC={data ? data.imc : null} color={colorImc} />
      <ViewDataHistoric>
        <Text>Peso: {data ? data.weight : null} kg</Text>
        <Text>Altura: {data ? data.height : null} m</Text>
        <Text>data: {data ? data.date : null} </Text>
      </ViewDataHistoric>
      <ViewButtons>
        <RegisterWeights
          buttonName="EDITAR"
          small
          width={102}
          height={33}
          onPress={() => handleIMCPage(data.id)}
        />
        <RegisterWeights
          small
          buttonName="EXCLUIR"
          bgColor="#E42626"
          width={102}
          height={33}
          onPress={() => excludeMetric(data.id)}
        />
      </ViewButtons>
    </ContainerHistoric>
  );
};

export default HistoricComponent;
