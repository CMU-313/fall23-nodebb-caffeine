# INTRODUCTION
1. We have implemented an anonymous functionality for posts that addresses the following user story: "As a student, I would like to post questions anonymously so that I feel more comfortable asking questions to the class"
- Note: This feature is buggy but we have implemented the "anonymous mode" button and backend 

2. We also have a plugin option for the following user story: As a professor, I would like to create polls in the discussion post so that I can have a visual answer to my question"
- Note: This feature is not merged onto the main branch due as it is not complete function, but we describe its expected functionalities. It can be found in the "Poll-Interface" branch

# USAGE
## Anonymous Posts
### Code
- An anonymous parameter is added to the "post" object, and can be set to either true or false.
- The backend was implemented in src/posts/index.js, src/posts/create.js, src/user/index.js and src/user/create.js
- The front end was implemented in src/templates/menu.tpl

### To use the anonymous feature
- Log in as a NodeBB student 
- Activate anonymous mode by clicking the button in the top
right corner of screen (to the left of notifications icon) 
- When anonymous mode is on, any posts made by the user in any topic section should display a randomly generated fake username
- To deactivate anonymous mode, press the button in the top right corner of the screen again

## Polls
### In-house poll code 
- src/controller/poll.js contains function Poll with polling functionalities
- Poll routes were added to src/routes/index.js

### To use the poll plugin
- cd into the cloned repository and Run the following command: 
`npm install nodebb-plugin-poll`
- Start your Redis Server by running the following command:
`redis-server`
- Rebuild and start Nodebb by running the following command:
`./nodebb build && ./nodebb start`
- Go to your localhost link (e.g. http://localhost:4567/) and sign into your NodeBB Admin Account with the credentials created when setting up redis
- Click on the second-to-the-last icon on the top menu (i.e., icon with 3 gears and hover text, ‘Admin’) to enter the Admin Console
- Click on Plugins->Install Plugins
- Activate the poll plugin you installed via the command in Step 2
- Rebuild and Restart Nodebb via the command in Step 4
- User would now be able to create polls via the poll button in the new post composer


# TESTING
## Anonymous Posts
- Tests are found in the src/posts/index.js files
- These tests mainly address the helper functions (isUserAnonymous() and generateAnonymousUser()) which are used to render the anonymous posts on the front end. 
- Testing these functions are sufficient as if they pass, it indicated that the database supports a mode parameter for the student user type
- The front end rendering can be tested manually tested by
running NodeBB and posting in anonymous mode as a student

## Polls
- Tests are found in the test/poll/test_poll.js file in the Poll-Interface Branch
- The automated test case tests for the method that adds a poll to the list of polls created per users, to ensure polls are being stored.
- The test is run by running the whole test suite via the `npm run test` command.
- poll.Add is a key function in the polling functionality and verifying whether created polls are being properly stored when created ensures that the function works as expected.


