import React from 'react'
import { Helmet } from 'react-helmet'
import styled from "styled-components"


function Settings() {
  return (
    <>
    <Helmet>
       <title>Podcast | Settings</title>
    </Helmet>
    <ComingSoon>
        <Heading>Coming Soon</Heading>
    </ComingSoon>
   </>  )
}

export default Settings

const ComingSoon = styled.div`
    border-right: 1px solid #d9d9d9;
    border-left: 1px solid #d9d9d9;
    height: 100vh;
    width: 80%;
    display: flex;
    align-items: center;
`;
const Heading = styled.h1`
font-size: 100px;
color: black;
align-items: center;
font-weight: 600;
margin-left: 50px;
font-family: Arial, Helvetica, sans-serif;
`;
