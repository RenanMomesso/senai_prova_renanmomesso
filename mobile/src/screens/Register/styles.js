import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: #e5e5e5;
`;
export const FakeContainer = styled.View`
  height: 100px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InputGoal = styled.TextInput`
  width: 297px;
  margin-left: 33px;
  background-color: #f8f8f8;
  padding-left: 18px;
  font-size: 24px;
  color: black;
  margin-right: 5px;
  border: 1px solid #c4c4c4;
`;

export const TextWeight = styled.Text`
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-self: center;
  justify-content: flex-end;
  width: 400px;
  margin-bottom: 20px;
`;
