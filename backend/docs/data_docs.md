# Data Models

## This document provides a detailed overview of the data models of this project.

### User Model
This represents a user in the system
-**Attributes**
 - `id`(interger): The ID of the user.
 -`Username`(string): The unique name of the user.
 -`password`(string): The password of the user.
 -`role`(string): The role of the user.
 -`active`(boolean): Whether the user is active or not.


### Note Model
This represents a note assigned to a user in the database.
-**Attributes**
 -`id`(interger): The ID of the note
 -`user`(string): The user object associated with the note
 `title`(string): The title of the note
 `text`(string): The text of the note
 `completed`(boolean): Whether the note is completed or not.
 `ticket`(string): The ticket number of the note.