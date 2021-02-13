import styled from 'styled-components';

export const CircleComponent = styled.View`
  width: ${(props) => (props.small ? 74 : 147)}px;
  height: ${(props) => (props.small ? 74 : 147)}px;
  border-radius: 100px;
  border: ${(props) =>
    props.color ? `4px solid ${props.color}` : '2px solid red'};
  justify-content: center;
  align-items: center;
`;
