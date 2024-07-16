// Example: Connecting to a REST API in a Frontend Application
// Using fetch (Built-in JavaScript Method)
// GET Request (Fetching data from the server):
// javascript
// Copy code
// // Fetch data from the server
// fetch('https://api.example.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching data:', error));
// POST Request (Sending data to the server):
// javascript
// Copy code
// // Data to send to the server
// const userData = {
//     name: 'John Doe',
//     email: 'john.doe@example.com'
// };

// // Send data to the server
// fetch('https://api.example.com/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userData)
// })
//     .then(response => response.json())
//     .then(data => console.log('User created:', data))
//     .catch(error => console.error('Error creating user:', error));
// Using axios (Popular HTTP Client Library)
// Install axios:
// sh
// Copy code
// npm install axios
// GET Request:
// javascript
// Copy code
// import axios from 'axios';

// // Fetch data from the server
// axios.get('https://api.example.com/users')
//     .then(response => console.log(response.data))
//     .catch(error => console.error('Error fetching data:', error));
// POST Request:
// javascript
// Copy code
// import axios from 'axios';

// // Data to send to the server
// const userData = {
//     name: 'John Doe',
//     email: 'john.doe@example.com'
// };

// // Send data to the server
// axios.post('https://api.example.com/users', userData)
//     .then(response => console.log('User created:', response.data))
//     .catch(error => console.error('Error creating user:', error));
// Example: Connecting to a Third-Party API
// Using Fetch to Connect to a Weather API
// Get an API Key:

// Many third-party APIs require an API key for authentication.
// Example: OpenWeatherMap API
// Make a Request to the API:

// javascript
// Copy code
// const apiKey = 'YOUR_API_KEY';
// const city = 'London';

// // Fetch weather data for the specified city
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching weather data:', error));
// Example: Connecting to a Backend API in a Full-Stack Application
// Backend API (Node.js + Express)
// Define API Endpoints:
// javascript
// Copy code
// // server.js (Backend code)
// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json());

// let users = [];

// app.get('/users', (req, res) => {
//     res.json(users);
// });

// app.post('/users', (req, res) => {
//     const user = req.body;
//     users.push(user);
//     res.status(201).json(user);
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
// Frontend (React Example)
// GET Request to Fetch Users:
// javascript
// Copy code
// // App.js (Frontend code)
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:3000/users')
//             .then(response => setUsers(response.data))
//             .catch(error => console.error('Error fetching users:', error));
//     }, []);

//     return (
//         <div>
//             <h1>Users</h1>
//             <ul>
//                 {users.map((user, index) => (
//                     <li key={index}>{user.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default App;
// POST Request to Add a New User:
// javascript
// Copy code
// // AddUser.js (Frontend code)
// import React, { useState } from 'react';
// import axios from 'axios';

// const AddUser = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newUser = { name, email };
        
//         axios.post('http://localhost:3000/users', newUser)
//             .then(response => {
//                 console.log('User created:', response.data);
//             })
//             .catch(error => console.error('Error creating user:', error));
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Name"
//                 required
//             />
//             <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 required
//             />
//             <button type="submit">Add User</button>
//         </form>
//     );
// };

// export default AddUser;
// Key Points
// API Endpoints: URLs provided by the backend or third-party services where your application can send requests.
// HTTP Methods: Methods like GET, POST, PUT, and DELETE define the type of request being made.
// Request Headers: Often required for authentication, content type specification, etc.
// Request Body: Data sent with POST and PUT requests, usually in JSON format.
// Asynchronous Requests: API calls are usually asynchronous, so you handle them with promises (then/catch) or async/await syntax.
// Error Handling: Always include error handling to manage failed requests gracefully.
// By following these principles, you can effectively integrate APIs into your applications, enabling robust data exchange and functionality.