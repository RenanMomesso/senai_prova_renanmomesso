import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #e5e5e5;
  align-items: center;
  justify-content: flex-start;
  color: white;
  flex: 1;
`;
export const RegisterWeightGoal = styled.TouchableHighlight`
  width: 314px;
  height: 40px;
  background-color: #26e472;
  justify-content: center;
  align-items: center;
  margin-top: 29px;
  margin-bottom: 50px;
`;

export const TextSubTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
`;

export const CirclesView = styled.View`
  flex-direction: row;
  width: 314px;
  align-items: center;
  justify-content: ${(props) => (props.center ? 'center' : 'space-between')};
  margin-top: ${(props) => (props.mrTop ? props.mrTop : '0')}px;
  margin-bottom: ${(props) => (props.mBottom ? props.mBottom : '0')}px;
`;

export const MyGaolAndEdit = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
