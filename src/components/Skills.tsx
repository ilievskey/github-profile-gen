import React from 'react';
import Folder from "./Folder.tsx";

type SkillsProps = {
    profileData: any;
    setProfileData: React.Dispatch<React.SetStateAction<any>>;
};

const Skills: React.FC<SkillsProps> = ({profileData, setProfileData}) => {

    const handleIconClick = (icon: string) => {
        if(!profileData.skills.includes(icon)){
            setProfileData({
                ...profileData,
                skills: [...profileData.skills, icon],
            });
        }
    };

    return (
        <div className="card-bg">
            <h1 className="text-xl">Skills</h1>
            <div className="flex gap-4">
                <Folder
                    title="Frontend"
                    icons={['React', 'Vue', 'Angular']}
                    onIconClick={handleIconClick}
                />
                <Folder
                    title="Backend"
                    icons={['Node.js', 'Django', 'Flask', 'Laravel']}
                    onIconClick={handleIconClick}
                />
                <Folder
                    title="Database"
                    icons={['MySQL', 'PostgreSQL', 'MongoDB', 'NoSQL', 'Microsoft SQL', 'Springboot']}
                    onIconClick={handleIconClick}
                />
            </div>
            <div>
                <h2>Currently selected:</h2>
                <ul>
                    {profileData.skills.map((icon: any, index: number) => (
                        <span key={index}>{icon}</span>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;