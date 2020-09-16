import styled, { keyframes } from "styled-components";
import PerfectScrollBar from "react-perfect-scrollbar";

interface ContainerProps {
  open: boolean;
}

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(-40px);
  }
`;

export const Container = styled.div<ContainerProps>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  width: 320px;
  left: calc(50% - 160px);
  top: calc(100% + 20px);
  border-radius: 4px;
  border: 2px solid #f1f1f1;
  background: #ffffff;
  @media (min-width: 400px) {
    width: 350px;
    left: calc(50% - 175px);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 16px;
  p {
    color: #aaaba9;
    font-weight: 600;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  button {
    color: #2d57b3;
    opacity: 0.7;
    border: none;
    background: none;
    & + button {
      margin-left: 10px;
    }
    &:hover {
      opacity: 1;
    }
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 400px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #4e4e4e;
  border-radius: 4px;
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eeeeee;
  }
  p {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  time {
    font-size: 14px;
    opacity: 0.8;
  }
  button {
    color: #2d57b3;
    opacity: 0.7;
    border: none;
    background: none;
    &:hover {
      opacity: 1;
    }
  }
`;

export const Footer = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  background: #ffffff;
  p {
    font-size: 16px;
    color: #2d57b3;
    font-weight: 500;
    opacity: 0.8;
  }
  &:hover {
    p {
      opacity: 1;
    }
    background: #f9f9fb;
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  transform: translateY(0);
  opacity: 0;
  animation: ${fadeUp} 350ms ease forwards;
`;
