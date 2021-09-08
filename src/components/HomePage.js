import style from '../style/scss/home.module.scss';
import Finder from './applications/Finder';
import NavigationBar from "./navigation/NavigationBar";
import ApplicationBar from "./navigation/ApplicationBar";
import {useState} from "react";

function HomePage() {
    const [finderOpen, setFinderOpen] = useState(false);
    const [mailOpen, setMailOpen] = useState(false);
    const [musicOpen, setMusicOpen] = useState(false);
    const [photoOpen, setPhotoOpen] = useState(false);
    const [psOpen, setPsOpen] = useState(false);
    const [terminalOpen, setTerminalOpen] = useState(false);
    const [twitterOpen, setTwitterOpen] = useState(false);

   return (
       <div className={style.Background}>
           <NavigationBar/>
           <Finder/>
           <ApplicationBar/>
       </div>
   );
}

export default HomePage;