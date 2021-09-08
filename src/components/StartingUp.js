import avatar from '../style/images/avatar.jpeg';
import style from '../style/scss/startup.module.scss';
import {useState} from "react";
import {Container, Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle} from "@fortawesome/free-regular-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {useAuth} from './login/Auth';
import {useHistory, useLocation} from "react-router-dom";


function StartingUp() {
    const [focused, setFocused] = useState(false);
    const [showEnterArrow, setShowEnterArrow] = useState(false);
    const [shakeInvalid, setShakeInvalid] = useState(false);
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: "/home" } };

    function checkLength(event){
        let passwordTemp = event.target.value;
        setPassword(passwordTemp);
        setShakeInvalid(false);
        if(passwordTemp.length >= 5) {
            setShowEnterArrow(true);
        }else{
            setShowEnterArrow(false);
        }
    }

    function login(){
        if(password != "Admin") {
            setShakeInvalid(true);
        }else {
            setLoggedIn(true);
            auth.signin(() => {
                history.replace(from);
            });
        }
    }
    return (
        <div className={focused ? style.BlurBackground : style.Background}>
            <div className={style.Login}>
                <Container>
                    <Row>
                        <Col xs={12} className="d-flex justify-content-center">
                            <img className={style.Avatar} src={avatar}/>
                        </Col>
                        <Col xs={12} className={`d-flex justify-content-center ${style.Name}`}>
                            <label>Kate Li</label>
                        </Col>
                        <Col xs={12} className="d-flex justify-content-center">
                            <div className={style.Password}>
                                <input type="password" className={shakeInvalid ? style.Invalid : ''}
                                       onFocus={() => setFocused(true)}
                                       onBlur={() => setFocused(false)}
                                       onInput={(e) => checkLength(e)}
                                />
                                {showEnterArrow &&
                                <FontAwesomeIcon
                                    onClick={() => login()}
                                    className={`ms-2 ${showEnterArrow ? style.Arrow : ''}`} icon={faArrowRight}/>}
                            </div>
                            {focused &&
                            <div className={style.PasswordTooltip}>
                                <p className="text-center">Default Password</p>
                                <p className="text-center">Admin</p>
                                <hr/>
                                <p className="text-center">
                                    <FontAwesomeIcon className="me-2" icon={faPlayCircle}/>
                                    Reset your password
                                </p>
                            </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default StartingUp;