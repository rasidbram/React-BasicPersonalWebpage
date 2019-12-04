import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Header from './Components/Header';
import Info from './Components/Info';
// import Skill from './Components/skill';
import Footer from './Components/Footer'


// const skillPhotos=[
//   { image1:'images//about.jpg'},
//    {image2:'images//about1.jpg'},
//    { image3:'images//about.jpg'},
//    {image4:'images//about1.jpg'},
//    { image5:'images//about.jpg'},
//    {image6:'images//about1.jpg'},
//    { image7:'images//about.jpg'},
//    {image8:'images//about1.jpg'}
//  ]

// const carousel=skillPhotos.map(n=>n)


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Info title='About' image1='images//about.jpg' image2='images//about1.jpg'/>
      <Info title='Experince' image1='images//experience.jpg' image2='images//experience1.jpg'/>
      <Info title='Education' image1='images//universty.jpg' image2='images//universty1.jpg'/>
      {/* <Skill title='Skills' {...carousel} /> */}
      <Footer title='Contact' title1='Skills' />
    </div>
    
  );
};

export default App;


