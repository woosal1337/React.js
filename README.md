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

MainContent / Footer/ App /	NavBarComponent full integration among each other

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

Output:

<div align="center">
	<p> Final Image Output </p>
	<img src="https://woosal.com/1337/chrome_OKo6MXdqZl1337_Wm7rjQxf7tXt6bOcghWnRew3mjd1ZuUHS0ilqQOqEZf05UFkEe.png" />
</div>
