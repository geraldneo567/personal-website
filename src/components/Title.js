import React from 'react';
import avatar from "../assets/avatar.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import {Col, Container, Row} from "react-bootstrap";


const Title = () => {
    return (
        <div id={"home"} style={{marginTop: 50,marginBottom: 50, color: "white"}} className="container-fluid d-flex align-items-center flex-column">
            <img src={avatar} className={"avatar-img"}/>
            <h1 className={"title-name"}>Hello There!</h1>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><FontAwesomeIcon icon={faLaptopCode}/></div>
                <div className="divider-custom-line"></div>
            </div>
            <p style={{width: '45%'}}>
                I am Gerald, a Year 2 NUS Student pursuing a Double Degree in Computer Science & Business.
            </p>
            <p id="last-title" style={{width: '40%'}}>
                Deeply passionate about all things tech, with a tenacity to make meaningful contributions whilst picking up and mastering many new, important skills along the way.
            </p>

        </div>




    )
}

export default Title;