# Back-End
api/auth/login POST
Expects an object with this format as the request body:

{
  "username": "Sam",   //string
  "password": "password" //string
}
If the username doesn't exist in the users table or the password doesn't match, it will reject the request with a 401 HTTP status.

If successful, it will return with a 201 HTTP status and an object with this format (same as register):
{
    "id": 3,
    "username": "Sam",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6IlNhbSIsImlhdCI6MTU2OTU0OTAyMiwiZXhwIjoxNTY5NjM1NDIyfQ.uYTDE-A9Xz4vYko-H4GnfJwMrY-hkVCJGrt3dhACwrQ"
}
token: A JSON Web Token


api/auth/register POST
Expects an object with this format as the request body:

{
  "username": "User1",    // required/string/unique
  "password": "password", // required/string
}
If any of the required fields are missing, it will reject the request with a 400 HTTP status.

If successful, it will return with a 201 HTTP status and an object with this format (same as login):

{
    "id": 3,
    "username": "Sam",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6IlNhbSIsImlhdCI6MTU2OTU0OTAyMiwiZXhwIjoxNTY5NjM1NDIyfQ.uYTDE-A9Xz4vYko-H4GnfJwMrY-hkVCJGrt3dhACwrQ"
}



/api/topnine GET
Used to populate all top nine products. If no top nine exist in the database, it will reject the request with a 404 HTTP status.

If successful, it will return a 200 HTTP status and an array of objects. 

[
   {
        "id": 1,
        "UserName": "Sam",
        "Rank": 1,
        "TopNineItem": "Banana",
        "Category": "Fruit"
    },
    {
        "id": 2,
        "UserName": "Sam",
        "Rank": 2,
        "TopNineItem": "Orange",
        "Category": "Fruit"
    },
    {
        "id": 3,
        "UserName": "Sam",
        "Rank": 3,
        "TopNineItem": "Pineapple",
        "Category": "Fruit"
    },
    
]
id: An integer representing the ID of the the user 



Tables -1


username
password
In addition to an auto-incrementing entry id:

Name	   Type	    Required	Unique	Notes
username	string	yes	        yes	    User's  username
password	string	yes	        no	    User's  hashed password
In addition to an auto-incrementing entry id:

Tables -2

UserName:
Rank:
TopNineItem: 
Category: 
In addition to an auto-incrementing entry id:

Name	    Type	    Required	Unique	             Notes
UserName	string	    yes	        yes	                 User's  username
Rank	    int	        yes	        yes/category	     it should be 1 - 9
TopNineItem string      yes         yes/user
Category    string      yes         no