Creating React Environment
```bash
npx create-react-app my-app
cd my-app
npm start
```

`JSX` - Render HTML codes within JavaScript!
`index.js` - Main Code source and modifications are made on
`import React` - JSX conversion is done with it

To include more than one pair of tags within the same render() function, you should use `<div></div>` as only one pair 

Creating an HTML elements with JSX
```js
var newParagraph = document.createElement("p")
newParagraph.innerHTML = "This is a brand new paragraph!"
```

`index.js` and `index.html` interaction
```js
ReactDOM.render(Function(), document.getElementById("root"))
```

Custom Functions to Export Code
```js
function MyDiv() {  
    return (  
        <div>  
 			<ul> 
				<li>First unordered list</li>  
 				<li>Second unordered list</li>  
 				<li>Third unordered list</li>  
 			</ul>
 		</div>
	)  
}  
  
ReactDOM.render(<MyDiv />, document.getElementById("root"))
```

Example #1
```js
// Objectives:

// 1. Set up the basic React code from scratch

// 2. Create a functional component called MyInfo that returns the following UI:

// a. An h1 with your name

// b. A paragraph with a little blurb about yourself

// c. An ordered or unordered list of the top 3 vacation spots you'd like to visit

// 3. Render an instance of that functional component to the browser

// Extra challenge: learn on your own (Google!) how you can add some style to your page.

// (We will also cover this in an upcoming lesson).

  

import React from "react"

import ReactDOM from "react-dom"

  

function MyInfo() {

return (

<div\>

<h1 style\={{ color:"gray" }}>

Vusal Ismayilov

</h1\>

<p\>18 years old, Sophomore Computer Engineering Student at the Istanbul Medipol University</p\>

<ul style\={{ color:"red" }}>

<li\>Germany</li\>

<li\>United Kingdom</li\>

<li\>Australia</li\>

</ul\>

</div\>

)

}

  
  

ReactDOM.render(<MyInfo />, document.getElementById("root"))
```

Creating components (template)
```js
import React from "react"

  

function MyInfo() {

return (

<div\>

<h1\>Vusal Ismayilov</h1\>

<p\>This is a paragraph about me...</p\>

<ul\>

<li\>Germany</li\>

<li\>United Kingdom</li\>

<li\>Australia</li\>

</ul\>

</div\>

)

}

  

export default MyInfo
```

Importing components
```js
import MyInfo from "./MyInfo"
```

# MainContent / Footer/ App /	NavBarComponent full integration among each other

```js
// App.js
import React from "react"

  

import NavBarComponent from "./NavBarComponent"

import MainContent from "./MainContent"

import Footer from "./Footer"

  
  

function App() {

return (

<div\>

<NavBarComponent />

<MainContent />

<Footer />

</div\>

)

}

  

export default App
```

```js
// Footer
import React from "react"

  

function Footer() {

return (

<h5\> This is a footer component </h5\>

)

}

  

export default Footer
```

```js
// MainContent
import React from "react"

  

function MainContent() {

return (

<h3\> This is a Main Content Component </h3\>

)

}

  

export default MainContent
```

```js
// NavBarComponent
import React from "react"

  

function NavBarComponent() {

return (

<h1\> This is a nav bar component </h1\>

)

}

  

export default NavBarComponent
```

```js
// index.js
// Set up the React app from scratch

// Render an App component (defined in a separate file)

// Inside App, render:

// 1. A Navbar component

// 2. A MainContent component

// 3. A Footer component

  

import React from "react"

import ReactDOM from "react-dom"

  

import App from "./App"

  

ReactDOM.render(<App />, document.getElementById("root"))
```

### Output:

<div align="center">
	<p> Final Image Output </p>
	<img src="https://woosal.com/1337/chrome_OKo6MXdqZl1337_Wm7rjQxf7tXt6bOcghWnRew3mjd1ZuUHS0ilqQOqEZf05UFkEe.png" />
