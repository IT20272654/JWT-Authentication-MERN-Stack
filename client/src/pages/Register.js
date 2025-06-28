import React, { useState } from 'react';



function App() {

  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: Username,
        email: Email,
        password: Password,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input type="text" placeholder="Username" value={Username} onChange={(e) => setUsername(e.target.value)} />
        <br /><br />
        <input type="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <input type="password" placeholder="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
