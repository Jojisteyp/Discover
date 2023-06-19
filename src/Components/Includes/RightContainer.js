import React, { useState } from 'react'
import { styled } from 'styled-components'
import MusicBg from "../../assets/Images/Frame 3466913.png"

function RightContainer() {
    const [profile, setProfile] = useState([
        {
            id: 1,
            image: require("../../assets/Images/Frame 3466913.png"),
            name: "Jason Albert",
            followers: "200,456",
            is_followed: false,
        },
        {
            id: 2,
            image: require("../../assets/Images/Frame 3466915.png"),
            name: "Gabriel Adim",
            followers: "200,456",
            is_followed: false,
        },
        {
            id: 3,
            image: require("../../assets/Images/Frame 3466916.png"),
            name: "Lordun Sardun",
            followers: "200,456",
            is_followed: false,
        },
        {
            id: 4,
            image: require("../../assets/Images/Frame 3466917.png"),
            name: "Daniel Walied",
            followers: "200,456",
            is_followed: false,
        },
    ]);

    const updateProfile = (item) => {
        if (item.is_followed === false) {
            item.is_followed = true;
        } else {
            item.is_followed = false;
        }
        setProfile([...profile]);
    };
    const renderProfile = () => {
        return profile.map((item) => {
            console.log(item.is_followed);
            return (
                <ProfileDetails key={item.id}>
                    <LeftDiv>
                        <LeftImage>
                            <LeftImg src={item.image} />
                        </LeftImage>
                        <ProfDetails>
                            <ProfName>{item.name}</ProfName>
                            <FollowCount>
                                {item.followers} followers
                            </FollowCount>
                        </ProfDetails>
                    </LeftDiv>
                    {item.is_followed ? (
                        <FollowBtn
                            className={"activebtn"}
                            onClick={() => updateProfile(item)}
                        >
                            Following
                        </FollowBtn>
                    ) : (
                        <FollowBtn onClick={() => updateProfile(item)}>
                            Follow
                        </FollowBtn>
                    )}
                </ProfileDetails>
            );
        });
    };
  return (
    <RightSection>
    <RightTop>
        <FriendList>
            <FriendListTxt>Friends</FriendListTxt>
            <OptionsMenu>
                <OptionsImg src= {require("../../assets/Images/Property 1=menu b.svg").default} />
               
            </OptionsMenu>
        </FriendList>
        <FriendProfile>
            <FriendProfList>
                <FriendProfImage>
                    <FriendProfImg
                        src={require("../../assets/Images/Frame 3466915.png")}
                    />
                </FriendProfImage>
                <FriendProfName>Ilham</FriendProfName>
            </FriendProfList>
            <FriendProfList>
                <FriendProfImage>
                    <FriendProfImg
                        src={require("../../assets/Images/Frame 3466914.png")}
                    />
                </FriendProfImage>
                <FriendProfName>Ujil</FriendProfName>
            </FriendProfList>
            <FriendProfList>
                <FriendProfImage>
                    <FriendProfImg
                        src={require("../../assets/Images/Frame 3466914.png")}
                    />
                </FriendProfImage>
                <FriendProfName>Anas</FriendProfName>
            </FriendProfList>
            <FriendProfList>
                <FriendProfImage>
                    <FriendProfImg
                        src={require("../../assets/Images/Frame 3466917.png")}
                    />
                </FriendProfImage>
                <FriendProfName>Ardi</FriendProfName>
            </FriendProfList>
            <FriendProfList>
                <FriendProfImage>
                    <FriendProfImg
                        // src={require("../../assets/Images/Frame 3466916.png")}
                    />
                </FriendProfImage>
                <FriendProfName>Yanto</FriendProfName>
            </FriendProfList>
        </FriendProfile>
    </RightTop>
    <RightMiddle>
        <PodcastHeading>Top podcaster</PodcastHeading>
        <PodcastList>{renderProfile()}</PodcastList>
    </RightMiddle>
    <RightBottom>
        <MusicHeading>Listen to the people's voice</MusicHeading>
        <MusicControls>
            <MainControls>
                <ControlImage>
                    <ControlImg src= {require("../../assets/Images/Property 1=shuffle b.svg").default} />
                       
                </ControlImage>
                <ControlImage>
                <ControlImg src= {require("../../assets/Images/Property 1=shuffle b.svg").default} />

                </ControlImage>
                <ControlImage>
                <ControlImg src= {require("../../assets/Images/Property 1=shuffle b.svg").default} />

                </ControlImage>
                <ControlImage>
                <ControlImg src= {require("../../assets/Images/Property 1=shuffle b.svg").default} />

                </ControlImage>
                <ControlImage>
                <ControlImg src= {require("../../assets/Images/Property 1=shuffle b.svg").default} />

                </ControlImage>
            </MainControls>
            <SeekBar>
                <RunningTime>02:00</RunningTime>
                <TotalDuration>03:40</TotalDuration>
            </SeekBar>
        </MusicControls>
    </RightBottom>
</RightSection>
);
}

