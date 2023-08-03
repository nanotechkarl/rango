// Import the RangoJS and http module
import rango from "rango";
import http from "http";

// Create an instance of the RangoJS app
const app = rango();

// Define a route for the home page
app.add([
  {
    path: "users",
    GET: () => {
      // Logic to handle GET request for '/users'
      return "This is a GET request!";
    },
    POST: () => {
      // Logic to handle POST request for '/users'
      return "This is a POST request!";
    },
    PUT: () => {
      // Logic to handle PUT request for '/users'
      return "This is a PUT request!";
    },
    PATCH: () => {
      // Logic to handle PATCH request for '/users'
      return "This is a PATCH request!";
    },
    DELETE: () => {
      // Logic to handle DELETE request for '/users'
      return "This is a DELETE request!";
    },
  },
]);

// Start the server
const port = 3000;
http.createServer(app).listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
