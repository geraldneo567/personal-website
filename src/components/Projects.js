import React from 'react';
import {Card, Container} from "react-bootstrap";
import resumeAnywhereLogo from "../assets/resumeanywhere.jpg"
import gerousell from "../assets/gerousell.png"
import website from "../assets/website.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";

const Projects = () => {
    return (
        <div id="projects" style={{marginTop: '10%', marginBottom: '5%'}} className="container-fluid d-flex align-items-center flex-column bg-light">
            <div className="row">
                <div className="col-12 d-flex align-items-center flex-column justify-content-center">
                    <h1 className={"title-name"} style={{marginTop: 50}}>Projects</h1>
                    <div className="divider-custom divider">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><FontAwesomeIcon icon={faLaptopCode}/></div>
                        <div className="divider-custom-line"></div>
                    </div>
                </div>
            </div>

            <div className="container" style={{marginBottom: '5%'}}>
                <div className="row d-flex justify-content-center mb-4">
                    <div className="col-xl-4 col-sm-6 col-xs-12 d-flex justify-content-center">
                        <Card style={{ height: '100%', width: '90%', borderRadius: "20%", backgroundColor: "#840c24"}}>
                            <Card.Img variant="top" src={resumeAnywhereLogo} style={{width: '35%', height: '35%', alignSelf: 'center', marginTop: "20px"}}/>
                            <Card.Body className={"text-center"} style={{color: 'white'}}>
                                <Card.Title>resumeAnywhere</Card.Title>
                                <p className={"project-description"}>An iOS/Android one-stop pocket resume companion and generator made as part of CP2106 (Independent Software Development Project) a.k.a Orbital.</p>
                                <Button href={"https://github.com/geraldneo567/resumeanywhere"} target={"_blank"}>View on Github!</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-xl-4 col-sm-6 col-xs-12 d-flex justify-content-center">
                        <Card style={{ height: '100%', width: '90%', borderRadius: "20%", backgroundColor: "#016064"}}>
                            <Card.Img variant="top" src={gerousell} style={{width: '35%', height: '35%', alignSelf: 'center', marginTop: "20px"}}/>
                            <Card.Body className={"text-center"} style={{color: 'white'}}>
                                <Card.Title>gerousell</Card.Title>
                                <p className={"project-description"}>  A cursory Carousell clone built from scratch with Authentication, Create Listings and Chat functionality,
                                   inspired by my frequent use of the online marketplace.</p>
                                <Button href={"https://github.com/geraldneo567/gerousell"} target={"_blank"}>View on Github!</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-xl-4 col-sm-6 col-xs-12 d-flex justify-content-center">
                        <Card style={{ height: '100%', width: '90%', borderRadius: "20%", backgroundColor: "#22190e"}}>
                            <Card.Img variant="top" src={website} style={{width: '35%', height: '35%', alignSelf: 'center', marginTop: "20px"}}/>
                            <Card.Body className={"text-center"} style={{color: 'white'}}>
                                <Card.Title>Personal Website</Card.Title>
                                <p className={"project-description"}>
                                    This very website you are on now is a WIP project of mine which I intend to continue
                                    updating, improving and potentially re-releasing as I learn more web-dev!</p>
                                <Button>View on Github!</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div id={"last-project"}></div>
            </div>

        </div>


    )
}

export default Projects;