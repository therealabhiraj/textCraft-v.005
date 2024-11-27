import React, { useState } from "react";
import * as Components from "../components/Componentsh";
import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate

// Configure Axios
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function Login() {
  const [signIn, toggle] = useState(true);

  // State for sign-up inputs
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // State for sign-in inputs
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  // State for feedback messages
  const [message, setMessage] = useState("");

  // Create a navigate instance
  const navigate = useNavigate();  // Hook for navigation

  // Handle input changes for sign-up
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle input changes for sign-in
  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Sign-Up submission
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/register", signUpData);  // Change to /user/register
      setMessage("Account created successfully! Please sign in.");
      toggle(true);
    } catch (error) {
      setMessage(
        error.response?.data?.errors
          ?.map((err) => err.msg)
          .join(", ") || "Sign Up Failed!"
      );
    }
  };

  // Handle Sign-In submission
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/user/login", signInData); // Send login request
      const token = response.data.token; // Get the token from the response

      // Check if the token exists
      if (token) {
        // Store the token in a cookie with a 1-hour expiration time
        document.cookie = `token=${token}; path=/; max-age=${3600}; secure=${process.env.NODE_ENV === 'production'}`;

        // Log the token for debugging purposes
        console.log("Token stored in cookie:", token);

        // Redirect the user to /genimg after successful login
        navigate("/");
      } else {
        setMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      // Handle login errors
      setMessage(
        error.response?.data?.message || "Sign In Failed!"
      );
    }
  };


  return (
    <>
      <div className="w-full h-screen bg-zinc-800 flex justify-center items-center">
        <Components.Container>
          {message && <p className="message">{message}</p>}

          {/* Sign-Up Form */}
          <Components.SignUpContainer signingIn={signIn}>
            <Components.Form onSubmit={handleSignUp}>
              <Components.Title>Create Account</Components.Title>
              <Components.Input
                type="text"
                placeholder="Username"
                name="username"
                value={signUpData.username}
                onChange={handleSignUpChange}
              />
              <Components.Input
                type="email"
                placeholder="Email"
                name="email"
                value={signUpData.email}
                onChange={handleSignUpChange}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                name="password"
                value={signUpData.password}
                onChange={handleSignUpChange}
              />
              <Components.Button type="submit">Sign Up</Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          {/* Sign-In Form */}
          <Components.SignInContainer signingIn={signIn}>
            <Components.Form onSubmit={handleSignIn}>
              <Components.Title>Sign In</Components.Title>
              <Components.Input
                type="text"
                placeholder="Username"
                name="username"
                value={signInData.username}
                onChange={handleSignInChange}
              />
              <Components.Input
                type="password"
                placeholder="Password"
                name="password"
                value={signInData.password}
                onChange={handleSignInChange}
              />
              <Components.Anchor href="#">Forgot your password?</Components.Anchor>
              <Components.Button type="submit">Sign In</Components.Button>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signingIn={signIn}>
            <Components.Overlay signingIn={signIn}>
              <Components.LeftOverlayPanel signingIn={signIn}>
                <Components.Title>Welcome Back!</Components.Title>
                <Components.Paragraph>
                  To keep connected with us, please login with your personal info.
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signingIn={signIn}>
                <Components.Title>Hello, Friend!</Components.Title>
                <Components.Paragraph>
                  Enter your personal details and start your journey with us.
                </Components.Paragraph>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Sign Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </div>

      {/* Small screen */}
      <div className="sm:hidden border flex justify-center items-center  h-screen w-screen py-1/2">
        <Components.Containersm>
          {message && <p className="message">{message}</p>}

          {/* Sign-Up Form */}
          <Components.SignUpContainer signingIn={signIn}>
            <Components.Formsm onSubmit={handleSignUp}>
              <Components.Titlesm>Create Account</Components.Titlesm>
              <Components.Inputsm
                type="text"
                placeholder="Username"
                name="username"
                value={signUpData.username}
                onChange={handleSignUpChange}
              />
              <Components.Inputsm
                type="email"
                placeholder="Email"
                name="email"
                value={signUpData.email}
                onChange={handleSignUpChange}
              />
              <Components.Inputsm
                type="password"
                placeholder="Password"
                name="password"
                value={signUpData.password}
                onChange={handleSignUpChange}
              />
              <Components.Buttonsm type="submit">Sign Up</Components.Buttonsm>
            </Components.Formsm>
          </Components.SignUpContainer>

          {/* Sign-In Form */}
          <Components.SignInContainer signingIn={signIn}>
            <Components.Formsm onSubmit={handleSignIn}>
              <Components.Titlesm>Sign In</Components.Titlesm>
              <Components.Inputsm
                type="text"
                placeholder="Username"
                name="username"
                value={signInData.username}
                onChange={handleSignInChange}
              />
              <Components.Inputsm
                type="password"
                placeholder="Password"
                name="password"
                value={signInData.password}
                onChange={handleSignInChange}
              />
              <Components.Anchor href="#">Forgot your password?</Components.Anchor>
              <Components.Buttonsm type="submit">Sign In</Components.Buttonsm>
            </Components.Formsm>
          </Components.SignInContainer>

          <Components.OverlayContainer signingIn={signIn}>
            <Components.Overlay signingIn={signIn}>
              <Components.LeftOverlayPanelsm signingIn={signIn}>
                <Components.Titlesm>Welcome Back!</Components.Titlesm>
                <Components.Paragraphsm>
                  To keep connected with us, please login with your personal info.
                </Components.Paragraphsm>
                <Components.GhostButton onClick={() => toggle(true)}>
                  Sign In
                </Components.GhostButton>
              </Components.LeftOverlayPanelsm>

              <Components.RightOverlayPanelsm signingIn={signIn}>
                <Components.Titlesm>Hello, Friend!</Components.Titlesm>
                <Components.Paragraphsm>
                  Enter your personal details and start your journey with us.
                </Components.Paragraphsm>
                <Components.GhostButton onClick={() => toggle(false)}>
                  Sign Up
                </Components.GhostButton>
              </Components.RightOverlayPanelsm>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Containersm>
      </div>
    </>
  );
}

export default Login;
