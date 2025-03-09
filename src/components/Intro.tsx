import React from "react";

type IntroProps = {
    profileData: any;
    setProfileData: React.Dispatch<React.SetStateAction<any>>;
};

const Intro: React.FC<IntroProps> = ({profileData, setProfileData}) => {

    const handleChange = (fieldKey: keyof typeof profileData.intro, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProfileData({
            ...profileData,
            intro: {
                ...profileData.intro,
                [fieldKey]: event.target.value,
            },
        });
    };

    return (
        <div className="p-4 my-4 bg-zinc-50 shadow-2xl text-neutral-950">
            <h1 className="text-xl">Intro</h1>
            <input
                value={profileData.intro.intro}
                onChange={(event) => handleChange("intro", event)}
                placeholder="Hey! I'm ..."
            />
            <input
                value={profileData.intro.name}
                onChange={(event) => handleChange("name", event)}
                placeholder="Your name"
            />
            <textarea
                value={profileData.intro.desc}
                onChange={(event) => handleChange("desc", event)}
                placeholder="A passionate dev looking forward to..."
            />
        </div>
    );
};

export default Intro;