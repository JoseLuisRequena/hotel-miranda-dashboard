import { useContext, useState } from "react";
import { AuthContext } from "../App";
import { StyledButton } from "../styles/StyledButtons";
import { StyledForm } from "../styles/StyledForm";
import { StyledImg } from "../styles/StyledImg";
import { StyledInput } from "../styles/StyledInput";
import { StyledLogin } from "../styles/StyledLogin";

export default function Login() {
    const { dispatch } = useContext(AuthContext);
    const [user, setUser] = useState("");
    const [password, setpassword] = useState("");

    //usuario de visualización
    const adminUser ={
        name: "Admin",
        email: "Admin@Admin.com",
        password: "Admin"
    }

    const email= user + '@Miranda.com'

    const handleSubmit = event => {
        event.preventDefault();
        if (user === adminUser.name && password === adminUser.password) {
            dispatch({ 
                type: "login",
                user,
                email, 
            });
        }
    }

    //coneccion a BBDD
    /*const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const options = {
                method: 'POST',
                body: 
                    JSON.stringify({
                      username: user,
                      password: password,
                    }),
                headers: {
                  'Content-Type': 'application/json'
                },
            };
            const response = await fetch('http://localhost:3001/login', options);
            const email= user + '@Miranda.com'
            const res = await response.json();
            if (res.token) {
                dispatch({ 
                    type: "login",
                    user, 
                    password,
                    email,
                    token: res.token
                });
            }
        } catch (err) {
            event.target.reset('');
            alert('Login failed');
        }
    };
    */

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
