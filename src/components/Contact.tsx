import React, {useState} from 'react';
import {FaGithub, FaLinkedin, FaBehance} from 'react-icons/fa';

type ContactField = {
    platform: string;
    icon: React.ReactNode;
    url: string;
};

const availableContacts =[
    {platform: "Github", icon: <FaGithub/>},
    {platform: "LinkedIn", icon: <FaLinkedin/>},
    {platform: "Behance", icon: <FaBehance/>},
];

const Contact = () => {
    const [contactFields, setContactFields] = useState<ContactField[]>([]);

    const handleAddContact = (contact: {platform: string; icon: React.ReactNode}) => {
        if(contactFields.some(field => field.icon === contact.icon)) return;
        setContactFields([...contactFields, {platform: contact.platform, icon: contact.icon, url: ''}]);
    };

    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedContacts = [...contactFields];
        updatedContacts[index].url = event.target.value;
        setContactFields(updatedContacts);
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
                {contactFields.map((field, index) => (
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