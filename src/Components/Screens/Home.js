import React from 'react'
import MiddleContainer from './MiddleContainer';
import styled from "styled-components"

   function Home() {
      return (
         
          <MainContainer>
              <MiddleContainer/>
          </MainContainer>
      );
  }
  
  export default Home;
  
  const MainContainer = styled.div`
 
  `;
//   const FlexContainer = styled.div`
//    display: flex;
//   justify-content: space-between;
//   `;
//   const LeftSideContainer = styled.div``;
//   const RightSideContainer = styled.div``;