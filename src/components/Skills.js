import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import {faKeyboard} from "@fortawesome/free-solid-svg-icons";
import DevIcon from "devicon-react-svg";


const Skills = () => {
    return (
        <div id="skills" style={{marginTop: 50,marginBottom: 50, color: "white"}} className="container-fluid d-flex align-items-center flex-column">
            <h1 className={"title-name"}>Skills</h1>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><FontAwesomeIcon icon={faLaptopCode}/></div>
                <div className="divider-custom-line"></div>
            </div>
            <div className="container" style={{marginBottom: 50}}>
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center">
                        <ul className="list-group flex-grow-1">
                            <li className="list-group-item d-flex justify-content-center align-items-center">
                                <h1 style={{fontWeight: "bolder", textAlign: 'center', marginRight: 65, marginTop: 15}}>Tech Stack <h5>(so far)...</h5></h1>
                                <FontAwesomeIcon icon={faKeyboard} className={"fa-3x"}/>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <h4>C</h4>
                                <i style={{fontSize: "35px"}} className="devicon-c-plain colored"></i>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <h4>Java</h4>
                                <i style={{fontSize: "35px"}} className="devicon-java-plain colored"></i>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <h4>JavaScript</h4>
                                <i style={{fontSize: "35px"}} className="devicon-javascript-plain colored"></i>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <h4>HTML & CSS</h4>
                                <i style={{fontSize: "35px"}} className="devicon-html5-plain colored">
                                    <i style={{fontSize: "35px"}} className="devicon-css3-plain colored"></i>
                                </i>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <h4>Git</h4>
                                <i style={{fontSize: "35px"}} className="devicon-git-plain colored"></i>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <h4>React.js</h4>
                                <i style={{fontSize: "35px"}} className="devicon-react-original colored"></i>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <h4>Node.js</h4>
                                <i style={{fontSize: "35px"}} className="devicon-nodejs-plain colored"></i>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <h4>Express.js</h4>
                                <i style={{fontSize: "35px"}} className="devicon-express-original colored"></i>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <h4>Android Studio</h4>
                                <i style={{fontSize: "35px"}} className="devicon-android-plain colored"></i>

                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center">
                        <ul className="list-group flex-grow-1">
                            <li className="list-group-item d-flex justify-content-center align-items-center">
                                <h1 style={{fontWeight: "bolder", textAlign: 'center', marginRight: 105, marginTop: 15}}>Modules<h5>(so far)...</h5></h1>
                                <FontAwesomeIcon icon={faBook} className={"fa-3x"}/>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                               <a target={"_blank"} href={"https://nusmods.com/modules/CS1101S/programming-methodology"}><h4>CS1101S (Programming)</h4></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a target={"_blank"} href={"https://nusmods.com/modules/CS2030S/programming-methodology-ii"}><h4>CS2030S (Programming II)</h4></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a target={"_blank"} href={"https://nusmods.com/modules/CS2040S/data-structures-and-algorithms"}> <h4>CS2040S (Data Structures)</h4></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a target={"_blank"} href={"https://nusmods.com/modules/CS2100/computer-organisation"}><h4>CS2100 (Comp Organisation)</h4></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a target={"_blank"} href={"https://nusmods.com/modules/CS2107/introduction-to-information-security"}><h4>CS2107 (Info Security)</h4></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a target={"_blank"} href={"https://nusmods.com/modules/CS1231S"}><h4>CS1231s (Discrete Math)</h4></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a target={"_blank"} href={"https://nusmods.com/modules/BPM1702"}><h4>BPM1702 (Microsoft Excel)</h4></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a target={"_blank"} href={"https://nusmods.com/modules/MKT1705"}><h4>MKT1705 (Marketing)</h4></a>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <a target={"_blank"} href={"https://nusmods.com/modules/ACC1701"}><h4>ACC1701 (Accounting)</h4></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Skills;