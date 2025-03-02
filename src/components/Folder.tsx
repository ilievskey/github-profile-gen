import React, {useState} from 'react';

interface FolderProps {
    title: string;
    icons: string[];
    onIconClick: (icon: string) => void;
}

const Folder: React.FC<FolderProps> = ({title, icons, onIconClick}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="border-2 border-gray-200 rounded-md p-4 m-4 w-16">
            <h3>{title}</h3>
            {isHovered && (
                <div>
                    {icons.map((icon) => (
                        <button
                        key={icon}
                        onClick={() => onIconClick(icon)}
                        style={{ cursor: 'pointer' }}
                        >
                            {icon}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Folder;