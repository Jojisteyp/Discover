import logo from './logo.svg';
import './App.css';
import AsideBar from './Components/Includes/AsideBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { styled } from 'styled-components';
function App() {
  return (
   <Router>
    <MainContainer>
      <AsideBar/>

    </MainContainer>
   </Router>
  );
}

export default App;
const MainContainer = styled.div``;



