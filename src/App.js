import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { Bookings } from "./components/Bookings";
import { Rooms } from "./components/Rooms";
import { Users } from "./components/Users"
import { Contacts } from "./components/Contacts";
import { Room } from "./components/Room";
import { Nav } from "./styles/Nav";
import { StyledLink } from "./styles/StyledLink";
import { Contenedor } from "./styles/Contenedor";
import { StyledLogin } from "./styles/StyledLogin";
import { StyledImg } from "./styles/StyledImg";
import { StyledInput } from "./styles/StyledInput";
import { StyledForm } from "./styles/StyledForm";
import { StyledButton } from "./styles/StyledButton";
import { Icons, StyledHeader } from "./styles/StyledIcons";
import { createContext, useContext, useEffect, useReducer, useState } from "react";
import './App.css';
import { WrapperMenuRight } from "./styles/WrapperMenuRight";


function RequireAuth({children}) {
    const { state } = useContext(AuthContext);
    let location = useLocation();
    if (!state.auth) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
};

const Login = () => {
    const { dispatch } = useContext(AuthContext);
    const [user, setUser] = useState("Admin");
    const [password, setpassword] = useState("Admin");
  
    const adminUser ={
        name: "Admin",
        email: "Admin@Admin.com",
        password: "Admin"
    }

    const adminData = {
        AdminName: adminUser.name,
        AdminEmail: adminUser.email
    } 

    const handleSubmit = (event) => {
      event.preventDefault();
      if (user === adminUser.name && password === adminUser.password) {
        dispatch({ type: "login", user: adminData });
      }
    };

    return (
        <StyledLogin>
                <StyledImg/>
            <StyledForm 
                onSubmit={handleSubmit}
                user={user}
                setUser={setUser}
                password={password}
                setpassword={setpassword}
            >
                <label>
                    <StyledInput  
                        type="text"
                        name="user"
                        id="user"
                        placeholder="User = Admin"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    /><br/>
                    <StyledInput 
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password = Admin"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    /><br/>
                </label>
                <StyledButton type="submit" >Login</StyledButton>
            </StyledForm>
        </StyledLogin>
    )
}

const Dashboard = () => {
    const { state, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const Logout = () => {
        dispatch({ type: "logout" });
        navigate("/", { replace: true });
    };

  return (
    <Contenedor>
        <Nav>
            <div>
               <StyledImg />
            </div>
            <div>
                <StyledLink to="/dashboard">Dashboard</StyledLink><br/>
                <StyledLink to="/bookings">Bookings</StyledLink><br/>
                <StyledLink to="/rooms">Rooms</StyledLink><br/>
                <StyledLink to="/users">Users</StyledLink><br/>
                <StyledLink to="/contacts">Contacts</StyledLink><br/>
            </div>
        </Nav>
        <StyledHeader >
            <h2>Dashboard</h2>
            <WrapperMenuRight>
            <button 
                style={{
                    width: "40px", 
                    height: "30px", 
                    margin: "auto 0px", 
                    border: "none", 
                    background: "none",
                    cursor: "pointer"
                }} 
                type="button"
            >
                {Icons.enveloper}
            </button>
            <button 
                style={{
                    width: "40px", 
                    height: "30px", 
                    margin: "auto 0px", 
                    border: "none", 
                    background: "none",
                    cursor: "pointer"
                }} 
                type="button"
            >
                {Icons.bell}
            </button>
            <button 
                style={{
                    width: "40px", 
                    height: "30px", 
                    margin: "auto 0px", 
                    border: "none", 
                    background: "none",
                    cursor: "pointer"
                }} 
                type="button" 
                onClick={() => Logout() }
            >
                {Icons.logout}
            </button>
            </WrapperMenuRight>
        </StyledHeader>
    </Contenedor>
  );  
}

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
    //const [displayLat, setDisplayLat] = useState("block");


    //const [auth, setAuth] = useState(localStorage.getItem("auth") !== null);-------
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
