import React, { useState } from 'react';
import './Auth.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function Auth({ Login, error }) {
    const [details, setDetails] = useState({ username: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='Auth'>
                <header className="Auth-header">
                    <div className='auth_container'>
                        <span style={{ color: 'orange', fontSize: '45px' }}>
                            Login page
                        </span>
                        {(error !== "") ? ( <div className="error">{error}</div> ): ""}
                        <div className='login_form'>
                            <label htmlFor='text' className='label'>Username: </label>
                            <input type='text' placeholder='Username' id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} required/> <br />
                            <label htmlFor='password' className='label'>Password: </label>
                            <input type='password' placeholder='Password' id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} required/>
                        </div>
                        <br />
                        <div className='buttons'>
                            <input type='submit' value="Login" className='Lbutton' />
                            <input type='submit' value='Register' className='Rbutton' />
                        </div>
                    </div>
                </header >
            </div>
        </form>
    )
}

export default Auth
