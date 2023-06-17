import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Helmet } from 'react-helmet';
import BgImg from '../../assets/Images/backroundimage.png';


function MiddleContainer() {
    const [Follow, SetFollow] =useState(false)
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
        <SpotLight>
         <LeftContent>
                <Maintext>Listen to the people's voice</Maintext>
            <BottomElement>
                 <Playing>
                       <PlayingImage>
                         <PlayingImg src={require("../../assets/Images/Property 1=melody w.svg").default} />
                      </PlayingImage>
                      <PlayingText>Playing</PlayingText>
                            </Playing>
                            <PlayLater>
                                <PlayLaterImage>
                                <PlayingImg src={require("../../assets/Images/Property 1=music w.svg").default} />
                     </PlayLaterImage>
                      <PlayLaterTxt>Play later</PlayLaterTxt>
                 </PlayLater>
            </BottomElement>
        </LeftContent>
        <RightContent>
            <SpotlightProfileImage>
                <SpotProfImg
                    src={require("../../assets/Images/Frame 3466917.png")}
                />
            </SpotlightProfileImage>
            <SpotContents>
                <SpotProfName>Jason Albert</SpotProfName>
                <SpotFollowers>200,456 followers</SpotFollowers>
            </SpotContents>
            {Follow ? (
                <SpotFollowBtn
                    className={"activebtn"}
                    onClick={() => SetFollow(false)}
                >
                    Following
                </SpotFollowBtn>
              ) : (
                <SpotFollowBtn onClick={() => SetFollow(true)}>
                    Follow
                </SpotFollowBtn>
                    )}
         </RightContent>
        </SpotLight>
     </MiddlleSection>
    </>
    )
}

export default MiddleContainer ;

const MiddlleSection = styled.div`
    height: 100vh;
    padding: 30px 20px 0;
   
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
    padding: 8px 12px;
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
const SpotLight = styled.div`
    display: flex;
    justify-content: space-between;
    background: url(${BgImg}) no-repeat;
    background-size: cover;
    padding: 20px;
`;
const LeftContent = styled.div`

`;
const Maintext = styled.h1`
    font-size: 40px;
    color: #fff;
    width: 80%;
    font-weight:600;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 90px;
`;
const BottomElement = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;

`;
const Playing = styled.div`
    background: rgba(217, 217, 217, 0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    border-radius: 50px;
    width: 90px;
    cursor: pointer;
    &:hover {
        background-color: #21282c;
        color: #f6f5f4;
    }
    `;
 const PlayingText = styled.h4`
    font-size: 14px;
    font-weight: 500;
    color: #fff;
 
`;
const PlayingImage = styled.div`
 width: 15px;
`;
const PlayingImg = styled.img`
 display: block;
 width: 100%;
`;

const PlayLater = styled.div`
 background: rgba(217, 217, 217, 0.5);
 display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 0 10px;
 border-radius: 50px;
 width: 100px;
 cursor: pointer;
 &:hover {
     background-color: #21282c;
     color: #f6f5f4;
 }

`;
const PlayLaterImage =styled.div`
width: 15px;
`;
const PlayLaterTxt =styled.p`
color: #fff;
font-size: 14px;
font-weight: 500;
`;

const RightContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 50px;
    background: rgba(217, 217, 217, 0.5);
    width: 230px;
    height: 60px;
    padding: 0 20px;
    cursor: pointer;
    &:hover {
        background-color: rgba(120, 114, 114, 0.5);
        color: #f6f5f4;
    }
    @media all and (max-width: 1280px) {
        width: 278px;
    }
    @media all and (max-width: 1080px) {
        width: 327px;
    }
    @media all and (max-width: 1080px) {
        width: 327px;
    }
    @media all and (max-width: 768px) {
        width: 338px;
    }
    @media all and (max-width: 360px) {
        display: none;
    }
`;
const SpotlightProfileImage = styled.div`
    width: 30px;
    margin-right: 10px;
    cursor: pointer;
    @media all and (max-width: 768px) {
        width: 45px;
    }
`;
const SpotProfImg = styled.img`
    width: 100%;
    display: block;
    border-radius: 50%;
`;
const SpotContents = styled.div`
`;
const SpotProfName = styled.h4`
    font-size: 13px;
    color: #fff;
    font-weight: 500;
`;
const SpotFollowers = styled.h5`
    font-size: 12px;
    color: #d9d9d9;
`;
const SpotFollowBtn = styled.button`
    background: #eaeaea;
    border-radius: 50px;
    padding: 4px 10px;
    color: black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    cursor: pointer;
    &.activebtn {
        background: blue;
        color: #fff;
    }
    &:hover {
        background-color: #21282c;
        color: #f6f5f4;
    }
`;


