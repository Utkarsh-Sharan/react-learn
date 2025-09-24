import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with tailwind
      </h1>

      <Card userName="Utkarsh Sharan" userPost="Game Developer, India" />
      <Card userName="Rohan Sharan" userPost="Web Developer, India" />
      <Card />
    </>
  );
}

export default App;
