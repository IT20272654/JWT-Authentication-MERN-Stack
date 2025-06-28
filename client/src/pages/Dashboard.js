import React, { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode'; 

function Dashboard() {
  useEffect(() => {
    const token = localStorage.getItem('token');

    // If token is not found
    if (!token) {
      alert('You are not logged in');
      window.location.href = '/login';
      return;
    }

    try {
      const user = jwtDecode(token);

      // If user data is missing or token is malformed
      if (!user || !user.email) {
        throw new Error('Invalid token');
      }

      // Optional: log user info
      console.log('Logged in user:', user);
    } catch (err) {
      console.error('Token decode failed:', err);
      alert('Invalid or expired token');
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <p>Welcome to your secure dashboard page!</p>
    </div>
  );
}

export default Dashboard;
