const http = require('http');
const App = require('./App');
const port = process.env.PORT || 3000;

const server = http.createServer(App);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
});

