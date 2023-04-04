import React, { useState } from 'react';
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = (e) => {
        e.preventdefault();
        console.log(email)
    }

    return(
        <div className="auth-form-container">
            <form  className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" id="name" name="name"/> 
                <label htmlFor="email">email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" id="email" name="email"/> 
                <label htmlFor="password">password</label>
                <input type="Password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="xxxxxxxx234" id="password" name="password"/>
                <button type="submit">Login</button>
            </form>
            <button className="lnk-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            
        </div>

        
    )
}