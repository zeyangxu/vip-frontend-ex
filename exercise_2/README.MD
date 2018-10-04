First of all, JS is the most import language in today's frontend. "There are no web techonologies that are not using Javascript"
knowing Javascript is very crucial to become not only good web developer but also software engineer. You may see many documents that tell the importance of Javascript in today's web development and software development.

Javascript has few libraries and frameworks
#### jQuery 
- jQuery is a lightwegith, "write less, do more" JavaScript library
- jQuery will be our entry point for Javascript because jQuery simplifies a lot of the complicated things from Javascript
- Also people use Ajax with jQuery for its simple and syntax 


#### Ajax
- Ajax stands for "Asynchronous Javascript And Xml" (If you are not sure what Xml, It is similar to JSON and we are not going to work with XML ever!)
- It helps to request and get data from a web server Asynchronously (without re-loading browser)
- It helps user interaction on web as the user does not need to reload an entire web page.

w3 school (How AJAX works)
: https://www.w3schools.com/xml/ajax_intro.asp
#### React.js
- React.js is the most popular JS framework these days
- React is for the SPA (singe-page app) development
- The code is partitioned into Components and each components represents a part of UI (such as Navigation Bar, header, ...). The benefit of using React.js is Components are resuable so you can only see codes regarding Navigation Bar if you want to change features regardgin Navigation Bar
- Virtual DOM. Instead of dealing with "real" dom. React creates a virtual DOM (virtual representation of the DOM). If any changes happen, React asks the state change to a virtual DOM, which lives in memory, first and efficient alogirhtm of React determines whether the change really needed to be applied to "real" dom. DOM manipulation can be a performance bottle-neck and can annoy user experience. In conclusion, Virutal DOM in React helps efficient when dealing with data
- BOTTOM LINE : React is best fit for today's frontend because today's website has many UI components and deals with lot of data and. 
- WHY we have not used REACT YET?? 
    - As I have talked above, REACT is super good for BIG, LARGE, ENOURMOUS WEBSITES and can have a downside (slower and unnecessarily complicated codes and files) for the small or medium size website. We as a U-START start from the sratch and add features as we go along. So we adapt original web development techniques (HTML, CSS, JavaScript, jQuery, Ajax). Also, even though React is initially realeased 5 years ago, its stable release is only 28 days ago (early September of 2018). We don't want to jump right into the "unstable" technique even though many people praise React

------------------------------------------------------------------
#### CODE EXPLANATION 
##### IMPORTANT 
    - DON'T FORGET TO LINK Javascript (line 17 HTML)
    - DON'T FORGET TO GET jQuery CDN to use jQuery (line 9 HTML)
    - DON'T FORGET TO ADD $(document).ready(function(){ ... }) (line 4 JS)
    - DEBUGGING using DevTools (inspect in browser) SEE Elements and Console tabs for now to find the error

##### "#addButton" click function
- It is the code regarding button in HTML line 58
- Zeb gives the id="addButton" to HTML button
- In js file, he listens to the event happens in HTML button with corresponding id (id="addButton"). So he makes a function regarding click event. "IF button is clicked ... do something"
- e.preventDefault() helps prevent Propagation ("LOOK IT UP") and tells the browser that DON'T do button's default behavior if the event does not get explicitly handled
- var toAdd : he listens to value in input type with name addContent
- line 9 ~ 14 : $.each is like a FOR LOOP, he checks whether the value that a user enters in the INPUT is unique or not by checking with itmes in list declared in the line 2
- line 17 ~ 18 : he checks if input is empty and alert to the user with a default JS message modal 
- line 21 ~ 29 : he make HTML elements in a variable $newItem (HTML in JS always have a weird syntax)
- line 30 : he append add variable toadd as a text to the first children of the newItem variable
    - father and children relationship ...
    - itemCard in the wrapping div (father)
    - first children is "itemContent" 
    - second children is "deleteCross" ... you may test with $newItem.children(":nth-child(2)")

- line 31 : append this the variable with HTML and text into HTML id="itemBox" in line 51
- eline 32 : empty out the input

... The rest of click event is similar to what #addButton click event. If you have any questions please ask though

- line 69 : Javascript syntax for handling ones created dynamically. we've create HTML deleteCross dynamically right?
- line 70 ~ 72 : He find the text (value in input) from the deleteCross element (second children) so we want to go to (first children)'s text and that's TARGET variable
- line 73 ~ 74 : again father is "itemCard" and we want to delete the whole HTML "newItem" and we can achieve it by deleting father (children follows father)
- line 75 : jQuery has some default animation effects. Better to see than explain in words ( https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_fadeout )
- line 76 : lastly, he deletes the the following target in the list 
    - splice() method adds/removes items to/from an array
    - ( https://stackoverflow.com/questions/12724363/remove-array-value-by-index-in-jquery )

- Some Poeple wonder ONLY Javascript?? Then how does Zeb make input and other elements beautiful?
ANSWER : CSS !