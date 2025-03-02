import React, {useState} from 'react';
import Folder from "./Folder.tsx";

const Skills: React.FC = () => {
    const [selectedIcons, setSelectedIcons] = useState<string[]>([]);

    const handleIconClick = (icon: string) => {
        if(!selectedIcons.includes(icon)){
            setSelectedIcons((prev) => [...prev, icon]);
        }
    };

    const generateReadme = () => {
        const readmeContent = `# Selected Languages\n\n${selectedIcons.join('\n')}`;
        console.log(readmeContent);
        const blob = new Blob([readmeContent], {type: 'text/plain'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'README.md';
        link.click();
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
                    {selectedIcons.map((icon) => (
                        <li key={icon}>{icon}</li>
                    ))}
                </ul>
                <button onClick={generateReadme}>Generate</button>
            </div>
        </div>
    );
};

export default Skills;