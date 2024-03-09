import React from 'react';
import styled from 'styled-components';
import { FlexboxProps, LayoutProps, WidthProps, space, flexbox, height, layout, width, SpaceProps, typography, TypographyProps } from 'styled-system';
import HeroImg from '../assets/image-hero-desktop.png';
import mobileImg from '../assets/image-hero-mobile.png';
import partner1 from '../assets/client-audiophile.svg';
import partner2 from '../assets/client-databiz.svg';
import partner3 from '../assets/client-meet.svg';
import partner4 from '../assets/client-maker.svg';
interface ContainerProp extends LayoutProps, FlexboxProps, WidthProps, SpaceProps, TypographyProps {}

export const Hero = () => {
  return (
    <Container display={'flex'} flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']} p={['10px', '50px']} mt={[3, 3, 5, 4]} height={['100vh']}>
      <ContentContainer display={'flex'} justifyContent={['flex-start']} alignItems={['flex-start']} width={[1, 1, 1, 1 / 2]} height={['50%', '50%', '50%', '100%']}>
        <Content display={'flex'} flexDirection={['column']} alignItems={['center', 'center', 'center', 'flex-start']} justifyContent={['center', 'center']} pl={[0, 0, 0, '6rem']}>
          <H1 fontSize={['2rem', '2.5rem', '2.5rem', '4rem']} textAlign={['center', 'center', 'center', 'start']}>
            Make <Br display={['none', 'none', 'flex']} /> Remote Work
          </H1>

          <div className="p-wrapper">
            <P textAlign={['center', 'center', 'center', 'start']}>Get your team in sync. no matter your location. Streamline processes, create team rituals and watch productiviy soar</P>
          </div>

          <div className="btn-wrapper">
            <button>Learn more</button>
          </div>

          <Partner display={['none', 'flex']} alignItems={'center'} justifyContent={'flex-start'}>
            <img src={partner1} alt="" />
            <img src={partner2} alt="" />
            <img src={partner3} alt="" />
            <img src={partner4} alt="" />
          </Partner>
        </Content>
      </ContentContainer>
      <HeroImage display={['none', 'none', 'none', 'flex']} width={[1 / 2]}>
        <img src={HeroImg} alt="" />
      </HeroImage>
      <HeroImage display={['flex', 'flex', 'flex', 'none']} width={[1]} height={['50%']}>
        <img src={mobileImg} alt="" />
      </HeroImage>
    </Container>
  );
};

const Container = styled.div<ContainerProp>`
  width: 100%;
  ${layout}
  ${flexbox}
  ${height}
  ${space}
`;

const ContentContainer = styled.div<ContainerProp>`
  ${width}
`;

const Content = styled.div<ContainerProp>`
  width: 100%;
  height: 100%;
  position: relative;
  ${space}
  ${layout}
  ${flexbox}

  .p-wrapper {
    margin-top: 2rem;
    width: 70%;
    p {
      font-size: 16px;
      color: #adadad;
      font-weight: 600;
    }
  }

  .btn-wrapper {
    margin-top: 2rem;
    button {
      padding: 0.7rem 1.5rem;
      font-size: 16px;
      font-weight: 600;
      background-color: #000;
      color: #fff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      margin-bottom: 70px;
    }
  }
`;

const HeroImage = styled.div<ContainerProp>`
  ${width}
  ${layout}
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const H1 = styled.h1<ContainerProp>`
  ${width}
  ${typography}
  font-weight: 700;
  color: #000;
`;

const Br = styled.br<ContainerProp>`
  ${layout}
`;

const P = styled.p<ContainerProp>`
  ${typography}
`;

const Partner = styled.div<ContainerProp>`
  position: absolute;
  bottom: 10px;
  margin-top: auto;
  gap: 20px;
  ${flexbox};
  ${layout};
`;
