import React, { useState } from 'react';


function Login() {

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  
  const loginUser = async (e) => {
  e.preventDefault();

  const response = await fetch("http://localhost:8000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: Email,
      password: Password,
    }),
  });

  const data = await response.json(); // Moved this before the check

  console.log(data); // Optional: inspect response

  if (response.ok) {
    alert("Login successful");
    // Optionally save token if backend returns one
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    window.location.href = "/dashboard";
  } else {
    alert(data.message || "Login failed");
  }
};


  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <br /><br />
        <input type="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <input type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;