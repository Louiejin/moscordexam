> (Assumed Node Js is installed)

# Javascript Coding Challenge 3
##### How to run 
- Open cmd/terminal
- go to where the downloaded file is located using the cmd/terminal `(../Javascript_Coding_Challenge_3 )`
-  on the terminal type `node .\JavascriptCodingChallenge3.js`
#### Function File
- `JavascriptCodingChallenge3.js`
---
# Javascript Coding Challenge 4
#### How to run 
- Open cmd/terminal
- go to where the downloaded file is located using the cmd/terminal `(../Javascript_Coding_Challenge_4 )`
-  on the terminal type `node .\JavascriptCodingChallenge4.js`
#### Function File
- `JavascriptCodingChallenge4.js`
---
# Senior Full Stack Software Engineer Coding Challenge
#### Solution Summary
- I separated the Frontend and Backend. On the backend I used `expressjs` to create the server, add `express-basic-auth` for security layer that only and authorized client-side web app can access the backend. Lastly I used the api given by the newsapi.org (`newsapi`) to fetch the news RSS Feeds from newsapi.org. On the frontend I `Reactjs`, `Material-Ui` for the design and `axios` to connect the frontend to the backend.
#### How to run the web app
> note*  please run backend first frontend will not fetch any data if backend is not running
> note**  before running backend or frontend please do npm install, to install the dependencies 
- Backend
  - go to where the downloaded file is located using the cmd/terminal `(../Senior_Full_Stack_Software_Engineer_Coding Challenge/server )`
  - on the terminal type `npm start` this will run the backend on localhost port 3001
- Frontend
  - This can run in two way
    - Senario 1
        - on the cmd/terminal type npm install `npm install -g serve`
        - go to where the downloaded file is located using the cmd/terminal `(../Senior_Full_Stack_Software_Engineer_Coding Challenge/frontend )`
        - type `serve -s build` and press enter and go to `http://localhost:5000` on your browser 
    - Senario 2
        - go to where the downloaded file is located using the cmd/terminal `(../Senior_Full_Stack_Software_Engineer_Coding Challenge/frontend )`
        - type `npm start` press enter and go to `http://localhost:3000` on your browser