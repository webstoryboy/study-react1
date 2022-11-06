import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import ImgText from "./components/section/ImgText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Image />
      <ImgText />
      <Card />
      <Banner />
      <Text />
      <Footer />
    </>
  );
}

export default App;
