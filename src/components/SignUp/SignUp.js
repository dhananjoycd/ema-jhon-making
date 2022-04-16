import React from 'react';
import './SignUp.css';
import '../Login/Login.css';

const SignUp = () => {

    
    return (<div className='form-container'>
    <div>
    
        <h2 className='form-title'>Login</h2>
    
        <form onSubmit={handleUserSignIn}>
    
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
            </div>
    
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
            </div>
    
            <p style={{ color: 'red' }}>{error?.message}</p>
    
            {
                loading && <p>Loading...</p>
            }
    
            <input className='form-submit' type="submit" value="Login" />
    
        </form>
    
        <p>
            Already Have an Account? <Link className='form-link' to="/Login">Login</Link>
        </p>
    
    </div>
    
    </div>
    );
};

export default SignUp;