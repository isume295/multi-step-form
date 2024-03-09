import React, { useState } from 'react';
import styled from 'styled-components';
import { BorderProps, ColorProps, border, color } from 'styled-system';

interface AddPronps extends ColorProps, BorderProps {}

export const Adds = () => {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked
    });
  };
  return (
    <Container>
      <Title>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gamming experiance</p>
      </Title>

      <AddContainer>
        <Add bg={`${checkboxes.checkbox1 ? 'rgba(205, 214, 230, 0.4)' : 'white'}`} borderColor={`${checkboxes.checkbox1 ? '#03234f' : '#cdd6e6'}`}>
          <div className="check">
            <input type="checkbox" name="checkbox1" checked={checkboxes.checkbox1} onChange={handleCheckboxChange} />
            <div className="add-description">
              <span className="add-name">Online Service</span>
              <span className="description">Access to multiplayer games</span>
            </div>
          </div>
          <div className="plan">+$1/mo</div>
        </Add>

        <Add bg={`${checkboxes.checkbox2 ? 'rgba(205, 214, 230, 0.4)' : 'white'}`} borderColor={`${checkboxes.checkbox2 ? '#03234f' : '#cdd6e6'}`}>
          <div className="check">
            <input type="checkbox" name="checkbox2" checked={checkboxes.checkbox2} onChange={handleCheckboxChange} />
            <div className="add-description">
              <span className="add-name">Larger Storage</span>
              <span className="description">Extra 1TB of cloud storage</span>
            </div>
          </div>
          <div className="plan">+$1/mo</div>
        </Add>

        <Add bg={`${checkboxes.checkbox3 ? 'rgba(205, 214, 230, 0.4)' : 'white'}`} borderColor={`${checkboxes.checkbox3 ? '#03234f' : '#cdd6e6'}`}>
          <div className="check">
            <input type="checkbox" name="checkbox3" checked={checkboxes.checkbox3} onChange={handleCheckboxChange} />
            <div className="add-description">
              <span className="add-name">Customizable Profile</span>
              <span className="description">Custom theme on your profile</span>
            </div>
          </div>
          <div className="plan">+$1/mo</div>
        </Add>
      </AddContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  height: 100%;
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

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`;

const Add = styled.div<AddPronps>`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  gap: 5px;
  border: 1px solid #cdd6e6;
  border-radius: 10px;
  width: 100%;
  height: 25%;
  ${color}
  ${border}

  .check {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .add-description {
    display: flex;
    flex-direction: column;
    gap: 2px;

    .add-name {
      font-size: 14px;
      color: #03234f;
      font-weight: 700;
    }

    .description {
      font-size: 13px;
      color: #8795a9;
    }
  }

  .plan {
    font-size: 13px;
    color: #5981b8;
    font-weight: 600;
  }
`;
