import style from '../../style/scss/mail.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInbox, faTimes, faMinus, faExpandAlt, faCompressAlt, faFilm} from "@fortawesome/free-solid-svg-icons";
import {Col, Container, ListGroup, Row} from "react-bootstrap";
import {faAppStore} from "@fortawesome/free-brands-svg-icons";
import {faFolder, faPaperPlane, faFlag} from "@fortawesome/free-regular-svg-icons";
import {faCaretSquareDown} from "@fortawesome/free-regular-svg-icons";
import SendEmail from "../panes/SendEmail";
import {useState} from "react";
import {Apps} from "../HomePage";
import EmailList from "../panes/EmailList";

export interface Email{
    fromName: string,
    fromAddress: string,
    title: string,
    content: string,
    date: Date,
    read: boolean,
    detail: string
}
enum TabOption {
    inbox,
    flagged,
    sent
}

type EmailTypes = {
    [key in TabOption]: Email[];
}

const emailData:EmailTypes = {
    [TabOption.inbox]: [
        {
            fromName: 'Adobe Acrobat',
            fromAddress: 'mail@email.adobe.com',
            title: 'Go simple, mobile, and integrated. Just US$9.99/mo.',
            content: 'Acrobat Pro DC does more than ever for 30% less.',
            date: new Date(),
            read: false,
            detail: 'example-emails/havana.html'
        },
        {
            fromName: 'no-reply@docker.com',
            fromAddress: '',
            title: 'Last chance to save 15% on a Docker subscription!',
            content: 'Act before December 31st and save 15% on a Docker Team or Docker Business subscription. Docker subscriptions provide the productivity and collaboration developers rely on with the scale and security businesses demand.',
            date: new Date(),
            read: true,
            detail: '/example-emails/portland.html'
        },
        {
            fromName: 'Netflix',
            fromAddress: 'info@mailer.netflix.com',
            title: 'A new device is using your account',
            content: 'A new device signed in to your Netflix account, If this was you or someone in your household:',
            date: new Date(),
            read: false,
            detail: '/example-emails/seoul.html'
        },
        {
            fromName: 'Glassdoor Jobs',
            fromAddress: 'noreply@glassdoor.com',
            title: 'Machine Learning Engineer',
            content: 'New jobs for Software Developer, HIGHLY RATED: Career Opportunity, Compensation & Benefits, Work/Life Balance, Culture & Values, Senior Leadership',
            date: new Date(),
            read: false,
            detail: '/example-emails/zagreb.html'
        },
        {
            fromName: 'Adobe Acrobat',
            fromAddress: 'mail@email.adobe.com',
            title: 'Go simple, mobile, and integrated. Just US$9.99/mo.',
            content: 'Acrobat Pro DC does more than ever for 30% less.',
            date: new Date(),
            read: false,
            detail: 'example-emails/portland.html'
        },
        {
            fromName: 'no-reply@docker.com',
            fromAddress: '',
            title: 'Last chance to save 15% on a Docker subscription!',
            content: 'Act before December 31st and save 15% on a Docker Team or Docker Business subscription. Docker subscriptions provide the productivity and collaboration developers rely on with the scale and security businesses demand.',
            date: new Date(),
            read: true,
            detail: 'example-emails/helsinki.html'
        },
        {
            fromName: 'Netflix',
            fromAddress: 'info@mailer.netflix.com',
            title: 'A new device is using your account',
            content: 'A new device signed in to your Netflix account, If this was you or someone in your household:',
            date: new Date(),
            read: false,
            detail: 'example-emails/kiev.html'
        },
        {
            fromName: 'Glassdoor Jobs',
            fromAddress: 'noreply@glassdoor.com',
            title: 'Machine Learning Engineer',
            content: 'New jobs for Software Developer, HIGHLY RATED: Career Opportunity, Compensation & Benefits, Work/Life Balance, Culture & Values, Senior Leadership',
            date: new Date(),
            read: false,
            detail: 'example-emails/seoul.html'
        },
    ],
    [TabOption.flagged]: [
        {
            fromName: 'CELPIP Test',
            fromAddress: 'info@paragontesting.ca',
            title: 'CELPIP-General Test',
            content: 'CELPIP-General Test Confirmation',
            date: new Date(),
            read: true,
            detail: 'example-emails/monaco.html'
        }
    ],
    [TabOption.sent]: [
        {
            fromName: 'Kate',
            fromAddress: 'Kate@gmail.com',
            title: 'Contact Information List',
            content: 'Here is my email, I you could kindly send me',
            date: new Date(),
            read: false,
            detail: 'example-emails/lisbon.html'
        }
    ],
};
function Mail(props: {
    closeApp: (App : Apps) => void,
    minimizeApp: (App:Apps) => void,
    maximizeApp: (App:Apps) => void}){

    const [selectedTab, setSelectedTab] = useState<TabOption>(TabOption.inbox);
    const [expandIcon, setExpandIcon] = useState(true);

    function handleExpand(){
        props.maximizeApp(Apps.mail);
        setExpandIcon(!expandIcon);
    }

    return(
        <Container fluid className={style.Mail}>
            <Row className={style.TopBar}>
                <Col sm={3} className={style.WindowBtns}>
                    <FontAwesomeIcon
                        onClick={() => props.closeApp(Apps.mail)}
                        className={`me-2 ${style.BtnClose}`}
                        icon={faTimes}/>
                    <FontAwesomeIcon
                        onClick={() => props.minimizeApp(Apps.mail)}
                        className={`me-2 ${style.BtnMinimize}`}
                        icon={faMinus}/>
                    <FontAwesomeIcon
                        onClick={() => handleExpand()}
                        className={`me-2 ${style.BtnMaximize}`} icon={expandIcon ? faExpandAlt : faCompressAlt}/>
                </Col>
                <Col sm={9}>
                    {TabOption[selectedTab]}
                </Col>
            </Row>
            <Row className={style.MailContent}>
                <Col sm={2} className={style.SideBar}>
                    <br/>
                    <span>Favorites</span>
                    <ul>
                        <li className={`${(selectedTab == TabOption.inbox) ? style.Choosed : ''} btn btn-sm d-flex justify-content-between align-items-center`}
                            onClick={() => setSelectedTab(TabOption.inbox)}>
                            <span>
                                <FontAwesomeIcon className="me-2" icon={faInbox}/>
                                Inbox
                            </span>
                            <span className={style.Numbers}>130</span>
                        </li>
                        <li className={`${(selectedTab == TabOption.flagged) ? style.Choosed : ''} btn btn-sm d-flex justify-content-between align-items-center`}
                            onClick={() => setSelectedTab(TabOption.flagged)}>
                            <span>
                                <FontAwesomeIcon className="me-2" icon={faFlag}/>
                                Flagged
                            </span>
                            <span className={style.Numbers}>15</span>
                        </li>
                        <li className={`${(selectedTab == TabOption.sent) ? style.Choosed : ''} btn btn-sm d-flex justify-content-between align-items-center`}
                            onClick={() => setSelectedTab(TabOption.sent)}>
                            <span>
                                <FontAwesomeIcon className="me-2" icon={faPaperPlane}/>
                                Sent
                            </span>
                            <span className={style.Numbers}>10</span>
                        </li>
                    </ul>
                </Col>
                <Col sm={10} className={style.MailList}>
                    {(selectedTab == TabOption.inbox) &&
                        <EmailList emailList={emailData[TabOption.inbox]}/>
                    }
                    {(selectedTab == TabOption.flagged) &&
                        <EmailList emailList={emailData[TabOption.flagged]}/>
                    }
                    {(selectedTab == TabOption.sent) &&
                        <EmailList emailList={emailData[TabOption.sent]}/>
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Mail;