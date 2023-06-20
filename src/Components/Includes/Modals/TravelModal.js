import React from "react";
import { styled } from "styled-components";

export default function TravelModal({ onClose }) {
  return (
    <Modal onClick={() => onClose()}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalImg src={require("../../../assets/Images/Property 1=map w.svg").default}/>
        Travel 1
      </ModalContent>
      <ModalContent >
      <ModalImg src={require("../../../assets/Images/Property 1=map w.svg").default}/>
        Travel 2</ModalContent>
        <ModalContent >
      <ModalImg src={require("../../../assets/Images/Property 1=map w.svg").default}/>
        Travel 3</ModalContent> 
        <ModalContent >
      <ModalImg src={require("../../../assets/Images/Property 1=map w.svg").default}/>
        Travel 4</ModalContent>
        <ModalContent >
      <ModalImg src={require("../../../assets/Images/Property 1=map w.svg").default}/>
        Travel 4</ModalContent>

    </Modal>
  );
}
const Modal = styled.div`
  width: 94%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
`;
const ModalContent = styled.div`
  background: black;
  border: 1px solid #fff;
  padding: 83px;
  font-size: 22px;
  color: #fff;
  font-weight: 600;
  margin-right: 20px;
`;
const ModalImg = styled.img`
width: 100%;
display: block;
`;