import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import Circle from '../../components/Circle';
import HistoricComponent from '../../components/HistoricComponent';
import RegisterWeights from '../../components/RegisterWeights';
import { Container, CirclesView, MyGaolAndEdit } from '../Dashboard/styles';
import api from '../../api';

const MyGoalWeights = () => {
  const [historicComponents, setHistoricComponents] = useState([]);
  const [myGoalNow, setMyGoalNow] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const registerPage = () => {
    navigation.navigate('IMC');
  };

  const { params } = useRoute();

  const requestRegister = async () => {
    try {
      const response = await api.get('/registro');
      setHistoricComponents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const idParamsExist = async () => {
      if (params.id) {
        try {
          const response = await api.get('/registro?id=' + params.id);
          setMyGoalNow(response.data);
        } catch (error) {
          console.log(error);
        }
      } else {
        const response = await api.get('/registro');
        setMyGoalNow(response.data);
      }
    };

    idParamsExist();
    requestRegister();
  }, [params.id]);

  return (
    <Container>
      <MyGaolAndEdit>
        <Text style={{ marginRight: 10 }}>
          Peso Alvo: {route.params.goalWeights ? route.params.goalWeights : 0}
        </Text>
        <RegisterWeights
          small
          underlayColor={'red'}
          buttonName="EDITAR"
          onPress={() => navigation.navigate('PESO-ALVO')}
          width={102}
          height={33}
        />
      </MyGaolAndEdit>
      <CirclesView>
        <Circle
          color={'#26E472'}
          kgs={myGoalNow.length > 0 ? myGoalNow[0].weight : null}
        />
        <Circle
          color={'#26C2E4'}
          IMC={myGoalNow.length > 0 ? myGoalNow[0].imc : null}
        />
      </CirclesView>
      <RegisterWeights onPress={registerPage} />
      <FlatList
        data={historicComponents}
        renderItem={({ item }) => (
          <HistoricComponent
            refreshComponent={requestRegister}
            data={item}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      />
    </Container>
  );
};

export default MyGoalWeights;
