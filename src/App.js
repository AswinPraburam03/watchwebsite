import React from 'react';
import './App.scss';



import Topbar from './components/topbar/Topbar';
import Home from './components/home/Home'
import Main from './components/main/Main';
import Featured from './components/featured/Featured'
import Banner from './components/banner/Banner';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/footer/Footer';



function App() {
  return (
    <>

    <Topbar />
    <Home />
    <Main />
    <Featured />
    <Banner />
    <Blogs />
    <Footer />
    
   
    
    </>
  );
}

export default App;
