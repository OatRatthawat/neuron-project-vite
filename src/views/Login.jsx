import './Login.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import loginImage from '../assets/images/img-login.png';
import logo from '../assets/images/logo.png';
import { Login as requestLogin } from "../api/common.jsx";
import { SET_TOKEN } from '../store/index.jsx';
import { useDispatch } from 'react-redux';
// import { initializeInterceptor } from '../utils/http';

function Login(){
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({userName: "", password: ""})
    const [errors, setErrors] = useState({});
    const handleFormChange = (e) => {
      
      const {name, value} = e.target;
      setForm({
        ...form, [name]: value
      })

      if(errors[name]){
        setErrors((prevError) => {  
          const updatedErrors = {...prevError};
          delete updatedErrors[name];
          return updatedErrors;
        })
      }
    }

    const validation = (name, value)  => {
      let error = "";
      if(name === "userName" && !value){
        error = "Please enter the username";
      }
      else if(name === "password" && !value){
        error = "Please enter the password";
      }
      
      setErrors((prevError) => ({
        ...prevError, [name]: error
      }))
    }

    const handleBur = (e) => {
      const {name, value} = e.target;
      validation(name, value);
    }

    const handleSubmit = async () => {
        if (validation()) return;
      
        try {
          const { userName, password } = form;
      
          // Call the login API
          const response = await requestLogin({ name: userName, pass: password });
      
          // Assuming the token is in response.data.token
          const token = response.data.token;

          dispatch(SET_TOKEN(token));
          
          // initializeInterceptor();

          // Test request

          // http.get('/version')
          //     .then((response) => console.log("Response received:", response))
          //     .catch((error) => console.error("Request failed:", error));
          navigate("/");
        } catch (error) {
          const errorMessage =
            error.response?.data?.message || "Login failed. Please try again.";
          setErrors((prevErrors) => ({ ...prevErrors, server: errorMessage }));
        }
    };

    return(
    <>
      <div className='login-page'>
        <div className='container'>
            <div className='login-card'>
              <div className='card'>
                  <img className="img-login" src={loginImage} alt='img-login'/>
                    <div className="login-main">
                      <img className="img-logo" src={logo} alt="technimal-logo" width="141" />
                            <form onSubmit={(e) => {
                              e.preventDefault();
                              handleSubmit();}}>
                                <div className="emqx-form-item">
                                  <input className={`emqx-input ${errors.userName ? "error" : ""}`} type="text" 
                                         name="userName" placeholder="Username" 
                                         value={form.userName} onChange={handleFormChange}
                                          autoComplete="off" onBlur={handleBur}
                                         />
                                  <div className={`error-message ${errors.userName ? "visible" : ""}`}>
                                    {errors.userName}
                                  </div>
                                </div>
                                <div className="emqx-form-item">
                                  <input className={`emqx-input ${errors.password ? "error" : ""}`} type="password" 
                                        name="password" placeholder="Password" 
                                         value={form.password} onChange={handleFormChange}
                                          autoComplete="off" onBlur={handleBur}
                                         />
                                  <div className={`error-message ${errors.password ? "visible" : ""}`}>
                                    {errors.password}
                                  </div>
                                </div>
                              <button className="emqx-button">Login</button>
                            </form>
                    </div>  
              </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default Login;