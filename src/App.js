import './App.css';
import Header from './Components/Header';
import FirstPage from './Components/FirstPage';
import Search from './Components/Search';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Login from './Components/Login';
import Footer from './Components/Footer';

import {
  Routes,
  Route
} from "react-router-dom";
import { Container } from '@mui/material';
import FlatCard from './Components/FlatCard';


function App() {
  return (
    <>
    
      {/* <Container>
          <FlatCard />

      </Container> */}
      {/* <ClassicFormPage />  */}
      <Header/>
       <Routes>
        <Route path="/" element={<FirstPage/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>
       </Routes>
      <Footer/>
    </>
  ); 
}

export default App;
