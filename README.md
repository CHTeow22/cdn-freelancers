# cdn-freelancers

### Steps to run
1. Clone this git or download the zip file, unzip it and put in a folder
2. Open up your console, navigate to the folder directory and run `npm install`. Make sure you have npm and node.js preinstalled.
3. Extract the `freelancers.sql` and import to your MySQL workbench.
4. Run command `node server.js`
5. Open web browser and surf "http://localhost:3000/"

### Functionality highlight
1. For lists of user, click "Edit" at last column to edit or delete the specific user.
2. For register new user, the code will check from database whether the email already registered before. 
   If the email filled in has been registered, it will have a prompt to tell user the email has been registered.
   Otherwise, the prompt will inform user that the new registeration is successfully.
   
   The prompt has option to register new user again or go to full lists.
   
   
 ### Side Note:
 - Sorry cloudn't complete the edit and delete function 
 - However, the UI is ready.