</div>

<br><br>

# To-do list
```js
// App.js

import React from "react"

import TodoItem from "./TodoItem"

  

function App() {

return (

<div className\="todo-list"\>

<TodoItem />

<TodoItem />

<TodoItem />

<TodoItem />

</div\>

)

}

  

export default App
```

```js
// TodoItem.js

import React from "react"

  

function TodoItem() {

return (

<div className\="todo-item"\>

<input type\="checkbox" />

<p\>Placeholder text here</p\>

</div\>

)

}

  

export default TodoItem
```

```js
// index.html

<html\>

<head\>

<link rel\="stylesheet" href\="style.css"\>

</head\>

<body\>

<div id\="root"\></div\>

<script src\="index.pack.js"\></script\>

</body\>

</html\>
```

```js
// index.js
import React from "react"

import ReactDOM from "react-dom"

  

import App from "./App"

  

ReactDOM.render(<App />, document.getElementById("root"))
```

```js
// style.css
body {

background-color: whitesmoke;

}

  

.todo-list {

background-color: white;

margin: auto;

width: 50%;

display: flex;

flex-direction: column;

align-items: center;

border: 1px solid #efefef;

box-shadow:

/\* The top layer shadow \*/

0 1px 1px rgba(0,0,0,0.15),

/\* The second layer \*/

0 10px 0 -5px #eee,

/\* The second layer shadow \*/

0 10px 1px -4px rgba(0,0,0,0.15),

/\* The third layer \*/

0 20px 0 -10px #eee,

/\* The third layer shadow \*/

0 20px 1px -9px rgba(0,0,0,0.15);

padding: 30px;

}

  

.todo-item {

display: flex;

justify-content: flex-start;

align-items: center;

padding: 30px 20px 0;

width: 70%;

border-bottom: 1px solid #cecece;

font-family: Roboto, sans-serif;

font-weight: 100;

font-size: 15px;

color: #333333;

}

  

input\[type\=checkbox\] {

margin-right: 10px;

font-size: 30px;

}

  

input\[type\=checkbox\]:focus {

outline: 0;

}
```

### Output

<div align="center">
	<p>Final Image Output</p>
	<img src="https://woosal.com/1337/chrome_dP0p5ur3vW1337_6K6Xrii4dMyNuW3EdoTDCSt6QisYfRGfE5yVK1bpbKOZmsB78W.png" />
</div>

<br><br>

# Joke and Punchline
```js
// App.js
import React from "react"

  

import QuestionAndPunchline from "./QuestionAndPunchline"

  

function App() {

return (

<div\>

<QuestionAndPunchline

punchLine \= "My wife told me to stop acting like a flamingo.I had to put my foot down."

/>

<QuestionAndPunchline

question \= "Why does Waldo wear stripes?"

punchLine \= "- Because he doesn’t want to be spotted."

/>

<QuestionAndPunchline

punchLine \= "- A man enters a pun contest in his local newspaper. He sends in ten puns, hoping at least one of them would win, but unfortunately, no pun in ten did."

/>

<QuestionAndPunchline

question \= "What do you do when your hot pants catch on fire?"

punchLine \= "Put them out with your pantyhose."

/>

</div\>

)

}

  

export default App
```

```js
// QuestionAndPunchline.js

import React from "react"

  

function QuestionAndPunchline(props) {

var question \= "No Question for this Punchline"

if (props.question) {

return (

<div\>

<h1\>{props.question}</h1\>

<h3\>{props.punchLine}</h3\>

</div\>

)

} else {

return (

<div\>

<h3\>{props.punchLine}</h3\>

</div\>

)

}

}

  

export default QuestionAndPunchline
```

```html
// index.html

<html\>

<head\>

<link rel\="stylesheet" href\="style.css"\>

</head\>

<body\>

<div id\="root"\></div\>

<script src\="index.pack.js"\></script\>

</body\>

</html\>
```

