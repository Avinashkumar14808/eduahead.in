import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/signup', { username, password });
      navigate('/login');
    } catch (error) {
      console.error('Error signing up', error);
    }
  };

  return (
    <div className='king-b'>
    <main className="main">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-title">Sign Up</h2>
        <div className="input-container">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        </div>
        <div className="input-container">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </div>
        <button className="submit-button" type="submit">Sign Up</button>
      </form>
    </main>
    </div>
  );
};

export default Signup;





// import React, { useState } from 'react';
// import axios from 'axios';
// import './Signup.css'; // Import your CSS file for styling
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   // const [firstName, setFirstName] = useState('');
//   // const [lastName, setLastName] = useState('');
//   const [username, setUsername] = useState('');
//   // const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const [confirmPassword, setConfirmPassword] = useState('');


//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // if (password !== confirmPassword) {
//     //   alert('Passwords do not match!');
//     //   return;
//     // }

//     // try {
//     //   const response = await axios.post('http://localhost:8000/signup', {
//     //     name: `${firstName} ${lastName}`,
//     //     email,
//     //     password,
//     //     role: 'Visitor' // Or any other role you want to set by default
//     //   });

//     //   console.log('Signup successful:', response.data);
//     //   alert('Signup successful')
//     //   navigate('/login');
//     //   // You can redirect the user to the login page or clear the form here
//     // } catch (error) {
//     //   console.error('Error during signup:', error);
//     //   alert('Signup Unsuccessful')
//     // }

//     try {
//       await axios.post('http://localhost:4000/signup', { username, password });
//       navigate('/login');
//     } catch (error) {
//       console.error('Error signing up', error);
//     }
//   };

//   return (
//     <main className="main">
//       <form className="form" onSubmit={handleSubmit}>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//         <button type="submit">Signup</button>
//         {/* <div className="title">
//           <h2 className="heading">
//             Sign Up
//           </h2>
//         </div>

//         <div className="input-group">
//           <label htmlFor="first-name" className="label">First Name</label>
//           <input
//             type="text"
//             id="first-name"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//           />
//         </div>

//         <div className="input-group">
//           <label htmlFor="last-name" className="label">Last Name</label>
//           <input
//             type="text"
//             id="last-name"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>

//         <div className="input-group">
//           <label htmlFor="email" className="label">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="input-group">
//           <label htmlFor="password" className="label">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div className="input-group">
//           <label htmlFor="confirm-password" className="label">Confirm Password</label>
//           <input
//             type="password"
//             id="confirm-password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>

//         <div className="terms">
//           <input type="checkbox" id="checkbox" />
//           <p className="terms-p">By Signing up, I agree to the <a href="#" className="terms-a">terms and conditions</a></p>
//         </div>

//         <input type="submit" value="Create Account" /> */}
//       </form>
//     </main>
//   );
// };

// export default Signup;

