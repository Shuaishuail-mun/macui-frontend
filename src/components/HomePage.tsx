import style from '../style/scss/home.module.scss';
import Finder from './applications/Finder';
import Mail from './applications/Mail';
import Music from './applications/Music';
import Photo from './applications/Photo';
import PhotoShop from "./applications/PhotoShop";
import Terminal from "./applications/Terminal";
import Twitter from './applications/Twitter';
import NavigationBar from "./navigation/NavigationBar";
import ApplicationBar from "./navigation/ApplicationBar";
import Draggable from "react-draggable";
import {useState} from "react";

interface Config{
    open: boolean,
    onTop: boolean,
    minimize: boolean,
    maximize: boolean
}
interface AppConfig {
    [key:string]:Config
};

export enum Apps {
    finder = 'finder',
    mail= 'mail',
    music = 'music',
    photo = "photo",
    ps = 'ps',
    terminal = 'terminal',
    twitter = 'twitter'
}

function HomePage() {
    const [appConfig, setAppConfig] = useState({
        finder: {
            open: false,
            onTop: false,
            minimize: false,
            maximize: false
        },
        mail: {
            open: false,
            onTop: false,
            minimize: false,
            maximize: false
        },
        music: {
            open: false,
            onTop: false,
            minimize: false,
            maximize: false
        },
        photo: {
            open: false,
            onTop: false,
            minimize: false,
            maximize: false
        },
        ps: {
            open: false,
            onTop: false,
            minimize: false,
            maximize: false
        },
        terminal: {
            open: false,
            onTop: false,
            minimize: false,
            maximize: false
        },
        twitter: {
            open: false,
            onTop: false,
            minimize: false,
            maximize: false
        },
    } as AppConfig);

    function openApp(App : Apps){
        let newAppConfig = Object.keys(appConfig).reduce(
            (attrs, key, index) => ({
                ...attrs,
                [key]: {
                    ...attrs[key],
                    onTop: false
                },
            }),
            appConfig
        );

        setAppConfig({
            ...newAppConfig,
            [App]: {
                ...newAppConfig[App],
                open: true,
                onTop: true,
                minimize: false
            }
        });
    }

    function closeApp(App:Apps) {
        setAppConfig({
            ...appConfig,
            [App]: {
                open: false,
                onTop: false,
                minimize: false,
                maximize: false
            }
        });
    }

    function minimizeApp(App:Apps){
        setAppConfig({
            ...appConfig,
            [App]: {
                open: true,
                onTop: true,
                minimize: true,
                maximize: false
            }
        });
    }

    function maximizeApp(App:Apps){
        let max = true;
        if(appConfig[App].maximize) {
            max = false;
        }
        setAppConfig({
            ...appConfig,
            [App]: {
                open: true,
                onTop: true,
                minimize: false,
                maximize: max
            }
        });
    }

    return (
       <div className={style.Background}>
           <NavigationBar/>
           {appConfig.finder?.open &&
           <Draggable>
               <div className={
                   `${style.Finder} 
                   ${appConfig.finder?.onTop ? style.OnTop : style.OnBottom} 
                   ${appConfig.finder?.minimize ? style.Minimize : ''}
                   ${appConfig.finder.maximize ? style.Maximize : ''}`}>
                   <Finder closeApp={closeApp} minimizeApp={minimizeApp} maximizeApp={maximizeApp}/>
               </div>
           </Draggable>}
           {appConfig.mail?.open &&
           <Draggable>
               <div className={
                   `${style.Mail} 
                   ${appConfig.mail?.onTop ? style.OnTop : style.OnBottom}
                   ${appConfig.mail?.minimize ? style.Minimize : ''}
                   ${appConfig.mail.maximize ? style.Maximize : ''}`}>
                   <Mail closeApp={closeApp} minimizeApp={minimizeApp} maximizeApp={maximizeApp}/>
               </div>
           </Draggable>}
           {appConfig.music?.open &&
           <Draggable>
               <div className={`${style.Music} ${appConfig.music?.onTop ? style.OnTop : style.OnBottom}`}>
                   <Music/>
               </div>
           </Draggable>}
           {appConfig.photo?.open &&
           <Draggable>
               <div className={`${style.Photo} ${appConfig.photo?.onTop ? style.OnTop : style.OnBottom}`}>
                   <Photo/>
               </div>
           </Draggable>}
           {appConfig.ps?.open &&
           <Draggable>
               <div className={`${style.PhotoShop} ${appConfig.ps?.onTop ? style.OnTop : style.OnBottom}`}>
                   <PhotoShop/>
               </div>
           </Draggable>}
           {appConfig.terminal?.open &&
           <Draggable>
               <div
                   className={
                    `${style.Terminal}
                    ${appConfig.terminal?.onTop ? style.OnTop : style.OnBottom}
                    ${appConfig.terminal?.minimize ? style.Minimize : ''}
                    ${appConfig.terminal.maximize ? style.Maximize : ''}`}>
                   <Terminal closeApp={closeApp} minimizeApp={minimizeApp} maximizeApp={maximizeApp}/>
               </div>
           </Draggable>}
           {appConfig.twitter?.open &&
           <Draggable>
               <div className={`${style.Twitter} ${appConfig.twitter?.onTop ? style.OnTop : style.OnBottom}`}>
                   <Twitter/>
               </div>
           </Draggable>}
           <ApplicationBar openApp={openApp}/>
       </div>
   );
}

export default HomePage;