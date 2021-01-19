# Investright

IN DEVELOPMENT

### To Run Locally

You can either:

1. Run `npm install` from the `client` and `server` directories

2. Set a database connection string to the enviroment variable `MONGO_URI`, as read from `server/app.js`. We're currently using a database in Atlas.

3. Open a new terminal and from the root directory and run:
   `cd server && npm run dev`
   Once the server is running, open another terminal window and run:
   `cd client && npm start`

   The application should be running on `localhost:3000`

4. Hit `localhost:3000/signup` to create a user