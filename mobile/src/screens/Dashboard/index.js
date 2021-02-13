import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Circle from '../../components/Circle';
import HistoricComponent from '../../components/HistoricComponent';
import RegisterWeights from '../../components/RegisterWeights';
import {
  Container,
  RegisterWeightGoal,
  TextSubTitle,
  CirclesView,
} from './styles';
import api from '../../api';

const Dashboard = () => {
  const navigation = useNavigation();

  const [historicComponents, sethistoricComponents] = useState([]);

  const registerPage = () => {
    navigation.navigate('PESO-ALVO');
  };
  const registerImc = () => {
    navigation.navigate('IMC');
  };

  const requestRegister = async () => {
    try {
      const response = await api.get('/registro');
      sethistoricComponents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sethistoricComponents([]);

    requestRegister();
  }, []);

  if (!historicComponents)
    return (
      <Container>
        <TextSubTitle>Loading...</TextSubTitle>
      </Container>
    );
  return (
    <Container>
      <RegisterWeightGoal onPress={registerPage} underlayColor={'lightblue'}>
        <TextSubTitle>CADASTRAR PESO ALVO</TextSubTitle>
      </RegisterWeightGoal>
      <CirclesView>
        <Circle
          color={'#26E472'}
          IMC={historicComponents[0] ? historicComponents[0].imc : '0'}
        />
        <Circle
          color={'#26C2E4'}
          kgs={historicComponents[0] ? historicComponents[0].weight : '0'}
        />
      </CirclesView>
      <RegisterWeights onPress={registerImc} />
      <FlatList
        data={historicComponents}
        renderItem={({ item }) => (
          <HistoricComponent
            refreshComponent={requestRegister}
            data={item}
            keyExtractor={(item, index) => item.id.toString()}
          />
        )}
      />
    </Container>
  );
};

export default Dashboard;
