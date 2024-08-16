// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// const LoginForm = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [loginError, setLoginError] = useState('');
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5001/api/auth/login', { username, password });
//       const token = response.data.token;
//       if (rememberMe) {
//         localStorage.setItem('token', token);
//       } else {
//         sessionStorage.setItem('token', token);
//       }
//       onLogin();
//       setShowSuccessMessage(true); // Set success message
//       // Redirect to success page after successful login
//       navigate    ('/success');
//     } catch (err) {
//       console.error(err);
//       if (err.response && err.response.data) {
//         setLoginError(err.response.data.message || 'Invalid username or password');
//       } else {
//         setLoginError('An error occurred. Please try again.');
//       }
//     }
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };
  
//   return (


//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//   <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//     {showSuccessMessage && <p className="text-green-500 mb-4">Login successful!</p>}
//     <div className="text-center mb-6">
//       <h2 className="text-2xl font-bold">LOGIN</h2>
//     </div>
//     <form className="space-y-4" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//         className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
      
//       <div className="relative">
//         <input
//           type={showPassword ? "text" : "password"}
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <span
//           className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
//           onClick={toggleShowPassword}
//         >
//           <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//         </span>
//       </div>

//       <div className="flex items-center justify-between mb-4">
//         <label className="flex items-center">
//           <input
//             type="checkbox"
//             checked={rememberMe}
//             onChange={(e) => setRememberMe(e.target.checked)}
//             className="mr-2"
//           />
//           Remember Me
//         </label>
//         <h3 className="text-sm">
//           <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
//         </h3>
//       </div>
      
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//       >
//         Login
//       </button>

//       <div className="text-center mt-4">
//         <h3 className="text-sm">
//           Don't have an account? <a href="/registration" className="text-blue-500 hover:underline">Register now</a>
//         </h3>
//       </div>

//       {loginError && <p className="text-red-500 mt-4">{loginError}</p>}
//     </form>
//   </div>
// </div>

//   );
// };

// export default LoginForm;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', { username, password });
      const token = response.data.token;
      if (rememberMe) {
        localStorage.setItem('token', token);
      } else {
        sessionStorage.setItem('token', token);
      }
      onLogin();
      setShowSuccessMessage(true); // Set success message
      // Redirect to success page after successful login
      navigate('/success');
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data) {
        setLoginError(err.response.data.message || 'Invalid username or password');
      } else {
        setLoginError('An error occurred. Please try again.');
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        {showSuccessMessage && <p className="text-green-500 mb-4">Login successful!</p>}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">LOGIN</h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={toggleShowPassword}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              Remember Me
            </label>
            <h3 className="text-sm">
              <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
            </h3>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Login
          </button>

          <div className="text-center mt-4">
            <h3 className="text-sm">
              Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register now</a>
            </h3>
          </div>

          {loginError && <p className="text-red-500 mt-4">{loginError}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
