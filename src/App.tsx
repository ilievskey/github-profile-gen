import React, {useState} from "react";
import './App.css'
import Nav from "./components/Nav.tsx";
import Intro from "./components/Intro.tsx";
import Experiences from "./components/Experiences.tsx";
import Contact from "./components/Contact.tsx";
import Skills from "./components/Skills.tsx";
import Preview from "./components/Preview.tsx";

const App: React.FC = () => {

    const [profileData, setProfileData] = useState({
        intro: {intro: "", name: "", desc: ""},
        experiences: [{text1: "", text2: ""}],
        skills: [] as {imgLink: string, name: string}[],
        contacts: [] as {platform: string, url: string}[],
    })


    const introSection =
        profileData.intro.intro.trim() || profileData.intro.name.trim() ? `<h2 align="center">${profileData.intro.intro} ${profileData.intro.name}</h2>` : '';

    const descriptionSection =
        profileData.intro.desc.trim() ? `<h3 align="center">${profileData.intro.desc}</h3>\n` : '';

    const hasExperience = profileData.experiences.some(
        (exp:any) => exp.text1.trim() || exp.text2.trim()
    );

    const experiencesSection =
        hasExperience ? `<h2>Experiences</h2>\n` + profileData.experiences.map(exp => `${exp.text1} ${exp.text2}`).join('\n') : '';
    // ${profileData.experiences.map(exp => `- ${exp.text1}: ${exp.text2}`).join('\n')}

    const skillsSection =
        profileData.contacts.length > 0 ? `<h2>Skills</h2>\n` + profileData.skills.map(skill => `<img src="${skill.imgLink}" alt="${skill.name} icon" width="30" height="30"/> ${skill.name}`).join('\n') : '';
    // ${profileData.skills.map(skill => skill.name)}

    const contactSection =
        // the []() is to hyperlink the contact platform
        profileData.contacts.length > 0 ? `<h2>Contact</h2>\n` + profileData.contacts.map(contact => `<a href="${contact.url}">${contact.platform}</a>`).join('\n') : '';
    // ${profileData.contacts.map(contact => `- [${contact.platform}](${contact.url})`).join('\n')}`;

    const generateReadme = () => {
        const readmeContent = `${introSection}
${descriptionSection}
${experiencesSection}
${skillsSection}
${contactSection}`.trim();

        const blob = new Blob([readmeContent], {type: 'text/plain'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'README.md';
        link.click();
    }

  return (
    <div className="container mx-auto">
        <Nav/>

        <div className="grid grid-cols-2 gap-4">
            <div>
                <Intro profileData={profileData} setProfileData={setProfileData}/>
                <Experiences profileData={profileData} setProfileData={setProfileData}/>
                <Skills profileData={profileData} setProfileData={setProfileData}/>
                <Contact profileData={profileData} setProfileData={setProfileData}/>
                <button onClick={generateReadme} className="add px-4 py-2 mb-3">G e n e r a t e README</button>
            </div>
            <div>
                <Preview profileData={profileData} />
            </div>
        </div>

    </div>
  )
}

export default App;
