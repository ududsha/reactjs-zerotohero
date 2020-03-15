/* Uncomment only one block of code at a time to see what happen */
import React from 'react';
import YourClock from './YourClock/YourClock';


/* 
React is pretty flexible but it has a single strict rule:
All React components must act like pure functions with respect to their props.
*/

/* Example of Class based react component*/
/* Block 1 */
// class Header extends React.Component {
//     render() {
//         return <h1>THis is our header {this.props.titleValue}</h1>
//     } 
// }

/* Eample of Function based react component 
* We called these Dumb components before the React hooks came in to the scene
*/

/* Why this is not working, becuase you don't return it */
/* Block 2 */
// const Header = (props) => <h1>{this.props.title}</h1>;

/* Traditional way of writing an function in JavaScript */
/* Block 3 */
// function Header(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

/* Block 4 */
/* 
* return should have a one single block wrapped around others 
* props are passing through the function as a parameter, 
but in class components we are getting props by default as we are 
extending React.Component and this.props enables props
*/
const TopBar = (props) => {
    return <div>
        <h1>Hello, {props.name}</h1>
        <YourClock date={new Date()}/>
        </div>;
}

/* Exporting the component */
export default TopBar;