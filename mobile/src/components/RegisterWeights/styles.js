import styled from 'styled-components';

export const ButtonComponent = styled.TouchableHighlight`
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#26c2e4')};
  width: ${(props) => (props.width ? props.width : 197)}px;
  height: ${(props) => (props.height ? props.height : 55)}px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: ${(props) => (props.small ? 0 : 50)}px;
  margin-bottom: ${(props) => (props.small ? 0 : 50)}px;
  margin-right: ${(props) => (props.mr ? props.mr : 0)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${(props) => (props.small ? 14 : 24)}px;
  color: ${(props) => (props.textBlue ? props.textBlue : '#ffffff')};
`;
