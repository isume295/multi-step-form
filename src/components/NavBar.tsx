import React, { useState } from 'react';
import styled from 'styled-components';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
import {
  color,
  space,
  typography,
  flexbox,
  layout,
  width,
  height,
  fontSize,
  BorderProps,
  FontSizeProps,
  HeightProps,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  FlexboxProps
} from 'styled-system';

interface NavProps extends SpaceProps, LayoutProps, ColorProps, FlexboxProps, HeightProps, FontSizeProps, BorderProps, TypographyProps {}

const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    // navbar container
    <NavContainer>
      {/* menu bar for small screen */}
      <Menu display={['flex', 'flex', 'flex', 'none']}>
        <span className="logo">Snap</span>
        <button
          onClick={() => {
            setShow(!show);
          }}
          className="menu-btn"
        >
          {show ? <IoClose /> : <IoMenu />}
        </button>
      </Menu>

      {/* navigation */}
      <Nav
        display={[`${show ? 'flex' : 'none'}`, `${show ? 'flex' : 'none'}`, 'flex', 'flex']}
        flexDirection={['column', 'row']}
        justifyContent={['flex-start', 'space-between']}
        alignItems={['flex-start', 'center']}
        p={[4, 4]}
        width={['65%', '100%']}
        height={['110vh', '75px']}
        bg={['gray', 'white']}
      >
        <NavLinks display={['flex']} flexDirection={['column', 'row']} alignContent={['flex-start', 'center']}>
          <span className="logo">Snap</span>
          <LinkLists display={'flex'} flexDirection={['column', 'row']} fontSize="13px" pt={[0, 1]} fontWeight="500">
            <li className="drop-down-link">
              <span>Features</span>
              <IoIosArrowDown />
            </li>
            <li className="drop-down-link">
              <span>Company</span>
              <IoIosArrowDown />
            </li>
            <li className="drop-down-link">Careers</li>
            <li className="drop-down-link">About</li>
          </LinkLists>
        </NavLinks>
        <LinkBtn display={'flex'} flexDirection={['column', 'row']} fontSize="13px" fontWeight="500" alignItems={['flex-start', 'center']} pt={[3, 0]}>
          <span>Login</span>
          <button className="btn">Register</button>
        </LinkBtn>
      </Nav>
    </NavContainer>
  );
};

const NavContainer = styled.div<NavProps>`
  position: fixed;
  top: 0;
  z-index: 1000;
  ${flexbox};
  .logo {
    font-weight: 900;
    font-size: 20px;
  }
`;

const Menu = styled.div<NavProps>`
  ${layout};
  ${flexbox};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: fixed;
  top: 0;

  .menu-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    font-size: 25px;
    border: none;
  }
`;

const Nav = styled.nav<NavProps>`
  ${width};
  ${height};
  ${layout};
  ${flexbox};
  ${space};
  ${color};
  gap: 10px;
  margin-left: auto;
  position: fixed;
  top: 0;
`;

const NavLinks = styled.div<NavProps>`
  ${flexbox};
  ${layout};
  ${space};
  gap: 25px;
  justify-content: center;
`;

const LinkLists = styled.ul<NavProps>`
  ${flexbox}
  ${layout}
  ${fontSize}
  ${typography};
  ${space}
  color: #494F50;
  list-style: none;
  gap: 20px;

  .drop-down-link {
    display: flex;
    gap: 7px;
    justify-content: center;
    align-items: center;
  }
`;

const LinkBtn = styled.div<NavProps>`
  ${layout}
  ${flexbox}
  ${typography}
  ${space}
  color: #494F50;
  gap: 20px;
  justify-content: center;

  .btn {
    background-color: transparent;
    border: 2px solid #6b7774;
    border-radius: 7px;
    padding: 10px 20px;
    color: #494f50;
    font-weight: 600;
    font-size: 13px;
    &:hover {
      border: 2px solid #000;
      color: #000;
      font-weight: 600;
    }
  }
`;

export default NavBar;
