import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faEnvelope, faLaptopCode, faMailBulk} from "@fortawesome/free-solid-svg-icons";
import TelegramIcon from '@material-ui/icons/Telegram';
import {Button} from "@material-ui/core";


const Contact = () => {
    return (
        <div id="contact" style={{paddingBottom: 100,}} className="container-fluid d-flex align-items-center flex-column bg-light">
            <h1 style={{marginTop: 50}} className={"title-name"}>Contact/Resume</h1>
            <div className="divider-custom divider">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><FontAwesomeIcon icon={faLaptopCode}/></div>
                <div className="divider-custom-line"></div>
            </div>

            <div className={"container-fluid"}>
                <div className={"row d-flex justify-content-center"}>
                    <div className={"col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center"}>
                        <a target={"_blank"} href={'https://www.linkedin.com/in/gerald-neo/'}>
                            <button type="button" className="btn btn-default btn-circle btn-xl">
                                <i style={{fontSize: '120px', color: "white"}} className="devicon-linkedin-plain"></i>
                            </button>
                        </a>
                        <a target={"_blank"} href={"mailto: geraldneo56@gmail.com"}>
                            <button type="button" className="btn btn-default btn-circle btn-xl bg-dark">
                                <FontAwesomeIcon style={{fontSize: '120px', color: 'white'}} icon={faEnvelope} />
                            </button>
                        </a>
                        <a target={"_blank"} href={"https://t.me/gner56"}>
                            <button type="button" className="btn btn-default btn-circle btn-xl" style={{backgroundColor: "#87cefa"}}>
                                <TelegramIcon style={{fontSize: '120px', color: 'white'}}/>
                            </button>
                        </a>
                    </div>
                </div>
                <div className={"row d-flex justify-content-center"}>
                    <div className={"col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center"}>
                        <Button style={{backgroundColor: '#4abdac', width: '600px', height: '80px',marginTop:'30px'}} size={'large'}>
                            <h2>Download Resume</h2>
                            <img style={{width: '40px', height: '40px', marginLeft: '95px', marginBottom: '13px'}} src={"https://image.flaticon.com/icons/png/512/724/724933.png"} />
                        </Button>
                    </div>
                </div>
                <div className={"row d-flex justify-content-center"}>
                    <div className={"col-xl-4 col-lg-6 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center"}>
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