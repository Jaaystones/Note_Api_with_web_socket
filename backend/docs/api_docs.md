## Here is a documentation of the Api endpoints


# AUTH
```
// @desc Login
// @route POST /auth/login
// @access Public
// endpoint: http://localhost:7000/auth/login
request.body = {
	"username":"JayStone,
	"password":"jogolo"
}
response: {
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6IlRlZUpheSIsInJvbGVzIjpbIkVtcGxveWVlIl19LCJpYXQiOjE2OTg4NDk4NzgsImV4cCI6MTY5ODg1MDQ3OH0.lNVCNh-0ipS3ZHmAye5XTLT6h7b85idU3jIfdpJttg0"
}

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
// endpoint: http://localhost:7000/auth/logout
response: { "message": "Cookie cleared, Logged out"}


// @desc Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
// endpoint: http://localhost:7000/auth/refresh
response: {
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6IlBhdWwxMjMiLCJyb2xlcyI6WyJBZG1pbiJdfSwiaWF0IjoxNjk4MzI5MjA4LCJleHAiOjE2OTgzMjkyMTh9.m-thCH4O32ssmYB8olxD_88T9ufOslCxduhloe8zcbA"
}
```

# USERS
```
//create new user
//@ post/users
// Authorized
//endpoint: http://localhost:7000/users/create
request body: {
	"username":"JayStone",
	"password":"jogolo",
	"roles":["Manager"]
}
response: {
	"message": "New user JayStone created"
}

//Get all users
//@ get/users
// Authorized
// endpoint: http://localhost:7000/users/
response: [
	{
		"_id": "653a63f5cf724594ea5af267",
		"username": "Paul123",
		"roles": [
			"Admin"
		],
		"active": true,
		"createdAt": "2023-10-26T13:04:53.752Z",
		"updatedAt": "2023-10-26T13:04:53.752Z",
		"__v": 0
	},
	{
		"_id": "653e388d8f8828f8ea365779",
		"username": "JayStone",
		"roles": [
			"Manager"
		],
		"active": true,
		"createdAt": "2023-10-29T10:48:45.823Z",
		"updatedAt": "2023-10-29T10:48:45.823Z",
		"__v": 0
	}
]


//update new user
//@ patch/users
// Authorized
// endpoint: http://localhost:7000/users/update
request.body = {
		"id": "653a63f5cf724594ea5af267",
		"username": "Paul123",
		"roles": [
			"Admin"
		],
		"active": true,
		"__v": 0
}
response: {
	"message": "Paul123 updated"
}

//delete user
//@ delete/users
// Authorized
// endpoint : http://localhost:7000/users/delete
request.body = {
	"id":"652eb2618dc8eaddb80a6a06"
}
response: {"Username JayStone with ID 652eb2618dc8eaddb80a6a06 deleted"}
```

# NOTES
```
//@ post request
// Creates a new note
//access Private
// endpoint: http://localhost:7000/notes/create
request.body = {
	"user":"653e37f58f8828f8ea36576f",
	"title":"Machine Procurement",
	"text":"This note covers all the machines and service expenses of the company"
}
response: {
	"message": "New Note Created"
}

//@ get method
// Gets all notes
// Access Private
// endpoint:  http://localhost:7000/notes/
response: [
	{
		"_id": "653e3a9c8f8828f8ea365797",
		"user": "653e388d8f8828f8ea365779",
		"title": "Data Bills",
		"text": "This is my first generated Note for Maxmigold concerning data bills",
		"completed": false,
		"ticket": 1,
		"createdAt": "2023-10-29T10:57:32.843Z",
		"updatedAt": "2023-10-29T10:57:32.843Z",
		"__v": 0,
		"username": "JayStone"
	}
]

// @desc Update a note
// @route PATCH /notes
// @access Private
// endpoint:  http://localhost:7000/notes/update
request.body = {
		"id": "653111356bfdcbc92637f955",
		"user": "652fa5a8bca23c975c368646",
		"completed": true
}
response = { "'Note Title' updated" }

// @desc Delete a note
// @route DELETE /notes
// @access Private
// endpoint:  http://localhost:7000/notes/delete
request.body = {
	"id":"653111d96bfdcbc92637f961"
}
response = { "Note 'Data Bills' with ID 653111d96bfdcbc92637f961 deleted" }
```