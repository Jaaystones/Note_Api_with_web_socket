# CMMS (Computerized Project Management System)


## Description

CMMS is a Computerized Project Management System that helps you efficiently manage your projects. This system is built with Node.js, Express, and MongoDB, providing features for secure user authentication, data storage, and more. All of these features has been applied to build a note app for storing, and processing documents for a business.

## Project Overview
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
|   |   └── data_docs.md
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


## Installation

To get started with CMMS, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Jaaystones/Note-Api.git

   cd Note-API

   ```

2. Installation:
```
npm install

```
3. Start the application server
```
npm run dev

```
## Usage
```
To use this application, follow these instructions:

Access the application in your web browser by navigating to http://localhost:3000 
(replace your-port with the port you specified in your environment variables).

Register or log in to access the project management features.

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
