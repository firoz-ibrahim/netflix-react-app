import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/authContext";
import Login from "./pages/Login";
import Signup from "./pages/signUp";
import Account from "./pages/Account";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={< Login/>} />
          <Route path="/account" element={
            <ProtectedRoutes>

              < Account/>
            </ProtectedRoutes>
            
            } />
          <Route path="/signup" element={< Signup/>} />
          
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
