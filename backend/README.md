# CMMS (Computerized Project Management System)


## Description

CMMS is a Computerized Project Management System that helps you efficiently manage your projects. This system is built with Node.js, Express, WebSocket and MongoDB, providing features for secure user authentication, data storage, and more. All of these features has been applied to build a note app for storing, and processing documents for a business.

## Project Overview
``` bash
Note-Backend
├── backend
│   ├── config
│   │   └── dbConfig.js
|   |   └── allowowedOrigins.js
|   |   └── corsOptions.js
│   ├── controllers
│   │   ├── Auth
│   │   │   └── login.js
|   |   |   └── logout.js
|   |   |   └── refresh.js
|   |   ├── Notes
|   |   |   └── createNote.js
|   |   |   └── deleteNote.js
|   |   |   └── getNotes.js
|   |   |   └── updateNote.js
|   |   ├── Users
|   |   |   └── deleteUser.js
|   |   |   └── getUser.js
|   |   |   └── registerUser.js
|   |   |   └── updateUser.js
|   ├── docs
|   |   └── api_docs.md
|   |   └── api_middleware.md
|   |   └── data_docs.md
|   |   └── route_docs.md
|   |   └── socket_stream.md
│   ├── middleware
│   │   └── errorHandling.js
│   │   └── logger.js
|   |   └── loginLimiter.js
|   |   └──verifyJwt.js
|   |   └── webSocket.js
│   ├── models
│   │   └── Note.js
|   |   └── User.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── noteRoutes.js
|   |   └── userRoutes.js
|   └── client.js
|   ├── package-lock.json
|   ├── package.json
|   └── README.md
|   └──server.js
|   └── .env
|   └── .gitignore

```
## Installation

To get started with CMMS, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Jaaystones/Note_Api_with_web_socket.git

   cd Note_Api_with_web_socket 

   ```

2. Installation:
```
npm install

```
3. Start the express application server
```
npm run dev

```
4. Start the Websocket server on nanother terminal
```
node client.js

```
## Usage
```
To use this application, follow these instructions:

- Access the application using postman or insomnia by navigating to http://localhost:7000 
- (Remember to replace your-port with the port you specified in your environment variables).
- Create a .env file in your root directory and fill with the follwoing configuration
```
DB_URL="replace with mongodb uri"
PORT=7000
NODE_ENV=development
JWT_SECRET="replace with secret key"
REFRESH_TOKEN_SECRET="replace with secret key"
ACCESS_TOKEN_SECRET="replace with secret key"

ps: Secret keys can be generated using crypto oor done manually
```


Register or log in to access the project management features.
Master access is found in the [Api Endpoints](docs/api_docs.md)

Create, update, and manage your projects, tasks, and users efficiently.
```

## Features
+ User authentication with JWT (JSON Web Tokens).
+ Secure storage of project and task data using MongoDB.
+ Users Fuctionality levels (Employess, Admins & Managers)
+ Each level has different accesibility and authorization.
+ Seamless user interface.

## Documentation
- [Api Endpoints](docs/api_docs.md)
- [ Models Documentation](docs/data_docs.md)
- [ Socket Stream Documentation](docs/socket_stream.md)

## Contributions
Contributions are welcome! If you want to contribute to this project, please follow these guidelines:

## Instructions

[x] Fork the repository
[x] Create a new branch for your feature or bug fix
[x] Make your changes
[x] Commit your changes with descriptive commit messages
[x] Push your changes to your fork
[x] Submit a pull request

## License :wrench:
This project is licensed under the ISC License.

## Contact :book:
If you have any questions or need further assistance, please contact [Joel Paul] at [Joelpaul345@gmail.com].
