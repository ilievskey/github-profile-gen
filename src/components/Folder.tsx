import React, {useState} from 'react';

interface FolderProps {
    title: string;
    icons: Array<{imgLink: string, name: string}>;
    onIconClick: (icon: any) => void;
}

const Folder: React.FC<FolderProps> = ({title, icons, onIconClick}) => {
    const [isHovered, setIsHovered] = useState(false);

    const visibleIcons = isHovered ? icons : icons.slice(0, 3);

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="p-4"
        >
            <h3>{title}</h3>
            <div className={`folder grid ${isHovered ? 'grid-cols-3' : 'grid-cols-3'}`}>
                {visibleIcons.map((iconObj, index) => (
                    <button
                        className="w-12 h-12 flex items-center justify-center"
                        key={index}
                        onClick={() => onIconClick(iconObj)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img
                            src={iconObj.imgLink}
                            alt={iconObj.name}
                            className="max-w-full max-h-full object-contain"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Folder;