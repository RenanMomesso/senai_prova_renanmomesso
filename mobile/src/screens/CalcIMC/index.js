import React, { useState, useEffect, useCallback } from 'react';
import { Text } from 'react-native';
import RegisterWeights from '../../components/RegisterWeights';
import {
  ButtonContainer,
  Container,
  FakeContainer,
  InputContainer,
  InputGoal,
  TextWeight,
} from '../Register/styles';
import { useNavigation } from '@react-navigation/native';
import { CirclesView } from '../Dashboard/styles';
import Circle from '../../components/Circle';
import moment from 'moment';
import api from '../../api';

const CalcImc = () => {
  const [myWeights, setMyWeights] = useState(0);
  const [myHeights, seTmyHeights] = useState(1);
  const [imc, setImc] = useState(0);
  const [today, setToday] = useState('');
  const [color, setColor] = useState('');
  const navigation = useNavigation();

  const calculateIMC = useCallback(() => {
    const squared = myHeights * myHeights;
    const calulateBoth = myWeights / squared;
    setImc(calulateBoth.toFixed(2));
    const now = moment(Date.now()).format('DD/MM/YYYY');
    setToday(now);
  }, [myWeights, myHeights]);

  useEffect(() => {
    calculateIMC();
  }, [calculateIMC]);

  const handleNavigationImc = async () => {
    if (!imc || !myHeights || !myWeights) {
      alert('Preencha os dados');
    } else {
      try {
        await api.post('/registro', {
          imc: imc,
          weight: myWeights,
          height: myHeights,
          date: today,
        });
        navigation.reset({
          routes: [
            {
              name: 'MEU lMC',
              params: {
                imc: imc,
                weight: myWeights,
                height: myHeights,
                date: today,
              },
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <CirclesView center mrTop={100} mBottom={40}>
        <Circle color={'#26E472'} IMC={imc} />
      </CirclesView>
      <InputContainer>
        <InputGoal
          placeholder="Seu peso"
          keyboardType="numeric"
          onChangeText={(e) => setMyWeights(e)}
          value={myWeights}
        />
        <TextWeight>(kg)</TextWeight>
      </InputContainer>
      <InputContainer>
        <InputGoal
          placeholder="Sua altura"
          keyboardType="numeric"
          onChangeText={(e) => seTmyHeights(e)}
          value={myHeights}
        />
        <TextWeight>(m)</TextWeight>
      </InputContainer>
      <FakeContainer />
      <ButtonContainer>
        <RegisterWeights
          buttonName="CANCELAR"
          small
          onPress={() => navigation.goBack()}
          width={150}
          height={50}
          mr={18}
          bgColor="transparent"
          textBlue={'#26C2E4'}
        />
        <RegisterWeights
          buttonName="SALVAR"
          small
          onPress={handleNavigationImc}
          width={150}
          height={50}
          mr={18}
        />
      </ButtonContainer>
    </Container>
  );
};

export default CalcImc;
