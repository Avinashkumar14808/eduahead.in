import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/login', { username, password }, { withCredentials: true });
      navigate('/');
    } catch (error) {
      alert('Login Unsuccessful');
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='king-c'>
    <div className="login-form-container">
      <div className="glass-effect">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // const response = await axios.post('http://localhost:8000/login', {
//       //   email: username,
//       //   password,
//       // });
//       // alert('Login Successful');
//       // console.log('Login successful:', response.data);
//       // // Handle storing the token or user data here if needed
//       // navigate('/'); // Redirect to home page

//       await axios.post('http://localhost:4000/login', { username, password }, { withCredentials: true });
//       navigate('/');
//     } catch (error) {
//       alert('Login Unsuccessful');
//       console.error('Error during login:', error);
//     }
//   };

//   return (
//     <div className="login-form-container">
//       <h2>Login</h2>
//       <form className="login-form" onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

