// Dom is an interface between javascript code and browser,specifically html documents render on browser.
// So,Dom is something,which will make javascript interact with browser,again more specifically we can create and modify and delete elements,set styles and clases and attributes and listen and respond to events.
//DOMTree is generated from HTML document, and a dom tree is a tree like structure made out of nodes.
//so how that interaction actually works?
//well the dom is is a very complex API(so its an interface we can use to programatically interact with the DOM) contains lots of methods and properties to interact with DOM Tree,such as 
//querSelector,addEventListener, and createElement methods or also the innerHTML, textContent and childProperties.
// so in dom there are different types of nodes, like some are html elements and some are just text.
// so first, every single note in the DOM tree is of type node. and in js each node is represented as object, again these objects gets access to special node methods like textContent,
//childnodes, parent nodes,clone nodes and many others


// document.documentElement---> is a line of JavaScript code that logs the <html> element of the current document to the console. Here’s a detailed explanation
// Breaking Down document.documentElement
// document Object:

// The document object represents the whole HTML or XML document that is loaded into the browser window.
// It serves as the entry point to the content of the web page and provides various methods and properties to interact with and manipulate the document.
// document.documentElement:

// The documentElement property of the document object returns the root element of the document.
// For HTML documents, this root element is the <html> element.
// It provides access to the entire HTML content of the page

// the querySelector method is used in JavaScript to select the first element that matches a specified CSS selector within the document. It is a powerful and versatile tool for DOM manipulation, allowing developers to efficiently find and interact with elements on a webpage. 
// f we have multiple elements then we use queryselectorAll
//getElementsByTagName is a useful method for selecting all elements with a specific tag name in the document. It returns a live HTMLCollection, which automatically updates to reflect changes in the DOM. This method is efficient for iterating over and manipulating multiple elements of the same type, making it a valuable tool for DOM manipulation.
//getElementsByClassName is a useful method for selecting all elements with a specific class name in the document. It returns a live HTMLCollection, which automatically updates to reflect changes in the DOM. This method is efficient for iterating over and manipulating multiple elements sharing the same class, making it a valuable tool for DOM manipulation.

// <!DOCTYPE html>
/* <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
</head>
<body>
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <script>
        const itemsByClassName = document.getElementsByClassName('item');
        console.log(itemsByClassName); // Logs a live HTMLCollection of all elements with class="item"

        const itemsByQuerySelectorAll = document.querySelectorAll('.item');
        console.log(itemsByQuerySelectorAll); // Logs a static NodeList of all elements with class="item"
    </script>
</body>
</html> */

//------------------------------------
//<!DOCTYPE html>
/* <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
</head>
<body>
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
    <script>
        const itemsByClassName = document.getElementsByClassName('item');
        console.log(itemsByClassName); // Logs a live HTMLCollection of all elements with class="item"

        const itemsByQuerySelectorAll = document.querySelectorAll('.item');
        console.log(itemsByQuerySelectorAll); // Logs a static NodeList of all elements with class="item"
    </script>
</body>
</html> */
//-----script code   for a cookie message
// const header = document.querySelector('.header');
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = "we use cookies for improving performance.<button class='button-cookie'>Got it!</button>";
// header.prepend(message);

//1.document.querySelector('.header'): This selects the first element in the document that has the class header.
// const header: The selected element is assigned to the variable header.
//2. document.createElement('div'): This creates a new div element in the document.
// const message: The created div element is assigned to the variable message.
//3. message.classList.add('cookie-message'): This adds the class cookie-message to the div element stored in the message variable. This can be useful for styling the message using CSS.
//4. message.innerHTML: This sets the inner HTML content of the div element.
// "we use cookies for improving performance.<button class='button-cookie'>Got it!</button>": This string contains the message about cookies and a button with the text "Got it!". The button has a class button-cookie.
//5. header.prepend(message): This inserts the message element (the new div with the cookie message and button) as the first child of the header element. If there are any existing children in the header, they will be pushed after this new element.
//Flow
// Selection: The header element with the class header is selected from the DOM.
// Creation: A new div element is created and assigned to the variable message.
// Class Addition: The cookie-message class is added to the newly created div element.
// Content Addition: The inner HTML of the div is set to include the cookie message and a button.
// Insertion: The new div element is inserted at the beginning of the header element.

// Instead of prepend, which inserts an element as the first child of a specified parent element, there are several other keywords that can be used with the insertAdjacentElement method to control where an element is inserted relative to another element. These keywords specify different insertion points around the target element:

// beforebegin: Inserts the element immediately before the target element itself.

// afterbegin: Inserts the element just inside the target element, before its first child.

// beforeend: Inserts the element just inside the target element, after its last child.

// afterend: Inserts the element immediately after the target element itself.

//append also can be used : it means we can place it last or its a last child element.

// Example Usages
// Here's how each keyword works in practice:

// beforebegin

