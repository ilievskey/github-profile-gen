import React from 'react';

type ExperiencesProps = {
    profileData: any;
    setProfileData: React.Dispatch<React.SetStateAction<any>>;
};

const Experiences: React.FC<ExperiencesProps> = ({profileData, setProfileData}) => {
    const handleChange = (index: number, fieldKey: "text1" | "text2", event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedExperiences = [...profileData.experiences];
        updatedExperiences[index][fieldKey] = event.target.value;
        setProfileData({...profileData, experiences: updatedExperiences});
    };

    const addField = () => {
        setProfileData({
            ...profileData,
            experiences: [
                ...profileData.experiences,
                {text1: "Currently working on", text2: ""},
            ],
        });
    };

    return (
        <div className="card-bg">
            <h1 className="text-xl">Experiences</h1>
            {profileData.experiences.map((field: any, index: number) => (
                <div key={index}>
                    <input
                        value={field.text1}
                        onChange={(event) => handleChange(index, "text1", event)}
                        placeholder="A project I'm proud of"
                    />
                    <input
                        value={field.text2}
                        onChange={(event) => handleChange(index, "text2", event)}
                        placeholder="Project name"
                    />
                </div>
            ))}
            <button
                onClick={addField}
                className="m-4 px-4 py-2 add"
            >Add another</button>
        </div>
    );
};

export default Experiences;