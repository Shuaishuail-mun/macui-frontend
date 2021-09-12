import style from "../../style/scss/applicationbar.module.scss";
import finder from '../../style/images/app-finder.png';
import mail from '../../style/images/app-mail.png';
import music from '../../style/images/app-music.png';
import photo from '../../style/images/app-photo.png';
import ps from '../../style/images/app-ps.png';
import terminal from '../../style/images/app-terminal.png';
import twitter from '../../style/images/app-twitter.png';
import {Apps} from '../HomePage';


function ApplicationBar(props: {
    openApp: (App : Apps) => void}){

    return(
        <div className={`${style.ApplicationBar} fixed-bottom d-flex justify-content-center align-items-center`}>
            <div className={`${style.Dock}`}>
                <ul className={style.List}>
                    <li onClick={() => props.openApp(Apps.finder)}>
                        <span>Finder</span><img src={finder}/>
                    </li>
                    <li onClick={() => props.openApp(Apps.mail)}>
                        <span>Email</span><img src={mail}/>
                    </li>
                    <li onClick={() => props.openApp(Apps.music)}>
                        <span>Music</span><img src={music}/>
                    </li>
                    <li onClick={() => props.openApp(Apps.photo)}>
                        <span>Photo</span><img src={photo}/>
                    </li>
                    <li onClick={() => props.openApp(Apps.ps)}>
                        <span>Photoshop</span><img src={ps}/>
                    </li>
                    <li onClick={() => props.openApp(Apps.terminal)}>
                        <span>Terminal</span><img src={terminal}/>
                    </li>
                    <li onClick={() => props.openApp(Apps.twitter)}>
                        <span>Twitter</span><img src={twitter}/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ApplicationBar;