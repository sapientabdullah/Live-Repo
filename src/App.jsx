import React from "react";
import Navbar from "./components/Navbar";
import Middle from "./components/Middle";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Best from "./components/Best";

export default function App() {

  return (
    <>
      <Navbar />
      <Middle />
      <Blog />
      <Best />
      <Footer />
    </>
  );
}
