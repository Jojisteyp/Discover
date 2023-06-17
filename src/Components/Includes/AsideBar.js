import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function AsideBar() {
  return (
    <LeftContainer>
        <SideBarContents>
            <NavLinks  to={"/"}
                    className={({ isActive }) => (isActive ? "active" : "")} >
                <SideBarImg  src={
                            require("../../assets/Images/Property 1=home.svg")
                                .default
                        } />
            </NavLinks>
        </SideBarContents>
        <SideBarContents>
            <NavLinks  to={"music/"}
                    className={({ isActive }) => (isActive ? "active" : "")}>
                <SideBarImg  src={
                            require("../../assets/Images/Property 1=music.svg")
                                .default
                        } />
            </NavLinks>
        </SideBarContents> <SideBarContents>
            <NavLinks  to={"accounts/"}
                    className={({ isActive }) => (isActive ? "active" : "")}>
                <SideBarImg  src={
                            require("../../assets/Images/Property 1=account.svg")
                                .default
                        } />
            </NavLinks >
        </SideBarContents> <SideBarContents>
            <NavLinks  to={"files/"}
                    className={({ isActive }) => (isActive ? "active" : "")}>
                <SideBarImg  src={
                            require("../../assets/Images/Property 1=file.svg")
                                .default
                        } />
            </NavLinks>
        </SideBarContents> <SideBarContents>
            <NavLinks  to={"settings/"}
                    className={({ isActive }) => (isActive ? "active" : "")}>
                <SideBarImg  src={
                            require("../../assets/Images/Property 1=settings.svg")
                                .default
                        } />
            </NavLinks>
        </SideBarContents>
    </LeftContainer>
  )
}

export default AsideBar

const LeftContainer = styled.ul`
  width: 8%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #d9d9d9;

`;
const SideBarContents = styled.li`
 width: 40px;
    margin-bottom: 30px;
    &:hover {
        filter: invert();
    }
    &&:first-child {
        margin-top: 40px;
    }
    `;



const NavLinks = styled(NavLink)``;

const SideBarImg = styled.img`
width: 100%;
display: block;
`;



