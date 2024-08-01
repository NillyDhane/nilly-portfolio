import "./styles/App.css";
import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
