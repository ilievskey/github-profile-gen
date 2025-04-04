import React from 'react';
import Markdown from '@uiw/react-markdown-preview';

type PreviewProps = {
    profileData: any;
};

const Preview: React.FC<PreviewProps> = ({ profileData }) => {
    const generateMarkdown = () => {
        let markdown = '';

        if(profileData.intro.name){
            markdown += `# ${profileData.intro.name}\n\n`;
        }

        if (profileData.intro.intro) {
            markdown += `${profileData.intro.intro}\n\n`;
        }

        if (profileData.intro.desc) {
            markdown += `${profileData.intro.desc}\n\n`;
        }

        if(profileData.experiences.length > 0){
            markdown += `## Experiences \n\n`;
            profileData.experiences.forEach((exp: any) => {
                if(exp.text1 || exp.text2) {
                    markdown += `- ${exp.text1}: ${exp.text2}\n`;
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
            <h2>README preview</h2>
            <div className="p-4 border border-gray-300 rounded">
                <Markdown source={generateMarkdown()} />
            </div>
        </div>
    )
}

export default Preview;