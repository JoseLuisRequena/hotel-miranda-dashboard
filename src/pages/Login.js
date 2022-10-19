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
  
    const adminUser ={
        name: "Admin",
        email: "Admin@Admin.com",
        password: "Admin"
    }

    const adminData = {
        AdminName: adminUser.name,
        AdminEmail: adminUser.email
    } 

    const handleSubmit = async (event) => {
      event.preventDefault();
      //if (user === adminUser.name && password === adminUser.password) {
      //  dispatch({ type: "login", user: adminData });
      //}
      try {
        const options = {
            method: 'POST',
            body: 
                JSON.stringify({
                  username: "Admin",
                  password: "Admin"
                }),
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json'
            },
        };
        const res = await fetch('http://localhost:3001/login', options);
        console.log(res);
        if (res.token) {
            console.log('se conecto')
            dispatch({ type: "login", value: {user: adminData, token: res.token} });
        //  dispatchAuth({
        //    type: 'LOGIN',
        //    value: {
        //        email: inputs.email,
        //        token: res.token,
            }//,
        //  });
        //  navigate(from, { replace: true });
        //}
      } catch (err) {
        alert('Login failed');
        //e.target.reset();
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