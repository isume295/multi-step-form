import React from 'react';
import styled from 'styled-components';

export const Summary = () => {
  return (
    <Container>
      <Title>
        <h1>Finishing up</h1>
        <p>Double check everything looks OK before confirming.</p>
      </Title>

      <SummaryContainer>
        <div className="plan-summary">
          <div className="plan-container">
            <span className="plan-name">Arcade (Monthly)</span>
            <a className="change" href="#q">
              Change
            </a>
          </div>
          <span className="plan-price">$9/mo</span>
        </div>
        <hr />
        <div className="add-summary">
          <div className="add-container">
            <span className="add-name">Online service</span>
            <span className="add-price">+$1/mo</span>
          </div>
          <div className="add-container">
            <span className="add-name">Larger storage</span>
            <span className="add-price">+$2/mo</span>
          </div>
        </div>
      </SummaryContainer>
      <Total>
        <span className="total-name">Total (per Month)</span>
        <span className="total-price">+$2/mo</span>
      </Total>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
  width: 100%;
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

const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  background-color: rgba(205, 214, 230, 0.4);
  border-radius: 10px;
  padding: 20px;

  .plan-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 6px;

    .plan-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 2px;

      .plan-name {
        font-size: 14px;
        color: #03234f;
        font-weight: 700;
      }

      .change {
        font-size: 12.5px;
        color: #8795a9;
      }
    }
    .plan-price {
      font-size: 14px;
      color: #03234f;
      font-weight: 700;
    }
  }

  hr {
    border-top: 1px solid rgba(128, 128, 128, 0.4);
  }

  .add-summary {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  .add-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .add-name {
      font-size: 13.5px;
      color: #8795a9;
    }

    .add-price {
      font-size: 13.5px;
      color: #03234f;
      font-weight: 600;
    }
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .total-name {
    font-size: 13.5px;
    color: #8795a9;
  }

  .total-price {
    font-size: 19px;
    color: #174a8b;
    font-weight: 800;
  }
`;
