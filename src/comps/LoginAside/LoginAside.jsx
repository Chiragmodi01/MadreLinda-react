import React, { useState } from 'react'
import axios from 'axios'
import { useProducts } from '../../helpers/context/products-context';
import './login.css';
import { IoClose } from '../../utils/getIcons';
import { useNavigate } from 'react-router-dom';

function LoginAside( ) {

    const { state, dispatch } = useProducts();

    let navigate = useNavigate();

    const [userDataLogin, setUserDataLogin] = useState({
        "email": "",
        "password": ""
      })

    
      const loginSubmitHandler = async(e) => {
          e.preventDefault();
        try {
            const res = await axios.post("/api/auth/login", userDataLogin);
            localStorage.setItem("userData", JSON.stringify(userDataLogin));
            localStorage.setItem("token", res.data.encodedToken);
            dispatch({type: "USER_LOGIN", payload: true});
            dispatch({type: 'SHOW_LOGIN', payload: false});
            alert("User Logged In")
            navigate('/products');
          } catch(e) {
            console.log(e.message);
            alert("Error! check your details and try again!")
          }
      }

      const fillGuestUser = async(e) => {
        const tempUserData = {
          "email": "brownboychris@gmail.com",
          "password": "chrisbrown"
        }
        e.preventDefault();
        try {
            const res = await axios.post("/api/auth/login", tempUserData);
            localStorage.setItem("token", res.data.encodedToken);
            localStorage.setItem("userData", JSON.stringify(tempUserData));
            dispatch({type: "USER_LOGIN", payload: true})
            dispatch({type: 'SHOW_LOGIN', payload: false});
            navigate('/products');
            alert("User Logged In")
          } catch(e) {
            console.log(e.message);
          }
      }
    
  return (
    <div className={ state.showLogin ? 'loginAside' : 'loginAsideHidden'} >
        <div className="loginpage_blur" onClick={() => dispatch({type: 'SHOW_LOGIN', payload: false})}></div>
        <main className="loginPage-container">
            <div className="loginPage_top">
                <div className="loginPage_header">
                    <div className="loginPage_header_title-wrapper">
                        <h4 className="loginPage_header_title">Login</h4>
                        <IoClose className='cursor-pointer' size='1em' onClick={() => dispatch({type: 'SHOW_LOGIN', payload: false})}/>
                    </div>
                    <p className="loginPage_header_desc">If you are a registered user, please enter your email and password.</p>
                </div>
                <form action="/" className="loginPage_form" onSubmit={(e) => loginSubmitHandler(e)}>
                    <input required placeholder="Email" type="email" name="/" className="loginPage_form_input input-email" 
                    value={userDataLogin.email} onChange={(e) => setUserDataLogin({...userDataLogin, email: e.target.value})}/>
                    <input required minlength="8" placeholder="Password" type="password" name="/" className="loginPage_form_input input-pass" 
                    value={userDataLogin.password} onChange={(e) => setUserDataLogin({...userDataLogin, password: e.target.value})}/>
                    <div className="loginPage_form_checkbox-wrapper">
                        <input required type="checkbox" name="/" id="remember-me" className="loginPage_form_checkbox" />
                        <label for="remember-me" className="loginPage_form_checkbox-label">Remember me</label>
                    </div>
                    <button type="submit" className="loginPage_from_submit cursor-pointer" >Login</button>
                    <button className="loginPage_from_action-forgot-pass" onClick={(e) => fillGuestUser(e)}>Guest Login</button>
                </form>
            </div>
        
            <div className="loginPage_bottom">
                <div className="loginPage_bottom_header-wrapper">
                    <h4 className="loginPage_bottom_header_title">Get an account now</h4>
                    <p className="loginPage_bottom_header_desc">Save credit card details for faster shopping Manage your order history Gain access to your Wishlist</p>
                </div>
                <button className="loginPage_bottom_action cursor-pointer" onClick={() => dispatch({type: 'SHOW_LOGIN', payload: false})}>Register now</button>
            </div>
        </main>
    </div>
  )
}

export {LoginAside}