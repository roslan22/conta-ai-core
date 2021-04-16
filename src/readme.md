# How to run on flask server locally:

1. Install python3.6.8

2. pip install -r requirements.txt

3. export FLASK_APP=server/src/app.py

   export FLASK_ENV=development
   
   export DB_ENV=PROD
   
   On windows: 
   set FLASK_APP=server/src/app.py   
   
   set FLASK_ENV=development
   
   set DB_ENV=PROD

4. cd to main folder (you should have /server folder in it) and run: flask run

5. go to the browser (you should get free port in terminal): 
http://localhost:YOUR_PORT/contract/0



###################### API ####################
1) Add new user (by POST request): 

   post to: http://localhost:5000/user

         with following json: 

         {"username":"ruslan",

         "password":"123",

         "email":"roslan22@gmail.com"}

         In the response you should get: 

         {   
             "success": true,
             "user_uuid": "6f71ced5-89a2-4777-af4a-2022f1a95b7b"

         }

2) Show all users (GET): 
   http://localhost:5000/users

3) Show all user contracts (GET):
   http://localhost:5000/contracts/<user_uuid>

4) Show single contract (GET): 
   http://localhost:5000/contract/<contract_uuid>

