import React, { useEffect } from 'react';
import Folder from "./Folder.tsx";

type SkillsProps = {
    profileData: any;
    setProfileData: React.Dispatch<React.SetStateAction<any>>;
};

const Skills: React.FC<SkillsProps> = ({profileData, setProfileData}) => {

    const preloadIcons = (icons: any[]) => {
        icons.forEach((icon) => {
            const img = new Image();
            img.src = icon.imgLink;
        })
    };

    const handleIconClick = (icon: any) => {
        if(!profileData.skills.some((skill: any) => skill.name === icon.name)){
            setProfileData({
                ...profileData,
                skills: [...profileData.skills, icon],
            });
        }
    };

    const frontendIcons = [
        {name: "React", link: "react", suffix: ""},
        {name: "Vue.js", link: "vuejs", suffix: ""},
        {name: "Angular", link: "angular", suffix: ""},
        {name: "Svelte", link: "svelte", suffix: ""},
        {name: "Tailwind", link: "tailwindcss", suffix: ""},
        {name: "Bootstrap", link: "bootstrap", suffix: ""},
        {name: "HTML5", link: "html5", suffix: ""},
        {name: "CSS3", link: "css3", suffix: ""},
        {name: "SASS", link: "sass", suffix: ""},
    ].map((icon) => ({
        ...icon,
        imgLink: `https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/${icon.link}/${icon.link}${icon.suffix ? icon.suffix : '-original'}.svg`
    }));

    const backendIcons = [
        {name: "Node.js", link: "nodejs", suffix: ""},
        {name: "Django", link: "django", suffix: "-plain"},
        {name: "Ruby on Rails", link: "rails", suffix: "-plain"},
        {name: "Laravel", link: "laravel", suffix: ""},
        {name: "Spring Boot", link: "spring", suffix: ""},
        {name: ".NET", link: "dot-net", suffix: ""},
    ].map((icon) => ({
        ...icon,
        imgLink: `https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/${icon.link}/${icon.link}${icon.suffix ? icon.suffix : '-original'}.svg`
    }));

    const databaseIcons = [
        {name: "MySQL", link: "mysql", suffix: ""},
        {name: "MongoDB", link: "mongodb", suffix: ""},
        {name: "Microsoft SQL", link: "microsoftsqlserver", suffix: ""},
        {name: "SQLite", link: "sqlite", suffix: ""},
    ].map((icon) => ({
        ...icon,
        imgLink: `https://raw.githubusercontent.com/devicons/devicon/refs/heads/master/icons/${icon.link}/${icon.link}${icon.suffix ? icon.suffix : '-original'}.svg`
    }));

    useEffect(() => {
        preloadIcons([ ...frontendIcons, ...backendIcons, ...databaseIcons]);
    }, []);

    return (
        <div className="card-bg">
            <h1 className="text-xl">Skills</h1>
            <div className="flex gap-4">
                <Folder
                    title="Frontend"
                    icons={frontendIcons}
                    onIconClick={handleIconClick}
                />
                <Folder
                    title="Backend"
                    icons={backendIcons}
                    onIconClick={handleIconClick}
                />
                <Folder
                    title="Database"
                    icons={databaseIcons}
                    onIconClick={handleIconClick}
                />
            </div>
            <div>
                <h2>Currently selected:</h2>
                <ul className="flex gap-12 flex-wrap p-8">
                    {profileData.skills.map((icon: any, index: number) => (
                        <span key={index} className="flex">
                            <img
                                src={icon.imgLink}
                                alt={icon.name}
                                className="max-w-8 max-h-8 object-contain"
                                loading="lazy"
                            />
                            <span className="whitespace-nowrap">{icon.name}</span>
                        </span>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;