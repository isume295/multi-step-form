import React, { useState } from 'react';
import styled from 'styled-components';
import desktopImg from '../assets/bg-sidebar-desktop.svg';
import mobileImg from '../assets/bg-sidebar-mobile.svg';
import {
  layout,
  background,
  border,
  position,
  flexbox,
  width,
  height,
  FlexboxProps,
  WidthProps,
  HeightProps,
  SpaceProps,
  LayoutProps,
  space,
  BackgroundProps,
  PositionProps,
  BorderProps,
  ColorProps,
  color
} from 'styled-system';
import { Info } from './Info';
import { Plans } from './Plans';
import { Adds } from './Adds';
import { Summary } from './Summary';
import { ThankYou } from './ThankYou';

interface FormProps extends FlexboxProps, WidthProps, HeightProps, SpaceProps, LayoutProps, PositionProps, BackgroundProps, BorderProps, ColorProps {}

interface StepProps extends FlexboxProps, WidthProps, HeightProps, SpaceProps, LayoutProps, PositionProps, BackgroundProps, BorderProps {
  field: number;
}

export const Form = () => {
  const [field, setField] = useState(1);

  const handleNext = () => {
    if (field < 5) {
      setField(field + 1);
    }
  };

  const handleBack = () => {
    if (field > 1) {
      setField(field - 1);
    }
  };

  return (
    <FormContainer>
      <FormWrapper
        flexDirection={['column', 'column', 'row', 'row']}
        width={['100%', '100%', '80%', '80%']}
        height={['100%', '100%', '90%', '90%']}
        padding={['0', '0', '10px', '10px']}
        position={['relative', 'relative', 'static', 'static']}
      >
        <Steps
          width={['100%', '100%', '30%', '25%']}
          height={['30%', '30%', '100%', '100%']}
          backgroundImage={[`url(${mobileImg})`, `url(${mobileImg})`, `url(${desktopImg})`, `url(${desktopImg})`]}
          borderRadius={[0, 0, '10px', '10px']}
          flexDirection={['row', 'row', 'column', 'column']}
          justifyContent={['center', 'center', 'flex-start', 'flex-start']}
          alignItems={['flex-start', 'flex-start', 'flex-start', 'flex-start']}
          p={['40px', '40px', '40px 30px', '40px 30px']}
        >
          <div className="steps">
            <StepBtn bg={`${field === 1 ? 'aliceblue' : ''}`} color={`${field === 1 ? 'black' : 'aliceblue'}`} width={['40px', '40px', '30px', '30px']} height={['40px', '40px', '30px', '30px']}>
              1
            </StepBtn>
            <StepInfo display={['none', 'none', 'flex', 'flex']}>
              <span className="step-num">STEP 1</span>
              <p className="step-name">YOUR INFO</p>
            </StepInfo>
          </div>

          <div className="steps">
            <StepBtn bg={`${field === 2 ? 'aliceblue' : ''}`} color={`${field === 2 ? 'black' : 'aliceblue'}`} width={['40px', '40px', '30px', '30px']} height={['40px', '40px', '30px', '30px']}>
              2
            </StepBtn>
            <StepInfo display={['none', 'none', 'flex', 'flex']}>
              <span className="step-num">STEP 2</span>
              <p className="step-name">SELECT PLAN</p>
            </StepInfo>
          </div>

          <div className="steps">
            <StepBtn bg={`${field === 3 ? 'aliceblue' : ''}`} color={`${field === 3 ? 'black' : 'aliceblue'}`} width={['40px', '40px', '30px', '30px']} height={['40px', '40px', '30px', '30px']}>
              3
            </StepBtn>
            <StepInfo display={['none', 'none', 'flex', 'flex']}>
              <span className="step-num">STEP 3</span>
              <p className="step-name">ADD-ONS</p>
            </StepInfo>
          </div>

          <div className="steps">
            <StepBtn bg={`${field === 4 ? 'aliceblue' : ''}`} color={`${field === 4 ? 'black' : 'aliceblue'}`} width={['40px', '40px', '30px', '30px']} height={['40px', '40px', '30px', '30px']}>
              4
            </StepBtn>
            <StepInfo display={['none', 'none', 'flex', 'flex']}>
              <span className="step-num">STEP 4</span>
              <p className="step-name">SUMMARY</p>
            </StepInfo>
          </div>
        </Steps>
        <Content
          width={['100%', '100%', '70%', '75%']}
          height={['85%', '85%', '100%', '100%']}
          position={['absolute', 'absolute', 'static', 'static']}
          top={'15%'}
          borderRadius={[0, 0, '10px', '10px']}
          p={[0, 0, '10px', '10px']}
          justifyContent={['space-between', 'space-between', 'center', 'center']}
        >
          <FeildWrapper height={['70%', '70%', '80%', '80%']} p={['25px', '25px', '40px 30px', '40px 30px']}>
            <div className="field-content">{field === 1 ? <Info /> : field === 2 ? <Plans /> : field === 3 ? <Adds /> : field === 4 ? <Summary /> : field === 5 ? <ThankYou /> : null}</div>
          </FeildWrapper>
          <BtnWrapper display={`${field === 5 ? 'none' : 'flex'}`} field={field} width={['100%', '100%', '90%', '90%']} borderRadius={[0, 0, '10px', '10px']}>
            <button onClick={handleBack} className="back-btn">
              Go Back
            </button>
            <button onClick={handleNext} className="next-btn">
              {field === 4 ? 'Confirm' : 'Next Step'}
            </button>
          </BtnWrapper>
        </Content>
      </FormWrapper>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

const FormWrapper = styled.div<FormProps>`
  ${layout}
  ${flexbox}
  ${width}
  ${height}
  ${space}
  ${position}
  display: flex;
  background-color: white;
  border-radius: 10px;
  gap: 10px;
`;

const Steps = styled.div<FormProps>`
  ${layout}
  ${flexbox}
  ${width}
  ${height}
  ${background}
  ${border}
  ${space}
  background-color: red;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: fill;
  display: flex;
  gap: 20px;

  .steps {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .step-num {
      font-size: 11px;
      color: aliceblue;
      font-weight: 200;
    }

    .step-name {
      font-size: 12px;
      color: aliceblue;
      font-weight: 600;
    }
  }
`;

const Content = styled.div<FormProps>`
  ${layout}
  ${flexbox}
  ${width}
  ${height}
  ${position}
  ${border}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: transparent;
`;

const FeildWrapper = styled.div<FormProps>`
  ${height}
  ${space}
  width: 90%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .field-content {
    width: 100%;
    height: 100%;
    background-color: white;
  }
`;

const BtnWrapper = styled.div<StepProps>`
  ${layout}
  ${flexbox}
  ${width}
  ${height}
  ${border}
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  height: 20%;
  background-color: white;

  .back-btn {
    font-size: 14px;
    font-weight: 600;
    color: #8795a9;
    background-color: transparent;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      color: ${(props) => (props.field === 1 ? '#8795a9' : '#03234f')};
    }
  }

  .next-btn {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 600;
    background-color: #03234f;
    color: aliceblue;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: #174a8b;
    }
  }
`;

const StepInfo = styled.div<FormProps>`
  ${layout}
  flex-direction: column;
`;

const StepBtn = styled.div<FormProps>`
  ${width}
  ${height}
  ${color}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid aliceblue;
`;
