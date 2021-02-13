import React from 'react';
import { ButtonComponent, ButtonText } from './styles';

const RegisterWeights = (props) => {
  const {
    buttonName,
    height,
    width,
    bgColor,
    small,
    onPress,
    mr,
    textBlue,
  } = props;

  return (
    <ButtonComponent
      underlayColor={'lightblue'}
      mr={mr}
      small={small}
      bgColor={bgColor}
      height={height}
      width={width}
      onPress={onPress}>
      <ButtonText small={small} textBlue={textBlue}>
        {buttonName ? buttonName : 'CADASTRAR'}
      </ButtonText>
    </ButtonComponent>
  );
};

export default RegisterWeights;
