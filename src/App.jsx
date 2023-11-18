import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import "./App.css";
import Layout from "./components/Layout";
import History from "./pages/History";
import DetailEvent from "./pages/DetailEvent";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/event-detail/:id" element={<DetailEvent />} />
        <Route path="/history-detail/:id" element={<DetailEvent />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
