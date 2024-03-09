import React from 'react';
import styled from 'styled-components';
import arcade from '../assets/icon-arcade.svg';
import advanced from '../assets/icon-advanced.svg';
import pro from '../assets/icon-pro.svg';
import { MdToggleOff } from 'react-icons/md';
import { MdToggleOn } from 'react-icons/md';
import { FlexboxProps, HeightProps, LayoutProps, SpaceProps, WidthProps, flexbox, height, space, width } from 'styled-system';

interface PlanProps extends FlexboxProps, HeightProps, LayoutProps, SpaceProps, WidthProps {}

export const Plans = () => {
  return (
    <Container>
      <Title>
        <h1>Select Your Plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </Title>

      <PlanContainer flexDirection={['column', 'column', 'row', 'row']}>
        <Plan
          flexDirection={['row', 'row', 'column', 'column']}
          height={['30%', '30%', '100%', '100%']}
          p={['0 15px', '0 15px', '20px 15px', '20px 15px']}
          justifyContent={['flex-start', 'flex-start', 'space-between', 'space-between']}
          alignItems={['center', 'center', 'flex-start', 'flex-start']}
        >
          <Icon width={['25px', '25px', '40px', '40px']} height={['25px', '25px', '40px', '40px']}>
            <img src={arcade} alt="" />
          </Icon>
          <div className="plan-icon">
            <p className="plan-name">Arcade</p>
            <span className="plan">18/mo</span>
          </div>
        </Plan>
        <Plan
          flexDirection={['row', 'row', 'column', 'column']}
          height={['30%', '30%', '100%', '100%']}
          p={['1px 15px', '1px 15px', '20px 15px', '20px 15px']}
          justifyContent={['flex-start', 'flex-start', 'space-between', 'space-between']}
          alignItems={['center', 'center', 'flex-start', 'flex-start']}
        >
          <Icon width={['25px', '25px', '40px', '40px']} height={['25px', '25px', '40px', '40px']}>
            <img src={advanced} alt="" />
          </Icon>
          <div className="plan-icon">
            <p className="plan-name">Advanced</p>
            <span className="plan">18/mo</span>
          </div>
        </Plan>
        <Plan
          flexDirection={['row', 'row', 'column', 'column']}
          height={['30%', '30%', '100%', '100%']}
          p={['0 15px', '0 15px', '20px 15px', '20px 15px']}
          justifyContent={['flex-start', 'flex-start', 'space-between', 'space-between']}
          alignItems={['center', 'center', 'flex-start', 'flex-start']}
        >
          <Icon width={['25px', '25px', '40px', '40px']} height={['25px', '25px', '40px', '40px']}>
            <img src={pro} alt="" />
          </Icon>
          <div className="plan-icon">
            <p className="plan-name">Pro</p>
            <span className="plan">18/mo</span>
          </div>
        </Plan>
      </PlanContainer>
      <ToggleButton p={['5px 5px', '5px 5px', '15px 15px', '15px 15px']}>
        <span className="active">Monthly</span>
        <button>
          <MdToggleOff />
        </button>
        <span>Yearly</span>
      </ToggleButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

const PlanContainer = styled.div<PlanProps>`
  display: flex;
  height: 100%;
  gap: 15px;
  ${flexbox}
`;

const Plan = styled.div<PlanProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  width: 100%;
  border: 1px solid #cdd6e6;
  border-radius: 10px;
  gap: 15px;
  ${height}
  ${flexbox}
  ${space}

  .plan-name {
    font-size: 14px;
    color: #03234f;
    font-weight: 700;
  }

  .plan {
    font-size: 13px;
    color: #8795a9;
  }
`;

const ToggleButton = styled.div<PlanProps>`
  width: 100%;
  background-color: rgba(205, 214, 230, 0.4);
  /* padding: 15px 15px; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  gap: 10px;
  ${space}

  span {
    font-size: 13px;
    color: #8795a9;
    font-weight: 700;
  }

  .active {
    color: #03234f;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    font-size: 40px;
    border: none;
  }
`;

const Icon = styled.div<PlanProps>`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${width}
  ${height}
  background-color: red;
  img {
    object-fit: cover;
  }
`;
