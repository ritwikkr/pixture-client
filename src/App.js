import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import NowPlaying from "./pages/NowPlaying";
import AuthenticationPage from "./pages/AuthenticationPage";
import FavouritePage from "./pages/FavouritePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/detailPage/:id" element={<DetailPage />} />
        <Route path="/now-playing" element={<NowPlaying />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/fav" element={<FavouritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
