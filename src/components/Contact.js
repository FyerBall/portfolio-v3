import React from 'react';
import styled from 'styled-components';

function Contact() {
  return (
    <Wrapper>
      <h1>Contact me</h1>
      <form>
        <input type='text' placeholder='your name' required />
        <input type='email' placeholder='your email' required />
        <input type='text' placeholder='your role' />
        <textarea placeholder='your message' cols='30' rows='10'></textarea>

        <button type='submit'>send</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
`;

export default Contact;
