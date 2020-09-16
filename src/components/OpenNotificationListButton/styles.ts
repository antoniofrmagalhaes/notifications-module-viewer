import styled, { keyframes } from "styled-components";
import { MdNotificationsActive } from "react-icons/md";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  border-radius: 25px;
  border: none;
  background: #5c9be4;
  > div {
    position: absolute;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -5px;
    right: -5px;
    border-radius: 50%;
    opacity: 0;
    animation: 100ms ${fadeIn} 250ms ease forwards;
    background: #fd7b6f;
    span {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: white;
    }
  }
`;

export const NotificationsIcon = styled(MdNotificationsActive)`
  font-size: 25px;
  color: #fefefe;
`;
