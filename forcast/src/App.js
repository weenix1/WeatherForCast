import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MyNavBar from "./components/NavBar/MyNavBar";
import MyFooter from "./components/Footer/MyFooter";
import HomePage from "./components/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <MyNavBar brand="Weenix-WeatherForcast" />
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
