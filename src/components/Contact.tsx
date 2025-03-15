import React from 'react';
import {
    FaGithub,
    FaLinkedin,
    FaBehance,
    FaInstagram,
    FaReddit,
    FaDribbble,
    FaYoutube,
    FaDiscord,
    FaStackOverflow,
    FaPlus,
} from 'react-icons/fa';
import {FaXTwitter} from "react-icons/fa6";

type ContactProps = {
    profileData: any;
    setProfileData: React.Dispatch<React.SetStateAction<any>>;
};

const availableContacts =[
    {platform: "Github", icon: <FaGithub/>},
    {platform: "LinkedIn", icon: <FaLinkedin/>},
    {platform: "Behance", icon: <FaBehance/>},
    {platform: "Instagram", icon: <FaInstagram/>},
    {platform: "Reddit", icon: <FaReddit/>},
    {platform: "Dribble", icon: <FaDribbble/>},
    {platform: "Twitter/X", icon: <FaXTwitter/>},
    {platform: "Youtube", icon: <FaYoutube/>},
    {platform: "Discord", icon: <FaDiscord/>},
    {platform: "StackOverflow", icon: <FaStackOverflow/>},
    {platform: "Other", icon: <FaPlus/>},
];

const Contact: React.FC<ContactProps> = ({profileData, setProfileData}) => {

    const handleAddContact = (contact: {platform: string; icon: React.ReactNode}) => {
        if(profileData.contacts.some((field: any) => field.platform === contact.platform)) return;

        setProfileData({
            ...profileData,
            contacts: [
                ...profileData.contacts,
                {platform: contact.platform, url: ""}
            ]
        });
    };

    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedContacts = [...profileData.contacts];
        updatedContacts[index].url = event.target.value;
        setProfileData({...profileData, contacts: updatedContacts});
    };

    return (
        <div className="card-bg">
            <h2 className="text-xl mb-4">Add Your Contact Links</h2>
            <div className="available-contacts flex flex-wrap">
                {availableContacts.map((contact, index) => (
                    <button
                        key={index}
                        onClick={() => handleAddContact(contact)}
                        className="flex items-center m-2 p-3 add"
                    >
                        {contact.icon}
                    </button>
                ))}
            </div>
            <div className="added-contacts mt-4">
                {profileData.contacts.map((field: any, index: number) => (
                    <div key={index} className="flex items-center mb-2">
                        <div className="flex items-center mr-2 w-24">
                            {field.icon}
                            <span className="ml-1">{field.platform}</span>
                        </div>
                        <input
                            type="text"
                            placeholder={`Enter ${field.platform} URL`}
                            value={field.url}
                            onChange={(event) => handleInputChange(index, event)}
                            className="flex-1"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;