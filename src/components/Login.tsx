import React from "react";
import { useState, useEffect } from "react";
import "./styling/login.css";

//Material UI
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//React Router
import { Link } from "react-router-dom";

//Images
import iceberg from "../images/login.jpg";
import logo from "../images/logo.png";


interface UserState {
  username: string;
  password: string;
  showPassword: boolean;
}

interface LoginProps {
  children?: React.ReactNode;
}
const Login: React.FC<LoginProps> = () => {
  const [values, setValues] = useState<UserState>({
    username: "",
    password: "",
    showPassword: false,
  });

  const [showingLogin, setShowingLogin] = useState(false);

  const handleChange =
    (prop: keyof UserState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="box">
        <div className="left-section">
          <img src={iceberg} alt="tester" className="login-image" />
        </div>
        <div className="right-section">
          <img src={logo} className="logo-image" alt="front page" />
          <form className="form">
            <TextField
              label="UserName"
              required
              sx={{ m: 1, width: "35ch" }}
              onChange={handleChange("username")}
            ></TextField>
            <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
              <InputLabel required htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {showingLogin && (
                <Link to="/Mainpage" className="link_NoDecoration">
                  <Button
                    type="submit"
                    variant="outlined"
                    sx={{ m: 1, width: "39ch" }}
                    onClick={() => {
                    }}
                  >
                    Log In
                  </Button>
                </Link>
              )}
            </FormControl>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