```js
// index.js
// One LAST time in this course, set up a React app from scratch

// Render an <App /> component

// App should be in its own file

// App should render 5 <Joke /> components

// Each Joke should receive a "question" prop and a "punchLine" prop

// and render those however you'd like

// EXTRA CREDIT:

// Some jokes are only a punch line with no question:

// E.g.: "It’s hard to explain puns to kleptomaniacs because they always take things literally."

// If you don't pass in a "question" prop, how might you make it only show the punchline instead?

// Spend time practicing the style of your Joke component

  

import React from "react"

import ReactDOM from "react-dom"

  

import App from "./App"

  

ReactDOM.render(<App />, document.getElementById("root"))
```

```css
// style.css
body { }

  

h1 { color: #7c795d; font-family: 'Trocchi', serif; font-size: 45px; font-weight: normal; line-height: 48px; margin: 0; }

  

h3 { color: #4c4a37; font-family: 'Source Sans Pro', sans-serif; font-size: 18px; line-height: 32px; margin: 0 0 24px; }
```

### Output

<div align="center">
	<p>Final Image Output</p>	
	<img src="https://woosal.com/1337/chrome_ITYGuhrnZB1337_qNsSpiuPfWjNsVl29aXLvnwSPgzO6giA4yboAELUcjJ0vmtHle.png" />
</div>


# Product List
```js
// App.js
/\*

Given a list of products (as an array of objects, as seen in productsData.js)

render a <Product /> component (which you'll also need to create) for each

product in the list.

  

Make sure to use the array's \`.map()\` method to create these components, and

don't forget to pass a \`key\` prop to it to avoid the warning.

\*/

  

import React from "react"

import productsData from "./vschoolProducts"

  

import Products from "./Products"

  

function App() {

const allProducts \= productsData.map(product => <Products

name \= {product.name}

price \= {product.price}

description \= {product.description}

/>)

return (

<div\>

{allProducts}

</div\>

)

}

  

export default App
```

```js
// Product.js
import React from "react"

  

function Products(props) {

return (

<div\>

<h1\>{props.name}</h1\>

<h3\>Price: {props.price}$</h3\>

<p\>Description: {props.description}</p\>

<hr/>

</div\>

)

}

  

export default Products
```

```html
// index.html
<html\>

<head\>

<link rel\="stylesheet" href\="style.css"\>

</head\>

<body\>

<div id\="root"\></div\>

<script src\="index.pack.js"\></script\>

</body\>

</html\>
```

```js
// index.js
import React from 'react'

import ReactDOM from 'react-dom'

  

import App from "./App"

  

ReactDOM.render(<App />, document.getElementById('root'))
```

```js
// vschoolProducts.js
const products \= \[

{

id: "1",

name: "Pencil",

price: 1,

description: "Perfect for those who can't remember things! 5/5 Highly recommend."

},

{

id: "2",

name: "Housing",

price: 0,

description: "Housing provided for out-of-state students or those who can't commute"

},

{

id: "3",

name: "Computer Rental",

price: 300,

description: "Don't have a computer? No problem!"

},

{

id: "4",

name: "Coffee",

price: 2,

description: "Wake up!"

},

{

id: "5",

name: "Snacks",

price: 0,

description: "Free snacks!"

},

{

id: "6",

name: "Rubber Duckies",

price: 3.50,

description: "To help you solve your hardest coding problems."

},

{

id: "7",

name: "Fidget Spinner",

price: 21.99,

description: "Because we like to pretend we're in high school."

},

{

id: "8",

name: "Sticker Set",

price: 14.99,

description: "To prove to other devs you know a lot."

}

\]

  

export default products
```
<div align="center">
	<p>Final Image Output</p>
	<img src="https://woosal.com/1337/chrome_pyEDriUoiW1337_yOtp2Ap6NfYTSzirmo8rLcFezp5E3LrxSKn6OLBimPPdN68SiK.png" />
</div>
