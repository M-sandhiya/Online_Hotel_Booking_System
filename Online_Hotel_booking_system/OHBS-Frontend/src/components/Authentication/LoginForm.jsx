import { useState } from "react"; //1
import "./LoginForm.css";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

function Login() {
  const [isLogin, setIsLogin] = useState(true); //2

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  }); //3

  const [loginData, setLoginData] = useState({ //4
    email: "",
    password: "",
  });

  const handleSwitchToggle = () => {
    setIsLogin(!isLogin); //5
  };

  async function onLogInClick() { //6
    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const user = await response.json();
        alert("Login successful!");
        console.log("Logged in user:", user);
        // You can store user data in localStorage or context if needed
        // localStorage.setItem("user", JSON.stringify(user));
      } else {
        alert("Invalid email or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Error connecting to server.");
    }
  }

  async function onSignUpClick() { //7
    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Signup successful!");
        console.log("User registered:", data);
        setSignupData({ name: "", email: "", password: "", role: "CUSTOMER" });
        setIsLogin(true);
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error connecting to server.");
    }
  }

  return (
    <div className="page-container"> {/* 8 */}
      <Header />
      <main className="main-content">
        <div className="form-container">
          <div className="login-form">
            <div className="section text-center">
              <div className="custom-switch"> {/* 9 */}
                <span className={`switch-text ${isLogin ? "active" : ""}`}>
                  Log In
                </span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={!isLogin}
                    onChange={handleSwitchToggle}
                  />
                  <span className="slider"></span>
                </label>
                <span className={`switch-text ${!isLogin ? "active" : ""}`}>
                  Sign Up
                </span>
              </div>

              <div className="card-3d-wrap mx-auto"> {/* 10 */}
                <div className={`card-3d-wrapper ${isLogin ? "" : "flipped"}`}>
                  {/* Login Form */}
                  <div className="card-front rounded-3">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <div className="form-group">
                          <input
                            type="email"
                            name="logemail"
                            className="form-style"
                            placeholder="Your Email"
                            id="logemail"
                            autoComplete="off"
                            value={loginData.email} //11
                            onChange={(e) =>
                              setLoginData({ ...loginData, email: e.target.value }) //12
                            }
                          />
                          <i className="input-icon fa fa-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            className="form-style"
                            placeholder="Your Password"
                            id="logpass"
                            autoComplete="off"
                            value={loginData.password} //13
                            onChange={(e) =>
                              setLoginData({ ...loginData, password: e.target.value }) //14
                            }
                          />
                          <i className="input-icon fa fa-lock"></i>
                        </div>
                        <button onClick={onLogInClick} className="btn mt-4"> {/* 15 */}
                          Log In
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Signup Form */}
                  <div className="card-back rounded-3">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Sign Up</h4>
                        <div className="form-group">
                          <input
                            type="text"
                            name="regname"
                            className="form-style"
                            placeholder="Your Name"
                            id="regname"
                            autoComplete="off"
                            value={signupData.name}
                            onChange={(e) =>
                              setSignupData({ ...signupData, name: e.target.value })
                            }
                          />
                          <i className="input-icon fa fa-user"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="email"
                            name="regemail"
                            className="form-style"
                            placeholder="Your Email"
                            id="regemail"
                            autoComplete="off"
                            value={signupData.email}
                            onChange={(e) =>
                              setSignupData({ ...signupData, email: e.target.value })
                            }
                          />
                          <i className="input-icon fa fa-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            name="regpass"
                            className="form-style"
                            placeholder="Your Password"
                            id="regpass"
                            autoComplete="off"
                            value={signupData.password}
                            onChange={(e) =>
                              setSignupData({ ...signupData, password: e.target.value })
                            }
                          />
                          <i className="input-icon fa fa-lock"></i>
                        </div>
                        <div className="form-group mt-2">
                          <select
                            className="form-style"
                            value={signupData.role}
                            onChange={(e) =>
                              setSignupData({ ...signupData, role: e.target.value })
                            }
                          >
                            <option value="CUSTOMER">Customer</option>
                            <option value="ADMIN">Admin</option>
                            <option value="HOTEL_MANAGER">Hotel Manager</option>
                          </select>
                          <i className="input-icon fa fa-users"></i>
                        </div>

                        <button className="btn mt-4" onClick={onSignUpClick}>
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Card Wrapper */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
