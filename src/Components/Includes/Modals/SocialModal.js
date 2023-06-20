import React from "react";
import { styled } from "styled-components";

export default function SocialModal({ onClose }) {
  return (
    <Modal onClick={() => onClose()}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
      <ModalImg src={require("../../../assets/Images/Property 1=map b.svg").default}/>
        </ModalContent>
      <ModalContent>Hello</ModalContent>
      <ModalContent>Social</ModalContent>
      <ModalContent>Page</ModalContent>
      <ModalContent>
        <ModalImg src={require("../../../assets/Images/Property 1=map b.svg").default}/>
      </ModalContent>
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
  background: #fff;
  padding: 91px;
  font-size: 25px;
  margin-right: 20px;
`;
const ModalImg = styled.img`
display: block;
width: 100%;
`;