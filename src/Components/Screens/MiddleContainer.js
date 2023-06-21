import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Helmet } from 'react-helmet';
import BgImg from '../../assets/Images/backroundimage.png';
import InsightModal from "../Includes/Modals/InsightModal";
import ProfessionModal from '../Includes/Modals/ProffesionModal';
import SocialModal from '../Includes/Modals/SocialModal';   
import SportsModal from '../Includes/Modals/SportsModal';
import TravelModal from '../Includes/Modals/TravelModal';



function MiddleContainer() {
    const [isOpen, setOpen] = useState("")
    const [Follow, SetFollow] =useState(false)
  return (
    <>
    {isOpen==="InsightModal" && <InsightModal onClose={()=>setOpen("")}/>}
    {isOpen==="ProffesionModal" && < ProfessionModal onClose={()=>setOpen("")}/>}
    {isOpen==="SocialModal" && < SocialModal onClose={()=>setOpen("")}/>}
    {isOpen==="SportsModal" && < SportsModal onClose={()=>setOpen("")}/>}
    {isOpen==="TravelModal" && < TravelModal onClose={()=>setOpen("")}/>}


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
        <CategoryContainer>
            <CategoryTop>
                <CategoryText>Category</CategoryText>
                <SeeAllTxt>See All</SeeAllTxt>
            </CategoryTop>
            <CategoryBottom>
                <CategorySelection  onClick={() => setOpen("SocialModal")}>
                    <CategoryImage>
                        <CategoryImg src={require("../../assets/Images/Property 1=profile b.svg").default} />
                    </CategoryImage>
                    <CategoryDetails>
                    <CategoryName  >Social</CategoryName>
                        <Count>134+</Count>
                    </CategoryDetails>
                </CategorySelection>
                <CategorySelection  onClick={() => setOpen("TravelModal")}>
                    <CategoryImage>
                    <CategoryImg src={require("../../assets/Images/Property 1=map b.svg").default} />
                    </CategoryImage>
                    <CategoryDetails>
                        <CategoryName >Travel</CategoryName>
                        <Count>243+</Count>
                    </CategoryDetails>
                </CategorySelection>
                <CategorySelection  onClick={() => setOpen("InsightModal")}>
                    <CategoryImage>
                    <CategoryImg src={require("../../assets/Images/Property 1=qoute b.svg").default} />
                    </CategoryImage>
                    <CategoryDetails>
                        <CategoryName >Insight</CategoryName>
                        <Count>150+</Count>
                    </CategoryDetails>
                </CategorySelection>
                <CategorySelection  onClick={() => setOpen("ProffesionModal")}>
                    <CategoryImage>
                    <CategoryImg src={require("../../assets/Images/Property 1=note b.svg").default} />
                    </CategoryImage>
                    <CategoryDetails>
                        <CategoryName  >Profession</CategoryName>
                        <Count>120+</Count>
                    </CategoryDetails>
                </CategorySelection>
                <CategorySelection  onClick={() => setOpen("SportsModal")}>
                    <CategoryImage>
                    <CategoryImg src={require("../../assets/Images/Property 1=reward b.svg").default} />
                    </CategoryImage>
                    <CategoryDetails>
                        <CategoryName >Sport</CategoryName>
                        <Count>321+</Count>
                    </CategoryDetails>
                </CategorySelection>
            </CategoryBottom>
        </CategoryContainer>
        <PopularTop>
            <PopularTxt>Most popular</PopularTxt>
            <SeeAllTxt>See All</SeeAllTxt>
        </PopularTop>
        <PopularBottomList>
            <PopularBottom>
                <PopProfileArea>
                    <SerialNum>01</SerialNum>
                    <PopularProfile>
                        <PopProfImg src={require("../../assets/Images/Frame 3466915.png")} />
                    </PopularProfile>
                    <ArtistDetails>
                        <PopularPlay>
                            How to be a productive person
                        </PopularPlay>
                        <PopArtist>Johnson alert</PopArtist>
                    </ArtistDetails>
                </PopProfileArea>
                <PopCountArea>
                    <CountAreaLeft>
                        <PopSound>
                            <PopSoundImg src={require("../../assets/Images/Property 1=sound.svg").default} />
                        </PopSound>
                        <PopFollow>100,045</PopFollow>
                    </CountAreaLeft>
                    <CountAreaRight>
                        <PopTimer>
                        <PopTimerImg src={require("../../assets/Images/Property 1=alarm.svg").default} />
                        </PopTimer>
                        <Duration>04:30</Duration>
                    </CountAreaRight>
                </PopCountArea>
            </PopularBottom>
            <PopularBottom>
                <PopProfileArea>
                    <ArtistDetails>  
                    </ArtistDetails>
                </PopProfileArea>
                <PopCountArea>
                    <CountAreaLeft>
                        <PopSound>
                        <PopSoundImg src={require("../../assets/Images/Property 1=sound.svg").default} />
                        </PopSound>
                        <PopFollow>900,000</PopFollow>
                    </CountAreaLeft>
                    <CountAreaRight>
                        <PopTimer>
                        <PopSoundImg src={require("../../assets/Images/Property 1=alarm.svg").default} />
                        </PopTimer>
                        <Duration>03:40</Duration>
                    </CountAreaRight>
                </PopCountArea>
            </PopularBottom>
        </PopularBottomList>
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
    @media all and (max-width: 1380px){
        font-size: 45px;
    }
        @media all and (max-width: 980px){
            font-size: 35px;
        }

    
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
const SearchText = styled.input`
font-weight: 500;
font-family: Arial, Helvetica, sans-serif;
`;
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
     @media all and (max-width: 1380px){
        font-size: 30px;
     }
`;
const BottomElement = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    @media all and (max-width: 1280px) {
        width: 48%;
    }

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
   
`;
const SpotlightProfileImage = styled.div`
    width: 30px;
    margin-right: 10px;
    cursor: pointer;
   
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
const CategoryContainer = styled.div``;

const CategoryTop = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #9e9696;
    align-items: flex-end;
`;
const CategoryText = styled.h2`
    font-size: 32px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: Arial, Helvetica, sans-serif;
    @media all and (max-width: 1380px){
        font-size: 30px;
    }
     @media all and (max-width: 980px){
        font-size: 26px;
     }

   
`;
const SeeAllTxt = styled.h3`
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 10px;
    cursor: pointer;
     @media all and (max-width: 980px){
        font-size: 14px;
     }

   
`;

const CategoryBottom = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 20px 0 30px;
    @media all and (max-width: 1380px){
        margin: 10px 5px;
    }
    
`;
const CategorySelection = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  
`;
const CategoryImage = styled.div`
    width: 45px;
    border: 1px solid #d9d9d9;
    border-radius: 50%;
    padding: 5px;
    margin-right: 10px;
    @media all and (max-width: 980px){
        width: 35px;
    }
`;
const CategoryImg = styled.img`
    display: block;
    width: 100%;
`;
const CategoryDetails = styled.div``;
const CategoryName = styled.h4`
    font-size: 14px;
    font-weight: 500;
    
    
`;
const Count = styled.h4`
    font-size: 12px;
    color: #a6a5a5;
`;
const PopularTop = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #9e9696;
    align-items: flex-end;
    margin-bottom: 20px;
`;
const PopularTxt = styled.h2`
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
    @media all and (max-width: 1080px){
        font-size: 28px;
    }
    @media all and (max-width: 980px){
        font-size: 25px;
    }

 
`;

const PopularBottomList = styled.ul``;
const PopularBottom = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    @media all and (max-width: 980px){
        margin-bottom: 0px;
    }
`;

 

const ArtistDetails = styled.div``;
const PopProfileArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 27%;
    cursor: pointer;
   
`;
const SerialNum = styled.h3`
    font-size: 12px;
    font-weight: 600;
   
`;
const PopularProfile = styled.div`
    width: 50px;
    margin: 5px;
  
`;
const PopProfImg = styled.img`
    display: block;
    width: 100%;
    border-radius: 50%;
`;
const PopularPlay = styled.h2`
font-size: 15px;
font-weight: 700;
@media all and (max-width: 1080px){
    font-size: 13px;
}
@media all and (max-width: 980px){
    width: 190px;
    font-size: 14px;
}
`;
const PopArtist = styled.h5`
    font-size: 12px;
    color: #a6a5a5;
`;

const PopCountArea = styled.div`
    display: flex;
    width: 25%;
    justify-content: space-between;
`;

const CountAreaLeft = styled.div`
    display: flex;
    align-items: center;
  
`;
const PopSound = styled.div`
    width: 30px;
    margin-right: 10px;
    @media all and (max-width: 980px){
        width: 20px;
    }

`;
const PopSoundImg = styled.img`
    display: block;
    width: 100%;
`;
const PopFollow = styled.h3`
    font-size: 15px;
    color: #9e9696;
    @media all and (max-width: 980px){
        font-size: 11px;
    }

`;

const CountAreaRight = styled.div`
    display: flex;
    align-items: center;
   
`;
const PopTimer = styled.div`
    width: 30px;
    margin-right: 10px;
`;
const PopTimerImg = styled.img`
    display: block;
    width: 100%;
`;
const Duration = styled.h3`
    font-size: 15px;
    color: #9e9696;
    @media all and (max-width: 980px){
        font-size: 11px;
    }

`;
