import React from 'react';
import styled from 'styled-components';

export const Info = () => {
  return (
    <Container>
      <Title>
        <h1>Personal Info</h1>
        <p>provide your name, email address and, your phone number.</p>
      </Title>

      <FieldContainer>
        <Field>
          <label>Name</label>
          <input type="text" name="name" placeholder="e.g Sumeya Ibrahim" />
        </Field>

        <Field>
          <label>Email Address</label>
          <input type="text" name="name" placeholder="e.g sumeyaibrahim72@gmail.com" />
        </Field>

        <Field>
          <label>Phone Number</label>
          <input type="text" name="name" placeholder="+251910602110" />
        </Field>
      </FieldContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h1 {
    color: #03234f;
  }

  p {
    font-size: 14px;
    color: #8795a9;
    font-weight: 500;
  }
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 13px;
    color: #03234f;
    font-weight: 800;
  }

  input {
    padding: 10px 10px;
    outline: none;
    border: 1.5px solid #9faaba;
    border-radius: 5px;

    &:focus {
      border: 1.5px solid #03234f;
    }

    &::placeholder {
      color: #cdd6e6;
    }
  }
`;
