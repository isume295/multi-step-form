import React from 'react';
import styled from 'styled-components';
import ThankyouImage from '../assets/icon-thank-you.svg';

export const ThankYou = () => {
  return (
    <Container>
      <div className="img-container">
        <img src={ThankyouImage} alt="" />
      </div>
      <h2>Thank you!</h2>
      <span className="message">
        Thanks for confirming your subscription we hope you have fun using our platform, if you ever need support , please feel free to email us at support@loremgaming .com.
      </span>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  h2 {
    color: #03234f;
    font-weight: 800;
  }

  .img-container {
    width: 60px;
    img {
      width: 100%;
      height: auto;
    }
  }

  .message {
    text-align: center;
    width: 63%;
    color: #8795a9;
    font-weight: 500;
  }
`;
