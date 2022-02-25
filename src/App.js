import TopBar from "./components/topbar/TopBar"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import HomePage from "./pages/home/home";
import Single from "./pages/single/Single";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const user = false
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={user ? <HomePage /> : <Login />} />
        <Route path="/register" element={user ? <HomePage /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
