import { Routes, Route, useNavigate } from "react-router-dom";
import { Bookings } from "./components/Bookings";
import { Rooms } from "./components/Rooms";
import { Users } from "./components/Users"
import { Contacts } from "./components/Contacts";
import { Room } from "./components/Room";
import Login from "./components/Login.tsx";
import Dashboard from "./components/Dashboard";
import { createContext, useEffect, useReducer } from "react";
import './App.css';
import RequireAuth from "./components/RequireAuth.tsx";
import { authReducer } from "./components/AuthReducer.tsx";

const initialUser = localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")) : { auth:false, name: null, email:null };

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
