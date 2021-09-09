# Description
  This project is an example of application created with react-native and node js

# Setup Instructions 
  1. yarn / npm install
  2. get IP Address 
     
**Windows:** 
ipconfig/all

<img width="651" alt="Screen Shot 2021-08-29 at 23 32 00" src="https://user-images.githubusercontent.com/33171451/131258137-12cd0519-3a86-4675-98bc-36ecf51227b0.png">
     
**Mac:**
ifconfig

<img width="570" alt="Screen Shot 2021-08-29 at 23 35 04" src="https://user-images.githubusercontent.com/33171451/131258141-8d81d519-a533-4860-b7e7-c6d21c5a86cf.png">

  3. Replace client address with your ip address in ** app.js **
     navigate to app.js by typing: `cd skillTestApplication`
     ex: 
     `const client = new ApolloClient({
        uri: 'http://<youripaddress>:4000/graphql',
      });`
  4. navigate to server: ** cd skillTestApplication/server **
  5. run the server by typing `node app`
  6. navigate back to directory ** cd skillTestApplication **
  7. run the apps
     ** android **
     `yarn android`
     ** iOS **
     `cd ios && pod install`
     `cd .. && yarn ios`   

# Apps Description
  Application that shows a list of sports and its description

# Implementation
  - Clean architecture
  - Dark / light mode using reducer
  - Tested by jest (snapshot & unit test)
  - Fetch using graphql from react-apollo

# Screenshots or GIFS
  Dark Mode Example
  
  ![sportDark](https://user-images.githubusercontent.com/33171451/131258257-436515b3-2f79-4eb0-be0f-b7a597f1290d.gif)
  
  Default Mode Example
  
  ![sportLight](https://user-images.githubusercontent.com/33171451/131258396-c29501a6-14b5-4739-8b8b-ba8f7837fe91.gif)

# Coverage
  <img width="1440" alt="Screen Shot 2021-09-09 at 14 54 19" src="https://user-images.githubusercontent.com/33171451/132646323-aabc86fd-3c62-4712-a1ea-5558fdc17cb0.png">
  Unit test including jest & mocha for server and client side


# lint
  <img width="1432" alt="Screen Shot 2021-08-29 at 22 13 00" src="https://user-images.githubusercontent.com/33171451/131258473-d591f1b0-f293-4aed-94f5-d3e2799317ce.png">

