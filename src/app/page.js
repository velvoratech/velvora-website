'use client'
import Header from "./components/Header";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Vision from "./components/Vision";
import TechStack from "./components/TechStack";
import ChooseUs from "./components/ChooseUs";
import VelvoraMarquee from "./components/VelvoraMarquee";
import Approach from "./components/Approach";

export default function Home() {
  return (
    <>
    <Header />
    <Services />
    <VelvoraMarquee />
    <Approach />
    <ChooseUs />
    <TechStack />
     <Vision />
  <Footer />
 
  </>
  );
}