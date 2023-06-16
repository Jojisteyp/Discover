import logo from './logo.svg';
import './App.css';
import AsideBar from './Components/Includes/AsideBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Screens/Home';
import Music from './Components/Screens/Music';
import Accounts from './Components/Screens/Accounts';
import Files from './Components/Screens/Files';
import Settings from './Components/Screens/Settings';
import styled from "styled-components"
import RightContainer from './Components/Includes/RightContainer';
function App() {
  return (
   <Router>
    <MainContainer>
      <AsideBar/>
      <SubContainers>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="music/" element={<Music/>} />
          <Route path="accounts/" element={<Accounts/>} />
          <Route path="files/" element={<Files/>} />
          <Route path="settings/" element={<Settings/>} />
        </Routes>
      </SubContainers>
      <RightContainer/>

    </MainContainer>
   </Router>
  );
}

export default App;
const MainContainer = styled.div`
display: flex;
justify-content: space-between;
height: 100vh;
`;
const SubContainers = styled.div`
width: 100%;
`;




