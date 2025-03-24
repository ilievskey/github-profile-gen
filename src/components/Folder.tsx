import React, {useState} from 'react';

interface FolderProps {
    title: string;
    icons: Array<{imgLink: string, name: string}>;
    onIconClick: (icon: any) => void;
}

const Folder: React.FC<FolderProps> = ({title, icons, onIconClick}) => {
    const [isHovered, setIsHovered] = useState(false);

    const visibleIcons = isHovered || icons.length <= 3 ? icons : icons.slice(0, 3);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="p-4 m-4 w-16"
        >
            <h3>{title}</h3>
            <div className="folder">
                {visibleIcons.map((iconObj, index) => (
                    <button
                        className="w-12 h-12 items-center justify-center"
                        key={index}
                        onClick={() => onIconClick(iconObj)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            src={iconObj.imgLink}
                            alt={iconObj.name}
                            className="max-w-8 max-h-8 object-contain"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Folder;