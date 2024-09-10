import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Home from "./components/Home";
import ProfilePage from "./components/ProfilePage";
import AuthenticationGuard from "./components/AuthenticationGuard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<AuthenticationGuard component={ProfilePage} />}
          />
        </Routes>
      </BrowserRouter>
      {/* <NavBar />
      <Profile />
      <LoginButton />
      <LogoutButton /> */}
    </>
  );
}

export default App;
