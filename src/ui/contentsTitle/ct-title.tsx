"use client";
import styled from "styled-components";

const Ct_title = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: solid 1px #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  &::before {
    content: "";
    display: block;
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    bottom: -2.5px;
    left: -2px;
  }
  &::after {
    content: "";
    display: block;
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    bottom: -2.5px;
    right: -2px;
  }
`;

export default Ct_title;
