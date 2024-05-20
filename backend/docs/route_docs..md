# This documentation provides an overview of routes used in the backend of the Note application.

## authRoutes.js
-- This route handles the authentication logic for the note application
here is a code example
```
import express from "express";
import login from "../controllers/Auth/login.js";
import logout from "../controllers/Auth/logout.js";
import refresh from "../controllers/Auth/refresh.js";
import loginLimiter from "../middleware/loginLimiter.js"

const router = express.Router();


router.post('/login', loginLimiter, login);
router.get('/refresh',  refresh);
router.post('/logout',  logout);


export default router;

```

## noteRoutes.js
-- This route handles all the routes associated with Notes.
```
import express from 'express';
import createNewNote from '../controllers/Notes/createNote.js';
import getNotes from '../controllers/Notes/getNotes.js';
import updateNote from '../controllers/Notes/updateNote.js';
import deleteNote from '../controllers/Notes/deleteNote.js';
import verifyJWT from '../middleware/verifyJwt.js';

const router = express.Router();
//Use middleware in all note routes
router.use(verifyJWT);

router.get('/', getNotes);
router.post('/create', createNewNote);
router.patch('/update', updateNote);
router.delete('/delete', deleteNote);


export default router;

```

## userRoutes.js
-- This route handles all the routes associated with users.
```
import express from 'express';
import getUsers from '../controllers/Users/getUser.js';
import createNewUser from '../controllers/Users/registerUser.js';
import updateUser from '../controllers/Users/updateUser.js';
import deleteUser from '../controllers/Users/deleteUser.js';
import verifyJWT from '../middleware/verifyJwt.js';


const router = express.Router();
//Use middleware in all users routes.
router.use(verifyJWT);


router.get('/', getUsers);
router.post('/create', createNewUser);
router.patch('/update', updateUser);
router.delete('/delete', deleteUser);


export default router;

```
