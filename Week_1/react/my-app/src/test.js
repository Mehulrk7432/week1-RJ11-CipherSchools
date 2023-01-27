import React from "react";
import "./test.css";
// const Test = () ={
//     return(
//         <div>
//         <h1 id = "testId">Hello, I am shiva</h1>
//         </div>
//     );
// };

class Test extends Component{
state ={isLoggedIn : false};
    render() {
        return(
            <div>
                <h1 id="testId">Hello I am Shiva</h1>
                {!this.isLoggedIn ? (<h1>You are not logged In</h1> ):               
                (<h1>Congratulations you are logged in !</h1>)}
            </div>
        );
    }
}
export default Test;