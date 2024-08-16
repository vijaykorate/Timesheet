// import React, { useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [passwordMatchError, setPasswordMatchError] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setPasswordMatchError(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setPasswordMatchError(true);
//       return;
//     }

//     try {
//       console.log('Submitting form data:', formData);
//       const response = await axios.post('http://localhost:5001/api/auth/register', formData);
//       console.log('User registered:', response.data);
//       // Handle success (e.g., display a success message, redirect to login)
//     } catch (error) {
//       console.error('Error registering user:', error);
//       if (error.response) {
//         // Server responded with a status other than 200 range
//         console.error('Response data:', error.response.data);
//         console.error('Response status:', error.response.status);
//         console.error('Response headers:', error.response.headers);
//       } else if (error.request) {
//         // Request was made but no response received
//         console.error('Request data:', error.request);
//       } else {
//         // Something happened in setting up the request
//         console.error('Error message:', error.message);
//       }
//       console.error('Error config:', error.config);
//     }
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };
//   return (
// <div className="flex items-center justify-center min-h-screen bg-gray-100">
//   <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <h1>Register</h1>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           id="username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
//           placeholder="Enter your username"
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>
//       <div className="relative">
//         <input
//           type={showPassword ? "text" : "password"}
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           placeholder="Enter your password"
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <span
//           className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
//           onClick={toggleShowPassword}
//         >
//           <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//         </span>
//       </div>
//       <div className="relative">
//         <input
//           type={showPassword ? "text" : "password"}
//           id="confirmPassword"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           placeholder="Confirm your password"
//           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         {passwordMatchError && <p className="text-red-500 mt-2">Passwords do not match</p>}
//         <span
//           className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
//           onClick={toggleShowPassword}
//         >
//           <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//         </span>
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//       >
//         Register Now
//       </button>
//       <div className="text-center mt-4">
//         <h3 className="text-sm">
//           Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login now</a>
//         </h3>
//       </div>
//     </form>
//   </div>
// </div>

//   );
// }

// export default RegistrationForm;













// import React, { useState } from 'react';
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [passwordMatchError, setPasswordMatchError] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setPasswordMatchError(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       setPasswordMatchError(true);
//       return;
//     }

//     try {
//       console.log('Submitting form data:', formData);
//       const response = await axios.post('http://localhost:5001/api/auth/register', formData);
//       console.log('User registered:', response.data);
//       // Handle success (e.g., display a success message, redirect to login)
//     } catch (error) {
//       console.error('Error registering user:', error);
//       if (error.response) {
//         // Server responded with a status other than 200 range
//         console.error('Response data:', error.response.data);
//         console.error('Response status:', error.response.status);
//         console.error('Response headers:', error.response.headers);
//       } else if (error.request) {
//         // Request was made but no response received
//         console.error('Request data:', error.request);
//       } else {
//         // Something happened in setting up the request
//         console.error('Error message:', error.message);
//       }
//       console.error('Error config:', error.config);
//     }
//   };

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };
  
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <h1>Register</h1>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               placeholder="Enter your username"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <span
//               className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
//               onClick={toggleShowPassword}
//             >
//               <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//             </span>
//           </div>
//           <div className="relative">
//             <input
//               type={showPassword ? "text" : "password"}
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               placeholder="Confirm your password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {passwordMatchError && <p className="text-red-500 mt-2">Passwords do not match</p>}
//             <span
//               className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
//               onClick={toggleShowPassword}
//             >
//               <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//             </span>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//           >
//             Register Now
//           </button>
//           <div className="text-center mt-4">
//             <h3 className="text-sm">
//               Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login now</a>
//             </h3>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default RegistrationForm;





import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setPasswordMatchError(false);
    setServerError('');
  };

  const checkUserExists = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/auth/check', {
        email: formData.email,
        username: formData.username,
      });
      return response.data.exists;
    } catch (error) {
      console.error('Error checking user existence:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    const userExists = await checkUserExists();
    if (userExists) {
      setServerError('User already exists');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5001/api/auth/register', formData);
      console.log('User registered:', response.data);
      // Handle success (e.g., display a success message, redirect to login)
    } catch (error) {
      console.error('Error registering user:', error);
      if (error.response) {
        setServerError(error.response.data.message);
        console.error('Response data:', error.response.data);
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h1>Register</h1>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={toggleShowPassword}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {passwordMatchError && <p className="text-red-500 mt-2">Passwords do not match</p>}
            <span
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={toggleShowPassword}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          {serverError && <p className="text-red-500 mt-2">{serverError}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Register Now
          </button>
          <div className="text-center mt-4">
            <h3 className="text-sm">
              Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login now</a>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;

