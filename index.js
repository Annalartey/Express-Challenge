const bodyParser = require('body-parser');
const { request } = require('express');
const express = require('express')
const testData = require("./test.json");
const app = express()
const port = 3000

app.use(bodyParser());

app.get("/", (request, response) => {
    console.log('this is the request body', request.body)
    response.send("This is the main mest backend");
})

app.get('/users', (request, response) => {
    response.json(testData)
});

app.get('/users/id3', (request, response) => {
    response.json(testData.id3)
})

app.post("/users", (request, response) => {
    const requestBody = request.body
    testData.push(requestBody)
    response.send(testData)
})

app.delete('/users', (request, response) =>{
    testData.pop()
    response.send(testData)
})

app.listen(port, () =>{
    console.log("My app is running on this server")
})