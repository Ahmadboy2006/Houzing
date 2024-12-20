import React from 'react';
import { Container } from './style';

function Button({ login, onClick, children, type, gap, width, height, fontSize, margin}) {
  return (
    <Container login={login} onClick={onClick} type={type} gap={gap} width={width} height={height} fontSize={fontSize} margin={margin}>
      {children}
    </Container>
  )
}

export default Button
