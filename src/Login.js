import React, { useState } from 'react';
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventdefault();
        console.log(email)
    }
    return(
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" id="email" name="email"/> 
                <label htmlFor="password">password</label>
                <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="xxxxxxxx234" id="password" name="password"/>
                <button type="submit">Login</button>
            </form>
            <button className="lnk-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            
        </div>

    )
}