export default RightContainer;

const RightSection = styled.div`
height: 100vh;
border-left: 1px solid #a6a5a5;
padding: 35px 20px 0;
@media all and (max-width: 980px) {
border-left: none;
height: fit-content;
}
`;

const RightTop = styled.div``;
const FriendList = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #a6a5a5;
`;
const FriendListTxt = styled.h2`
font-size: 32px;
font-weight: 500;
margin-bottom: 20px;
@media all and (max-width: 480px) {
font-size: 28px;
}
`;
const OptionsMenu = styled.div`
width: 35px;
margin-bottom: 20px;
`;
const OptionsImg = styled.img`
width: 100%;
display: block;
cursor: pointer;
`;
const FriendProfile = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
@media all and (max-width: 480px) {
flex-wrap: wrap;
width: 99%;
}
@media all and (max-width: 360px) {
width: 50%;
}
`;
const FriendProfList = styled.li`
margin: 10px 0 20px;
cursor: pointer;
@media all and (max-width: 360px) {
display: flex;
align-items: center;
justify-content: space-between;
}
`;
const FriendProfImage = styled.div`
width: 40px;
@media all and (max-width: 980px) {
width: 60px;
}
@media all and (max-width: 360px) {
margin-right: 20px;
}
`;
const FriendProfImg = styled.img`
width: 100%;
display: flex;
border-radius: 50%;
`;
const FriendProfName = styled.h5`
font-size: 12px;
color: #a6a5a5;
text-align: center;
@media all and (max-width: 980px) {
font-size: 15px;
}
@media all and (max-width: 360px) {
font-size: 17px;
}
`;

const RightMiddle = styled.div``;

const PodcastHeading = styled.h2`
margin-bottom: 20px;
font-size: 32px;
font-weight: 500;
@media all and (max-width: 480px) {
font-size: 28px;
}
`;
const PodcastList = styled.ul`
border-top: 1px solid #a6a5a5;
`;
const ProfileDetails = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 20px;
cursor: pointer;
`;
const LeftDiv = styled.div`
display: flex;
align-items: center;
`;
const LeftImage = styled.div`
width: 38px;
margin-right: 10px;
@media all and (max-width: 980px) {
width: 55px;
}
@media all and (max-width: 480px) {
width: 50px;
}
`;
const LeftImg = styled.img`
width: 100%;
display: block;
border-radius: 50%;
`;
const ProfDetails = styled.div``;
const ProfName = styled.h4`
font-size: 14px;
font-weight: 500;
@media all and (max-width: 980px) {
font-size: 18px;
}
@media all and (max-width: 480px) {
font-size: 15px;
}
@media all and (max-width: 360px) {
font-size: 14px;
}
`;
const FollowCount = styled.h5`
font-size: 11px;
color: #9e9696;
@media all and (max-width: 980px) {
font-size: 15px;
}
@media all and (max-width: 360px) {
font-size: 10px;
}
`;
const FollowBtn = styled.button`
border-radius: 50px;
border: 1px solid #9e9696;
padding: 5px 10px;
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

const RightBottom = styled.div`
background: url(${MusicBg}) no-repeat;
background-size: cover;
margin-top: 20px;
`;

const MusicHeading = styled.h3`
font-size: 25px;
font-weight: 700;
color: #fff;
width: 85%;
padding: 20px;
@media all and (max-width: 1280px) {
width: 100%;
}
`;
const MusicControls = styled.div`
background: rgba(217, 217, 217, 0.5);
width: 100%;
height: 100px;
padding-top: 35px;
margin-top: 45px;
`;
const MainControls = styled.ul`
display: flex;
justify-content: space-between;
width: 60%;
margin: 0 auto 20px;
`;
const ControlImage = styled.li`
width: 25px;
cursor: pointer;
`;
const ControlImg = styled.img`
display: block;
width: 100%;
`;

const SeekBar = styled.div`
display: flex;
justify-content: space-between;
padding: 0 10px;
position: relative;
`;

const RunningTime = styled.h3`
font-size: 12px;
color: #fff;
&::after {
content: "";
width: 103px;
height: 2px;
background: #fff;
display: block;
position: absolute;
bottom: 7px;
left: 50px;
@media all and (max-width: 980px) {
    width: 390px;
}
@media all and (max-width: 640px) {
    width: 200px;
}
@media all and (max-width: 480px) {
    width: 150px;
}
@media all and (max-width: 360px) {
    width: 83px;
}
}
`;
const TotalDuration = styled.h3`
font-size: 12px;
color: #fff;
&::before {
content: "";
width: 65px;
height: 2px;
background: rgba(255, 255, 255, 0.5);
display: block;
position: absolute;
bottom: 7px;
right: 50px;
width: 140px;
}
`;
