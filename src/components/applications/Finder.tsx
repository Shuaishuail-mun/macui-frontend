import style from '../../style/scss/finder.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faMinus, faExpandAlt} from "@fortawesome/free-solid-svg-icons";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {faAppStore} from "@fortawesome/free-brands-svg-icons";
import {faFolder} from "@fortawesome/free-regular-svg-icons";
import {faCaretSquareDown} from "@fortawesome/free-regular-svg-icons";
import Tab from 'react-bootstrap/Tab';
import {useState} from "react";


function Finder() {
    const [selectedTab, setSelectedTab] = useState<string | null>('application');

    return(
        <Container className={style.Finder}>
            <Row className={style.TopBar}>
                <Col sm={3} className={style.WindowBtns}>
                    <FontAwesomeIcon className={`me-2 ${style.BtnClose}`} icon={faTimes}/>
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
    );
}

export default Finder;