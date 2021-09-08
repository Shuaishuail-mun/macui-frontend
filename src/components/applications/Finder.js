import style from '../../style/scss/finder.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faMinus, faExpandAlt} from "@fortawesome/free-solid-svg-icons";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {faAppStore} from "@fortawesome/free-brands-svg-icons";
import {faFolder} from "@fortawesome/free-regular-svg-icons";
import {faCaretSquareDown} from "@fortawesome/free-regular-svg-icons";
import Tab from 'react-bootstrap/Tab';
import {useState} from "react";
import Draggable from "react-draggable";


function Finder() {
    const [selectedTab, setSelectedTab] = useState('application');

    return(
        <Draggable>
            <div className={style.Finder}>
                <Container>
                    <Row className={style.TopBar}>
                        <Col sm={3} className={style.WindowBtns}>
                            <FontAwesomeIcon  className={`me-2 ${style.BtnClose}`} icon={faTimes}/>
                            <FontAwesomeIcon className={`me-2 ${style.BtnMinimize}`} icon={faMinus}/>
                            <FontAwesomeIcon className={`me-2 ${style.BtnMaximize}`} icon={faExpandAlt}/>
                        </Col>
                        <Col sm={9}>
                            {selectedTab}
                        </Col>
                    </Row>
                    <Row className={style.Content}>
                        <Tab.Container id="find-list-tabs" onSelect={(eventKey) => {setSelectedTab(eventKey)}} defaultActiveKey="application">
                            <Row>
                                <Col sm={3} className={style.SideBar}>
                                    <br/>
                                    <Row>
                                        <span>Favorites</span>
                                        <ListGroup className={style.List}>
                                            <ListGroup.Item className={style.Item} action eventKey="application">
                                                <FontAwesomeIcon className="me-2" icon={faAppStore}/>Application
                                            </ListGroup.Item>
                                            <ListGroup.Item className={style.Item} action eventKey="document">
                                                <FontAwesomeIcon className="me-2" icon={faFolder}/>Document
                                            </ListGroup.Item>
                                            <ListGroup.Item className={style.Item} action eventKey="others">
                                                <FontAwesomeIcon className="me-2" icon={faCaretSquareDown}/>Others
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <span>Tags</span>
                                        <ListGroup className={style.List}>
                                            <ListGroup.Item className={style.Item} action eventKey="red">
                                                <FontAwesomeIcon className="me-2" icon={faAppStore}/>Red
                                            </ListGroup.Item>
                                            <ListGroup.Item className={style.Item} action eventKey="orange">
                                                <FontAwesomeIcon className="me-2" icon={faFolder}/>Orange
                                            </ListGroup.Item>
                                            <ListGroup.Item className={style.Item} action eventKey="yellow">
                                                <FontAwesomeIcon className="me-2" icon={faCaretSquareDown}/>Yellow
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Row>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="application">
                                            Application
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="document">
                                            Document
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="others">
                                            Others
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="red">
                                            Red
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="orange">
                                            Orange
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="yellow">
                                            Yellow
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Row>
                </Container>
            </div>
            {/*<div className="window-content">
                <div className="finder-nav">
                </div>

                <div className="finder-content">
                    <div id="schreibtisch">
                        <div className="window-data">
                            <div className="row">
                                <h2>Schreibtisch</h2>


                            </div>
                        </div>

                    </div>
                    <div id="bilder">
                        <div className="window-data">
                            <div className="row">
                                <h2>Bilder</h2>
                                <img src="https://sry4eatnyoursandwich.de/bewerbung/img/bg1.jpg"/>
                                <img src="https://sry4eatnyoursandwich.de/bewerbung/img/bg2.jpg"/>
                                <img src="https://sry4eatnyoursandwich.de/bewerbung/img/bg3.jpg"/>
                                <img src="https://sry4eatnyoursandwich.de/bewerbung/img/bg4.jpg"/>
                            </div>
                            <div className="row">
                                <img src="https://sry4eatnyoursandwich.de/bewerbung/img/bg5.jpg"/>
                                <img src="https://sry4eatnyoursandwich.de/bewerbung/img/bg6.jpg"/>
                                <img src="https://sry4eatnyoursandwich.de/bewerbung/img/bg7.jpg"/>
                                <img src="https://sry4eatnyoursandwich.de/bewerbung/img/bg-thumb9.jpg"/>
                            </div>
                            <div className="row">
                                <img src="img/bg-thumb10.jpg"/>
                                <img src="img/bg-thumb11.jpg"/>
                                <img src="img/bg-thumb12.jpg"/>
                                <img src="img/bg-thumb13.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="videos">
                    <div className="window-data">
                        <div className="row">
                            <h2>Videos</h2>
                            <div className="finder-folder">
                                <img src="img/thumb.png"/>
                                <p className="data-text black">
                                    Kliemmansland Animation.mp4
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="dokumente">
                    <div className="window-data">
                        <div className="row">
                            <h2>Dokumente</h2>
                            <div className="finder-folder">
                                <img src="img/folder.png"/>
                                <p className="data-text black">
                                    JS
                                </p>
                            </div>
                            <div className="finder-folder">
                                <img src="img/folder.png"/>
                                <p className="data-text black">
                                    CSS
                                </p>
                            </div>
                            <div className="finder-folder">
                                <img src="img/folder.png"/>
                                <p className="data-text black">
                                    IMG
                                </p>
                            </div>
                            <div className="finder-folder">
                                <img src="img/html.png"/>
                                <p className="data-text black">
                                    index.html
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div id="mukke">
                    <div className="window-data">
                        <div className="row">
                            <h2>Mukke</h2>
                            <div className="item">
                                <p className="data-titel">Kliemannsland-preview.mp3</p>
                                <img src="img/play_1.svg" alt="data.mp3"/>
                                <audio controls>
                                    <source src="audio/kliemannsland-preview.mp3"/>
                                </audio>
                            </div>

                            <div className="item">
                                <p className="data-titel">Mojave.mp3</p>
                                <img src="img/play_1.svg" alt="data.mp3"/>
                                <audio controls>
                                    <source src="audio/mojave.mp3"/>
                                </audio>
                            </div>

                        </div>
                    </div>

                </div>

                <div id="idrive">
                    <div className="window-data">
                        <div className="row">
                            <h2>iCloud Drive</h2>
                            <h3>Leer</h3>
                        </div>
                    </div>
                </div>

            </div>*/}
        </Draggable>
    );
}

export default Finder;