import React, {useState} from "react";
import './App.css';
import Auth from './components/Auth';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import axios from "axios";
import * as events from "events";



function App() {
    const User = {
        username: "elisha",
        password: "excel"
    }
    const [user, setUser] = useState({ username: "" });
    const [error, setError] = useState("");



    const Login = details => {
        console.log(details);

        if(details.username === User.username && details.password === User.password){
            console.log("Logged in");
            setUser({
                username: details.username
            })
        } else {
            console.log("Details do not match");
            setError("Details do not match!!");
        }
    };
    const Logout = () => {
        setUser({ username: ""});
    };

    const submitForm=(e) => {
        e.preventDefault();
        const x = e.target.x.value;
        const y = e.target.y.value;
        const r = e.target.r.value;
        console.log("x= " +x, "\n", "y= " +y, "\n", "r= " +r )
    }



    return (
        <Router>
            <div className="App">
                {(user.username !== "") ? (
                    <div className="main">
                        <div className="cap">
                            Variant: 30018 <br/>
                            Group: P3230
                        </div>
                        <div>
                            <h2 className="welcome"> Welcome <span>{user.username},</span></h2>
                            <button className="logout" onClick={Logout}>Logout</button>
                        </div>
                        <div className="main_container">
                            <section className="left_section">
                                <section className="graph">
                                    <h2 className="heading_text">
                                        <span id="graph_id">GRAPH</span>
                                    </h2>
                                    <div>
                                        <svg class="graph" viewBox="-200 -200 400 400" xmlns="http://www.w3.org/2000/svg" onClick="sendPointFromSvg">
                                            <defs>
                                                <marker id='arrow-head' orient="auto"
                                                        markerWidth='2' markerHeight='4'
                                                        refX='0.1' refY='2'>
                                                    <path d='M0,0 V4 L2,2 Z' fill="black"></path>
                                                </marker>
                                            </defs>
                                            <polygon class="triangle" points="0,-40 -40,0 0,0" fill="rgb(139, 153, 226)"></polygon>
                                            <rect class="rectangle" x="0" y="-40" width="40" height="40" fill="rgb(139, 153, 226)"></rect>
                                            <path class="circle" fill="rgb(139, 153, 226)" d="M -40 0 A 40 40 0 0 0 0 40 L 0 0 Z"></path>
                                            <path
                                                d="M -195 0, h 390"
                                                stroke="black"
                                                stroke-width="1"
                                                marker-end="url(#arrow-head)"></path>
                                            <path
                                                d="M 0 195, v -390"
                                                stroke="black"
                                                stroke-width="1"
                                                marker-end="url(#arrow-head)"></path>
                                            <text x="192" y="-3" class="graph__inscription">x</text>
                                            <text x="3" y="-192" class="graph__inscription">y</text>
                                            <text x="12" y="-3" class="graph__inscription_r2_x">R/2</text>
                                            <text x="-31" y="-3" class="graph__inscription_-r2_x">-R/2</text>
                                            <text x="3" y="23" class="graph__inscription_-r2_y">-R/2</text>
                                            <text x="3" y="-17" class="graph__inscription_r2_y">R/2</text>
                                            <text x="37" y="-3" class="graph__inscription_r_x">R</text>
                                            <text x="-47" y="-3" class="graph__inscription_-r_x">-R</text>
                                            <text x="3" y="43" class="graph__inscription_-r_y">-R</text>
                                            <text x="3" y="-37" class="graph__inscription_r_y">R</text>

                                            <circle cx="0" cy="0" r="1.5" fill="black"></circle>
                                            <circle cx="0" cy="20" r="1.5" fill="black" class="dot_y"></circle>
                                            <circle cx="0" cy="-20" r="1.5" fill="black" class="dot_y"></circle>
                                            <circle cx="20" cy="0" r="1.5" fill="black" class="dot_x"></circle>
                                            <circle cx="-20" cy="0" r="1.5" fill="black" class="dot_x"></circle>
                                            <circle cx="40" cy="0" r="1.5" fill="black" class="dot_x2"></circle>
                                            <circle cx="-40" cy="0" r="1.5" fill="black" class="dot_x2"></circle>
                                            <circle cx="0" cy="40" r="1.5" fill="black" class="dot_y2"></circle>
                                            <circle cx="0" cy="-40" r="1.5" fill="black" class="dot_y2"></circle>
                                        </svg>
                                    </div>
                                </section>
                            </section>

                            <section className="right_section">
                                <section className="values">
                                    <h2 className="heading_text">
                                        <span id="values_id">VALUES</span>
                                    </h2>
                                    <form className="form" on onSubmit={submitForm}>
                                        <p className="input_form_info">Enter the coordinates of the point</p>
                                        <div className= "xyr_values">
                                            <div className="X">
                                                <label>X: </label>
                                                <select className="selectX" name="x">
                                                    <option value="-2" >-2</option>
                                                    <option value="-1.5" >-1.5</option>
                                                    <option value="-1" >-1</option>
                                                    <option value="-0.5" >-0.5</option>
                                                    <option value="0" >0</option>
                                                    <option value="0.5" >0.5</option>
                                                    <option value="1" >1</option>
                                                    <option value="1.5" >1.5</option>
                                                    <option value="2" >2</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label>Y: </label>
                                                <input className="selectY" type="number" name="y" max={5} min={-3} required/>
                                            </div>

                                            <div>
                                                <label>R: </label>
                                                <select className="selectR" name="r">
                                                    <option value="-2" >-2</option>
                                                    <option value="-1.5" >-1.5</option>
                                                    <option value="-1" >-1</option>
                                                    <option value="-0.5" >-0.5</option>
                                                    <option value="0" >0</option>
                                                    <option value="0.5" >0.5</option>
                                                    <option value="1" >1</option>
                                                    <option value="1.5" >1.5</option>
                                                    <option value="2" >2</option>
                                                </select>
                                            </div>
                                        </div> <br/>

                                        <button className="submit">Submit</button>
                                        <button value="reset" className="reset">Reset</button>

                                    </form>
                                </section>
                                <h2 className="heading_text">
                                    <span>TABLE</span>
                                </h2>
                                <div className="table_container">
                                    <table className="table">
                                        <tr className="table_header">
                                            <th className="coord_column">X</th>
                                            <th className="coord_column">Y</th>
                                            <th className="coord_column">R</th>
                                            <th className="coord_column">Result</th>
                                        </tr>
                                    </table>
                                </div>
                            </section>
                        </div>

                    </div>
                ) : (<Auth Login={Login} error={error} />)}
            </div>
        </Router>
    );
}

export default App;