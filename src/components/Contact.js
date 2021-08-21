import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faEnvelope, faLaptopCode, faMailBulk} from "@fortawesome/free-solid-svg-icons";
import TelegramIcon from '@material-ui/icons/Telegram';
import {Button} from "@material-ui/core";
import {Card} from "react-bootstrap";
import resumeAnywhereLogo from "../assets/resumeanywhere.jpg";
import gerousell from "../assets/gerousell.png";
import website from "../assets/website.png";


const Contact = () => {
    return (
        <div id="contact" style={{paddingBottom: 100}} className="bg-light d-flex flex-column align-items-center">
            <div className="row">
                <div className="col-sm d-flex align-items-center flex-column justify-content-center">
                    <h1 className={"title-name"} style={{marginTop: 50}}>Contact</h1>
                    <div className="divider-custom divider">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><FontAwesomeIcon icon={faLaptopCode}/></div>
                        <div className="divider-custom-line"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm d-flex align-items-center justify-content-center">
                        <a target={"_blank"} href={'https://www.linkedin.com/in/gerald-neo/'}>
                            <button type="button" className="btn btn-default btn-circle btn-xl">
                                <i style={{fontSize: '120px', color: "white"}} className="devicon-linkedin-plain"></i>
                            </button>
                        </a>
                    </div>
                    <div className="col-sm d-flex align-items-center justify-content-center">
                        <a target={"_blank"} href={"mailto: geraldneo56@gmail.com"}>
                            <button type="button" className="btn btn-default btn-circle btn-xl bg-dark">
                                <FontAwesomeIcon style={{fontSize: '120px', color: 'white'}} icon={faEnvelope} />
                            </button>
                        </a>
                    </div>
                    <div className="col-sm d-flex align-items-center justify-content-center">
                        <a target={"_blank"} href={"https://t.me/gner56"}>
                            <button type="button" className="btn btn-default btn-circle btn-xl" style={{backgroundColor: "#87cefa"}}>
                                <TelegramIcon style={{fontSize: '120px', color: 'white'}}/>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm d-flex align-items-center justify-content-center">
                        <Button style={{backgroundColor: '#4abdac', width: '600px', height: '80px',marginTop:'30px'}} size={'large'}>
                            <h2>Download Resume</h2>
                            <img style={{width: '40px', height: '40px', marginLeft: '95px', marginBottom: '13px'}} src={"https://image.flaticon.com/icons/png/512/724/724933.png"} />
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm d-flex align-items-center justify-content-center">
                        <Button style={{backgroundColor: '#4abdac', width: '600px', height: '80px',marginTop:'30px'}} size={'large'}>
                            <h2>Download Transcript</h2>
                            <img style={{width: '40px', height: '40px', marginLeft: '30px', marginBottom: '13px'}} src={"https://image.flaticon.com/icons/png/512/724/724933.png"} />
                        </Button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Contact;