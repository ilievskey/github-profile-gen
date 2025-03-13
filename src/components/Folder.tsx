import React, {useState} from 'react';

interface FolderProps {
    title: string;
    icons: Array<{imgLink: string, name: string}>;
    onIconClick: (icon: any) => void;
}

const Folder: React.FC<FolderProps> = ({title, icons, onIconClick}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="border-2 border-gray-200 p-4 m-4 w-16">
            <h3>{title}</h3>
            {isHovered && (
                <div>
                    {icons.map((iconObj, index) => (
                        <button
                        key={index}
                        onClick={() => onIconClick(iconObj)}
                        style={{ cursor: 'pointer' }}
                        >
                            <img src={iconObj.imgLink} alt={iconObj.name}/>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Folder;