'use client'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Vision from "./components/Vision";
import TechStack from "./components/TechStack";
import ChooseUs from "./components/ChooseUs";
import VelvoraMarquee from "./components/VelvoraMarquee";

export default function Home() {
  return (
    <>
    <Header />
    <VelvoraMarquee />
    <ChooseUs />
    <TechStack />
     <Vision />
  <Footer />
 
  </>
  );
}