// header.insertAdjacentElement('beforebegin', message);
// Inserts message before header (as a sibling).
// afterbegin

// header.insertAdjacentElement('afterbegin', message);
// Inserts message as the first child inside header.
// beforeend

// header.insertAdjacentElement('beforeend', message);
// Inserts message as the last child inside header.
// afterend

// header.insertAdjacentElement('afterend', message);
// Inserts message after header (as a sibling).
// Using insertAdjacentHTML and insertAdjacentText
// Besides insertAdjacentElement, there are also insertAdjacentHTML and insertAdjacentText methods that function similarly but accept HTML strings or plain text instead of elements:

// insertAdjacentHTML: Inserts a string of HTML as specified by the position parameter.


// header.insertAdjacentHTML('beforeend', '<p>Hello</p>');
// insertAdjacentText: Inserts a string of plain text as specified by the position parameter.


// header.insertAdjacentText('beforeend', 'Hello');
// Considerations
// Browser Support: Ensure compatibility with older browsers if using newer methods like insertAdjacentElement, insertAdjacentHTML, or insertAdjacentText.

// Performance: These methods can be more efficient than manipulating the DOM directly by rebuilding HTML strings or cloning nodes.

// By using these various insertion points, you can precisely control where new content is added relative to existing elements in the DOM, making your JavaScript code more flexible and easier to maintain.
//delete
//document.querySelector('.button-cookie').addEventListener('click',function(){
//message.remove()});

// styles 
//element.style.propertname---->message.style.backgroundColor
//message.style.width=120%;
// these styles are inline styles these are directly set in the dom
//getComputedStyle is a method in JavaScript that allows you to access the computed style properties of an element. It returns an object containing styles that are actively computed by the browser for a specified element after applying all CSS rules and resolving any conflicts. This is particularly useful when you need to retrieve the final computed values of CSS properties that affect the presentation of an element.    
//const heightString = "010";
// const heightNumber = parseFloat(heightString);

// console.log(heightNumber); // Output: 10
// Explanation: Without specifying the radix, "010" is parsed as an octal number in JavaScript. Therefore, parseFloat interprets "010" as 8 in octal, which converts to 10 in decimal.
// Conclusion
// Without Radix: parseFloat typically assumes base 10 if the radix parameter is not provided explicitly. This works well for most decimal number strings like "123".

// With Radix: Specifying 10 as the radix ensures that numbers are always parsed as decimal, avoiding potential issues with leading zeros being interpreted as octal numbers.

// Using parseFloat without specifying the radix (10) is generally safe for typical numeric strings in decimal format. However, specifying the radix parameter explicitly provides clarity and consistency, especially when dealing with strings that might have leading zeros or other non-decimal indicators.

//-----------------------------
//here already we have css file but then, while writing js if you want to change anything then you can do as below
//document.documentElement.style.setProperty('--color-primary','orangered');
//by using setProperty u can really set anything like color,backgroundcolor

//attributes

// const logo =document.querySelector('.nav_logo');
// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo.designer);

//here src and alt are properties of html which are predefined so when we log to console it shows but though we deefine designer in html and try to log it to console it shows undefined bcz designer is not a property of html

//console.log(logo.designer);---but this can be called in other way to get result in console
// console.log(logo.getAttribute('designer')); // in console it gives output.
// console.log(logo.src);//http://127.0.0.1:8080/img/logo.png
// console.log(logo.getAttribute('src')); it give relative info means as if the name of the img that stored in index.html  // img/logo.png


/// dataset
// in html if you save as data-version-number :"3.0";

// and if you are calling it in JS,
// then , console.log(logo.dataset.versionNumber); --->remember version-number but you should call it in camel case in js



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <style>
//         .c {
//             color: red;
//             font-weight: bold;
//         }
//     </style>
//     <title>classList Methods Example</title>
// </head>
// <body>
//     <div id="log">Click me!</div>
//     <script>
//         const log = document.getElementById('log');

//         // Adding class 'c'
//         log.classList.add('c');

//         setTimeout(() => {
//             // Removing class 'c' after 2 seconds
//             log.classList.remove('c');
//         }, 2000);

//         // Toggling class 'c' on click
//         log.addEventListener('click', () => {
//             log.classList.toggle('c');
//         });

//         // Checking if class 'c' is present
//         setInterval(() => {
//             console.log(log.classList.contains('c'));
//         }, 1000);
//     </script>
// </body>
// </html>

// Explanation of the Example
// Adding Class: Initially, the class 'c' is added to the log element, making the text red and bold.

// Removing Class: After 2 seconds, the class 'c' is removed, reverting the styles applied by the class.

// Toggling Class: Clicking the log element toggles the presence of the class 'c', changing the text style each time it's clicked.

// Checking Class Presence: Every second, the script logs whether the log element currently has the class 'c' or not.

// These methods (add, remove, toggle, contains) provide powerful ways to manipulate CSS classes dynamically in JavaScript, allowing for responsive and interactive web development.











