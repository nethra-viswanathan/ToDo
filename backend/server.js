import app from './api/app.js';

//port to run
const port = 8080;

//listning to port
app.listen(port, () => {
    console.log("server running on port");
});