import {Email} from '../applications/Mail';
import {ListGroup, Badge, Row, Col} from "react-bootstrap";
import style from '../../style/scss/emaillist.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

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
    const [email, setEmail] = useState<Email>(props.emailList[0]);
    const [emailList, setEmailList] = useState<Email[]>(props.emailList);

    function readEmail(item: Email, index:number){
        setEmail(item);
        let newItemList = Object.assign([...emailList], {
            [index]: {
                ...emailList[index],
                read: true
            }
        });
        setEmailList(newItemList);
    }

    let list = emailList.map((item, index) =>
        <ListGroup.Item onClick={() => readEmail(item, index)} as="li" className={style.Item}>
            <Row className="d-flex align-items-center">
                <Col className={style.EmailRead} xs={1}>
                    {(!item.read) &&
                        <FontAwesomeIcon icon={faCircle}/>
                    }
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
            <Col className={style.EmailDisplay}>
                <Row>
                    <Col className={style.Badge} xs={1}>
                        <Badge pill bg="secondary">
                            {email.fromName.charAt(0)}
                        </Badge>
                    </Col>
                    <Col xs={8}>
                        <Row className={style.FromName}>{email.fromName}</Row>
                        <Row className={`${style.Title}`}>
                            {email.title}
                        </Row>
                        <Row className={style.FromAddress}>From: {email.fromAddress}</Row>
                    </Col>
                    <Col className={style.Date} xs={2}>{WeekDays[email.date.getDay()]}</Col>
                </Row>
                <hr/>
                <Row className={style.Detail} dangerouslySetInnerHTML={{ __html: `<iframe scrolling="no" width='100%' style='height:250vh;' src=${process.env.PUBLIC_URL + email.detail} />`}} />
            </Col>
        </Row>
    );
}

export default EmailList;