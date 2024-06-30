import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {
  action,
  originals,
  ComedyMovies,
  HorrorMovies,
  RomanceMovies,
  Documentaries,
} from "./urls";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <br />
      <br />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={ComedyMovies} title="Comedy Movies" isSmall />
      <RowPost url={HorrorMovies} title="Horror Movies" isSmall />
      <RowPost url={RomanceMovies} title="Romance Movies" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
