# Back-End

# api/auth/login POST

Expects an object with this format as the request body:
{
  "username": "Sam",   //string
  "password": "2563tf@aS" //string
}
If the username doesn't exist in the users table or the password doesn't match, it will reject the request with a 401 HTTP status.

If successful, it will return with a 201 HTTP status and an object with this format (same as register):
{
    "id": 3,
    "username": "Sam",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6IlNhbSIsImlhdCI6MTU2OTU0OTAyMiwiZXhwIjoxNTY5NjM1NDIyfQ.uYTDE-A9Xz4vYko-H4GnfJwMrY-hkVCJGrt3dhACwrQ"
}
token: A JSON Web Token


# api/auth/register POST

Expects an object with this format as the request body:

{
  "username": "Sam",    // required/string/unique
  "password": "25FGT@rt", // required/string
}
If any of the required fields are missing, it will reject the request with a 400 HTTP status.

If successful, it will return with a 201 HTTP status and an object with this format (same as login):

{
    "id": 3,
    "username": "Sam",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6IlNhbSIsImlhdCI6MTU2OTU0OTAyMiwiZXhwIjoxNTY5NjM1NDIyfQ.uYTDE-A9Xz4vYko-H4GnfJwMrY-hkVCJGrt3dhACwrQ"
}
token: A JSON Web Token


# /api/topnine GET
Requires an authorization header with a JWT otherwise reject the request with a 401 HTTP status.
Used to populate all top nine products for the loged in user. If there is error on retriving the data, it will reject the request with a 500 HTTP status.

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

# /api/topnine POST

Expects an object with this format as the request body:

{
        "Rank": 1,              required/int
        "TopNineItem": "Banana",required/string/
        "Category": "Fruit"     required/string/
}
Requires an authorization header with a JWT
Used to add top nine products for the loged in user. If there is missed data or the top nine rank is already exist or the rank is greater than 9 or less than 1, it will reject the request with a 400 HTTP status.

If successful, it will return a 200 HTTP status and the added objects. 

   {
        "id": 1,
        "UserName": "Sam",
        "Rank": 1,
        "TopNineItem": "Banana",
        "Category": "Fruit"
    },

# /api/topnine PUT

Expects an object with this format as the request body:

{
        "UserName": "Sam",      required/string/optional
        "Rank": 1,              required/int/optional
        "TopNineItem": "Banana",required/string/optional 
        "Category": "Fruit"     required/string/optional
}

Requires an authorization header with a JWT or it will reject the request with a 403 HTTP status. If no user ID exists in the database with the ID specified in the path, it will reject the request with a 400 HTTP status. 

If successful, it will return a 200 HTTP status and the added objects. 

   {
        "id": 1,
        "UserName": "Sam",
        "Rank": 1,
        "TopNineItem": "Banana",
        "Category": "Fruit"
    },

# /api/topnine DELETE

Requires an authorization header with a JWT or it will reject the request with a 403 HTTP status. If no user ID exists in the database with the ID specified in the path, it will reject the request with a 400 HTTP status. 

If successful, it will return a 200 HTTP status and the added objects. 

   {
        "id": 1,
        "UserName": "Sam",
        "Rank": 1,
        "TopNineItem": "Banana",
        "Category": "Fruit"
    },


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