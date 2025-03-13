import React from 'react';
import Folder from "./Folder.tsx";

type SkillsProps = {
    profileData: any;
    setProfileData: React.Dispatch<React.SetStateAction<any>>;
};

const Skills: React.FC<SkillsProps> = ({profileData, setProfileData}) => {

    const handleIconClick = (icon: any) => {
        if(!profileData.skills.some((skill: any) => skill.name === icon.name)){
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
                    icons={[
                        {imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2048px-React-icon.svg.png", name: "React"},
                        {imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2048px-Vue.js_Logo_2.svg.png", name: "Vue"},
                        {imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png", name: "Angular"},
                        {imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png", name: "Svelte"},
                        {imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png", name: "Tailwind"},
                        {imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png", name: "Bootstrap"},
                        {imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png", name: "HTML"},
                        {imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png", name: "CSS"},
                        {imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png", name: "SASS"},
                    ]}
                    onIconClick={handleIconClick}
                />
                <Folder
                    title="Backend"
                    icons={[
                        {imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2048px-Node.js_logo.svg.png", name: "Node.js"},
                        {imgLink: "https://static-00.iconduck.com/assets.00/django-icon-1606x2048-lwmw1z73.png", name: "Django"},
                        {imgLink: "https://dt-cdn.net/hub/logos/ruby-on-rails-agent.png", name: "Ruby on Rails"},
                        {imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/2048px-Laravel.svg.png", name: "Laravel"},
                        {imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/800px-Spring_Boot.svg.png", name: "Spring Boot"},
                        {imgLink: "https://www.giatec.de/wp-content/uploads/2021/10/1200px-Microsoft_.NET_Logo.svg_-1024x975.png", name: ".NET"},
                    ]}
                    onIconClick={handleIconClick}
                />
                <Folder
                    title="Database"
                    icons={[
                        {imgLink: "https://images.sftcdn.net/images/t_app-icon-m/p/917c77e8-96d1-11e6-8453-00163ed833e7/3780880766/mysql-com-icon.png", name: "MySQL"},
                        {imgLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/2048px-Postgresql_elephant.svg.png", name: "PostgreSQL"},
                        {imgLink: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png", name: "MongoDB"},
                        {imgLink: "https://cdn.prod.website-files.com/66754aa69a5d872183713f9c/672d19b72350f30e77101a15_sql%20server.png", name: "Microsoft SQL"},
                        {imgLink: "https://brandlogos.net/wp-content/uploads/2022/02/sqlite-logo-brandlogo.net_.png", name: "SQLite"},
                    ]}
                    onIconClick={handleIconClick}
                />
            </div>
            <div>
                <h2>Currently selected:</h2>
                <ul className="flex gap-4">
                    {profileData.skills.map((icon: any, index: number) => (
                        <span key={index} className="flex">
                            <img src={icon.imgLink} alt={icon.name} className="w-12"/>
                            {/*fix height mismatch*/}
                            <span className="content-center">{icon.name}</span>
                        </span>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Skills;