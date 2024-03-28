import React from "react";
import "./App.css";
import LandingPage from "./stores/pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import ComputerPage from "./stores/pages/ComputerPage";
import FridgePage from "./stores/pages/FridgePage";
import BookPage from "./stores/pages/BookPage";
import TvPage from "./stores/pages/TvPage";
import SpeakerPage from "./stores/pages/SpeakerPage";
import FurniturePage from "./stores/pages/FurniturePage";
import AcPage from "./stores/pages/AcPage";
import WatchPage from "./stores/pages/WatchPage";
import WomanPage from "./stores/pages/WomanPage";
import AcSingle from "./singlepages/AcSingle";
import BookSingle from "./singlepages/BooksSingle";
import SpeakerSingle from "./singlepages/SpeakerSingle";
import TvSingle from "./singlepages/TvSingle";
import FurnitureSingle from "./singlepages/FurnitureSingle";
import WatchSingle from "./singlepages/WatchSingle";
import WomanSingle from "./singlepages/WomanSingle";
import FridgeSingle from "./singlepages/FridgeSingle";
import ComputersSingle from "./singlepages/ComputersSingle";
import UserCart from "./stores/UserCart";

const App = () => {
  return (
    <div className="body">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/computers" element={<ComputerPage />} />
        <Route path="/fridge" element={<FridgePage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/books" element={<BookPage />} />
        <Route path="/speakers" element={<SpeakerPage />} />
        <Route path="/furniture" element={<FurniturePage />} />
        <Route path="/woman" element={<WomanPage />} />
        <Route path="/ac" element={<AcPage />} />
        <Route path="/watches" element={<WatchPage />} />
        <Route path="/ac/:id" element={<AcSingle />} />
        <Route path="/books/:id" element={<BookSingle />} />
        <Route path="/speakers/:id" element={<SpeakerSingle />} />
        <Route path="/tv/:id" element={<TvSingle />} />
        <Route path="/furniture/:id" element={<FurnitureSingle />} />
        <Route path="/watches/:id" element={<WatchSingle />} />
        <Route path="/woman/:id" element={<WomanSingle />} />
        <Route path="/fridge/:id" element={<FridgeSingle />} />
        <Route path="/computers/:id" element={<ComputersSingle />} />
        <Route path="/cart" element={<UserCart />} />
      </Routes>
    </div>
  );
};

export default App;
