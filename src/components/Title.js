import React from 'react';
import avatar from "../assets/avatar.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import {Col, Container, Row} from "react-bootstrap";


const Title = () => {
    return (
        <div id={"home"} style={{marginTop: 50,marginBottom: 50, color: "white"}} className="container-fluid d-flex">
                <div className="row">
                    <div style={{textAlign: "center"}} className="col-12">
                        <img src={avatar} className={"avatar-img"}/>
                        <h1 className={"title-name"}>Hello There!</h1>
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line"></div>
                            <div className="divider-custom-icon"><FontAwesomeIcon icon={faLaptopCode}/></div>
                            <div className="divider-custom-line"></div>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col"}>

                        </div>
                        <div className={"col-5"}>
                            <p  style={{alignSelf: "center"}}>
                                I am Gerald, a Year 2 NUS Student pursuing a Double Degree in Computer Science & Business.
                            </p>
                        </div>
                        <div className={"col"}>

                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col"}>
                        </div>
                        <div className={"col-5"}>
                            <p  id="last-title" style={{alignSelf: "center"}}>
                                Deeply passionate about all things tech, with a tenacity to make meaningful contributions whilst picking up and mastering many new, important skills along the way.
                            </p>
                        </div>
                        <div className={"col"}>

                        </div>
                    </div>
                </div>
        </div>




    )
}

export default Title;