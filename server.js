const http = require("http");

const PORT1 = 7000;

const PORT2 = 7500;

function handleRequest1(request, response) {
    response.end("You rock!!!");
}

function handleRequest2(request, response) {
    response.end("You suck!!!")
}
let serverOne = http.createServer(handleRequest1);

serverOne.listen(PORT1, function() {
    console.log("Server listening on: " + PORT1)
})

let serverTwo = http.createServer(handleRequest2);

serverTwo.listen(PORT2, function() {
    console.log("Server listening on: " + PORT2)
});