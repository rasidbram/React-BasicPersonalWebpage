import React, {Component} from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Header from './Components/Header';
import Info from './Components/Info';
import Skill from './Components/skill';
import Footer from './Components/Footer'


class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <Header />
        <Info title='About' image1='images//about.jpg' image2='images//about1.jpg'/>
        <Info title='Experince' image1='images//experience.jpg' image2='images//experience1.jpg'/>
        <Info title='Education' image1='images//universty.jpg' image2='images//universty1.jpg'/>
        <Skill title='General'/>
        <Footer title='Contact' title1='Skills' />
      
      </div>
      
    );
  }
};

export default App;


