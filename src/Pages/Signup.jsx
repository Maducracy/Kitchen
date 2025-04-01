import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../Pages/Banner.png"
import "./Signup.css"


function Signup (){
  return (
    <div className='Signup_media' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f9fafb' }}>
      <div style={{display:"flex"}} className='image-ctn'>
         <img className="img-sigin-ctn" src={Banner} alt="" />
      </div>
      <div style={{ padding: '32px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.05)', maxWidth: '400px', width: '100%' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>Sign up to Chef Kitchen</h1>
        
        <button style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', color: '#fff', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Logo" style={{ width: '20px', height: '20px', marginRight: '8px', cursor: "pointer" }} />
          Sign up with Google
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <hr style={{ flexGrow: 1, border: '1px solid #e5e7eb' }} />
          <span style={{ margin: '0 8px', color: '#6b7280' }}>or</span>
          <hr style={{ flexGrow: 1, border: '1px solid #e5e7eb' }} />
        </div>
        
        <input 
          type="email" 
          placeholder="Continue with email" 
          style={{ width: '93%', padding: '12px', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '24px', height:"20px" }}
        />
        
        <p style={{ fontSize: '12px', color: '#6b7280', textAlign: 'center', marginBottom: '16px' }}>
          By creating an account you agree with our
          <a href="#" style={{ color: '#3b82f6' }}> Terms of Service</a>,
          <a href="#" style={{ color: '#3b82f6' }}> Privacy Policy</a>,
          and our default <a href="#" style={{ color: '#3b82f6' }}>Notification Settings</a>.
        </p>

        <p style={{ textAlign: 'center', color: '#6b7280' }}>Already have an account? <Link style={{textDecoration:"none", color: "blue"}} to={"/Signin"}>Sign In</Link></p>
      </div>
    </div>
  );
};

export default Signup;
