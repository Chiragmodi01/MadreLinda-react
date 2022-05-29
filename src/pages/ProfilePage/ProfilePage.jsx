import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './signup.css';
import {LoginAside} from '../../comps';
import AddressCard from '../../comps/ProfileCards/AddressCard'
import { useProducts } from '../../helpers/context/products-context';
import { toast } from 'react-toastify';

function ProfilePage() {
  const getLocalToken = localStorage.getItem("token");
  const [isAddress, setIsAddress] = useState(false);
  const [isUserData, setIsUserData] = useState(false);

  const { state, dispatch } = useProducts();

  const [userData, setUserData] = useState({
    "email":"",
    "password":""
  })

  const initialAddressState = {
    "title": "",
    "firstname": "",
    "lastname": "",
    "number": "",
    "country":"",
    "company":"",
    "address": "",
    "state": "",
    "zip": "",
    "city": ""
  }

  const [addressData, setAddressData] = useState({
    "title": "",
    "firstname": "",
    "lastname": "",
    "number": "",
    "country":"",
    "company":"",
    "address": "",
    "state": "",
    "zip": "",
    "city": ""
  })

  const demoAddress = {
    'title': "Mr",
    "firstname": "Matt",
    "lastname": "Davidson",
    "number": "+1-725-254-8767",
    "country":"United States",
    "company":"Blue Beluga",
    'address': "152, Rath Bridge, Negro Ohana Lane",
    "state": "Pennsylvania",
    "zip": "38204",
    "city": "Geneva"
  }
  

  const signupSubmitHandler = async(e) => {
    e.preventDefault()
    if(!getLocalToken) {
      try {
        const res = await axios.post("/api/auth/signup", userData);
        localStorage.setItem("token", res.data.encodedToken);
        setIsUserData(true);
      } catch(e) {
        console.log(e.message);
      }
    }
    dispatch({type: 'SHOW_LOGIN', payload: true});
    toast.error('Please login now');
  }

  const logOutUser = () => {
    localStorage.clear();
    dispatch({type: "USER_LOGIN", payload: false});
    setAddressData(initialAddressState)
    setUserDataLogin({"email":"","password":""})
    setIsAddress(false)
    localStorage.removeItem("address");
  }

  const addressSubmitHandler = (e) => {
    e.preventDefault()
    if(state.isLoggedIn) {
      setIsAddress(true);
      localStorage.setItem("address", JSON.stringify(addressData));
    } else {
      toast.error("Login first!");
      dispatch({type: 'SHOW_LOGIN', payload: true});
      setAddressData(initialAddressState)
    }
  }


  useEffect(() => {
    localStorage.getItem("token") &&  dispatch({type: "USER_LOGIN", payload: true});
    if("address" in localStorage) {
      const localAddress = localStorage.getItem("address", addressData);
      setIsAddress(true);
      setAddressData(JSON.parse(localAddress))
    }
    if("userData" in localStorage) {
      const localUserData = localStorage.getItem("userData");
      setIsUserData(true);
      setUserData(JSON.parse(localUserData))
    }
  }, [])

  return (
    <>
    <LoginAside />
    <div className='SignupPage' >
      <main className="signupPage-container">

        <div className="signupPage-header-wrapper">
          <h3 className="signupPage_header">Create an account</h3>
          <div className="flex-centered gap-8">
            <h3 className="signupPage_action-login cursor-pointer" onClick={() => {!getLocalToken ? dispatch({type: 'SHOW_LOGIN', payload: true}) : logOutUser()}}>
              {state.isLoggedIn ? "Log Out" : "Log In"}
            </h3>
          </div>
        </div>

        <form className="signupPage_left" onSubmit={(e) => signupSubmitHandler(e)}>
          <div className="signupPage_left_login-info">
            <div className="signupPage_left_login-info_title-wrapper">
              <p className="signupPage_left_login-info_title-text">Signup information</p>
              <p className="signupPage_left_login-info_title-required">* Required information</p>
            </div>
            <div className="login-info_input-wrapper">
              <input required placeholder="Email" type="email" name="/" className="signupPage_left_login-info_input email" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} />
            </div>
            <div className="login-info_input-wrapper">
              <input minlength="8" required placeholder="Password" type="password" name="/" className="signupPage_left_login-info_input pass" 
              value={userData.password}
              onChange={(e) => setUserData({...userData, password: e.target.value})}/>
            </div>
            <div className="signupPage_left_login-info_valid-pass-wrapper">
              <p className="login-info_valid-pass_left">Minimum 8 characters</p>
              <p className="login-info_valid-pass_right">Password Strength - - -</p>
            </div>
          </div>
          <div className="signupPage_right_billing-info_terms-wrapper">
              <input required type="checkbox" name="/" className="billing-info_terms-checkbox" />
              <p className="billing-info_terms-desc">
                I agree to receive information by email about offers, services, products and events from Madre Linda or other group companies, in accordance with the Privacy PolicyNew tab.
                <br/>
                <br/>
                By creating an account, you agree to accept the General Terms and Conditions of UseNew tab and that your data will be processed in compliance with the Privacy PolicyNew tab of Madrè Linda.
              </p>
          </div>
            <button type="submit" className="signupPage_action-create-ac btn-hover-rv cursor-pointer">Create an account</button>
        </form>

            {
            isAddress ?
            <AddressCard initialAddressState={initialAddressState} setAddress={setAddressData} address={addressData} setIsAddress={setIsAddress}/> :
            <form className="signupPage_right billing-info" onSubmit={(e) => addressSubmitHandler(e)}>
            <div className="billing-info_input-wrapper">
              <div className="signupPage_right_billing-info_title-wrapper">
                <p className="signupPage_right_billing-info_title-text">Billing information</p>
              </div>
            <div className="personal-info_input-wrapper first-name">
              <input required value={addressData.title} onChange={(e) => setAddressData({...addressData, title: e.target.value})}  placeholder="Title" type="text" name="/" className="signupPage_personal-info_input title" id="title" />
              <input required value={addressData.firstname} onChange={(e) => setAddressData({...addressData, firstname: e.target.value})}  placeholder="First Name" type="text" name="/" className="signupPage_personal-info_input first-name" id="first-name" />
            </div>
            <div className="personal-info_input-wrapper last-name">
              <input required value={addressData.lastname} onChange={(e) => setAddressData({...addressData, lastname: e.target.value})}  placeholder="Last Name" type="text" name="/" className="signupPage_personal-info_input last-name" />
            </div>
            <div className="personal-info_input-wrapper contact-no">
              <input required value={addressData.number} onChange={(e) => setAddressData({...addressData, number: e.target.value})}  placeholder="Telephone number" type="text" name="/" className="signupPage_personal-info_input contact-no" />
            </div>
              <input required onChange={(e) => setAddressData({...addressData, country: e.target.value})} value={addressData.country} placeholder="Please select your country" type="text" name="/" className="signupPage_right_billing-info_input email" />
              <input required onChange={(e) => setAddressData({...addressData, company: e.target.value})} value={addressData.company} placeholder="Comapny (optional)" type="text" name="/" className="signupPage_right_billing-info_input email" />
              <input required onChange={(e) => setAddressData({...addressData, address: e.target.value})} value={addressData.address} placeholder="Address" type="text" name="/" className="signupPage_right_billing-info_input email" />
              <input required onChange={(e) => setAddressData({...addressData, state: e.target.value})} value={addressData.state} placeholder="State" type="text" name="/" className="signupPage_right_billing-info_input email" />
              <input required onChange={(e) => setAddressData({...addressData, city: e.target.value})} value={addressData.city} placeholder="City" type="text" name="/" className="signupPage_right_billing-info_input email" />
              <input required onChange={(e) => setAddressData({...addressData, zip: e.target.value})} value={addressData.zip} placeholder="Zip code" type="number" name="/" className="signupPage_right_billing-info_input pass" />
            </div>
            <div className="signupPage_right_billing-info_terms-wrapper">
              <input type="checkbox" name="/" className="billing-info_terms-checkbox"
              onChange={(e) => e.target.checked ? setAddressData(demoAddress) : setAddressData(initialAddressState)}
              />
              <p className="billing-info_terms-desc">
                Fill demo address and personal information
              </p>
            </div>
            <button type="submit" className="signupPage_action-create-ac btn-hover-rv cursor-pointer">Add Address</button>
        </form>}
        
      </main>
    </div>
    </>
  )
}

export {ProfilePage}