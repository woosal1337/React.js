Creating React Environment
```
npx create-react-app my-app
cd my-app
npm start
```

`JSX` - Render HTML codes within JavaScript!
`index.js` - Main Code source and modifications are made on
`import React` - JSX conversion is done with it

To include more than one pair of tags within the same render() function, you should use `<div></div>` as only one pair 

Creating an HTML elements with JSX
```
var newParagraph = document.createElement("p")
newParagraph.innerHTML = "This is a brand new paragraph!"
```

`index.js` and `index.html` interaction
```
ReactDOM.render(Function(), document.getElementById("root"))
```

Custom Functions to Export Code
```
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
