# Question Generation Javascript

## How to Use ?

### Clone and Install Packages
`git clone https://github.com/yashrajjain726/paper-generation-js`
`cd paper-generation-js`
`npm i`

### Run the Server
To run the server, you need to run the command
`npm run dev`

###  Urls in Server
1.  `/` -> The default page, which lets you know that the service is started
2.  `/get-questions` -> When you hit the URL, this has a default if you don't send any query (i.e `/get-questions?marks=100&easy=0.2&medium=0.5&hard=0.3`). You can send any of the query parameter that you want to change.
**NOTE** - Easy, Medium And Hard are Percentage-Based Query Parameter


### Packages USED
1. lodash -> To get a sample size array, based on requirement
2. express -> To make server side rendering great
3. express-async-handler -> To handle asynchronous exceptions
4. nodemon -> To run live code, without restarting

