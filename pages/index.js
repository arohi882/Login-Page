import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'test@example.com' && password === '123456') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container">
      {!isLoggedIn ? (
        <form className="card" onSubmit={handleLogin}>
          <h2 className="title">Login</h2>
          <label>Email</label>
          <input
            className="input"
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            className="input"
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="button" type="submit">Login</button>
        </form>
      ) : (
        <div className="card">
          <h2 className="title">Welcome, {email}!</h2>
          <button className="button" onClick={handleLogout}>Logout</button>
        </div>
      )}
      <style jsx>{`
     .container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f0f2f5;
          padding: 20px;
          color: black;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 400px;
          color: black;
        }

        .title {
          text-align: center;
          margin-bottom: 20px;
          color: black;
          font-size: 24px;
        }

        .input {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 6px;
          color: black;
        }

        .button {
          width: 100%;
          padding: 10px;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: bold;
          transition: background 0.2s;
        }

        .button:hover {
          background: #005bb5;
        }

        label {
          font-weight: 500;
          margin-bottom: 5px;
          display: block;
          color: black;
        }
      `}</style>
    </div>
  );
}
