import React from 'react';
import Typing from 'react-typing-animation';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    font-size: 32px;
`

function App() {
  return (
      <Container>
          <Typing loop={true}>
              <span>Hello, My name is Saepul 😎 🤙</span>
              <Typing.Reset count={1} delay={500} />
          </Typing>
      </Container>
  );
}

export default App;
