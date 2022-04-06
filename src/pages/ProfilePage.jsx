import React from 'react'
import '../styles/profilepage/signup.css';
import LoginAside from '../comps/LoginAside';
import { useProducts } from '../helpers/context/products-context';

function ProfilePage() {
  const { state, dispatch } = useProducts();

  return (
    <>
    <LoginAside/>
    <div className='SignupPage' >
      <main className="signupPage-container">

        <div className="signupPage-header-wrapper">
          <h3 className="signupPage_header">Create an account</h3>
          <div className="flex-centered gap-8">
            <h3 className="signupPage_action-login cursor-pointer" onClick={() => dispatch({type: 'SHOW_LOGIN', payload: true})}> Log In</h3>
          </div>
        </div>

        <section className="signupPage_left">
          <div className="signupPage_left_login-info">
            <div className="signupPage_left_login-info_title-wrapper">
              <p className="signupPage_left_login-info_title-text">Login information</p>
              <p className="signupPage_left_login-info_title-required">* Required information</p>
            </div>
            <div className="login-info_input-wrapper">
              <input placeholder="Email" type="text" name="/" className="signupPage_left_login-info_input email" />
            </div>
            <div className="login-info_input-wrapper">
              <input placeholder="Password" type="text" name="/" className="signupPage_left_login-info_input pass" />
            </div>
            <div className="signupPage_left_login-info_valid-pass-wrapper">
              <p className="login-info_valid-pass_left">Minimum 8 characters</p>
              <p className="login-info_valid-pass_right">Password Strength - - -</p>
            </div>
          </div>

          <div className="signupPage_left_personal-info">
            <div className="signupPage_left_personal-info_title-wrapper">
              <p className="signupPage_left_login-info_title-text">Personal information</p>
            </div>
            <div className="personal-info_input-wrapper first-name">
              <input placeholder="Title" type="text" name="/" className="signupPage_personal-info_input title" id="title" />
              <input placeholder="First Name" type="text" name="/" className="signupPage_personal-info_input first-name" id="first-name" />
            </div>
            <div className="personal-info_input-wrapper last-name">
              <input placeholder="Last Name" type="text" name="/" className="signupPage_personal-info_input last-name" />
            </div>
            <div className="personal-info_input-wrapper contact-no">
              <input placeholder="Telephone number" type="text" name="/" className="signupPage_personal-info_input contact-no" />
            </div>
            <div className="personal-info_input-wrapper dob">
              <input placeholder="MM" type="text" name="/" className="signupPage_personal-info_input month" id="month" />
              <input placeholder="DD" type="text" name="/" className="signupPage_personal-info_input date" id="date" />
              <input placeholder="YYY" type="text" name="/" className="signupPage_personal-info_input year" id="year" />
            </div>
          </div>
        </section>

        <section className="signupPage_right billing-info">
            <div className="billing-info_input-wrapper">
              <div className="signupPage_right_billing-info_title-wrapper">
                <p className="signupPage_right_billing-info_title-text">Billing information</p>
              </div>
              <input placeholder="Please select your country" type="text" name="/" className="signupPage_right_billing-info_input email" />
              <input placeholder="Comapny" type="text" name="/" className="signupPage_right_billing-info_input email" />
              <input placeholder="Address" type="text" name="/" className="signupPage_right_billing-info_input email" />
              <input placeholder="Address continued" type="text" name="/" className="signupPage_right_billing-info_input email" />
              <input placeholder="State" type="text" name="/" className="signupPage_right_billing-info_input email" />
              <input placeholder="City" type="text" name="/" className="signupPage_right_billing-info_input email" />
              <input placeholder="Zip code" type="text" name="/" className="signupPage_right_billing-info_input pass" />
            </div>
            <div className="signupPage_right_billing-info_terms-wrapper">
              <input type="checkbox" name="/" className="billing-info_terms-checkbox" />
              <p className="billing-info_terms-desc">
                I agree to receive information by email about offers, services, products and events from Hermes or other group companies, in accordance with the Privacy PolicyNew tab.
                <br/>
                <br/>
                By creating an account, you agree to accept the General Terms and Conditions of UseNew tab and that your data will be processed in compliance with the Privacy PolicyNew tab of Hermès.
              </p>
            </div>
            <button type="submit" className="signupPage_action-create-ac btn-hover-rv cursor-pointer">Create an account</button>
        </section>
        
      </main>
    </div>
    </>
  )
}

export default ProfilePage