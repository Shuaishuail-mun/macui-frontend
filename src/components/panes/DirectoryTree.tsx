import style from '../../style/scss/directorytree.module.scss';
import {faChevronRight, faChevronDown, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {Directory} from './Documents';

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
function DirectoryTree(props: {
    itemList: any[]
}){
    const [itemList, setItemList] = useState<any[]>(props.itemList);

    let itemListDisplay = itemList.map((item:Directory|string, index) => {
        return (typeof item === "string") ?
            <li className={style.BgGreyer}>{item}</li>
            :
            <li className={style.BgGrey}>
                {item.open &&
                <FontAwesomeIcon className="me-1" onClick={() => closeDir(index)} icon={faChevronDown}/>
                }
                {(!item.open) &&
                <FontAwesomeIcon className="me-1" onClick={() => openDir(index)} icon={faChevronRight}/>
                }
                {item.name}
                {item.open &&
                    <ul>
                        <DirectoryTree itemList={item.files}/>
                    </ul>
                }
            </li>
    })

    function closeDir(index:number){
        let newItemList = Object.assign([...itemList], {
            [index]: {
                ...itemList[index],
                open: false
            }
        });
        setItemList(newItemList);
    }

    function openDir(index:number){
        let newItemList = Object.assign([...itemList], {
            [index]: {
                ...itemList[index],
                open: true
            }
        });
        setItemList(newItemList);
    }


    return (
        <>
            {itemListDisplay}
        </>
    );
}

export default DirectoryTree;