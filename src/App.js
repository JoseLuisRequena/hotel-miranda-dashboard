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
import { useEffect, useState } from "react";
import './App.css';


const RequireAuth = (props) => {
    let location = useLocation();
  
    if (!props.auth) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
    return props.children;
};

const Login = (props) => {
    let navigate = useNavigate();
    let location = useLocation();
    const [user, setUser] = useState("");
    const [password, setpasword] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (user === "Admin" && password === "Admin") {
        props.setAuth(true);
        let from = location.state?.from?.pathname || "/dashboard";
        navigate(from, { replace: true });
      } else {
        alert('invalid username or password')
        props.setAuth(false);
      }
    };
    return (
        <StyledLogin>
                <StyledImg/>
            <StyledForm onSubmit={handleSubmit}>
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
                        onChange={(e) => setpasword(e.target.value)}
                    /><br/>
                </label>
                <StyledButton type="submit" >Login</StyledButton>
            </StyledForm>
        </StyledLogin>
    )
}

const Dashboard = (props) => {
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
            <h1>Dashboard</h1><h1></h1><h1></h1>
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
                onClick={() => props.setAuth(false)}
            >
                {Icons.logout}
            </button>
            
        </StyledHeader>
    </Contenedor>
  );  
}

function App() {
  const [auth, setAuth] = useState(localStorage.getItem("auth") !== null);
  useEffect(() => {
    if (auth) {
      localStorage.setItem("auth", true);
    } else {
      localStorage.removeItem("auth");
    }
  }, [auth]);
  return (
    
    <div className="App">
        <Routes>
            <Route path="/" element={<Login setAuth={setAuth}/>} />
            
            <Route path="/dashboard" element={<RequireAuth auth={auth}><Dashboard setAuth={setAuth} auth={auth}/></RequireAuth>} />
            
            <Route path="/rooms" element={<RequireAuth auth={auth}><Rooms setAuth={setAuth}/></RequireAuth>} />
            
            <Route path="/rooms/:room" element={<RequireAuth auth={auth}><Room setAuth={setAuth}/></RequireAuth>} />
            
            <Route path="/bookings" element={<RequireAuth auth={auth}><Bookings setAuth={setAuth}/></RequireAuth>} />
            
            <Route path="/users" element={<RequireAuth auth={auth}><Users setAuth={setAuth}/></RequireAuth>} />
            
            <Route path="/contacts" element={<RequireAuth auth={auth}><Contacts setAuth={setAuth}/></RequireAuth>} />
        
        </Routes>
    </div>
  );
}

export default App;
