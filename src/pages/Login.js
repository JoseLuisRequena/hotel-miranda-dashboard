import { useContext, useState } from "react";
import { AuthContext } from "../App";
import { StyledButton } from "../styles/StyledButton";
import { StyledForm } from "../styles/StyledForm";
import { StyledImg } from "../styles/StyledImg";
import { StyledInput } from "../styles/StyledInput";
import { StyledLogin } from "../styles/StyledLogin";

export default function Login() {
    const { dispatch } = useContext(AuthContext);
    const [user, setUser] = useState("Admin");
    const [password, setpassword] = useState("Admin");

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const options = {
            method: 'POST',
            body: 
                JSON.stringify({
                  username: user,
                  password: password
                }),
            headers: {
              'Content-Type': 'application/json'
            },
        };
        const response = await fetch('http://localhost:3001/login', options);
        const res = await response.json();
        if (res.token) {
            dispatch({ 
                type: "login",
                user, 
                password, 
                token: res.token
            });
        }
      } catch (err) {
          event.target.reset('');
          alert('Login failed');
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
