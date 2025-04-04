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

    const [showPreview, setShowPreview] = useState(false);

    const introSection =
        profileData.intro.intro.trim() || profileData.intro.name.trim() ? `<h2 align="center">${profileData.intro.intro} ${profileData.intro.name}</h2>` : '';

    const descriptionSection =
        profileData.intro.desc.trim() ? `<h3 align="center">${profileData.intro.desc}</h3>` : '';

    const experiencesSection =
        profileData.experiences.map(exp => `- ${exp.text1}: ${exp.text2}`).join('\n');
    // ${profileData.experiences.map(exp => `- ${exp.text1}: ${exp.text2}`).join('\n')}

    const skillsSection =
        profileData.skills.map(skill => skill.name);
    // ${profileData.skills.map(skill => skill.name)}

    const contactSection =
        // the []() is to hyperlink the contact platform
        profileData.contacts.map(contact => `- [${contact.platform}](${contact.url})`).join('\n');
    // ${profileData.contacts.map(contact => `- [${contact.platform}](${contact.url})`).join('\n')}`;

    const generateReadme = () => {
        const readmeContent = `${introSection}
${descriptionSection}
## Experiences
${experiencesSection}
## Skills
${skillsSection}
## Contact
${contactSection}`

        const blob = new Blob([readmeContent], {type: 'text/plain'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'README.md';
        link.click();
    }

  return (
    <div className="container mx-auto">
        <Nav/>

        <div className="flex justify-end mb-4">
            <button
                onClick={() => setShowPreview(!showPreview)}
                className="add px-4 py-2"
            >
                {showPreview ? "Hide Preview" : "Show Preview"}
            </button>
        </div>
        <div className={`${showPreview ? "grid grid-cols-2 gap-4" : ""}`}>
            <div>
                <Intro profileData={profileData} setProfileData={setProfileData}/>
                <Experiences profileData={profileData} setProfileData={setProfileData}/>
                <Skills profileData={profileData} setProfileData={setProfileData}/>
                <Contact profileData={profileData} setProfileData={setProfileData}/>
                <button onClick={generateReadme} className="add px-4 py-2 mb-3">G e n e r a t e README</button>
            </div>
            {showPreview && (
                <div className="sticky top-4">
                    <Preview profileData={profileData} />
                </div>
            )}
        </div>

    </div>
  )
}

export default App;
