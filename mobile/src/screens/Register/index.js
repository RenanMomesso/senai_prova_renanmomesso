import React, { useEffect, useState } from 'react';
import RegisterWeights from '../../components/RegisterWeights';
import {
  ButtonContainer,
  Container,
  FakeContainer,
  InputContainer,
  InputGoal,
  TextWeight,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../api';

const RegisterNewGoal = () => {
  const [myGoalWeights, setMyGoalWeights] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    const getWeightGoal = async () => {
      const response = await api.get('/peso-alvo');
      setMyGoalWeights(response.data.kg);
    };
    getWeightGoal();
  }, []);

  const handleNavigationImc = async () => {
    try {
      await api.post('/peso-alvo', { kg: myGoalWeights });
    } catch (e) {
      console.log(e);
    }
    navigation.navigate('MEU lMC', { goalWeights: myGoalWeights });
  };

  return (
    <Container>
      <FakeContainer />
      <InputContainer>
        <InputGoal
          keyboardType="numeric"
          placeholder="Peso alvo..."
          onChangeText={(e) => setMyGoalWeights(e)}
          value={myGoalWeights}
        />
        <TextWeight>(kg)</TextWeight>
      </InputContainer>
      <FakeContainer />
      <ButtonContainer>
        <RegisterWeights
          buttonName="CANCELAR"
          small
          bgColor={'transparent'}
          onPress={() => navigation.goBack()}
          mr={18}
          height={50}
          width={150}
          textBlue={'#26C2E4'}
        />
        <RegisterWeights
          buttonName="SALVAR"
          bgColor={'#26C2E4'}
          small
          height={50}
          width={150}
          disabled={true}
          onPress={handleNavigationImc}
          mr={20}
        />
      </ButtonContainer>
    </Container>
  );
};

export default RegisterNewGoal;
