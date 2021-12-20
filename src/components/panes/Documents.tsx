import style from '../../style/scss/documents.module.scss';
import {faChevronRight, faChevronDown, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

interface Directory{
    files: any[],
    open: boolean,
    name: string
}
interface DirSetting{
    [key: string]: boolean;
}
const documents = [
    {
        files: [
            {
                files: ['dir1-dir1-file1.txt', 'dir1-dir1-file2.txt'],
                open: false,
                name: "directory1-1"
            } as Directory,
            'dir1-file1.txt',
            {
                files: ['dir1-dir2-file1.txt', 'dir1-dir2-file2.txt'],
                open: false,
                name: "directory1-2"
            } as Directory,
            'dir1-file2.txt'
        ],
        open: false,
        name: "directory1"
    } as Directory,
    'file1.txt',
    {
        files: [
            {
                files: ['dir2-dir1-file1.txt', 'dir2-dir1-file2.txt'],
                open: false,
                name: "directory2-1"
            } as Directory,
            'dir2-file1.txt',
            {
                files: ['dir2-dir2-file1.txt', 'dir2-dir2-file2.txt'],
                open: false,
                name: "directory2-2"
            } as Directory,
            'dir2-file2.txt'
        ],
        open: false,
        name: "directory2"
    } as Directory,
    'file2.txt',
    'file3.txt'
]
function Documents(){
    const [dirSettings, setDirSettings] = useState<Map<string, boolean>>(new Map<string, boolean>());
    function closeDir(dirName:string){
        setDirSettings(dirSettings.set(dirName, false));
    }
    function openDir(dirName:string){
        setDirSettings(dirSettings.set(dirName, true));
    }
    function listFiles(documents: (Directory|string)[]){
        let documentList = documents.map((document) => {
            if (typeof document === "string") {
                return(
                    <li>
                        {document}
                    </li>
                );
            }else{
                setDirSettings(dirSettings.set(document.name, false));
                return(
                    <li>
                        {dirSettings.get(document.name) &&
                        <FontAwesomeIcon onClick={() => closeDir("")} icon={faChevronDown}/>
                        }
                        {(!dirSettings.get(document.name)) &&
                        <FontAwesomeIcon onClick={() => openDir('')} icon={faChevronRight}/>
                        }
                        {document.name}
                        {dirSettings.get(document.name) && listFiles(document.files)}
                    </li>
                );
            }
        });
        return(
            <ul>
                {documentList}
            </ul>
        );
    }
    return (
        <div className={style.Documents}>
            {listFiles(documents)}
        </div>
    );
}

export default Documents;