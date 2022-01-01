import style from '../../style/scss/directorytree.module.scss';
import {faChevronRight, faChevronDown, faFolder} from "@fortawesome/free-solid-svg-icons";
import {faFilePdf, faFileWord} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {Directory} from './Documents';


function DirectoryTree(props: {
    itemList: any[]
}){
    const [itemList, setItemList] = useState<any[]>(props.itemList);

    let itemListDisplay = itemList.map((item:Directory|string, index) => {
        return (typeof item === "string") ?
            <li className={style.BgGreyer}>
                {(item.split('.').pop() === 'pdf') &&
                <FontAwesomeIcon className={`${style.PDF} ms-3 me-1`} icon={faFilePdf}/>}
                {(item.split('.').pop() !== 'pdf') &&
                <FontAwesomeIcon className={`${style.Word} ms-3 me-1`} icon={faFileWord}/>}
                {item}
            </li>
            :
            <li className={style.BgGrey}>
                {item.open &&
                <FontAwesomeIcon className={`${style.Arrow} me-1`} onClick={() => closeDir(index)} icon={faChevronDown}/>
                }
                {(!item.open) &&
                <FontAwesomeIcon className={`${style.Arrow} me-1`} onClick={() => openDir(index)} icon={faChevronRight}/>
                }
                <FontAwesomeIcon className={`${style.BlueFolder} me-1`} icon={faFolder}/>
                {item.name}
                {item.open &&
                    <ul className="ms-3">
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