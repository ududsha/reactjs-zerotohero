/* Uncomment only one block of code at a time to see what happen */
import React from 'react';
import ReactDOM from 'react-dom'

import Clock from './Clock/Clock'

/* 
We are implementing state and learn about it here as funcrtional 
component support state if we are not using hooks.
*/

/* Block 1 */
/* 
* "class" is a ES6 class.
* In class components, we are getting props by default as we are 
extending React.Component and this.props enables props
*/
// class YourClock extends React.Component {
//     render() {
//         return (
//         <div>
//             <h2>Your time is, {this.props.date.toLocaleTimeString()}</h2>
//             <h3>But, Still you have time. Don't Lose yourself!</h3>
//         </div>
//         );
//     }
// }

/* Block 2 */
/* Adding state to React Component 
* This Component used to show how state is added into a class 
* Clock component is used to show how react component lifecycle is being used
*/
class YourClock extends React.Component {

    /* state, need to initialize with its members Eg: date 
    * props, need to be inherited from the super class Eg: super(props)
    * use state onbehalf of props in render function
    * */
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return (
            <div>
                <Clock />
                <h3>But, Still you have time. Don't Lose yourself!</h3>
            </div>
        );
    }
}

ReactDOM.render(
    <YourClock />,
    document.getElementById('root')
);

export default YourClock;