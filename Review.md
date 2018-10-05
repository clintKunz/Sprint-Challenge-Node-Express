# Review Questions

## What is Node.js?
A program that runs other programs, and it executes JavaScript applications outside the browser.
## What is Express?
A web application framework that sits on Node.
## Mention two parts of Express that you learned about this week.
I learned about its routing ability and convenience helpers like response.status and response.send.
## What is Middleware?
Functions that get executed in order. There are different types like built-in, third party, and custom.
## What is a Resource?
When designing a RESTful Web API, everything is a resource, resources can be accessed via a unique URI, and management of resources is done via HTTP methods.
## What can the API return to help clients know if a request was successful?
A resource status in a then promise.
## How can we partition our application into sub-applications?
We can use express routes and break things into different files and folders. Usually this is done by type or feature.
## What is express.json() and why do we need it?
A built-in middleware function that parses incoming requests with JSON payloads.