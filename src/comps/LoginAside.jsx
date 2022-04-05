import React from 'react'
import { useProducts } from '../helpers/context/products-context';
import '../styles/profilepage/login.css';
import '../styles/utils/utils.css';
import { IoClose } from 'react-icons/io5';

function LoginAside( ) {

    const { state, dispatch } = useProducts();
    
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
                <form action="/" className="loginPage_form">
                    <input placeholder="Email" type="text" name="/" className="loginPage_form_input input-email" />
                    <input placeholder="Password" type="text" name="/" className="loginPage_form_input input-pass" />
                    <div className="loginPage_form_checkbox-wrapper">
                        <input type="checkbox" name="/" id="remember-me" className="loginPage_form_checkbox" />
                        <label for="remember-me" className="loginPage_form_checkbox-label">Remember me</label>
                    </div>
                    <button type="submit" className="loginPage_from_submit cursor-pointer">Login</button>
                    <a href="/" className="loginPage_from_action-forgot-pass">Forgot my password</a>
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

export default LoginAside