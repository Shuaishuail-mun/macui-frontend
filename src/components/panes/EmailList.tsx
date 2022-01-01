import {Email} from '../applications/Mail';
import {ListGroup, Badge, Row, Col} from "react-bootstrap";
import style from '../../style/scss/emaillist.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";

enum WeekDays{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function EmailList(props: {
    emailList: Email[]
}){
    let list = props.emailList.map((item) =>
        <ListGroup.Item as="li" className={style.Item}>
            <Row className="d-flex align-items-center">
                <Col className={style.EmailRead} xs={1}>
                    <FontAwesomeIcon icon={faCircle}/>
                </Col>
                <Col className={`${style.FromName} text-truncate`}>
                    {item.fromName}
                </Col>
                <Col className={style.EmailDate} xs={3}>{WeekDays[item.date.getDay()]}</Col>
            </Row>
            <Row>
                <Col className={`${style.Title} text-truncate`} xs={{ span: 11, offset: 1 }}>
                    {item.title}
                </Col>
            </Row>
            <Row>
                <Col className={`${style.Content} text-truncate`} xs={{ span: 11, offset: 1 }}>
                    {item.content}
                </Col>
            </Row>
        </ListGroup.Item>
    )
    return (
        <Row className={style.EmailList}>
            <Col className={style.SideBar} xs={5}>
                <ListGroup as="ol" variant="flush">
                    <ListGroup.Item></ListGroup.Item>
                    {list}
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
            </Col>
            <Col xs={7}>
                <div dangerouslySetInnerHTML={{ __html: "<iframe src='' />"}} />
            </Col>
        </Row>
    );
}

export default EmailList;