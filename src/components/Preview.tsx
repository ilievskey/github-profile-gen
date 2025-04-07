import React from 'react';
import Markdown from '@uiw/react-markdown-preview';

type PreviewProps = {
    profileData: any;
};

const Preview: React.FC<PreviewProps> = ({ profileData }) => {
    const generateMarkdown = () => {
        let markdown = '';

        if (profileData.intro.name || profileData.intro.intro) {
            markdown += `<h2 align="center">${profileData.intro.intro} ${profileData.intro.name}</h2>`;
        }

        if (profileData.intro.desc) {
            markdown += `<h3 align="center">${profileData.intro.desc}</h3>`;
        }

        const hasExperience = profileData.experiences.some(
            (exp:any) => exp.text1.trim() || exp.text2.trim()
        );

        if(hasExperience){
            markdown += `## Experiences\n\n`;
            profileData.experiences.forEach((exp:any) => {
                if(exp.text1 || exp.text2) {
                    markdown += `- ${exp.text1} ${exp.text2}\n`;
                }
            });
            markdown += '\n';
        }

        if(profileData.skills.length > 0){
            markdown += `## Skills\n\n`;
            profileData.skills.forEach((skill:any) => {
                markdown += `- ${skill.name}\n`;
            });
            markdown += '\n';
        }

        if(profileData.contacts.length > 0){
            markdown += `## Contact\n\n`;
            profileData.contacts.forEach((contact:any) => {
                markdown += `- [${contact.platform}](${contact.url})\n`;
            });
        }

        return markdown;
    }

    return (
        <div className="card-bg">
            <h2>README p r e v i e w</h2>
            <div className="py-4">
                <Markdown source={generateMarkdown()} />
            </div>
        </div>
    )
}

export default Preview;