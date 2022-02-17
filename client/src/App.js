import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { axiosEntries } from "./store/entries";
import "./App.css";
import InputFormV2 from "./components/InputFormV2";
import ShowEntries from "./components/ShowEntries";
import RightAside from "./components/RightAside";
import Header from "./components/Header";
import Topics from "./components/Topics";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosEntries());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Topics />
      <InputFormV2 />
      <ShowEntries />
      <RightAside />
      <Footer />
    </div>
  );
}

export default App;
