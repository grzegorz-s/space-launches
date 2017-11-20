import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavToggle = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 40;
    width: 23px;
    height: 14px;
    margin: auto;
    cursor: pointer;
    transition: cubic-bezier(0.2, 1, 0.3, 1) 0.4s, color ease .3s;

    &.is-active {
      transform: rotate(45deg);
    }
`;

export const NavToggleBar = styled.span`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  opacity: .8;
  transition: cubic-bezier(0.2, 1, 0.3, 1) 0.4s, opacity ease .3s;

  ${NavToggle}.is-active & {
    transform: scaleX(1);
    opacity: 1;
  }

  &:nth-of-type(1) {
    top: 0;

    ${NavToggle}.is-active & {
      transform: scale(1) rotate(-90deg) translate3d(-6px, 0, 0);
    }
  }

  &:nth-of-type(2) {
    top: 6px;
    transform: scaleX(.87);
    transform-origin: left;
  }

  &:nth-of-type(3) {
    bottom: 0;
    transform: scaleX(.7);
    transform-origin: left;

    ${NavToggle}.is-active & {
      transform: scale(1) rotate(-90deg) translate3d(-6px, 11.5px, 0);
    }
  }
`;

export const NavBody = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background: rgba(27, 15, 35, 0.94);
  opacity: 0;
  visibility: hidden;
  transform: scale(0.8);
  transition: all cubic-bezier(0.35, 1.08, 1, 1) 0.2s;
  
  &.is-active {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
`;

export const NavLinkHld = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const NavLinkEl = styled(NavLink)`
  margin: 5px;
  color: #fff;
  line-height: 1.1;
  text-decoration: none;
`;
