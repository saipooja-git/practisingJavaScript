//  So the goal of asynchronous js is basically to deal with long-running tasks, that basically run in background.
// and most important use case of asynchronous javascript is is to FETCH data from remote servers
// in so called AJAX calls.


// inorder to know about asynchronous code , you need to know about synchrnous code.
// synchronous code means line by line execution of code, in the exact order of execution that we defined in our code.
// So as the first line of code is reached in the execution,
// it is simply executed in the execution of thread. 
// All you need to know is that the execution of thread

// is part of the execution context,

// which does actually execute the code

// in the computer's processor.

// But anyway, then the next line of code is executed

// and then the next one, all in sequence.

// So each line of code always waits

// for the previous line to finish execution.

// Now this can create problems when one line of code

// takes a long time to run.

// For example, in this current line of code,

// we have an alert statement,

// which creates this alert window.

// Now, as we've experienced in the past,

// this alert window will block the code execution, right?

// So nothing will happen on the page

// until we click that OK Button.

// And only then,

// the code can continue executing.

// And so the alert statement is a perfect example

// of a long running operation,

// which blocks execution of the code.
//const p = document.querySelector('.p');
//p.textContent = 'My name is Pooja';
//alert('Text Set!'); ---> blocking line
//p.style.color = 'red';

// So again, only after we click Okay,

// the window disappears

// and the next line can run.

// So this is hopefully a nice illustration

// of the problem with synchronous code.

// Now, most of the time synchronous code is fine

// and makes perfect sense.

// But imagine that execution would have to wait

// for example, for a five second timer to finish.

// That would just be terrible, right?

// Because meanwhile,

// nothing on the page would work

// during these five seconds.

// And so that's where asynchronous code

// comes into play.

// So this example contains the five-second timer

// that I just mentioned.

//const p = document.querySelector('.p');
//setTimeOut(function(){
  //  p.textContent = 'Hello';
//},5000);
//p.style.color='red';
// Timer with a callBack function

//Asynchronous code is executed after a task that runs in the background finishes;that is in this case 
//from above example its a 5 second timer.
//so in summary,asynchronous programming

// is all about coordinating

// the behavior of our program

// over a certain period of time.

// And this is essential to understand.

// So asynchronous literally means

// not occurring at the same time.

// so lets understand with an another example
// const s = document.querySelector('.dog');
// img src = 'dog.jpeg';
// img.addEventListener('load',function(){
//     Image.classList.add('fadeIn');
// });
// s.style.width = '300px';
//Imagine that it's a huge image,

//we wouldn't want our entire code to wait for the image to load.
// And that's why setting the source attribute was implemented in JavaScript
//in an asynchronous way.

// Now, once the image has finished loading, a load event will automatically be emitted by JavaScript.
// And so we can then listen for that event in order to act on it.
 
// Listening for the load event is exactly what we do here in the next line as well.

// So here we use add event listener and to register a callback function for the load event.

// So just like in the previous example,

// we provide a callback function that will be executed

// once the image has been loaded

// and not right away,

// because again, all this code is non-blocking.

// So instead of blocking,

// execution moves on right

// to the next line immediately.

// Then once the image is completely loaded,

// it's displayed on the webpage

// and the load event is admitted.

// And since we're listening for that event,

// our callback function is finally executed.

// So once more,

// we deferred an action into the future

// making the code asynchronous and non-blocking.

// All right.

// And so now at this point,

// I believe that you have a pretty good understanding

// of asynchronous code.

// There's just one more important thing

// that I need to mention

// which is the fact that event listeners alone

// do not make code asynchronous,

// just like callback functions alone,

// do also not make code asynchronous.

// For example, an event listener

// listening for a click on a button

// is not doing any work in the background.

// It's simply waiting for a click to happen,

// but it's not doing anything.

// And so there is no asynchronous behavior involved at all.

// Now what makes this code example asynchronous

// is simply the fact that the image

// is loading asynchronously in the background,

// but not the fact that we are listening

// for the load events to happen.

// So what matters is the asynchronous behavior of a task,

// like running a timer

// or loading an image.

// And there are more examples

// of asynchronous behavior in JavaScript

// like the Geolocation API that we used before,

// or Ajax calls.

//AJAX ---> Asynchronous javascript and XML 
// allows us to communicate with remote web servers in asynchronous way.
//with AJAX calls,we can request data from web servers dynamically.


// client(javascript application running in the browser) ---->HTTP request(Asking for some data ) ----->Web server(usually contains WEB API)
//web server ------->response-------->client  // server sending data back to client

// So let's say that we have our JavaScript application

// running in the browser,which is also called the Client. And we want the application to get some data
// from a web server.

// And let's say the data about countries that I was talking about earlier.
// So with Ajax,we can do an HTTP request to the server,which has this data.
// And the server will then set back a response containing that data that we requested.
// And this back and forth between Client and server
// all happens asynchronously in the background,
// just the way we learned before.

// so usually a web server consists of web api
// Now, when we're asking a server to send us some data,this server usually contains a web API.

// And this API is the one that has the data that we're asking for.
// So an API is something pretty important,and so let's now see what an APIand web APIs actually are.



// API(application programming interface) --->a piece of software that can be used by another piece
//of software, inorder to allow applications to talk to each other and exchange information.
// and thats true not only for web development and javascript, but for programming in general.
//now in javascript and web development, we have lots of API's, like DOM API's geo location api's,own class api,online api.
//so these are called API's because they are self contained piece of software that allow other pieces of software to interact with them. 

// so now lets talk about an interseting and important type of API when we use AJAX, and that is called online API
//so online api is essentially an application running on a web server,that recieves 
//requests for data, and sends back data as response.
// we can build our own web apis (requires back end developemnt eg: node.js)or use 3rd party API's
// So on your own server,

// you could build your own API
// that can receive requests
// from your front end application in JavaScript
// and send back the results.
// So that would be your own API
// hosted on your own server.
// But that alone would probably not be enough
// to build a complete application.
// And so you could also use some 3rd-party APIs.
// And there are really APIs for everything. 

// But now just to finish,

// let's quickly talk about API data formats.

// So Ajax stands for asynchronous JavaScript and XML.

// Remember?

// So the X there stands for XML

// and XML is a data format,

// which used to be widely used

// to transmit data on the web.

// However, these days

// basically no API uses XML data anymore.

// The term Ajax is just an old name

// that got very popular back in the day,

// and so it's still used today,

// even though we don't use XML anymore.

// So instead, most APIs these days

// use the JSON data format.

// So JSON is the most popular data format today

// because it's basically just a JavaScript object,

// but converted to a string.

// And so therefore,

// it's very easy to send across the web

// and also to use in JavaScript

// once the data arrives.