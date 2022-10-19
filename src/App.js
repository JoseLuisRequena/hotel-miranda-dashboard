import { Routes, Route, useNavigate } from "react-router-dom";
import { Bookings } from "./pages/Bookings";
import { Rooms } from "./pages/Rooms";
import { Users } from "./pages/Users"
import { Contacts } from "./pages/Contacts";
import { Room } from "./components/Room";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { createContext, useEffect, useReducer } from "react";
import './App.css';
import RequireAuth from "./components/RequireAuth";

const initialUser = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : { auth:false, name: null, email:null };

const authReducer = (state, action) => {
    switch (action.type) {
      case "login":
        localStorage.setItem("auth", "true");
        return {
          ...state,
          auth: true,
          name: action.user.AdminName,
          email: action.user.AdminEmail,
        };
      case "logout":
        localStorage.removeItem("auth");
        return {
          ...state,
          auth: false,
          name: null,
          email: null,
        };
      case "changeName":
        localStorage.setItem("auth", JSON.stringify(state));
        return {
          ...state,
          name: action.name,
        };
      case "changeEmail":
        localStorage.setItem("auth", JSON.stringify(state));
        return {
          ...state,
          email: action.email,
        };
      default:
        return state;
    }
};

export const AuthContext = createContext();

function App() {
    const [state, dispatch] = useReducer(authReducer, initialUser);
    let navigate = useNavigate();

    useEffect(() => {
        if (state.auth) {
            localStorage.setItem("auth", JSON.stringify(state));
            navigate("/dashboard", { replace: true });
        } else {
            navigate("/", { replace: true });
        }
    }, [state.auth]);
    
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route path="/dashboard" element={<RequireAuth ><Dashboard /></RequireAuth>} />

                    <Route path="/rooms" element={<RequireAuth ><Rooms /></RequireAuth>} />

                    <Route path="/rooms/:room" element={<RequireAuth ><Room /></RequireAuth>} />

                    <Route path="/bookings" element={<RequireAuth ><Bookings /></RequireAuth>} />

                    <Route path="/users" element={<RequireAuth ><Users /></RequireAuth>} />

                    <Route path="/contacts" element={<RequireAuth ><Contacts /></RequireAuth>} />

                </Routes>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
