import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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