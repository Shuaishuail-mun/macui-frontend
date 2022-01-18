import style from "../../style/scss/terminal.module.scss";
import {Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Apps} from "../HomePage";
import {faCompressAlt, faExpandAlt, faMinus, faTimes, faFolder} from "@fortawesome/free-solid-svg-icons";
import {Container} from 'react-bootstrap';
import {useState, KeyboardEvent} from "react";


let argumentTypes = [
    {
        type: "string",
        replace: "([a-z]+)",
        transform: (arg:string) => {
            return arg
        }
    },
    {
        type: "number",
        replace: "([0-9]+)",
        transform: (arg:string) => {
            return parseInt(arg)
        }
    }
]


function Terminal(props: {
    closeApp: (App : Apps) => void,
    minimizeApp: (App:Apps) => void,
    maximizeApp: (App:Apps) => void}){

    const [expandIcon, setExpandIcon] = useState(true);
    const [commandInput, setCommandInput] = useState<string>();

    function handleExpand(){
        props.maximizeApp(Apps.terminal);
        setExpandIcon(!expandIcon);
    }

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
        }
    }
    return(
        <Container fluid className={style.Terminal}>
            <Row className={style.TopBar}>
                <Col sm={2} className={style.WindowBtns}>
                    <FontAwesomeIcon
                        onClick={() => props.closeApp(Apps.terminal)}
                        className={`me-2 ${style.BtnClose}`}
                        icon={faTimes}/>
                    <FontAwesomeIcon
                        onClick={() => props.minimizeApp(Apps.terminal)}
                        className={`me-2 ${style.BtnMinimize}`}
                        icon={faMinus}/>
                    <FontAwesomeIcon
                        onClick={() => handleExpand()}
                        className={`me-2 ${style.BtnMaximize}`} icon={expandIcon ? faExpandAlt : faCompressAlt}/>
                </Col>
                <Col sm={10}>
                    <FontAwesomeIcon className={`me-2 ${style.Folder}`} icon={faFolder}/>
                    kate - kate@Mac
                </Col>
            </Row>
            <Row className={style.ConsoleArea}>
                <Col>
                    <div className={style.CommandArea}>
                        <p>Last login: Fri Dec 31 00:30:36 on console</p>
                        <p className={style.Prompt}>&nbsp;{commandInput}</p>
                        <input
                            type="text"
                            onChange={(e) => setCommandInput(e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e)}
                            className={style.Input}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Terminal;