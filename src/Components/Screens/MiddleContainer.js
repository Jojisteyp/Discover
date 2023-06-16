import React from 'react'
import { styled } from 'styled-components'
import { Helmet } from 'react-helmet';

function MiddleContainer() {
  return (
    <>
    <Helmet>
       <title>Podcast | Home</title>
     </Helmet>
     <MiddlleSection>
        <Heading>
        <MainTitle>Discover</MainTitle>
           <SearchContainer>
             <SearchText type="search" placeholder="Search..." />
                 <SearchLogo>
                      <SearchImg src={require("../../assets/Images/Property 1=search.svg").default} alt="image" />
                 </SearchLogo>
            </SearchContainer>
        </Heading>
     </MiddlleSection>
    </>
    )
}

export default MiddleContainer ;

const MiddlleSection = styled.div`
    height: 100vh;
    padding: 30px 20px 0;
    width: 76%;
   
`;
const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const MainTitle = styled.h1`
    font-size: 60px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
 
`;
const SearchContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #a6a5a5;
    border-radius: 50px;
    padding: 5px 10px;
    width: 300px;
   
`;
const SearchText = styled.input``;
const SearchLogo = styled.button`
    width: 17px;
    cursor: pointer;
`;
const SearchImg = styled.img`
    display: block;
    width: 100%;
`;


