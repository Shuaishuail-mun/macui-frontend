import style from '../../style/scss/finder.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes, faMinus, faExpandAlt, faCompressAlt, faFilm} from "@fortawesome/free-solid-svg-icons";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {faAppStore} from "@fortawesome/free-brands-svg-icons";
import {faFolder} from "@fortawesome/free-regular-svg-icons";
import {faCaretSquareDown} from "@fortawesome/free-regular-svg-icons";
import Tab from 'react-bootstrap/Tab';
import {useState} from "react";
import {Apps} from "../HomePage";
import Movies from '../panes/Movies';
import Documents from '../panes/Documents';


function Finder(props: {
    closeApp: (App : Apps) => void,
    minimizeApp: (App:Apps) => void,
    maximizeApp: (App:Apps) => void}) {
    const [selectedTab, setSelectedTab] = useState<string | null>('movies');
    const [expandIcon, setExpandIcon] = useState(true);

    function handleExpand(){
        props.maximizeApp(Apps.finder);
        setExpandIcon(!expandIcon);
    }

    return(
        <Container fluid className={style.Finder}>
            <Row className={style.TopBar}>
                <Col sm={3} className={style.WindowBtns}>
                    <FontAwesomeIcon
                        onClick={() => props.closeApp(Apps.finder)}
                        className={`me-2 ${style.BtnClose}`}
                        icon={faTimes}/>
                    <FontAwesomeIcon
                        onClick={() => props.minimizeApp(Apps.finder)}
                        className={`me-2 ${style.BtnMinimize}`}
                        icon={faMinus}/>
                    <FontAwesomeIcon
                        onClick={() => handleExpand()}
                        className={`me-2 ${style.BtnMaximize}`} icon={expandIcon ? faExpandAlt : faCompressAlt}/>
                </Col>
                <Col sm={9}>
                    {selectedTab}
                </Col>
            </Row>
            <Row className={style.FinderContent}>
                <Col sm={12}>
                    <Tab.Container id="find-list-tabs" onSelect={(eventKey) => {setSelectedTab(eventKey)}} defaultActiveKey="movies">
                        <Row  className={style.Content}>
                            <Col sm={3} className={style.SideBar}>
                                <br/>
                                <Row>
                                    <span>Favorites</span>
                                    <ListGroup className={style.List}>
                                        <ListGroup.Item className={style.Item} action eventKey="movies">
                                            <FontAwesomeIcon className="me-2" icon={faFilm}/>Movies
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
                            <Col className={style.Pane}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="movies">
                                        <Movies/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="document">
                                        <Documents/>
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
                </Col>
            </Row>
        </Container>
    );
}

export default Finder;